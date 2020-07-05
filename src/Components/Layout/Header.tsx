import React, { CSSProperties } from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton, Badge } from '@material-ui/core'
import {
    ShoppingBasket as ShoppingBasketIcon,
    AccountCircle as AccountCircleIcon,
} from '@material-ui/icons/'
import { Link } from 'react-router-dom'
import { useShoppingCardContext } from '../Provider/ShoppingCardProvider'

const linkStyles: CSSProperties = { textDecoration: 'unset', color: 'unset' }

const Header = () => {
    const { shoppingCardItems } = useShoppingCardContext()

    return (
        <AppBar position="static">
            <Toolbar>
                <Box flexGrow={1} display="flex" justifyContent="space-between" alignItems="center">
                    <Link style={linkStyles} to="/">
                        <Typography variant="h4">OKShopping</Typography>
                    </Link>
                    <Box display="flex">
                        <Link style={linkStyles} to="/cart">
                            <IconButton color="inherit">
                                <Badge color="secondary" badgeContent={shoppingCardItems.size}>
                                    <ShoppingBasketIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Link style={linkStyles} to="/account">
                            <IconButton color="inherit">
                                <AccountCircleIcon />
                            </IconButton>
                        </Link>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Header
