import { showProducts } from '@pages/products'
import { product } from '@pages/product'

import 'bootstrap'
import '@styles/main.scss'

const App = () => {
  showProducts(),
  product()
}

App()
