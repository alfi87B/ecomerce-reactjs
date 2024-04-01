export const createProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapter = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        description: data.description,
        stock: data.stock,
    }
}

return productAdapter