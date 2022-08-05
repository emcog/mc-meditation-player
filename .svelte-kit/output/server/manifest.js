export const manifest = {
	appDir: "_app",
	assets: new Set(["MBOE-social-mindfulness_cover-1halfx.jpeg","MBOE-social-mindfulness_cover-1x.jpeg","MBOE-social-mindfulness_cover-2x.jpeg","MBOE-social-mindfulness_cover-3x.jpeg","MBOE-social-mindfulness_cover-4x.jpeg","favicon.png","meditations-cover.jpeg","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-95076278.js","imports":["_app/immutable/start-95076278.js","_app/immutable/chunks/index-c34dd932.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "rss.xml",
				pattern: /^\/rss\.xml$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/rss.xml.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
