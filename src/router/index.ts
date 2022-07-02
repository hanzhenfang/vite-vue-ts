import { createRouter, createWebHistory } from 'vue-router';
import blogTxt from '@/components/blogTxt.vue';
import helloWorld from '@/components/HelloWorld.vue';
import modal from '@/components/modal.vue';
import notFoundPage from '@/components/404page.vue';
import mulTable from '@/components/mulTable.vue';
import Faxian from '@/weiChat/faxian.vue';
import Pengyouquan from '@/weiChat/pengyouquan.vue';
import Gerenzhuye from '@/weiChat/gerenzhuye.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "gerenzhuye",
      component: Gerenzhuye
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
      path: '/gerenzhuye',
      name: "gerenzhuye",
      component: Gerenzhuye,
    },
    {
      path: '/pengyouquan',
      name: "pengyouquan",
      component: Pengyouquan,
    },
    {
      path: '/faxian',
      name: "faxian",
      component: Faxian,
    },
    {
      path: '/404',
      name: "404page",
      component: notFoundPage,
    }
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: '/404'
    // }
  ]
})