import { useTranslation } from 'react-i18next';
import LAPTOPINFO from '../database/laptop.json';
import LongLine from '../assets/longLine.svg';

const LaptopInfo = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className='p-12 text-lg font-black lg:text-3xl font-dark'>
        {t('laptop_info')}
      </h1>

      <div className='justify-between '>
        {LAPTOPINFO.map((item, index) => (
          <div key={index} className='grid'>
            <div className='grid grid-cols-1 lg:grid-cols-2 '>
              <img src={item.laptop.image} alt='' className='h-auto w-96' />
              <div className='grid grid-cols-2 mt-12 text-left '>
                <div className='ml-12 space-y-2 font-medium text-left lg:ml-0 lg:mt-20'>
                  <p>{t('name')}:</p>
                  <p>{t('team')}:</p>
                  <p>{t('position')}:</p>
                  <p>{t('email')} :</p>
                  <p>{t('mobile_number')}:</p>
                </div>
                <div className='space-y-2 text-left text-gray-600 lg:mt-20'>
                  <p>{item.user.name} </p>
                  <p>{item.user.team} </p>
                  <p>{item.user.position} </p>
                  <p>{item.user.email} </p>
                  <p>{item.user.phone_number} </p>
                </div>
              </div>
            </div>
            <img src={LongLine} alt='' className='mt-6' />
            <div className='grid mt-12 lg:grid-cols-2'>
              <div className='grid grid-cols-2 ml-12 '>
                <div className='space-y-2 font-medium text-left'>
                  <p>{t('laptop_name')}:</p>
                  <p>{t('laptop_brand')}:</p>
                  <p>{t('ram')}:</p>
                  <p>{t('memory_type')} :</p>
                </div>
                <div className='ml-2 space-y-2 text-left text-gray-600 '>
                  <p>{item.laptop.name} </p>
                  <p>{item.laptop.brand} </p>
                  <p>{item.laptop.ram} </p>
                  <p>{item.laptop.hard_drive_type} </p>
                </div>
              </div>
              <div className='grid grid-cols-2 ml-12 lg:mt-0'>
                <div className='space-y-2 font-medium text-left'>
                  <p>{t('cpu')}:</p>
                  <p>{t('cpu_core')}:</p>
                  <p>{t('cpu_flow')}:</p>
                </div>
                <div className='ml-2 space-y-2 text-left text-gray-600'>
                  <p>{item.laptop.cpu.name} </p>
                  <p>{item.laptop.cpu.cores} </p>
                  <p>{item.laptop.cpu.threads} </p>
                </div>
              </div>
            </div>
            <img src={LongLine} alt='' className='mt-6' />
            <div className='grid ml-12 lg:grid-cols-2 lg:mt-12 '>
              <div className='grid grid-cols-2'>
                <div className='space-y-2 font-medium text-left '>
                  <p>{t('laptop_condition')}:</p>
                  <p>{t('laptop_price')}:</p>
                </div>
                <div className='ml-2 space-y-2 text-left text-gray-600 '>
                  <p>{item.laptop.state} </p>
                  <p>{item.laptop.price} </p>
                </div>
              </div>
              <div className='grid grid-cols-2 mt-2 mb-12'>
                <div className='space-y-2 text-left '>
                  <p>{t('purchase_date')}:</p>
                </div>
                <div className='ml-2 space-y-2 text-left text-gray-600 '>
                  <p>{item.laptop.purchase_date} </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaptopInfo;
