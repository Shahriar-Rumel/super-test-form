import { useContext } from 'react';
import { StepContext } from '../../hooks/StepContext';
import { steps } from '../data/steps';

const Header = () => {
  const { currentStep } = useContext(StepContext);
  return (
    <header className="flex pt-[50px] flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold tracking-tight text-primaryDark">
        Super Test Form
      </h1>
      <p className="text-xl text-primaryLight tracking-tight mt-4">
        {steps.filter((step) => step.id === currentStep)[0].label}
      </p>
    </header>
  );
};

export default Header;
