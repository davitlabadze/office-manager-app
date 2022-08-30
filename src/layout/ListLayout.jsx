import { Outlet } from 'react-router-dom';
import BackButton from '../components/BackButton';

const ListLayout = () => {
  return (
    <div>
      <BackButton />

      <div className='container max-w-screen-lg mx-auto text-center'>
        <Outlet />
      </div>
    </div>
  );
};

export default ListLayout;
