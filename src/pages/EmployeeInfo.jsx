import { useTranslation } from 'react-i18next';
import Select from '../components/Select';
import TEAM from '../database/teams.json';
import POSITION from '../database/positions.json';
import { NavLink } from 'react-router-dom';

const EmployeeInfo = () => {
  const { t } = useTranslation();

  return (
    <div className='flex justify-center h-full p-12 mt-12 space-x-12 bg-white rounded-lg shadow-md'>
      <div action=''>
        <div className='flex space-x-12'>
          <div className='block '>
            <label className='block text-left' htmlFor='first_name'>
              {t('first_name')}
            </label>
            <input
              type='text'
              name='first_name'
              placeholder='John'
              className='p-4 mt-2 border border-blue-300 rounded-lg w-96 outline-blue-400'
            />
          </div>
          <div className='block'>
            <label className='block text-left' htmlFor='last_name'>
              {t('last_name')}
            </label>
            <input
              type='text'
              name='last_name'
              placeholder='Doe'
              className='p-4 mt-2 border border-blue-300 rounded-lg w-96 outline-blue-400'
            />
          </div>
        </div>
        <div>
          <Select data={TEAM} title='team' />
          <Select data={POSITION} title='position' />
        </div>
        <div className='mt-12'>
          <label className='block text-left' htmlFor='email'>
            {t('email')}
          </label>
          <input
            type='email'
            name='email'
            placeholder='JohnDoe@example.com'
            className='w-full p-4 mt-2 border border-blue-300 rounded-lg outline-blue-400'
          />
        </div>
        <div className='mt-12'>
          <label className='block text-left' htmlFor='mobile_number'>
            {t('mobile_number')}
          </label>
          <input
            type='tel'
            name='mobile_number'
            placeholder='+995 593 57 88 33'
            pattern='+995-[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}'
            className='w-full p-4 mt-2 border border-blue-300 rounded-lg outline-blue-400'
          />
        </div>
        <div className='mt-12 text-right rounded-3xl'>
          <div className='mt-12 text-right'>
            <NavLink to='/make-note/feature-of-the-laptop'>
              <button className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
                {t('next')}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfo;
