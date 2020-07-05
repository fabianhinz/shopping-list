import React from 'react'
import Header from './Layout/Header'
import Main from './Layout/Main'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

const App = () => {
    return (
        <>
            <CssBaseline />
            <BrowserRouter>
                <Header />
                <Main />
            </BrowserRouter>
        </>
    )
}

export default App
