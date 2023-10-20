import { Suspense, useState } from 'react';
import './App.css';
import Router from './routes';

import { Steps } from './modules/shared/enums/steps';
import { StepContext } from './modules/hooks/StepContext';

function App() {
  const [currentStep, setCurrentStep] = useState(Steps.INITIAL_INFO);

  const stepContextValue = {
    currentStep,
    setCurrentStep
  };

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <StepContext.Provider value={stepContextValue}>
        <Router />
      </StepContext.Provider>
    </Suspense>
  );
}

export default App;
