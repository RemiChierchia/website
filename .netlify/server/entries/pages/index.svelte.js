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
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_87d5ee21 = require("../../chunks/index-87d5ee21.js");
var import_graphql_queries_21e134f9 = require("../../chunks/graphql-queries-21e134f9.js");
var import_graphql_client_fb717272 = require("../../chunks/graphql-client-fb717272.js");
var import_project_card_4e241726 = require("../../chunks/project-card-4e241726.js");
var import_graphql_request = require("graphql-request");
const load = async () => {
  const [authorReq, projectsReq] = await Promise.all([import_graphql_client_fb717272.c.request(import_graphql_queries_21e134f9.a), import_graphql_client_fb717272.c.request(import_graphql_queries_21e134f9.p)]);
  const { authors } = authorReq;
  const { projects } = projectsReq;
  return { props: { projects, authors } };
};
const Routes = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  let { authors } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  if ($$props.authors === void 0 && $$bindings.authors && authors !== void 0)
    $$bindings.authors(authors);
  return `<h1 class="${"font-bold text-center mb-20 text-5xl"}">Welcome to my Portfolio
</h1>
  
${(0, import_index_87d5ee21.b)(authors, ({ name, intro, picture: { url } }) => {
    return `<div class="${"flex mb-40 items-end"}"><div class="${"mr-6"}"><h2 class="${"text-3xl mb-4 font-bold tracking-wider"}">${(0, import_index_87d5ee21.e)(name)}</h2>
        <p class="${"text-xl mb-4"}">${(0, import_index_87d5ee21.e)(intro)}</p></div>
  
      <img class="${"mask mask-squircle h-48"}"${(0, import_index_87d5ee21.a)("src", url, 0)}${(0, import_index_87d5ee21.a)("alt", name, 0)}>
    </div>`;
  })}
  
<div class="${"grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52"}">${(0, import_index_87d5ee21.b)(projects, ({ name, slug, description, image }) => {
    return `${(0, import_index_87d5ee21.v)(import_project_card_4e241726.P, "ProjectCard").$$render($$result, {
      name,
      description,
      url: image[0].url,
      slug
    }, {}, {})}`;
  })}</div>`;
});
