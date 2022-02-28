import Vue from "vue";
import Router from "vue-router";
import Blog from "./views/Blog.vue";

Vue.use(Router);

import BlogEntries from "./statics/data/blogs.json";

const children = BlogEntries.map(child => ({
  path: child.id,
  name: child.id,
  component: () => import(`./markdowns/${child.id}.md`)
}));

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "Home"
    //   component: Home
    // },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: `/blog`,
      name: "articles",
      component: () => import("./views/Post.vue"),
      children
    }
  ]
});
