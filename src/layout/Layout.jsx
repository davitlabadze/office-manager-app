import { Link, Outlet } from 'react-router-dom';
import NavLinkComponent from '../components/NavLinkComponent';
import backButtonImage from '../assets/backButton.svg';
const Layout = () => {
  return (
    <div className='h-screen bg-gray-200 '>
      <Link to={'/'}>
        <button className='float-left px-12 py-6'>
          <img src={backButtonImage} alt='' />
        </button>
      </Link>
      <div className='container max-w-screen-lg mx-auto text-center '>
        <nav className='p-4'>
          <ul className='flex justify-center space-x-12 text-center'>
            <NavLinkComponent path='employee-info' title='employee_info' />
            <NavLinkComponent
              path='feature-of-the-laptop'
              title='feature_of_the_laptop'
            />
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
