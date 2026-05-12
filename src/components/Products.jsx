import { useEffect } from "react";
import { useState } from "react";

function Products() {

    //ARRAY vuoto dobve mettere prodotti
    const [products, setProducts] = useState([]);
    
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
        //then aspetta il server che risponde e manda poi la risposta formato json
        .then(response => response.json())
        .then(data => { // convertiti i dati li mettiamo nella variabile di stato
            setProducts(data);
        });
    }, []);

    return <>
        <div>
            <h1>Nostri prodotti</h1>
        </div>

        <div>
            {products.map((product) => (
                <div key={product.id} className="productCard">
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} width= "150" />
                    <p>prezzo : {product.price}</p>
                </div>
            ))}
        </div>


    </>
}
export default Products;