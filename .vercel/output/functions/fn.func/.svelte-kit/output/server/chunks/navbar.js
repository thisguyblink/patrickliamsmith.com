import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const css$1 = {
  code: "body.svelte-qhz0tc{background:linear-gradient(to bottom right, #9197ae, #273043)}",
  map: null
};
const Backround = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<body class="svelte-qhz0tc" data-svelte-h="svelte-1wydf82"></body>`;
});
const filmImage = "/_app/immutable/assets/IMG_7054.Dk9NA1bT.jpg";
const css = {
  code: "#nav.svelte-3b01zq{display:flex;justify-content:center;justify-content:space-around;font-size:20px;background-color:#9197ae;color:black;padding:20px}#logo.svelte-3b01zq{height:40px;width:auto;padding:25px}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="nav" class="svelte-3b01zq" data-svelte-h="svelte-1hj6j99"><img id="logo"${add_attribute("src", filmImage, 0)} alt="Not found" class="svelte-3b01zq"> <h1 id="name">Patrick Smith</h1> <img id="logo"${add_attribute("src", filmImage, 0)} alt="Not found" class="svelte-3b01zq"> </div>`;
});
export {
  Backround as B,
  Navbar as N,
  filmImage as f
};
