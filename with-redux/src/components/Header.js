import React from 'react';

function Header(props) {
  // console.log(props);

  return (
    <nav className="text-center p-5 text-4xl font-bold bg-white shadow-md text-blue-800">
      <h1>{props.message}</h1>
    </nav>
  );
}

export default Header;
