import { showProducts } from '@pages/products.js'
// import { showProduct } from '@pages/product.js'




import 'bootstrap'
import '@styles/main.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const App = () => {
  showProducts()
  // showProduct()
}

App()
