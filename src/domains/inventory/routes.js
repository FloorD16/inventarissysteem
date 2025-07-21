import Add from "./pages/Add.vue";
import Overview from "./pages/Overview.vue";

export const routes = [
    { path: '/', name: 'inventory.overview', component: Overview },
    { path: '/add', name: 'inventory.add', component: Add }
];