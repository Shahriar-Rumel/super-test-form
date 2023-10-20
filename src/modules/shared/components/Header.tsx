import React, { useContext } from 'react';
import { HeaderContext } from '../../hooks/HeaderContext';

const Header = () => {
  const { page } = useContext(HeaderContext);
  return (
    <header className="fixed left-0 right-0 top-[100px] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold text-violet-900">
        Super Test Form
      </h1>
      <p className="text-xl text-slate-600 mt-4">{page}</p>
    </header>
  );
};

export default Header;
