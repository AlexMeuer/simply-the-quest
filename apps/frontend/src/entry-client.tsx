// @refresh reload
import { StartClient, mount } from "@solidjs/start/client";

const elem = document.getElementById("app");
if (elem) {
  mount(() => <StartClient />, elem);
} else {
  console.error("Root app element not found! Cannot mount the app.");
}
