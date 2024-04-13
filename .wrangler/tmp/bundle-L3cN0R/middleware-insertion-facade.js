				import worker, * as OTHER_EXPORTS from "/Users/billadams/Code/react/nextjs/billadamswebdev/.wrangler/tmp/pages-UwzsqI/functionsWorker-0.9667219122555213.mjs";
				import * as __MIDDLEWARE_0__ from "/Users/billadams/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/Users/billadams/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "/Users/billadams/Code/react/nextjs/billadamswebdev/.wrangler/tmp/pages-UwzsqI/functionsWorker-0.9667219122555213.mjs";
				export default worker;