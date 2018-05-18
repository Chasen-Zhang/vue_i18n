import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import NotFound from '../components/notFound.vue'
let Home = (resolve)=>{
  return require.ensure([],()=>{
    resolve(require('../components/page1/home.component'))
  });

};

let PartA = (resolve)=>{
  return require.ensure([],()=>{
    resolve(require('../components/page1/partA/partA.component'))
  });

};

let Home2 = (resolve)=>{
  return require.ensure([],()=>{
    resolve(require('../components/page2/home.component'))
  });

};

let PartA2 = (resolve)=>{
  return require.ensure([],()=>{
    resolve(require('../components/page2/partA/partA.component'))
  });

};

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path: '/',
        component: PartA,
      },
      {
        path: 'partA',
        component: PartA,
      }
    ]
  },
  {
    path: '/home2',
    component: Home2,
    children:[
      {
        path: '/',
        component: PartA2,
      },
      {
        path: 'partA',
        component: PartA2,
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];
const router = new VueRouter({
  routes: routes
});
export default router;
