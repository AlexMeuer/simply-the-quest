import { createAsync } from "@solidjs/router";
import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";
import { type FlowComponent, Suspense } from "solid-js";

export const Markdown: FlowComponent<Record<never, never>, string> = (
  props,
) => {
  const htmlContent = createAsync(async () => {
    if (DOMPurify.isSupported === false) {
      console.warn("DOMPurify is not supported in this environment");
      return props.children;
    }
    const dirty = await marked(props.children ?? "", { async: true });
    return DOMPurify.sanitize(dirty, { USE_PROFILES: { html: true } });
  });

  return (
    <Suspense>
      <div class="markdown-body" innerHTML={htmlContent()} />
    </Suspense>
  );
};
