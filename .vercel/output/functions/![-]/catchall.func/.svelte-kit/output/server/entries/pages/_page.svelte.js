import { a as stringify, r as ensure_array_like, s as escape_html, t as attr_style } from "../../chunks/server.js";
// src/routes/+page.svelte
function _page($$renderer) {
	const words = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F"
	];
	$$renderer.push(`<div class="main-page svelte-1uha8ag"><div class="circle svelte-1uha8ag"${attr_style(`--total: ${stringify(words.length)}; --radius: 120px;`)}><!--[-->`);
	const each_array = ensure_array_like(words);
	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let word = each_array[index];
		$$renderer.push(`<div class="circleObject svelte-1uha8ag"${attr_style(`--i: ${stringify(index)};`)}><p class="svelte-1uha8ag">${escape_html(word)}</p></div>`);
	}
	$$renderer.push(`<!--]--></div></div>`);
}
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map