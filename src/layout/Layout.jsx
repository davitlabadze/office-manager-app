import { Outlet } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { useTranslation } from 'react-i18next';

import { useLocation } from 'react-router-dom';
const Layout = () => {
  const location = useLocation();
  const isActive = location.pathname;

  const { t } = useTranslation();
  return (
    <div className='h-screen bg-gray-200 '>
      <div className='h-auto bg-gray-200'>
        <BackButton />
        <div className='container max-w-screen-lg mx-auto text-center'>
          <nav className='p-4'>
            <ul className='flex justify-center mt-12 space-x-12 text-center'>
              <li
                className={
                  isActive === '/make-note/employee-info'
                    ? 'items-center px-2 py-2 text-2xl font-medium underline'
                    : 'items-center px-2 py-2 text-2xl font-medium '
                }
              >
                {t('employee_info')}
              </li>
              <li
                className={
                  isActive === '/make-note/feature-of-the-laptop'
                    ? 'items-center px-2 py-2 text-2xl font-medium underline'
                    : 'items-center px-2 py-2 text-2xl font-medium'
                }
              >
                {t('feature_of_the_laptop')}
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
