import { useEffect } from "react";
import { useState } from "react";

function Products() {

    //ARRAY vuoto dobve mettere prodotti
    const [Products, setProducts] = useState([]);
    
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
        //then aspetta il server che risponde e manda poi la risposta formato json
        .then(response => response.json())
        .then(data => { // convertiti i dati li mettiamo nella variabile di stato
            setProducts(data);
        });
    }, []);

    return <>


    </>
}
export default Products;