import React, { useState } from 'react'
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
    Fade,
    Divider,
} from '@material-ui/core'
import { MonetizationOn, Delete } from '@material-ui/icons'
import { ShoppingCardItem } from '../../utils/types'
import { TransitionProps } from '@material-ui/core/transitions/transition'

interface CartBasketListItemProps {
    item: ShoppingCardItem
    onDelete: (item: ShoppingCardItem) => void
    divider: boolean
}

const transitionProps: Pick<TransitionProps, 'timeout'> = {
    timeout: {
        appear: 0,
        exit: 195,
    },
}

const CartBasketListItem = (props: CartBasketListItemProps) => {
    const [transitionIn, setTransitionIn] = useState(true)

    return (
        <Fade
            in={transitionIn}
            timeout={transitionProps.timeout}
            onExited={() => props.onDelete(props.item)}>
            <div>
                <ListItem key={props.item.uuid}>
                    <ListItemAvatar>
                        <Avatar src={props.item.pictureSrc}>{props.item.name.slice(0, 1)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.item.name}
                        secondaryTypographyProps={{ component: 'div' }}
                        secondary={
                            <Chip
                                size="small"
                                variant="outlined"
                                icon={<MonetizationOn />}
                                label={'Price: ' + props.item.price}
                            />
                        }
                    />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => setTransitionIn(false)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                {props.divider && <Divider />}
            </div>
        </Fade>
    )
}

const CartBasket = () => {
    const { shoppingCardItems, removeFromShoppingCard } = useShoppingCardContext()

    return (
        <List>
            {Array.from(shoppingCardItems.values()).map((item, index) => (
                <CartBasketListItem
                    divider={index + 1 !== shoppingCardItems.size}
                    key={item.uuid}
                    item={item}
                    onDelete={removeFromShoppingCard}
                />
            ))}
        </List>
    )
}

export default CartBasket
