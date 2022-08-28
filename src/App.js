import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeInfo from './pages/EmployeeInfo';
import Layout from './layout/Layout';
import Laptop from './pages/Laptop';
import ListOfEntries from './pages/ListOfEntries';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='make-note' element={<Layout />}>
        <Route path='employee-info' element={<EmployeeInfo />} />
        <Route path='feature-of-the-laptop' element={<Laptop />} />
      </Route>
      <Route path='/list-of-entries' element={<ListOfEntries />} />
    </Routes>
  );
}

export default App;
