import { Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react'

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        "Address",
        "Payment Method",
        "Order Summary",
        "Payment",
    ];

  return (
    <div className='py-14 min-h-[calc(100vh-100px)]'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
                <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </div>
  );
}

export default Checkout;