

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DsD-M2qK.js","_app/immutable/chunks/BWr7bigK.js"];
export const stylesheets = ["_app/immutable/assets/2.S-KFtXeE.css"];
export const fonts = [];
