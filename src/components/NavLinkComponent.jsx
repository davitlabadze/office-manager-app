import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const NavLinkComponent = (props) => {
  const { t } = useTranslation();
  const { path, title } = props;
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'items-center px-2 py-2 text-sm font-medium after:content-line '
            : ' items-center px-2 py-2 text-sm font-medium   '
        }
      >
        <h1 className='text-2xl'>{t(title)}</h1>
      </NavLink>
    </li>
  );
};

export default NavLinkComponent;
