import React, { useContext } from 'react';
import { StepContext } from '../../hooks/StepContext';
import { steps } from '../data/steps';

const Aside = () => {
  const { currentStep } = useContext(StepContext);

  const getColor = (step: number) => {
    if (currentStep > step) return 'bg-primaryLight';
    if (currentStep === step) return 'bg-primary';
    return 'bg-[#C9C5E8]';
  };

  return (
    <aside className="fixed left-[50px] right-0 top-[250px]">
      <ul>
        {steps.map((step) => (
          <li key={step.id} className="flex items-center gap-2 mt-4">
            <div
              className={`bg-violet-500 h-[12px] w-[12px] ${getColor(step.id)}`}
            ></div>
            <p className="text-[14px] text-slate-600 ">{step.label}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
