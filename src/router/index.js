import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Service from "../views/Service.vue";
import FAQ from "../views/FAQ.vue";
const routes = [
  { path: "/", component: Home, meta: { title: "Vietmerce" } },
  { path: "/about", component: About, meta: { title: "About Us" } },
  { path: "/service", component: Service, meta: { title: "Service" } },
  { path: "/contact", component: Contact, meta: { title: "Contact" } },
  { path: "/faq", component: FAQ, meta: { title: "FAQ's" } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.afterEach((to) => {
  document.title = to.meta.title || "My Website";
});
export default router;
