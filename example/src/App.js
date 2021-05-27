import React, { useState } from 'react';

import { Stepper } from 'react-stepper-tis';
import 'react-stepper-tis/dist/index.css';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className='App'>
      <div className='Title'>
        Stepper Tis
      </div>
      <Stepper
        className='Stepper'
        steps={
          ['Select Product', 'Fill Information', 'Purchase']
        }
        activeStepIndex={activeStep}
        onStepClick={index => setActiveStep(index)}
        darkMode={false}
      />
    </div>
  );
};

export default App;