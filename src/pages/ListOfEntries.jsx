import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LISTOFENTRIES from '../database/laptops.json';

const ListOfEntries = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className='p-12 text-3xl'>{t('list_of_entries')}</h1>
      <input
        className='p-4 mt-2 border-2 border-blue-400 rounded-lg outline-none w-96'
        type='search'
        placeholder='search'
      />
      <div className='grid justify-between grid-cols-2 gap-4 mt-12 '>
        {LISTOFENTRIES.map((item, index) => (
          <div
            className='grid grid-cols-3 col-span-1 gap-2 p-2 px-2 text-left border shadow-xl rounded-xl '
            key={index}
          >
            <img
              className='h-32 rounded-lg w-36'
              src={item.laptop.image}
              alt={item.laptop.name}
            />
            <div className='col-span-2 ml-20 text-left'>
              <h1>
                {t('name')}: {item.user.name} {item.user.surname}
              </h1>
              <h1 className='mt-5'>
                {t('brand')}: {item.laptop.name}
              </h1>

              <Link to={`/laptop-info/${item.laptop.id}`}>
                <h1 className='mt-5 text-blue-400 hover:text-blue-500'>
                  {t('see_more')}
                </h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfEntries;
