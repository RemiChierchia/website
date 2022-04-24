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
  default: () => Projects,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_87d5ee21 = require("../../../chunks/index-87d5ee21.js");
var import_graphql_queries_21e134f9 = require("../../../chunks/graphql-queries-21e134f9.js");
var import_graphql_client_fb717272 = require("../../../chunks/graphql-client-fb717272.js");
var import_project_card_4e241726 = require("../../../chunks/project-card-4e241726.js");
var import_graphql_request = require("graphql-request");
const load = async () => {
  const { projects } = await import_graphql_client_fb717272.c.request(import_graphql_queries_21e134f9.p);
  return { props: { projects } };
};
const Projects = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  return `${$$result.head += `${$$result.title = `<title>My Portfolio projects</title>`, ""}`, ""}
  
<h1 class="${"font-bold mb-20 text-center text-5xl"}">Recent Projects by Me
</h1>
  
<div class="${"grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52"}">${(0, import_index_87d5ee21.b)(projects, ({ name, slug, description, image }, index) => {
    return `${(0, import_index_87d5ee21.v)(import_project_card_4e241726.P, "ProjectCard").$$render($$result, {
      name,
      description,
      url: image[0].url,
      index,
      slug
    }, {}, {})}`;
  })}</div>`;
});
