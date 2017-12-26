import Home from '@/components/Home'
import Statistics from '@/components/Statistics'
import About from '@/components/About'

export const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/statistics',
    component: Statistics
  }, {
    path: '/about',
    component: About
  }
]
