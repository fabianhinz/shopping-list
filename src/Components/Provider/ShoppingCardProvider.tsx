import React, { useContext, FunctionComponent } from 'react'
import { ShoppingCardItem } from '../../utils/types'

interface ShoppingCardContext {
    shoppingCardItems: Set<ShoppingCardItem>
}

const Context = React.createContext<ShoppingCardContext | null>(null)

export const useShoppingCardContext = () => {
    const context = useContext(Context)

    if (!context) throw new Error('ShoppingCardContext is Null')

    return context
}

const shoppingCardItems = new Set<ShoppingCardItem>([
    {
        uuid: 'asdf',
        price: 1,
        name:
            'Eu esse duis mollit veniam reprehenderit laboris ad officia nostrud occaecat ea exercitation.',
        quantity: 1,
    },
])

const ShoppingCardProvider: FunctionComponent = props => (
    <Context.Provider value={{ shoppingCardItems }}>{props.children}</Context.Provider>
)

export default ShoppingCardProvider
