import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { B as Backround, N as Navbar } from "../../../chunks/navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Backround, "PageColor").$$render($$result, {}, {}, {})} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div data-svelte-h="svelte-1jelnqq"><h1 id="name">Patrick Smith</h1> </div>`;
});
export {
  Page as default
};
