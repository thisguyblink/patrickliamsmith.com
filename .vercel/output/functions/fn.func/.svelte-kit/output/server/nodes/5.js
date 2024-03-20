

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/film/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DOLdd4KD.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.cgCSALtf.js","_app/immutable/chunks/navbar.QeZqNqzh.js"];
export const stylesheets = ["_app/immutable/assets/navbar.C_jGmmbl.css"];
export const fonts = [];
