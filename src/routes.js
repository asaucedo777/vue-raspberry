import Home from '@/components/Home'
import Statistics from '@/components/Statistics'
import Raspberry from '@/components/Raspberry'
import About from '@/components/About'

export const routes = [
  {
    path: '/',
    name: 'init',
    component: Home
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  }, {
    path: '/raspberry',
    name: 'raspberry',
    component: Raspberry
  }, {
    path: '/about',
    name: 'about',
    component: About
  }
]
