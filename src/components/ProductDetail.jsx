import { useParams } from "react-router";
import { useState, useEffect } from "react";

function ProductDetail() {

    // prendiamo id come sritto in APP
    const { id } = useParams();

    // Utilizziamo null perche' all'inizio non abbiamo dati, e' diverso da un array vuoto
    const [productData, setProductData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    setIsLoading(true);

        // fetch dove mettere id api
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
        setProductData(data);
        setIsLoading(false);            
        });
    }, [id]); //funzione si ripete quando id nel url cambia

    return <>
    {isLoading ? (
                <p>Caricamento in corso...</p>
            ) : (
                productData && (
        <div className="productInfo">
            <h1>{productData.title}</h1>
            <img src={productData.image} alt={productData.title} width="300" />
            <p className="productCategory"><strong>Categoria:</strong> {productData.category}</p>
            <p className="productDescription">{productData.description}</p>
            <p className="productPrice"><strong>Prezzo:</strong> {productData.price} &euro;</p>
            </div>
            )
            )}
    </>
    
}

export default ProductDetail;