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
            <ul className='mt-8 font-black text-center lg:flex lg:justify-center lg:space-x-12'>
              <li
                className={
                  isActive === '/make-note/employee-info'
                    ? 'lg:items-center lg:px-2 lg:py-2 text-2xl lg:font-medium lg:underline -mb-7'
                    : 'lg:items-center lg:px-2 lg:py-2 text-2xl lg:font-medium lg:visible invisible'
                }
              >
                {t('employee_info')}
              </li>
              <li
                className={
                  isActive === '/make-note/feature-of-the-laptop'
                    ? 'lg:items-center lg:px-2 lg:py-2 text-2xl lg:font-medium lg:underline lg:mt-0 -mt-8'
                    : 'lg:items-center lg:px-2 lg:py-2 text-2xl lg:font-medium lg:visible invisible'
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
