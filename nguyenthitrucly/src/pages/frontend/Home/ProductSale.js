import { useState } from "react";
import ProductItem from "../../../components/frontend/ProductItem";
import { useEffect } from "react";
import productservice from "../../../services/ProductServices"
import { Link } from "react-router-dom";

function ProductSale(props){
    const [products,setProducts]=useState([]);
    const [limit,setLimit]=useState(4);
    useEffect(function () {
        (async function () {
            await productservice.getProductSale(limit,'sale')
                .then(function (result) {
                    setProducts(result.data.products);
                });
        })();
    }, [limit]);
    if (products != null) {
        return (
            <div className="container">
            <div className="product-category">
                <h3 className="text-center text-danger">Sản phẩm khuyến mãi</h3></div>
                <div className="row">
                    {products.map(function (product, index) {
                        return <ProductItem product={product} key={index} />
                    })}
                </div>
                <div className="text-center my-4">
                    <button onClick={()=>setLimit(limit + 4)}   className="btn btn-success">Xem thêm</button>
                </div>
            </div>
        
        
        );
    }
}
export default ProductSale;
