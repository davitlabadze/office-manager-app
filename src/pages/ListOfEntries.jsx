import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ListOfEntries = () => {
  const { t } = useTranslation();

  const data = [
    {
      laptop: {
        image:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207',
        name: 'HP',
        id: 1,
      },
      user: {
        name: 'გელა',
        surname: 'გელაშვილი',
      },
    },
    {
      laptop: {
        image:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207',
        name: 'HP',
        id: 1,
      },
      user: {
        name: 'გელა',
        surname: 'გელაშვილი',
      },
    },
  ];
  return (
    <div>
      <h1 className='p-12 text-3xl'>{t('list_of_entries')}</h1>
      <input
        className='p-4 mt-2 border-2 border-blue-400 rounded-lg outline-none w-96'
        type='search'
        placeholder='search'
      />
      <div className='flex justify-between mt-12 space-x-12 '>
        {data.map((item, index) => (
          <div
            className='flex w-1/2 p-2 px-2 border shadow-xl rounded-xl '
            key={index}
          >
            <img
              className='h-32 rounded-lg w-36'
              src={item.laptop.image}
              alt={item.laptop.name}
            />
            <div className='ml-20 text-left'>
              <h1>
                {item.user.name} {item.user.surname}
              </h1>
              <h1 className='mt-5'>{item.laptop.name}</h1>

              <Link to={`/laptop-info/${item.laptop.id}`}>
                <h1 className='mt-5'>See More</h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfEntries;
