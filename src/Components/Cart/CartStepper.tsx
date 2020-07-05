import React from 'react'
import { Stepper, Step, StepButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

interface Props {
    activeStep: number
}

const CartStepper = (props: Props) => {
    const history = useHistory()

    return (
        <Stepper nonLinear activeStep={props.activeStep}>
            <Step>
                <StepButton onClick={() => history.push('/cart/0')}>Basket</StepButton>
            </Step>
            <Step>
                <StepButton onClick={() => history.push('/cart/1')}>Checkout</StepButton>
            </Step>
            <Step>
                <StepButton onClick={() => history.push('/cart/2')}> Delivery</StepButton>
            </Step>
        </Stepper>
    )
}

export default CartStepper
