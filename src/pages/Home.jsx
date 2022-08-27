import Image from '../assets/office-desk-animation.gif';
import HomeButton from '../components/HomeButton';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='text-center mt-24 container max-w-screen-lg mx-auto '>
        <div>
          <h1 className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-700 to-orange-600'>
            {t('office_manager_app')}
          </h1>
        </div>
        <div>
          <img src={Image} alt='' className='mx-auto mt-2' />
        </div>
        <HomeButton text='make_a_notes' />
        <HomeButton text='list_of_entries' />
        <div className='mt-12 relative'>
          <button
            onClick={() => i18next.changeLanguage('en')}
            className='px-2 py-1 text-white bg-blue-400 hover:bg-orange-500 rounded mr-2'
          >
            en
          </button>
          <span
            className='absolute -ml-px h-9   w-0.5 bg-red-700 '
            aria-hidden='true'
          ></span>

          <button
            onClick={() => i18next.changeLanguage('ka')}
            className='px-2 py-1 text-white bg-blue-400 hover:bg-orange-500 rounded ml-2'
          >
            ka
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
