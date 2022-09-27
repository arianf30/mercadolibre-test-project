import AdminPage from '../pages/AdminPage'
import HomePage from '../pages/HomePage'
import Item from '../pages/Item'

export default [
  {
    getSsProps: HomePage.getSsProps,
    component: HomePage.component,
    path: '/home',
    exact: true
  },
  {
    getSsProps: HomePage.getSsProps,
    component: HomePage.component,
    path: '/home/:query',
    exact: true
  },
  {
    getSsProps: AdminPage.getSsProps,
    component: AdminPage.component,
    path: '/admin',
    exact: true
  },
  {
    getSsProps: AdminPage.getSsProps,
    component: AdminPage.component,
    path: '/admin/nuevo',
    exact: true
  },
  {
    component: Item.component,
    path: '/item',
    exact: true
  }
]
