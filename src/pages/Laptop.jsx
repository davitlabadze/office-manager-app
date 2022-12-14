import { useTranslation } from 'react-i18next';
import ImageUploader from '../assets/imageUploader.svg';
import Select from '../components/Select';
import LongLine from '../assets/longLine.svg';
import GEL from '../assets/Sign_of_Georgian_Lari.svg.png';
import { Link } from 'react-router-dom';
import Complete from '../modal/Complete';
import LAPTOPBRAND from '../database/brands.json';
import CPU from '../database/cpus.json';
import { useState } from 'react';
const Laptop = () => {
  const [complete, setComplete] = useState(false);
  const { t } = useTranslation();
  return (
    <div className='justify-center h-full p-12 mt-12 bg-white rounded-lg shadow-md lg:space-x-12 lg:flex'>
      <div>
        <div className='items-center justify-center lg:flex '>
          <label
            htmlFor='dropzone-file'
            className='flex flex-col items-center justify-center w-full border-2 border-blue-400 border-dashed rounded-lg cursor-pointer h-96 bg-gray-50 hover:bg-gray-100'
          >
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
              <img src={ImageUploader} alt='' className='w-10 h-10 mb-3' />
              <p className='mb-2 text-blue-500 text-md dark:text-gray-400'>
                <span className='font-semibold'>{t('drop_or_upload')} </span>
              </p>
              <p className='text-blue-500 text-md dark:text-gray-400'>
                {t('laptop_image')}
              </p>
            </div>
            <input id='dropzone-file' type='file' className='hidden' />
          </label>
        </div>
        <div className='mt-12 lg:space-x-12 lg:flex '>
          <div className='lg:w-1/2 '>
            <label className='block text-left' htmlFor='laptop_name'>
              {t('laptop_name')}
            </label>
            <input
              type='text'
              name='laptop_name'
              placeholder='acer aspire 1 a114-33-p01s nx.a7ver.00f silver'
              className='w-full p-4 mt-2 border border-blue-300 rounded-lg outline-blue-400'
            />
          </div>
          <div className='lg:w-1/2 '>
            <Select data={LAPTOPBRAND} title='laptop_brand' />
          </div>
        </div>
        <img src={LongLine} alt='' className='lg:mt-12' />
        <div className='lg:mt-12 lg:space-x-12 lg:flex '>
          <div className='lg:w-1/3'>
            <Select data={CPU} title='cpu' />
          </div>
          <div className='mt-4 lg:w-1/3 lg:mt-0'>
            <label className='block text-left' htmlFor='cpu_core'>
              {t('cpu_core')}
            </label>
            <input
              type='number'
              name='cpu_core'
              placeholder='12'
              className='w-full p-4 mt-2 border border-blue-300 rounded-lg p outline-blue-400'
            />
          </div>
          <div className='block mt-4 lg:w-1/3 lg:mt-0 '>
            <label className='block text-left' htmlFor='cpu_flow'>
              {t('cpu_flow')}
            </label>
            <input
              type='number'
              name='cpu_flow'
              placeholder='245'
              className='w-full p-4 mt-2 border border-blue-300 rounded-lg outline-blue-400'
            />
          </div>
        </div>
        <div className='mt-4 lg:mt-12 lg:space-x-12 lg:flex'>
          <div className='lg:w-1/2'>
            <label className='block text-left' htmlFor='laptop_ram'>
              {t('laptop_ram')}
            </label>
            <input
              type='number'
              name='laptop_ram'
              placeholder='16'
              className='w-full p-4 mt-2 border border-blue-300 rounded-lg outline-blue-400'
            />
          </div>
          <div className='mt-4 lg:w-1/2 lg:mt-0'>
            <h1 className='text-left'>{t('memory_type')}</h1>
            <div className='mt-4 text-left lg:mt-5'>
              <input type='radio' id='1' name='memory_type' value='ssd' />
              <label className='py-12 ml-2' htmlFor='memory_type'>
                SSD
              </label>
              <input
                type='radio'
                id='2'
                name='memory_type'
                value='hdd'
                className='ml-2'
              />
              <label className='py-12 ml-2' htmlFor='memory_type'>
                HDD
              </label>
              <input
                type='radio'
                id='3'
                name='memory_type'
                value='assdandhdd'
                className='ml-2'
              />
              <label className='py-12 ml-2' htmlFor='memory_type'>
                SSD + HDD
              </label>
            </div>
          </div>
        </div>
        <img src={LongLine} alt='' className='mt-12' />

        <div className='lg:flex lg:mt-12 lg:space-x-12'>
          <div className='block '>
            <label className='block text-left' htmlFor='date_of_purchase'>
              {t('date_of_purchase')}
            </label>
            <input
              type='date'
              name='date_of_purchase'
              className='w-full p-4 mt-2 border border-blue-300 rounded-lg lg:w-96 outline-blue-400'
            />
          </div>
          <div className='block w-full mt-4 lg:mt-0'>
            <label className='flex text-left' htmlFor='laptop_price'>
              {t('laptop_price')}
              <input
                type='radio'
                name='price'
                id='gel'
                value='gel'
                className='ml-2'
              />
              <img src={GEL} alt='' className='w-4 h-4 mt-1 ml-1' />
              <input
                type='radio'
                name='price'
                id='usd'
                value='usd'
                className='ml-2 mr-2'
              />
              $
            </label>
            <input
              type='number'
              name='laptop_price'
              placeholder='1555'
              className='w-full p-4 mt-2 border border-blue-300 rounded-lg outline-blue-400'
            />
          </div>
        </div>

        <div className='mt-12 lg:w-1/2'>
          <h1 className='text-left'>{t('laptop_condition')}</h1>
          <div className='mt-5 text-left'>
            <input type='radio' id='new' name='laptop_condition' value='new' />
            <label className='py-12 ml-2' htmlFor='new'>
              {t('new')}
            </label>
            <input
              type='radio'
              id='2'
              name='laptop_condition'
              value='hdd'
              className='ml-2'
            />
            <label className='py-12 ml-2' htmlFor='secondary'>
              {t('secondary')}
            </label>
          </div>
        </div>

        <div className='flex justify-between lg:mt-12 rounded-3xl'>
          <Link to='/make-note/employee-info'>
            <button className='mt-16 text-blue-500 hover:text-blue-600'>
              {t('back')}
            </button>
          </Link>

          <div className='mt-12 text-right'>
            <button
              onClick={() => setComplete(true)}
              type='text'
              className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
            >
              {t('save')}
            </button>
          </div>
        </div>
      </div>
      {complete ? <Complete /> : null}
    </div>
  );
};

export default Laptop;
