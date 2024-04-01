const useAsync (){

    useEffect( ()=> {
        setLoading(true)
        const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")
        
        getDocs(collectionRef)
            .then((querySnapshot) => {
            const products = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setProducts(products);
            })
            .catch((error) => {
            setNotification("danger", `No es posible cargar los productos`);
            console.log(error);
            })
            .finally(() => {
            setLoading(false);
            });
    
    }, [categoryId, setNotification])


    return {

    }
}