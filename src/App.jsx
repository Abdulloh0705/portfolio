import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Cards from './components/cards/Cards';
import Products from './components/cards/product/Products';
import NotFound from './Pages/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage />}>
            <Route path="/" element={<Cards />} />
            <Route path="/products/:id" element={<Products />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
