import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", component: Home, meta: { title: "Vietmerce" } },
  { path: "/about", component: About, meta: { title: "About Us" } },
  { path: "/contact", component: Contact, meta: { title: "Contact" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.afterEach((to) => {
  document.title = to.meta.title || "My Website";
});
export default router;
