import { useContext } from 'react';
import { StepContext } from '../../hooks/StepContext';
import { steps } from '../data/steps';

const Header = () => {
  const { currentStep } = useContext(StepContext);
  return (
    <header className="fixed left-0 right-0 top-[100px] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold text-violet-900">
        Super Test Form
      </h1>
      <p className="text-xl text-slate-600 mt-4">
        {steps.filter((step) => step.id === currentStep)[0].label}
      </p>
    </header>
  );
};

export default Header;
