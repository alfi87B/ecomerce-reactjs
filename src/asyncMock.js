const products = [
    {
        id: 'R001',
        name: "Remera Japon",
        price: 20000,
        description: "Remera mangas cortas 100% Algodon",
        img: "../../Asset/Cigueña1.jpg",
        category: "Remeras",
        stock: 10,
    },
    {
        id: 'R002',
        name: "Remera Dragon",
        price: 20000,
        description: "Remera mangas cortas 100% Algodon",
        img: "../../Asset/Dragon1.jpg",
        category: "Remeras",
        stock: 15,
    },
    {
        id: 'G001',
        name: "Gorra Chill",
        price: 18000,
        description: "Gorra Trucker negra",
        img: "../../Asset/Gorra1.jpeg",
        category: "Gorras",
        stock: 9,
    },
    {
        id: 'C002',
        name: "Gorra Zeppelin",
        price: 18000,
        description: "Gorra Trucker negra con aplique",
        img: "../../Asset/Gorra2.jpeg",
        category: "Gorras",
        stock: 7,
    },

];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

export const getProductsById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find((prod) => prod.id === productoId));
        }, 1000);
    });
};