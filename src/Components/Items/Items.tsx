import React from 'react'
import {
    Grid,
    Typography,
    Card,
    CardHeader,
    IconButton,
    CardContent,
    CardActions,
    Button,
    Avatar,
} from '@material-ui/core'
import {
    AddShoppingCart as AddShoppingCartIcon,
    RemoveShoppingCart as RemoveShoppingCartIcon,
} from '@material-ui/icons/'
import { useShoppingCardContext } from '../Provider/ShoppingCardProvider'
import { ITEM_IN_STORE } from '../../utils/constants'
import { ShoppingCardItem } from '../../utils/types'
import { useSearchContext } from '../Provider/SearchProvider'

const Items = () => {
    const {
        addToShoppingCard,
        removeFromShoppingCard,
        isItemInShoppingCard,
    } = useShoppingCardContext()
    const { isSearchValueInItem } = useSearchContext()

    const handleItemClick = (item: ShoppingCardItem) => () => {
        if (isItemInShoppingCard(item)) removeFromShoppingCard(item)
        else addToShoppingCard(item)
    }

    return (
        <Grid spacing={3} container>
            <Grid item xs={12}>
                <Typography variant="h5">Items</Typography>
            </Grid>
            {ITEM_IN_STORE.filter(isSearchValueInItem).map(item => (
                <Grid item xs={12} md={6} lg={4} key={item.uuid}>
                    <Card>
                        <CardHeader
                            title={item.name}
                            avatar={<Avatar src={item.pictureSrc} />}
                            subheader="Duis voluptate quis sint laborum nisi."
                            action={
                                <IconButton onClick={handleItemClick(item)}>
                                    {isItemInShoppingCard(item) ? (
                                        <RemoveShoppingCartIcon />
                                    ) : (
                                        <AddShoppingCartIcon />
                                    )}
                                </IconButton>
                            }
                        />

                        <CardContent>
                            <Typography variant="subtitle1">
                                Anim deserunt nulla consectetur enim ad cillum incididunt ea velit
                                adipisicing aute ad.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="secondary">details</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Items
