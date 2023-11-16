import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productservice from "../../services/ProductServices";
import ProductItem from "../../components/frontend/ProductItem";

function Search() {
    const { keyword } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getSearchProduct(keyword).then(function (res) {
                setProducts(res.data.products);
            })
        })()
    }, []);
    if (products!=null) {
        return (
            <div className="product_search">
                <div className="container">
                    <div className="title mt-3 mb-3 text-center">
                        <h4>Các sản phẩm liên quan đến "{keyword}"</h4>
                    </div>
                    <div className="row">
                        {products.map(function (product, index) {
                            return <ProductItem product={product} key={index}/>
                        })}
                    </div>

                    <div className="row">
                        <div className="col-12 text-center mb-3">
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    else {
        return (
            <div className="product_search">
                <div className="container">
                    <div className="title mt-3 mb-3 text-center">
                        <h4>Không có sản phẩm liên quan đến "{keyword}"</h4>
                    </div>
                </div>
            </div>

        );
    }
}

export default Search;