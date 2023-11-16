import { useEffect } from "react";
import { useState } from "react";
import categoryservice from "../../../services/CategoryServices"
import ProductItem from "../../../components/frontend/ProductItem"
import { useParams } from "react-router-dom";
import productservice from "../../../services/ProductServices";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";

function ProductCategory() {
    const { slug } = useParams();//hoa-tulip
    const [limit, setLimit] = useState(4);
    const [title, setTitle] = useState("");
    const [products, setProducts] = useState([]);
    document.title = title;
    useEffect(function () {
        (async function () {
            try {
                const infocategory = await categoryservice.getBySlug(slug);
                const catid = infocategory.data.category.id;//id của  mẫu tin có slug=hoa-tulip
                setTitle(infocategory.data.category.name);
                const infoproduct = await productservice.getProductByCategoryId(limit, catid);
                setProducts(infoproduct.data.products);
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
                        <ListCategory/>
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
    );
}
export default ProductCategory;