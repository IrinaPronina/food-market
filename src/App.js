import './scss/app.scss';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header/Header';

// import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
