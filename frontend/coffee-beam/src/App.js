
import './App.css';
import { Steps } from 'antd'
import { LoadingOutlined, CoffeeOutlined, SolutionOutlined, SearchOutlined, CompassOutlined, DollarOutlined} from '@ant-design/icons';
import React, { useEffect, useState } from "react"
import { Checkbox, Col, Row } from 'antd'
import { Explore } from './templates/Explore';
import { Close } from './templates/Close';
import { Info } from './templates/Info';


function App() {

  const [step, setStep] = useState(0)
  const [machine, setMachine] = useState(null)

  useEffect(() => {
    if (machine === null)
      setStep(0)
    else
      setStep(1)
  }, [machine])

  return (
    <div className="App">
      <Col>
        <div className='header'>
          <Steps
            current={step}
            status='process'
            items={[
              {
                title: 'Where',
                // status: 'finish',
                icon: <CompassOutlined />,
              },
              {
                title: 'Pay',
                // status: 'process',
                icon: <DollarOutlined />,
              },
              {
                title: 'Enjoy',
                // status: 'wait',
                icon: <CoffeeOutlined />,
              },
            ]}
          />
        </div>
      
        {/* show the proper window based on the step */}
        <div className='main'>
            {step === 0 && <Explore setMachine={setMachine}/>}
            {step === 1 && <Info setStep={setStep} card={machine}/>}
            {step === 2 && <Close setMachine={setMachine}/>}
        </div>
      </Col>
    </div>
  );
}

export default App;
