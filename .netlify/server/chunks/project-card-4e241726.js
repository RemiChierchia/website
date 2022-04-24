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
  P: () => Project_card
});
module.exports = __toCommonJS(stdin_exports);
var import_index_87d5ee21 = require("./index-87d5ee21.js");
const Project_card = (0, import_index_87d5ee21.c)(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  let { name = "" } = $$props;
  let { slug = "" } = $$props;
  let { description = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="${"relative group card shadow-2xl col-span-2"}"><img${(0, import_index_87d5ee21.a)("src", url, 0)}${(0, import_index_87d5ee21.a)("alt", name, 0)} class="${"object-cover h-full"}">
    <a${(0, import_index_87d5ee21.a)("href", `/projects/${slug}`, 0)}><div class="${"absolute bottom-0 left-0 right-0 lg:opacity-0 group-hover:opacity-100 bg-primary p-4 duration-300 text-primary-content"}"><h2 class="${"font-bold lg:text-xl"}">${(0, import_index_87d5ee21.e)(name)}</h2>
        <p class="${"text-sm lg:text-xl"}">${(0, import_index_87d5ee21.e)(description.slice(0, 80))}...
        </p></div></a></div>`;
});
