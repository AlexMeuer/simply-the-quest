import http from "bun:http";
import chalk from "chalk";

type Service = { name: string; url: string; path: string };

type CheckResult = { ok: boolean; name: string };

async function check(service: Service): Promise<CheckResult> {
	return new Promise((resolve) => {
		const options = new URL(service.url + service.path);
		http
			.get(options, (res) => {
				const ok =
					res.statusCode !== undefined &&
					res.statusCode >= 200 &&
					res.statusCode < 400;
				resolve({ ok, name: service.name });
			})
			.on("error", () => {
				resolve({ ok: false, name: service.name });
			});
	});
}

async function main() {
	const services = [
		{ name: "Neo4j", url: "http://localhost:7474", path: "/" },
		{ name: "Typesense", url: "http://localhost:7700", path: "/health" },
		{
			name: "Minio",
			url: "http://localhost:9000",
			path: "/minio/health/ready",
		},
	] satisfies Service[];

	const results = await Promise.all(services.map(check));

	results.forEach(({ ok, name }) => {
		if (ok) {
			console.log(`[${chalk.green("OK")}] ${name}`);
		} else {
			console.log(`[${chalk.red("FAIL")}] ${name}`);
		}
	});

	const failed = results.filter((r) => !r.ok);
	if (failed.length > 0) {
		console.error(`\n${failed.length} service(s) failed.`);
		process.exit(1);
	} else {
		console.log(`\nAll ${results.length} services are healthy.`);
		process.exit(0);
	}
}

main();
