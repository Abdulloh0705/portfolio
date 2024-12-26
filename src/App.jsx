import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Cards from './components/cards/Cards';
import Products from './components/cards/product/Products';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage />}>
            <Route path="/" element={<Cards />} />
            <Route path="/products/:id" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
