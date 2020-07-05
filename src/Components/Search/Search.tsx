import React, { useState, useEffect } from 'react'
import { Fab, makeStyles, Drawer, Input } from '@material-ui/core'
import { SearchTwoTone } from '@material-ui/icons'
import { useSearchContext } from '../Provider/SearchProvider'

interface StyleProps {
    open: boolean
}

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: (props: StyleProps) => (props.open ? 65 + 16 : 16),
        right: 16,
        transition: theme.transitions.create('bottom', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    paper: {
        padding: theme.spacing(2),
    },
}))

const Search = () => {
    const [open, setOpen] = useState(false)
    const [formValue, setFormValue] = useState('')
    const classes = useStyles({ open })
    const { onSearchValueChange } = useSearchContext()

    useEffect(() => {
        if (formValue.length === 0) onSearchValueChange(formValue)
    }, [formValue, onSearchValueChange])

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSearchValueChange(formValue)
    }

    return (
        <>
            <Fab onClick={() => setOpen(!open)} className={classes.fab}>
                <SearchTwoTone />
            </Fab>

            <Drawer
                classes={{ paper: classes.paper }}
                variant="persistent"
                open={open}
                anchor="bottom"
                SlideProps={{ mountOnEnter: true, unmountOnExit: true }}>
                <form onSubmit={handleFormSubmit}>
                    <Input
                        value={formValue}
                        onChange={e => setFormValue(e.target.value)}
                        fullWidth
                        name="searchInput"
                        autoFocus
                    />
                </form>
            </Drawer>
        </>
    )
}

export default Search
