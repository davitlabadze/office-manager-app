import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DropDown from '../assets/dropDown.svg';

const Select = (props) => {
  const { data, title } = props;
  const { t } = useTranslation();

  const [selected, setSelected] = useState('');
  const [isShow, selectOpen] = useState(false);
  const show = () => {
    selectOpen(!isShow);
  };
  return (
    <div className='relative mt-4 lg:mt-9'>
      <button
        onClick={show}
        type='button'
        className='relative w-full p-4 pl-3 pr-10 text-left bg-gray-200 border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none sm:text-sm'
      >
        <span className='block truncate'>
          {selected ? selected.name : t(title)}
        </span>
        <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
          <img src={DropDown} alt='' />
        </span>
      </button>

      {isShow ? (
        <ul className='absolute z-10 w-full py-1 overflow-auto text-base bg-white rounded-md shadow-lg shadow-3xl max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
          {data.map((data) => (
            <li
              key={data.id}
              onClick={() => {
                setSelected(data);
                selectOpen(false);
              }}
              className={`
            ${selected.id === data.id ? `bg-blue-200` : ''} 
            relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9 hover:bg-blue-200`}
            >
              <span className='block font-normal text-left truncate'>
                {t(data.name)}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
