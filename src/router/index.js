import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Tags from '../views/Tags.vue'
import PostDetail from '../views/PostDetail.vue'
import About from '../views/About.vue'
import Error404 from '../views/Error404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blog/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tags/:tagId',
    name: 'Tags',
    component: Tags,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    component: Error404
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
});

export default router
