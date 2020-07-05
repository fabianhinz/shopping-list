import React from 'react'
import { useShoppingCardContext } from '../Provider/ShoppingCardProvider'
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Chip,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core'
import { MonetizationOn, Delete } from '@material-ui/icons'

const CartBasket = () => {
    const { shoppingCardItems } = useShoppingCardContext()

    return (
        <List>
            {Array.from(shoppingCardItems.values()).map(item => (
                <ListItem key={item.uuid}>
                    <ListItemAvatar>
                        <Avatar>{item.name.slice(0, 1)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                        secondaryTypographyProps={{ component: 'div' }}
                        secondary={
                            <Chip
                                size="small"
                                variant="outlined"
                                icon={<MonetizationOn />}
                                label={'Price: ' + item.price}
                            />
                        }
                    />
                    <ListItemSecondaryAction>
                        <IconButton>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}

export default CartBasket
