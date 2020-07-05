import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Card,
    CardHeader,
    IconButton,
    CardContent,
    CardActions,
    Button,
    CssBaseline,
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h4">OKShopping</Typography>
        </Toolbar>
    </AppBar>
)

const App = () => (
    <>
        <Header />
        <CssBaseline />
        <Card>
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
                    Anim deserunt nulla consectetur enim ad cillum incididunt ea velit adipisicing
                    aute ad.
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="secondary">details</Button>
            </CardActions>
        </Card>
    </>
)

export default App
