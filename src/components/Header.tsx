import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <FaGoogle size={40} color="#4285F4" />
        <span className="gmail">Gmail</span>
      </div>
      <div className="button">
        <button className="create-account">Criar uma conta</button>
      </div>
    </div>
  );
};

export default Header;
