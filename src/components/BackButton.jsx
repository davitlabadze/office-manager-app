import { Link } from 'react-router-dom';
import backButtonImage from '../assets/backButton.svg';

const BackButton = () => {
  return (
    <div>
      <Link to={'/'}>
        <button className='float-left mt-10 ml-2 lg:ml-6 lg:p-4 lg:w-12 lg:h-12 lg:rounded-3xl lg:bg-gray-300'>
          <img
            src={backButtonImage}
            alt=''
            className='mt-4 ml-4 lg:mt-0 lg:ml-0'
          />
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
