import React from 'react'
import Header from './Layout/Header'
import Main from './Layout/Main'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { WithChildren } from '../utils/componentTypes'
import ShoppingCardProvider from './Provider/ShoppingCardProvider'
import ThemeProvider from './Provider/ThemeProvider'
import AccountProvider from './Provider/AccountProvider'
import Search from './Search/Search'
import SearchProvider from './Provider/SearchProvider'

const AppProvider = (props: WithChildren) => (
    <ThemeProvider>
        <AccountProvider>
            <ShoppingCardProvider>
                <SearchProvider>{props.children}</SearchProvider>
            </ShoppingCardProvider>
        </AccountProvider>
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
                    <Search />
                </AppProvider>
            </BrowserRouter>
        </>
    )
}

export default App
