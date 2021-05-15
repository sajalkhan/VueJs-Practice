import { createWebHistory, createRouter } from "vue-router";
import DcHeors from "../pages/DcHeros";
import MarkDown from "../pages/MarkDown";
import Slider from "../pages/Slider";
import Calculator from "../pages/Calculator";
import ReusableModal from "../pages/ReusableModal";
import Chat from "../pages/Chat";
import store from "../store/index";

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
  {
    path: "/modal",
    name: "Modal",
    component: ReusableModal,
  },
  {
    path: "/chat",
    component: Chat,
    beforeEnter: (_, __, next) => {
      if (!store.state.isLoggedIn) {
        next("/");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
