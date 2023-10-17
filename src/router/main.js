import HomeView from "@/views/home/index.vue";
import UserView from "@/views/user/index.vue";
import UserCreateView from "@/views/user/create.vue";
import UserUpdateView from "@/views/user/update.vue";
import Todoview from "../views/todo/index.vue";
import TodoCreateView from "../views/todo/create.vue";
import MasposView from "../views/maspos/index.vue";
import AddProduct from "../views/maspos/addproduct.vue";
import AddCategorys from "../views/maspos/addcategorys.vue";
import Cart from "../views/maspos/cart.vue";
import Transaksi from "../views/maspos/transaction-process.vue";

import ExampleLayout from "@/layouts/ExampleLayout.vue";
import NavbarMaspos from "../layouts/NavbarMaspos.vue";
// middleware
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
    meta: {
      title: "User",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/user/create",
    name: "user.create",
    component: UserCreateView,
    meta: {
      title: "User Create",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/user/update",
    name: "user.update",
    component: UserUpdateView,
    meta: {
      title: "User Update",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/todo",
    name: "todo",
    component: Todoview,
    meta: {
      title: "Todo",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/todo/create",
    name: "todo.create",
    component: TodoCreateView,
    meta: {
      title: "Todo Create",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/maspos/:id",
    name: "maspos",
    component: MasposView,
    meta: {
      title: "Maspos",
      layout: NavbarMaspos,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/maspos/addproduct",
    name: "maspos.addproduct",
    component: AddProduct,
    meta: {
      title: "Maspos Add Product",
      layout: NavbarMaspos,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/maspos/addcategory",
    name: "maspos.addcategorys",
    component: AddCategorys,
    meta: {
      title: "Maspos Add Categorys",
      layout: NavbarMaspos,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/maspos/cart",
    name: "maspos.addcategory",
    component: Cart,
    meta: {
      title: "Cart",
      layout: NavbarMaspos,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/maspos/transaction-process",
    name: "transaction-proccess",
    component: Transaksi,
    meta: {
      title: "Transaction-process",
      layout: NavbarMaspos,
      middleware: [AuthMiddleware],
    },
  },
];
