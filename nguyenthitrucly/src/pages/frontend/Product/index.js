import ProductItem from "../../../components/frontend/ProductItem"
import { useState } from "react";
import productservice from "../../../services/ProductServices";
import { useEffect } from "react";
function Product() {
    const [products,setProducts]=useState([]);
    const [limit,setLimit]=useState(8);
    useEffect(function(){
        (async function(){
            await productservice.getProductAll(limit).then(function(result){
                setProducts(result.data.products);
            });
        })();

    },[limit]);

    return (
        <section className="maincontent my-3">
            <div className="product-category">
                <h3 className="text-center text-danger">TẤT CẢ SẢN PHẨM</h3>
                <div className="row">
                    {products.map(function (product, index) {
                        return <ProductItem product={product} key={index} />
                    })}
                </div>
                <div className="row">
                    <div className="col-12 text-center my-4">
                    <button className="btn btn-success" onClick={()=>setLimit(limit+8)}>Xem Thêm</button>
                    </div>
                </div>
            </div>
            

            {/* <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav> */}

        </section>
    );
}

export default Product;