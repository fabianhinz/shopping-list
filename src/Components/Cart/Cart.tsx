import React from 'react'
import { Grid, Typography, Card, CardContent } from '@material-ui/core'
import CartStepper from './CartStepper'
import { useParams } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'

import CartBasket from './CartBasket'
import CartCheckout from './CartCheckout'
import CartDelivery from './CartDelivery'

const Cart = () => {
    const params = useParams<{ activeStep: string }>()
    const activeStep = Number(params.activeStep) || 0

    return (
        <Grid spacing={3} container>
            <Grid item xs={12}>
                <Typography variant="h5">Cart</Typography>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CartStepper activeStep={Number(activeStep)} />
                    <CardContent>
                        <SwipeableViews animateHeight disabled index={activeStep}>
                            <CartBasket />
                            <CartCheckout />
                            <CartDelivery />
                        </SwipeableViews>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Cart
