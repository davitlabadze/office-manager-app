import { Link } from 'react-router-dom';
import backButtonImage from '../assets/backButton.svg';

const BackButton = () => {
  return (
    <div>
      <Link to={'/'}>
        <button className='float-left px-12 py-6'>
          <img src={backButtonImage} alt='' />
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
