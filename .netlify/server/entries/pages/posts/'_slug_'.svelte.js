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
  default: () => U5Bslugu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_87d5ee21 = require("../../../chunks/index-87d5ee21.js");
var import_marked = require("marked");
var import_graphql_queries_21e134f9 = require("../../../chunks/graphql-queries-21e134f9.js");
var import_graphql_client_fb717272 = require("../../../chunks/graphql-client-fb717272.js");
var import_graphql_request = require("graphql-request");
const load = async ({ params }) => {
  const { slug } = params;
  const variables = { slug };
  const { post } = await import_graphql_client_fb717272.c.request(import_graphql_queries_21e134f9.b, variables);
  return { props: { post } };
};
const U5Bslugu5D = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  const { title, date, tags, content, coverImage } = post;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `${$$result.head += `${$$result.title = `<title>Blog | ${(0, import_index_87d5ee21.e)(title)}</title>`, ""}`, ""}

<div class="${"sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5"}"><img class="${"rounded-xl"}"${(0, import_index_87d5ee21.a)("src", coverImage.url, 0)}${(0, import_index_87d5ee21.a)("alt", `Cover image for ${title}`, 0)}></div>
  
<div class="${"prose prose-xl"}"><h1>${(0, import_index_87d5ee21.e)(title)}</h1></div>
  
<p class="${"text-secondary text-xs tracking-widest font-semibold"}">${(0, import_index_87d5ee21.e)(new Date(date).toDateString())}</p>
  
<div class="${"mb-5 flex justify-between"}"><div>${tags ? `<div class="${"mt-5 space-x-2"}">${(0, import_index_87d5ee21.b)(tags, (tag) => {
    return `<span class="${"badge badge-primary"}">${(0, import_index_87d5ee21.e)(tag)}</span>`;
  })}</div>` : ``}</div></div>
  
<article div class="${"prose prose-lg"}"><!-- HTML_TAG_START -->${(0, import_marked.marked)(content)}<!-- HTML_TAG_END --></article>`;
});
