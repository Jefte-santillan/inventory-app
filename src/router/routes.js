const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    children: [
      {
        path: "identities",
        name: "inventoryIdentities",
        component: () => import("pages/Identities/table/index.vue"),
      },
      {
        path: "products",
        name: "inventoryProducts",
        component: () => import("pages/products/table/index.vue"),
      },
      {
        path: "operations",
        name: "inventoryOperations",
        component: () => import("pages/operations/add/index.vue"),
      },
      {
        path: "operations/:id",
        name: "inventoryOperationsShow",
        component: () => import("pages/operations/show/index.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
