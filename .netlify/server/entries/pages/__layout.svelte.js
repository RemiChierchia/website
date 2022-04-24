var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_87d5ee21 = require("../../chunks/index-87d5ee21.js");
var import_theme_change = require("theme-change");
const Facebook_icon = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Twitter_icon = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"fill-current"}"><path d="${"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}"></path></svg>`;
});
const You_tube_icon = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Footer = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"p-10 footer bg-primary text-primary-content footer-center"}"><div class="${"grid grid-flow-col gap-4"}"><a class="${"link link-hover"}" href="${"/projects"}">Portfolio</a>
      <a class="${"link link-hover"}" href="${"/posts"}">Blog</a>
      <a class="${"link link-hover"}" href="${"/about"}">About</a></div>
    <div><div class="${"grid grid-flow-col gap-4"}"><a href="${"https://twitter.com"}">${(0, import_index_87d5ee21.v)(Twitter_icon, "TwitterIcon").$$render($$result, {}, {}, {})}</a>
        <a href="${"https://youtube.com"}">${(0, import_index_87d5ee21.v)(You_tube_icon, "YouTubeIcon").$$render($$result, {}, {}, {})}</a>
        <a href="${"https://facebook.com"}">${(0, import_index_87d5ee21.v)(Facebook_icon, "FacebookIcon").$$render($$result, {}, {}, {})}</a></div></div>
    <div><p>Copyright \xA9 ${(0, import_index_87d5ee21.e)(`${new Date().getFullYear()}`)} - All right reserved
        by ME
      </p></div></footer>`;
});
const Navbar = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar mb-16 shadow-lg bg-neutral text-neutral-content sticky top-0 z-10"}"><div class="${"flex-1 px-2 mx-2"}"><a class="${"text-lg font-bold"}" href="${"/"}">Portfolio and Blog</a></div>

  <div class="${"dropdown dropdown-left lg:hidden"}"><div tabindex="${"0"}" class="${"m-1 btn"}">Links</div>
    <ul tabindex="${"0"}" class="${"bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "}"><a class="${"btn btn-ghost btn-sm rounded-btn"}" href="${"/projects"}">Portfolio
      </a>
      <a class="${"btn btn-ghost btn-sm rounded-btn"}" href="${"/posts"}">Blog
      </a>
      <a class="${"btn btn-ghost btn-sm rounded-btn"}" href="${"/about"}">About
      </a></ul></div>

  <div class="${"flex-none hidden px-2 mx-2 lg:flex"}"><div class="${"flex items-stretch"}"><a class="${"btn btn-ghost btn-sm rounded-btn"}" href="${"/projects"}">Portfolio
      </a>
      <a class="${"btn btn-ghost btn-sm rounded-btn"}" href="${"/posts"}">Blog</a>
      <a class="${"btn btn-ghost btn-sm rounded-btn"}" href="${"/about"}">About</a></div></div></div>`;
});
var app = "";
const _layout = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_87d5ee21.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<main class="${"container max-w-3xl mx-auto px-4 mb-20"}">${slots.default ? slots.default({}) : ``}</main>
${(0, import_index_87d5ee21.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
