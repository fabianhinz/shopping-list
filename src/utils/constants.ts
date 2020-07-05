import { ShoppingCardItem } from "./types";
import heineken from "../static/heineken.jpg"
import bauknecht from "../static/bauknecht.jpg"
import ipad from "../static/ipad.jpg"

export const ITEM_IN_STORE: ShoppingCardItem[] = [{
    uuid: '1',
    price: 20.82,
    name: 'Heineken Lager Bier Dose',
    pictureSrc: heineken
},
{
    uuid: '2',
    price: 338,
    name: 'Bauknecht AF 7F4',
    pictureSrc: bauknecht
},
{
    uuid: '3',
    price: 345.51,
    name: 'Apple iPad',
    pictureSrc: ipad
},
{
    uuid: '4',
    price: 1.2,
    name: '1l Milch',
},
{
    uuid: '5',
    price: 0.75,
    name: 'Butter',
},
{
    uuid: '6',
    price: 3.99,
    name: 'Cookies',
},
]
