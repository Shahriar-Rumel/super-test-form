import { createContext } from 'react';
import { Steps } from '../shared/enums/steps';

type StepContextType = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const StepContext = createContext<StepContextType>({
  currentStep: Steps.INITIAL_INFO,
  setCurrentStep: () => {}
});
