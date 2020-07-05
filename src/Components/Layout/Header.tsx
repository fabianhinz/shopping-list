import React, { CSSProperties } from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton, Badge, Avatar } from '@material-ui/core'
import {
    ShoppingBasket as ShoppingBasketIcon,
    AccountCircle as AccountCircleIcon,
} from '@material-ui/icons/'
import { Link } from 'react-router-dom'
import { useShoppingCardContext } from '../Provider/ShoppingCardProvider'
import { useUserContext } from '../Provider/AccountProvider'

const linkStyles: CSSProperties = {
    textDecoration: 'unset',
    color: 'unset',
}

const Header = () => {
    const { shoppingCardItems } = useShoppingCardContext()
    const { user, isUserLoading } = useUserContext()

    return (
        <AppBar position="static">
            <Toolbar>
                <Box flexGrow={1} display="flex" justifyContent="space-between" alignItems="center">
                    <Link style={linkStyles} to="/">
                        <Typography variant="h4">OKShopping</Typography>
                    </Link>
                    <Box display="flex" flexBasis={104} justifyContent="space-between">
                        <Link style={linkStyles} to="/cart">
                            <IconButton color="inherit">
                                <Badge color="secondary" badgeContent={shoppingCardItems.size}>
                                    <ShoppingBasketIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Link style={linkStyles} to="/account">
                            {isUserLoading ? (
                                <IconButton color="inherit">
                                    <AccountCircleIcon />
                                </IconButton>
                            ) : (
                                <Avatar
                                    style={{ width: 48, height: 48 }}
                                    src={user?.picture.large}
                                />
                            )}
                        </Link>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Header
