import { create_server } from '../output/server/index.js';
const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	app_dir: "_app",
	app_path: "_app",
	assets: new Set(["favicon.png","fonts/helvetiker_bold.typeface.json"]),
	mime_types: {".png":"image/png",".json":"application/json"},
	client: {start:"_app/immutable/entry/start.DALa8gz3.js",app:"_app/immutable/entry/app.Bef6iIQ0.js",imports:["_app/immutable/entry/start.DALa8gz3.js","_app/immutable/entry/payload.DSmR2FwN.js","_app/immutable/chunks/DclECHGd.js","_app/immutable/chunks/B04rXPTR.js","_app/immutable/chunks/BWr7bigK.js","_app/immutable/chunks/BUbr7eyV.js","_app/immutable/entry/app.Bef6iIQ0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
	
	nodes: [
		__memo(() => import('../output/server/nodes/0.js')),
		__memo(() => import('../output/server/nodes/1.js')),
		__memo(() => import('../output/server/nodes/2.js'))
	],
	remotes: {
		
	},
	routes: [
		{
			id: "/",
			pattern: /^\/$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 2 },
			endpoint: null
		}
	],
	prerendered_routes: new Set([]),
	matchers: async () => {
		return {};
	},
	server_assets: {}
}
})();
export const server = create_server(manifest);