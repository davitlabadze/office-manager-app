import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeInfo from './pages/EmployeeInfo';
import Layout from './layout/Layout';
import Laptop from './pages/Laptop';
import ListOfEntries from './pages/ListOfEntries';
import ListLayout from './layout/ListLayout';
import LaptopInfo from './pages/LaptopInfo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='make-note' element={<Layout />}>
        <Route path='employee-info' element={<EmployeeInfo />} />
        <Route path='feature-of-the-laptop' element={<Laptop />} />
      </Route>
      <Route element={<ListLayout />}>
        <Route path='/list-of-entries' element={<ListOfEntries />} />
        <Route path='/laptop-info/:id' element={<LaptopInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
