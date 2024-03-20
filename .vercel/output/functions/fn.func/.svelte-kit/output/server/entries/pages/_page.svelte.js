import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../chunks/ssr.js";
import { B as Backround, N as Navbar, f as filmImage } from "../../chunks/navbar.js";
const css$1 = {
  code: "body.svelte-15tc26f{background:#273043}",
  map: null
};
const Bottombar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<body class="svelte-15tc26f" data-svelte-h="svelte-1wydf82"></body>`;
});
const css = {
  code: ".pages.svelte-1l8dr7i{position:relative;display:flex;justify-content:center;justify-content:space-around;margin-top:50px}.buttonimg.svelte-1l8dr7i{border-radius:10px;border:10px white;height:300px;width:auto}#portrait.svelte-1l8dr7i{border-radius:20px;height:250px;border-width:30px}.overlay.svelte-1l8dr7i{font-size:25px;position:relative;left:40%;bottom:50%}.overlay1.svelte-1l8dr7i{font-size:25px;position:relative;left:30%;bottom:40%}.overlay2.svelte-1l8dr7i{font-size:25px;position:relative;left:5%;bottom:55%;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Backround, "PageColor").$$render($$result, {}, {}, {})} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Bottombar, "Bottombar").$$render($$result, {}, {}, {})} <div class="pages svelte-1l8dr7i" data-svelte-h="svelte-1lkwhck"><a href="/film"><img class="buttonimg svelte-1l8dr7i"${add_attribute("src", filmImage, 0)} alt="Film"> <p class="overlay svelte-1l8dr7i">Film</p></a> <a href="/about"><img id="portrait"${add_attribute("src", filmImage, 0)} alt="Girl Dad or Hawaii" class="svelte-1l8dr7i"> <p class="overlay1 svelte-1l8dr7i">About</p></a> <a href="/compsci"><img class="buttonimg svelte-1l8dr7i"${add_attribute("src", filmImage, 0)} alt="Film"> <p class="overlay2 svelte-1l8dr7i">Computer <br> Science</p></a> </div>`;
});
export {
  Page as default
};
