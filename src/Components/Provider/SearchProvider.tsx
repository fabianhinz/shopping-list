import React, { useContext, useState } from 'react'
import { WithChildren } from '../../utils/componentTypes'
import { ShoppingCardItem } from '../../utils/types'

interface SearchContext {
    searchValue: string
    onSearchValueChange: (newValue: string) => void
    isSearchValueInItem: (item: ShoppingCardItem) => boolean
}

const Context = React.createContext<SearchContext | null>(null)

export const useSearchContext = () => {
    const context = useContext(Context)

    if (!context) throw new Error('SearchContext is null')

    return context
}

const SearchProvider = (props: WithChildren) => {
    const [searchValue, setSearchValue] = useState('')

    const isSearchValueInItem = (item: ShoppingCardItem) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())

    return (
        <Context.Provider
            value={{ searchValue, onSearchValueChange: setSearchValue, isSearchValueInItem }}>
            {props.children}
        </Context.Provider>
    )
}

export default SearchProvider
