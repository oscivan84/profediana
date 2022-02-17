import { Database, Coffee, List, FolderPlus, Edit2} from 'react-feather';

const menus = (role) => {
    if (role == 3) {
        //admin
        return [{
            key: "",
            text: "",
            description: "",
            children: [{
                key: "/reportes",
                text: "Reportes",
                icon: <List />,
                type: "link",
                info: "",
                children: []
            }]
        }];
    } else if (role == 2) {
        //profesor
        return [
            {
                key: "/kardex/invoices",
                text: "Ventas",
                info: "",
                type: "link",
                icon: <FolderPlus />,
                children: []
            },
            {
                key: "/paymentMethod",
                text: "Tipos de Pago",
                info: "",
                type: "link",
                icon: <Edit2 />,
                children: []
            },
            {
                key: "/kardex/createProduct",
                text: "Crear Articulo",
                info: "",
                type: "link",
                icon: <FolderPlus />,
                children: []
            },
            
            
        {
            key: "/class/create",
            text: "Crear curso",
            info: "",
            type: "link",
            icon: <FolderPlus />,
            children: []
        },
        {
            key: "/notas",
            text: "Notas",
            info: "",
            type: "link",
            icon: <List />,
            children: []
        },
        {
            key: "/graphic-stores",
            text: "Graficas",
            info: "",
            type: "link",
            icon: <FolderPlus />,
            children: []
        },
        {
            key: "/users/create",
            text: "Crear Usuarios",
            info: "",
            type: "link",
            icon: <FolderPlus />,
            children: []
        },
    ];
    } else if (role == 1) {
        //vendedor
        return [{
            key: "/kardex/invoices",
            text: "layout.menu.kardex.invoices",
            info: "",
            type: "link",
            icon: <Coffee />,
            children: []
        }];
    }
    //no auth
    else return [{
        key: "auth",
        text: "No ha ingresado",
        description: "",
        children: [
            {
                key: "/kardex/invoices",
                text: "Iniciar sesión",
                info: "",
                type: "link",
                icon: <Coffee />,
                children: []
            },
        ]
    }];
}

export default menus;