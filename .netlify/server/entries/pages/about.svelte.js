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
  default: () => About,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_87d5ee21 = require("../../chunks/index-87d5ee21.js");
var import_marked = require("marked");
var import_graphql_queries_21e134f9 = require("../../chunks/graphql-queries-21e134f9.js");
var import_graphql_client_fb717272 = require("../../chunks/graphql-client-fb717272.js");
var import_graphql_request = require("graphql-request");
const load = async () => {
  const { authors } = await import_graphql_client_fb717272.c.request(import_graphql_queries_21e134f9.a);
  return { props: { authors } };
};
const About = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  let { authors } = $$props;
  const { name, intro, bio, picture: { url } } = authors[0];
  if ($$props.authors === void 0 && $$bindings.authors && authors !== void 0)
    $$bindings.authors(authors);
  return `${$$result.head += `${$$result.title = `<title>My Portfolio project | About ${(0, import_index_87d5ee21.e)(name)}</title>`, ""}`, ""}
  
<h1 class="${"font-bold text-center mb-20 text-5xl"}">About Me</h1>
  
<div class="${"flex mb-40 items-end"}"><div class="${"mr-6"}"><h2 class="${"text-3xl mb-4 font-bold tracking-wider"}">${(0, import_index_87d5ee21.e)(name)}</h2>
      <p class="${"text-xl mb-4"}">${(0, import_index_87d5ee21.e)(intro)}</p></div>
  
    <img class="${"mask mask-squircle h-48"}"${(0, import_index_87d5ee21.a)("src", url, 0)}${(0, import_index_87d5ee21.a)("alt", name, 0)}></div>
  
<article div class="${"prose prose-lg"}"><!-- HTML_TAG_START -->${(0, import_marked.marked)(bio)}<!-- HTML_TAG_END --></article>`;
});
