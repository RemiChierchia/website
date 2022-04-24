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
  a: () => authorsQuery,
  b: () => postQuery,
  c: () => postsQuery,
  d: () => projectQuery,
  p: () => projectsQuery
});
module.exports = __toCommonJS(stdin_exports);
var import_graphql_request = require("graphql-request");
const authorsQuery = import_graphql_request.gql`
    query GetAuthors {
        authors {
            name
            intro
            bio
            slug
            picture {
                url
            }
        }
    }
`;
const PROJECT_FRAGMENT = import_graphql_request.gql`
    fragment ProjectDetails on Project {
        name
        slug
        description
        tags
        demo
        sourceCode
        image {
            url
        }
    }
`;
const projectsQuery = import_graphql_request.gql`
    ${PROJECT_FRAGMENT}
    query GetProjects {
        projects {
        ...ProjectDetails
        }
    }
`;
const projectQuery = import_graphql_request.gql`
    ${PROJECT_FRAGMENT}
    query GetProject($slug: String!) {
        project(where: { slug: $slug }) {
        ...ProjectDetails
        }
    }
`;
const POST_FRAGMENT = import_graphql_request.gql`
    fragment PostDetails on Post {
        title
        slug
        date
        content
        tags
        coverImage {
            url
        }
        authors {
            name
        }
    }
`;
const postsQuery = import_graphql_request.gql`
    ${POST_FRAGMENT}
    query GetPosts {
        posts {
        ...PostDetails
        }
    }
`;
const postQuery = import_graphql_request.gql`
    ${POST_FRAGMENT}
    query GetPost($slug: String!) {
        post(where: { slug: $slug }) {
        ...PostDetails
        }
    }
`;
