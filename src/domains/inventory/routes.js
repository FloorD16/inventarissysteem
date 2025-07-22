import Add from "./pages/Add.vue";
import Edit from "./pages/Edit.vue";
import Order from "./pages/Order.vue";
import Overview from "./pages/Overview.vue";

export const routes = [
    { path: '/', name: 'inventory.overview', component: Overview },
    { path: '/add', name: 'inventory.add', component: Add },
    { path: '/edit/:id', name: 'inventory.edit', component: Edit },
    { path: '/order', name: 'inventory.order', component: Order }
];