import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const HomeButton = (props) => {
  const { t } = useTranslation();

  const { text, path } = props;
  return (
    <div className='mt-2'>
      <Link to={path}>
        <button className='p-2 text-white bg-blue-400 rounded-md hover:bg-blue-500 w-72'>
          {t(text)}
        </button>
      </Link>
    </div>
  );
};

export default HomeButton;
