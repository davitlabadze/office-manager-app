import Image from '../assets/office-desk-animation.gif';
import HomeButton from '../components/HomeButton';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='container max-w-screen-lg mx-auto mt-24 text-center '>
        <div>
          <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-orange-600'>
            {t('office_manager_app')}
          </h1>
        </div>
        <div>
          <img src={Image} alt='' className='mx-auto mt-2' />
        </div>
        <HomeButton text='make_a_notes' path='make-note/employee-info' />
        <HomeButton text='list_of_entries' path='/list-of-entries' />
        <div className='relative mt-12'>
          <button
            onClick={() => i18next.changeLanguage('en')}
            className='px-2 py-1 mr-2 text-white bg-blue-400 rounded hover:bg-orange-500'
          >
            en
          </button>
          <span
            className='absolute -ml-px h-9   w-0.5 bg-red-700 '
            aria-hidden='true'
          ></span>

          <button
            onClick={() => i18next.changeLanguage('ka')}
            className='px-2 py-1 ml-2 text-white bg-blue-400 rounded hover:bg-orange-500'
          >
            ka
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
