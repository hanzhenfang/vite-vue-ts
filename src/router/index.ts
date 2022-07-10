import { createRouter, createWebHistory } from 'vue-router';
import blogTxt from '@/components/blogTxt.vue';
import helloWorld from '@/components/HelloWorld.vue';
import modal from '@/components/modal.vue';
import notFoundPage from '@/components/404page.vue';
import mulTable from '@/components/mulTable.vue';
import Faxian from '@/weiChat/faxian.vue';
import Pengyouquan from '@/weiChat/pengyouquan.vue';
import Gerenzhuye from '@/weiChat/gerenzhuye.vue';
import hanzhenfang from '@/weiChat/gerenzhuye.vue';
<<<<<<< HEAD
import { E } from '../utils/vimtext';
=======
>>>>>>> c95133e87f861fc83129aec88872a57dd49640b9

export  const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "gerenzhuye",
      component: Gerenzhuye,
      props:{id1:'111'},
      children:[
        {
          path: 'mulTable',
          name: 'mulTable',
          component: mulTable
        },
      ]
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
      path: '/gerenzhuye',
      name: "gerenzhuye",
      component: Gerenzhuye,
    },
    {
      path: '/pengyouquan',
      name: "pengyouquan",
      meta:{isAuth:false},
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

router.beforeEach((to,from,next)=>{
<<<<<<< HEAD
 console.log('to',to)
  if(to.fullPath==="/pengyouquan") {
    if(to.meta.isAuth)
    next()
    else{
      alert('密码错误')
    }
  }
  else next()
=======
  console.log('to',to)
  console.log('from',from)
  console.log('next',next)
  next()
>>>>>>> c95133e87f861fc83129aec88872a57dd49640b9
})