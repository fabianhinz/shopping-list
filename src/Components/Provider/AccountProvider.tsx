import { User } from '../../utils/types'

import React, { useContext, useState, useEffect } from 'react'
import { WithChildren } from '../../utils/componentTypes'

interface UserContext {
    user: User | null
    isUserLoading: boolean
}

const Context = React.createContext<UserContext | null>(null)

export const useUserContext = () => {
    const context = useContext(Context)

    if (!context) throw new Error('UserContext is null')

    return context
}

const AccountProvider = (props: WithChildren) => {
    const [isUserLoading, setIsUserLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(({ results }) => {
                const [user] = results
                setUser(user)
            })
            .finally(() => {
                setIsUserLoading(false)
            })
    }, [])

    return <Context.Provider value={{ user, isUserLoading }}>{props.children}</Context.Provider>
}

export default AccountProvider
