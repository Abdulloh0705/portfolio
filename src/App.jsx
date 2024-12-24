import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './Pages/HomePage';
import Cards from './components/cards/Cards';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage />}>
            <Route path="/" element={<Cards />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
