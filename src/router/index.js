import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OmMig from '../views/OmMig.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/om-mig',
    name: 'om-mig',
    component: OmMig
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
  path: '/projekter',
  name: 'ProjectView',
  component: ProjectView
  },
  {
    path: '/projectdetails/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
