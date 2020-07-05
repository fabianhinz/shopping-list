export interface ShoppingCardItem {
    uuid: string
    price: number
    name: string
    pictureSrc?: string
}

export interface User {
    name: {
        first: string
        last: string
    }
    email: string
    picture: {
        large: string
    }
}