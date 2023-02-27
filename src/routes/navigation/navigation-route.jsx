import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation-route.scss';

const Navigation = () => {
  return (
    // Fragment allows us to create a parent component without rendering one, it's essentially an 'invisible' component.
    <Fragment>
      <div className='navigation'>
        {/* Link creates a URL type link of the element inside the Link tags, to the location specified with to='' */}
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/sign-in'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
