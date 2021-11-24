import { Database, Coffee } from 'react-feather';

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
            }
        ]
    },
    {
        key: "kardex",
        text: "layout.menu.kardex.title",
        description: "layout.menu.kardex.description",
        children: [
            {
                key: "/kardex/invoices",
                text: "layout.menu.kardex.invoices",
                info: "",
                type: "link",
                icon: <Coffee/>,
                children: []
            }
        ]
    }
]

export default menus;