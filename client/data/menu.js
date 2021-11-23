import { Users, Database, Layers, Clipboard, Coffee, List } from 'react-feather';

const menus =  [
    {
        key: "auth",
        text: "layout.menu.auth.title",
        description: "layout.menu.auth.description",
        children: [
            {
                key: "/auth/people",
                text: "layout.menu.auth.people",
                info: "",
                type: "link",
                icon: <Database/>,
                children: []
            },
            {
                key: "/auth/users",
                text: "layout.menu.auth.users",
                info: "",
                type: "link",
                icon: <Users/>,
                children: []
            },
            {
                key: "/auth/roles",
                text: "layout.menu.auth.roles",
                info: "",
                type: "link",
                icon: <Layers/>,
                children: []
            }
        ]
    },
    {
        key: "restaurant",
        text: "layout.menu.restaurant.title",
        description: "layout.menu.restaurant.description",
        children: [
            {
                key: "/restaurant/products",
                text: "layout.menu.restaurant.products",
                info: "",
                type: "link",
                icon: <Coffee/>,
                children: []
            },
            {
                key: "/restaurant/boards",
                text: "layout.menu.restaurant.boards",
                info: "",
                type: "link",
                icon: <List/>,
                children: []
            },
            {
                key: "/restaurant/tickets",
                text: "layout.menu.restaurant.tickets",
                info: "",
                type: "link",
                icon: <Clipboard/>,
                children: []
            }
        ]
    }
]

export default menus;