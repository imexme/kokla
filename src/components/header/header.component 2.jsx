import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                KÖRSKOLOR
      </Link>
            <Link className='option' to='/shop'>
                HITTA HANDLEDARE

      </Link>
            <Link className='option' to='/teoritest'>
                TEORITEST
      </Link>
            <Link className='option' to='/teoritest'>
                FORUM
      </Link>
        </div>
    </div>
);

export default Header;
