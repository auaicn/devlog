const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/apple/projects/devlog/.cache/dev-404-page.js"))),
  "component---src-components-posts-post-template-index-js": hot(preferDefault(require("/Users/apple/projects/devlog/src/components/Posts/PostTemplate/index.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/apple/projects/devlog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/apple/projects/devlog/src/pages/index.js")))
}

