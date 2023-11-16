import { useCallback, useState } from "react";
import ProductItem from "../../../components/frontend/ProductItem";
import { useEffect } from "react";
import productservice from "../../../services/ProductServices"
import { Link } from "react-router-dom";

function NewProduct(props){
    const [products,setProducts]=useState([]);
    const [page, setPage] = useState(1);

    useEffect(function(){
        (async function(){
            await productservice.getProductAll(4)
            .then(function(result){
                setProducts(result.data.products);
            });
        })();
    },[]);

if (products!=null)
{
return (
    <div className="container">
    <div className="product-category">
        <h3 className="text-center text-danger">Sản phẩm mới</h3></div>
        <div className="row">
            {products.map(function (product, index) {
                return <ProductItem product={product} key={index} />
            })}
        </div>
        <div className="text-center my-4">
            <Link to={"san-pham/"+props.slug}className="btn btn-success">Xem thêm</Link>
        </div>

        {/* <div className="text-center my-4" >
            <nav aria-label="Page navigation example">
                <ul className="pagination text-center">
                    <li className="page-item">
                        <button className="page-link" href="#" aria-label="Previous" onClick={() => sub()}>
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">{page - 1}</a></li>
                    <li className="page-item"><a className="page-link" href="#">{page}</a></li>
                    <li className="page-item"><a className="page-link" href="#">{page + 1}</a></li>
                    <li className="page-item">
                        <button className="page-link" href="#" aria-label="Next" onClick={() => add()}>
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div> */}
        
        </div>
    

);
        }
}

export default NewProduct;