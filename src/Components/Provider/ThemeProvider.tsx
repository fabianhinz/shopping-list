import React from 'react'
import { createMuiTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { green, blue } from '@material-ui/core/colors'
import { WithChildren } from '../../utils/componentTypes'

const appTheme = createMuiTheme({
    palette: {
        primary: green,
        secondary: blue,
    },
})

const ThemeProvider = (props: WithChildren) => (
    <>
        <CssBaseline />
        <MuiThemeProvider theme={appTheme}>{props.children}</MuiThemeProvider>
    </>
)

export default ThemeProvider
