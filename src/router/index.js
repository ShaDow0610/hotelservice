import { createRouter, createWebHistory } from 'vue-router'
import GererClient from '@/views/admin/GererClient.vue'
import LogIn from '../views/login/LogIn.vue'
import GererGerant from '@/views/admin/GererGerant.vue'
import CreateAccount from '@/views/login/CreateAccount.vue'
import DashBoard from '@/views/DashBoard.vue'
import UserProfileVue from '@/views/users/UserProfileVue.vue'
import clientVue from '@/views/clientVue.vue'
import GererPublication from '@/views/gerant/GererPublication.vue'
import AcceuilleVue from '@/views/users/AcceuilleVue.vue'
import PayementMethode from '@/views/users/PayementMethode.vue'
import CategorieSpecifique from '@/views/users/CategorieSpecifique.vue'
import CategoriesVue from '@/views/users/CategoriesVue'
import PayementVue from '@/views/users/PayementVue.vue'

const routes = [
  {
    path: '/client',  
    name: 'gererclient',
    component: GererClient
  },
  {
    path: '/payement',  
    name: 'payement',
    component: PayementVue
  },
  {
    path: '/categories',  
    name: 'categories',
    component: CategoriesVue
  },
  {
    path: '/categorieSpecifique',  
    name: 'categorieSpecifique',
    component: CategorieSpecifique
  },
  {
    path: '/paymentmethode',  
    name: 'paymentmethode',
    component: PayementMethode
  },
  {
    path: '/',  
    name: 'acceuille',
    component: AcceuilleVue
  },
  {
    path: '/publication',  
    name: 'publication',
    component: GererPublication
  },
  {
    path: '/clients',  
    name: 'clients',
    component: clientVue
  },
  {
    path: '/profile',  
    name: 'userprofile',
    component: UserProfileVue
  },
  {
    path: '/login',  
    name: 'login',
    component: LogIn
  },
  {
    path: '/gerant',  
    name: 'gerergerant',
    component: GererGerant
  },
  {
    path: '/register',  
    name: 'register',
    component: CreateAccount
  },
  {
    path: '/dasboard',
    name: 'dasboard',
    component: DashBoard 
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

