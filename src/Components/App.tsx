import React from 'react'
import Header from './Layout/Header'
import Main from './Layout/Main'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { WithChildren } from '../utils/componentTypes'
import ShoppingCardProvider from './Provider/ShoppingCardProvider'
import ThemeProvider from './Provider/ThemeProvider'

const AppProvider = (props: WithChildren) => (
    <ThemeProvider>
        <ShoppingCardProvider>{props.children}</ShoppingCardProvider>
    </ThemeProvider>
)

const App = () => {
    return (
        <>
            <CssBaseline />
            <BrowserRouter>
                <AppProvider>
                    <Header />
                    <Main />
                </AppProvider>
            </BrowserRouter>
        </>
    )
}

export default App
