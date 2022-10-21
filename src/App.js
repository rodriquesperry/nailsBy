import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Menu from './routes/menu/menu.component';
import Gallery from './routes/gallery/gallery.component';
import Book from './routes/book/book.component.jsx';
import About from './routes/about/about.component';
import TechAbout from './routes/tech-about/tech-about.component';

import Admin from './routes/admin/admin-container/admin-container.component';
import Dashboard from './components/dashboard/dashboard.component';
import AddMenuItem from './routes/admin/crud/add-menu-item/add-menu-item.component';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/book' element={<Book />} />
          <Route path='/about' element={<About />} />
          <Route path='/tech-about' element={<TechAbout />} />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='/admin/addMenuItem' element={<AddMenuItem />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
