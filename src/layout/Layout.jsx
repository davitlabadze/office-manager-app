import { Outlet } from 'react-router-dom';
import NavLinkComponent from '../components/NavLinkComponent';
import BackButton from '../components/BackButton';
const Layout = () => {
  return (
    <div className='h-screen bg-gray-600 '>
      <div className='h-auto bg-gray-600'>
        <BackButton />
        <div className='container max-w-screen-lg mx-auto text-center'>
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
      {/* <div>test</div> */}
    </div>
  );
};

export default Layout;
