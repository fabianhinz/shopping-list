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
} from '@material-ui/core'
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons/'

const Items = () => (
    <Grid spacing={3} container>
        <Grid item xs={12}>
            <Typography variant="h5">Items</Typography>
        </Grid>
        {new Array(5).fill(1).map((_, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
                <Card key={index}>
                    <CardHeader
                        title="Cupidatat magna ad"
                        subheader="Duis voluptate quis sint laborum nisi."
                        action={
                            <IconButton>
                                <AddShoppingCartIcon />
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

export default Items
