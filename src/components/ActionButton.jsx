import { useTranslation } from 'react-i18next';

const ActionButton = (props) => {
  const { t } = useTranslation();
  const { text } = props;
  return (
    <div className='mt-12 text-right '>
      <button
        type='submit'
        className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
      >
        {t(text)}
      </button>
    </div>
  );
};

export default ActionButton;
