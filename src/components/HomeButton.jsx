import { useTranslation } from 'react-i18next';
const HomeButton = (props) => {
  const { t } = useTranslation();

  const { text } = props;
  return (
    <div className='mt-2'>
      <button className='bg-blue-400 hover:bg-blue-500 text-white p-2 w-72 rounded-md'>
        {t(text)}
      </button>
    </div>
  );
};

export default HomeButton;
