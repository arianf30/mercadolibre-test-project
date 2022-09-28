import HomePage from '../pages/HomePage'
import ItemPage from '../pages/ItemPage'
import ResultsPage from '../pages/ResultsPage'

export default [
  {
    component: HomePage.component,
    path: '/',
    exact: true
  },
  {
    getSsProps: ResultsPage.getSsProps,
    component: ResultsPage.component,
    path: '/:query',
    exact: true
  },
  {
    getSsProps: ItemPage.getSsProps,
    component: ItemPage.component,
    path: '/items/:id',
    exact: true
  }
]
