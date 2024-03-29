import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Placed",
    "Order confirmed",
    "Shipped",
    "Out for delivery",
    "Delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label)=> 
            <Step>
                <StepLabel sx={{color: "#1955FD", fontSize:"44px"}}>
                    {label}
                </StepLabel>
            </Step>
            )}
        </Stepper>
    </div>
  )
}

export default OrderTracker
