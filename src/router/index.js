import { createWebHistory, createRouter } from "vue-router";
import DcHeors from "../pages/DcHeros";
import MarkDown from "../pages/MarkDown";
import Slider from "../pages/Slider";
import Calculator from "../pages/Calculator";

const routes = [
  {
    path: "/",
    component: DcHeors,
  },
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
  {
    path: "/slider",
    name: "Slider",
    component: Slider,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
