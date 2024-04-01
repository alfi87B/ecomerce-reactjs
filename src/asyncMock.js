const products = [
    {
        id: '001',
        name: "Remera Japon",
        price: 20000,
        description: "Remera mangas cortas 100% Algodon",
        img: "../../Asset/foto_productos/Cigueña1.jpg",
        category: "Remeras",
        stock: 43,
    },
    {
        id: '002',
        name: "Remera Dragon",
        price: 20000,
        description: "Remera mangas cortas 100% Algodon",
        img: "../../Asset/foto_productos/Dragon1.jpg",
        category: "Remeras",
        stock: 15,
    },
    {
        id: '003',
        name: "Gorra Chill",
        price: 18000,
        description: "Gorra Trucker negra",
        img: "../../Asset/foto_productos/Gorra1.jpeg",
        category: "Gorras",
        stock: 21,
    },
    {
        id: '004',
        name: "Gorra Zeppelin",
        price: 18000,
        description: "Gorra Trucker negra con aplique",
        img: "../../Asset/foto_productos/Gorra2.jpeg",
        category: "Gorras",
        stock: 30,
    },

];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products);
        }, 1000);
    });
};

    export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

    export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
        }, 1000);
    });
};
