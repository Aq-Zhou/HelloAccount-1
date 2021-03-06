import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Statistics from '@/views/Statistics.vue';
import Labels from '@/views/Labels.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:'*',
    component: NotFound
  },
  {
    path: '/',
    redirect: '/money'
  },
  {
    path:'/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path:'/statistics',
    component: Statistics
  },
];

const router = new VueRouter({
  routes
});

export default router;
