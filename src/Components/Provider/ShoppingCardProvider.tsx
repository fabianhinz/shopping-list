import React, { useContext, FunctionComponent, useState, useMemo } from 'react'
import { ShoppingCardItem } from '../../utils/types'

interface ShoppingCardContext {
    shoppingCardItems: Set<ShoppingCardItem>
    shoppingCardBalance: number
    addToShoppingCard: (item: ShoppingCardItem) => void
    removeFromShoppingCard: (item: ShoppingCardItem) => void
    isItemInShoppingCard: (item: ShoppingCardItem) => boolean
}

const Context = React.createContext<ShoppingCardContext | null>(null)

export const useShoppingCardContext = () => {
    const context = useContext(Context)

    if (!context) throw new Error('ShoppingCardContext is null')

    return context
}

const ShoppingCardProvider: FunctionComponent = props => {
    const [shoppingCardItems, setShoppingCardItems] = useState<Set<ShoppingCardItem>>(new Set())

    const shoppingCardBalance = useMemo(
        () => Array.from(shoppingCardItems.values()).reduce((acc, item) => (acc += item.price), 0),
        [shoppingCardItems]
    )

    const addToShoppingCard = (item: ShoppingCardItem) => {
        setShoppingCardItems(new Set(shoppingCardItems.add(item)))
    }

    const removeFromShoppingCard = (item: ShoppingCardItem) => {
        shoppingCardItems.delete(item)
        setShoppingCardItems(new Set(shoppingCardItems))
    }

    const isItemInShoppingCard = (item: ShoppingCardItem) => {
        return shoppingCardItems.has(item)
    }

    return (
        <Context.Provider
            value={{
                shoppingCardItems,
                shoppingCardBalance,
                addToShoppingCard,
                removeFromShoppingCard,
                isItemInShoppingCard,
            }}>
            {props.children}
        </Context.Provider>
    )
}
export default ShoppingCardProvider
