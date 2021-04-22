import { createWebHistory, createRouter } from "vue-router";
import DcHeors from "../pages/DcHeros";
import MarkDown from "../pages/MarkDown";
const routes = [
  {
    path: "/dc-heros",
    name: "DcHero",
    component: DcHeors,
  },
  {
    path: "/markdown",
    name: "Markdown",
    component: MarkDown,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
