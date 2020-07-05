import React from 'react'
import { Grid, Typography, LinearProgress } from '@material-ui/core'
import { useUserContext } from '../Provider/AccountProvider'

const Account = () => {
    const { user, isUserLoading } = useUserContext()

    return (
        <Grid spacing={3} container>
            <Grid item xs={12}>
                <Typography variant="h5">Account</Typography>
            </Grid>
            <Grid item xs={12}>
                {isUserLoading ? (
                    <LinearProgress />
                ) : (
                    <Typography>Welcome back {user?.name.first}</Typography>
                )}
            </Grid>
        </Grid>
    )
}

export default Account
