import React from 'react'
import { Box } from '@material-ui/core'
import { amber } from '@material-ui/core/colors'
import { ThumbUp } from '@material-ui/icons'

const CartDelivery = () => (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="5rem"
        color={amber.A700}>
        <ThumbUp fontSize="inherit" color="inherit" />
    </Box>
)

export default CartDelivery
