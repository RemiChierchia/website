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
  const { project } = await import_graphql_client_fb717272.c.request(import_graphql_queries_21e134f9.d, variables);
  return { props: { project } };
};
const U5Bslugu5D = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `${$$result.head += `${$$result.title = `<title>My Portfolio | ${(0, import_index_87d5ee21.e)(project.name)}</title>`, ""}`, ""}
  
<div class="${"sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5"}"><img class="${"rounded-lg"}"${(0, import_index_87d5ee21.a)("src", project.image[0].url, 0)}${(0, import_index_87d5ee21.a)("alt", project.title, 0)}></div>
  
<h1 class="${"text-4xl font-semibold mb-5"}">${(0, import_index_87d5ee21.e)(project.name)}</h1>
  
<div class="${"mb-5 flex justify-between"}"><div>${project.tags ? `${(0, import_index_87d5ee21.b)(project.tags, (tag) => {
    return `<span class="${"badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer"}">${(0, import_index_87d5ee21.e)(tag)}</span>`;
  })}` : ``}</div></div>
  
<div class="${"mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus"}"><a class="${"mr-5"}"${(0, import_index_87d5ee21.a)("href", project.demo, 0)}>Demo</a>
    <a${(0, import_index_87d5ee21.a)("href", project.sourceCode, 0)}>Source Code</a></div>
  
  <article class="${"prose prose-xl"}"><!-- HTML_TAG_START -->${(0, import_marked.marked)(project.description)}<!-- HTML_TAG_END --></article>`;
});
