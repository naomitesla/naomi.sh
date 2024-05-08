import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";


export default defineConfig({
  base: "./",
  plugins: [react(),
		{
			name: "html-inject-nonce-into-script-tag",
			enforce: "post",
			transformIndexHtml(html: string) {
				const regex = /<script(.*?)/gi;
				const replacement = '<script nonce="nonce-ieq95qw3j5axze4g7shj9o25hwioovqb"$1';
				return html.replace(regex, replacement);
			},
            }, {
			name: "html-inject-data-preload-attr",
			enforce: "post",
			transformIndexHtml(html) {
				const regex = /<(link|style|script)/gi;
				const replacement = '<$1 data-preload="true"';

				return html.replace(regex, replacement);
			},
	    }],
});
