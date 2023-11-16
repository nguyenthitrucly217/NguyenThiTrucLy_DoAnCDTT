import { useState } from "react";
import ProductItem from "../../../components/frontend/ProductItem";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import brandservice from "../../../services/BrandServices";
import productservice from "../../../services/ProductServices";

function ProductBrand(){
    const {slug} = useParams();//hoa-tulip
    const [limit, setLimit] = useState(4);
    const [title, setTitle] = useState("");
    const [products, setProducts] = useState([]);
    document.title=title;
    useEffect(function () {
        (async function () {
            try {
                const result_brand = await brandservice.getById(slug);
                const braid = result_brand.data.brand.id;
                setTitle(result_brand.data.brand.name);
                const result = await productservice.getProductByBrandId(limit, braid);
                setProducts(result.data.products);
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, [limit,slug]);


    return (
        <section className="maincontent">
        <div className="container my-4">
            <div className="row">
                <div className="col-md-3">
                    <ListBrand/>
                </div>
                <div className="col-md-9">
                    <h3 className="text-center text-danger">{title}</h3>
                    <div className="row">
                        {products.map(function (product, index) {
                            return <ProductItem product={product} key={index} />
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center my-4">
                            <button className="btn btn-success" onClick={() => setLimit(limit + 4)}>Xem Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}
export default ProductBrand;