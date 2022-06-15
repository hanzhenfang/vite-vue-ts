import { createRouter, createWebHistory } from 'vue-router';
import blogTxt from '@/components/blogTxt.vue';
import helloWorld from '@/components/HelloWorld.vue';
import modal from '@/components/modal.vue';
import notFoundPage from '@/components/404page.vue';
import mulTable from '@/components/mulTable.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: helloWorld
    },
    {
      path: '/blogTxt',
      name: "blogTxt",
      component: blogTxt
    },
    {
      path: '/modal',
      name: "modal",
      component: modal,
    },
    {
      path: '/mulTable',
      name: 'mulTable',
      component: mulTable
    },
    {
      path: '/404',
      name: "404page",
      component: notFoundPage,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ],
  linkActiveClass: "active-link"
})