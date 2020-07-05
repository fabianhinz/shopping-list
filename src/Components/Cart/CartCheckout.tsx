import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import { AccountBalance, Home } from '@material-ui/icons'
import { useShoppingCardContext } from '../Provider/ShoppingCardProvider'

const CartCheckout = () => {
    const { shoppingCardBalance } = useShoppingCardContext()

    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AccountBalance />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={'Total due ' + shoppingCardBalance} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Home />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Adress" secondary="Ritterstraße 5 / 76133 Karlsruhe" />
            </ListItem>
        </List>
    )
}

export default CartCheckout
