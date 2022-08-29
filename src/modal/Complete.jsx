import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Firework from '../assets/firework.svg';

const Complete = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div
        className='fixed inset-0 z-10 overflow-hidden'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div className='flex items-center justify-center min-h-screen'>
          <div
            className='fixed inset-0 bg-gray-500 bg-opacity-75'
            aria-hidden='true'
          ></div>
          <div className='py-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg sm:max-w-lg sm:w-full sm:p-6'>
            <div>
              <div className='px-3 text-center '>
                <img src={Firework} alt='' className='ml-28' />
                <h3 className='text-3xl font-medium leading-6' id='modal-title'>
                  {t('record_added')}
                </h3>
              </div>
              <div className='mt-12'>
                <Link to='/list-of-entries'>
                  <button className='p-2 px-4 text-white bg-blue-400 rounded-md hover:bg-blue-500'>
                    {t('list_of_entries')}
                  </button>
                </Link>
                <Link to='/'>
                  <p className='mt-2 text-blue-400'>{t('home_page')} </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Complete;
