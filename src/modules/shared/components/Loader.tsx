import React from 'react';
import { Icon } from '@iconify/react';

const Loader: React.FC = () => {
  return (
    <section className="fixed top-0 left-0 bg-slate-100 right-0 bottom-0 flex items-center justify-center">
      <Icon
        icon="svg-spinners:pulse-2"
        className="text-orange-500 text-[60px]"
      />
    </section>
  );
};

export default Loader;
