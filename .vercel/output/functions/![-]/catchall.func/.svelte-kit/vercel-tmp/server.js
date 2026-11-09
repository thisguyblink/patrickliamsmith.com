import { create_server } from '../output/server/index.js';
const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	app_dir: "_app",
	app_path: "_app",
	assets: new Set(["assets/72971040664__4B60294D-4F48-4326-B931-59B10BC6B83C.jpg","assets/Colorado-Deer-1.jpg","assets/Emerald Bay 1.jpg","assets/Emerald Bay 2.jpg","assets/Highway NB-2.jpg","assets/IMG_1490 (1).jpeg","assets/IMG_7054.jpg","assets/IMG_7055.jpg","assets/Lake Tahoe 1.jpg","assets/PS.png","favicon.png","fonts/helvetiker_bold.typeface.json"]),
	mime_types: {".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png",".json":"application/json"},
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