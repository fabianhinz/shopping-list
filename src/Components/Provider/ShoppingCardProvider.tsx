import React, { useContext, FunctionComponent } from 'react'
import { ShoppingCardItem } from '../../utils/types'

interface ShoppingCardContext {
    shoppingCardItems: Set<ShoppingCardItem>
    shoppingCardBalance: number
}

const Context = React.createContext<ShoppingCardContext | null>(null)

export const useShoppingCardContext = () => {
    const context = useContext(Context)

    if (!context) throw new Error('ShoppingCardContext is Null')

    return context
}

const shoppingCardItems = new Set<ShoppingCardItem>([
    {
        uuid: '1',
        price: 5,
        name: 'Eu esse duis ',
    },
    {
        uuid: '2',
        price: 10,
        name: 'Nostrud ',
    },
    {
        uuid: '3',
        price: 15,
        name: 'In mollit culpa ',
    },
])

const ShoppingCardProvider: FunctionComponent = props => (
    <Context.Provider value={{ shoppingCardItems, shoppingCardBalance: 30 }}>
        {props.children}
    </Context.Provider>
)

export default ShoppingCardProvider
