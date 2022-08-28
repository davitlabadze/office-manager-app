import { useTranslation } from 'react-i18next';
import ActionButton from '../components/ActionButton';
import Select from '../components/Select';

const EmployeeInfo = () => {
  const { t } = useTranslation();

  const team = [
    { id: 1, position: 'Develompment' },
    { id: 2, position: 'HR' },
    { id: 3, position: 'Sales' },
    { id: 4, position: 'Design' },
    { id: 5, position: 'Marketing' },
  ];
  const position = [
    { id: 1, position: 'Front-end developer' },
    { id: 2, position: 'Junior HR' },
    { id: 3, position: 'Junior Sales' },
    { id: 4, position: 'UX/UI Design' },
    { id: 5, position: 'Junior marketer' },
  ];

  return (
    <div className='flex justify-center h-full p-12 mt-12 space-x-12 bg-white rounded-lg shadow-md'>
      <form action=''>
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
          <Select data={team} title='team' />
          <Select data={position} title='position' />
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
          <ActionButton text='next' />
        </div>
      </form>
    </div>
  );
};

export default EmployeeInfo;
