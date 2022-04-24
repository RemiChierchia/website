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
  default: () => Posts,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_87d5ee21 = require("../../../chunks/index-87d5ee21.js");
var import_marked = require("marked");
var import_graphql_queries_21e134f9 = require("../../../chunks/graphql-queries-21e134f9.js");
var import_graphql_client_fb717272 = require("../../../chunks/graphql-client-fb717272.js");
var import_graphql_request = require("graphql-request");
const load = async () => {
  const { posts } = await import_graphql_client_fb717272.c.request(import_graphql_queries_21e134f9.c);
  return { props: { posts } };
};
const Posts = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `${$$result.head += `${$$result.title = `<title>Portfolio | Blog</title>`, ""}`, ""}

<h1 class="${"text-4xl mb-10 font-extrabold"}">Blog posts</h1>

${(0, import_index_87d5ee21.b)(posts, ({ title, slug, content, coverImage, tags }) => {
    return `<div class="${"card text-center shadow-2xl mb-20"}"><figure class="${""}"><img class="${""}"${(0, import_index_87d5ee21.a)("src", coverImage.url, 0)}${(0, import_index_87d5ee21.a)("alt", `Cover image for ${title}`, 0)}></figure>
    <div class="${"card-body prose"}"><h2 class="${"title"}">${(0, import_index_87d5ee21.e)(title)}</h2>
      <!-- HTML_TAG_START -->${(0, import_marked.marked)(content).slice(0, 150)}<!-- HTML_TAG_END -->
      <div class="${"flex justify-center mt-5 space-x-2"}">${(0, import_index_87d5ee21.b)(tags, (tag) => {
      return `<span class="${"badge badge-primary"}">${(0, import_index_87d5ee21.e)(tag)}</span>`;
    })}</div>
      <div class="${"justify-center card-actions"}"><a${(0, import_index_87d5ee21.a)("href", `/posts/${slug}`, 0)} class="${"btn btn-outline btn-primary"}">Read \u21D2</a>
      </div></div>
  </div>`;
  })}`;
});
