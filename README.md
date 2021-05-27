# react-stepper-tis

>

[![NPM](https://img.shields.io/npm/v/react-stepper-tis.svg)](https://www.npmjs.com/package/react-stepper-tis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![react-stepper-tis](https://user-images.githubusercontent.com/76048512/119797370-696acc00-beef-11eb-8a4b-65896df69e5d.gif)

## Install

```bash
npm i react-stepper-tis
```

or

```bash
yarn add react-stepper-tis
```

## Usage

```jsx
import React, { useState } from 'react'

import { Stepper } from 'react-stepper-tis'
import 'react-stepper-tis/dist/index.css'

const App = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Stepper
      className='Stepper'
      steps={['Select Product', 'Fill Information', 'Purchase']}
      activeStepIndex={activeStep}
      onStepClick={(index) => setActiveStep(index)}
      darkMode={false}
    />
  )
}

export default App
```

## License

MIT © [boof-tech](https://github.com/boof-tech)
