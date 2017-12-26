import Home from '@/components/Home'
import Statistics from '@/components/Statistics'
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
    path: '/about',
    name: 'about',
    component: About
  }
]
