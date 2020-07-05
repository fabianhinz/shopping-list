import React from 'react'
import Routes from '../Routes'
import { Box, Container } from '@material-ui/core'

const Main = () => (
    <Box paddingTop={3}>
        <Container maxWidth="xl">
            <Routes />
        </Container>
    </Box>
)

export default Main
