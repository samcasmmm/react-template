import React, { useState } from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={toggle ? 'navbar' : 'navbar expand'}>
        <div className='logo'>
          <h3>React.</h3>
        </div>
        <div onClick={handleToggle} className='toggle-icon'>
          {toggle ? <GrMenu /> : <GrClose />}
        </div>
        <ul className='navList'>
          <li>Home</li>
          <li>Serviecs</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className='btns'>
          <button className='btn btn-1'>Login</button>
          <button className='btn btn-2'>SignUp</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
