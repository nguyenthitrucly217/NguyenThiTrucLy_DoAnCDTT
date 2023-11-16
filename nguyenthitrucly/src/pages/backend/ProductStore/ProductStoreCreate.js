import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productstoreservice from "../../../services/ProductStoreServices";
function ProductStoreCreate() {
        const navigate = useNavigate ();
        const [productstore,setProductStore]=useState([]);
        useEffect(function(){
            (async function(){
                await productstoreservice.getAll().then(function(result){
                    setProductStore(result.data.productstore);
                });
            })();
    
        },[]);
    
    
        const [product_id, setProductId] = useState(0);
        const [price, setPrice] = useState('');
        const [status, setStatus] = useState(1);
        const [quantity,setQuantity]=useState();
    
    async function productstoreStore(event) {
        event.preventDefault();
        //dùng để upload file lên
        var productstore= new FormData();

        productstore.append("product_id",product_id);

        productstore.append("quantity",quantity);

        productstore.append("price",price);
        productstore.append("status",status);

        try {
            await productstoreservice.create(productstore)
                .then(function (res) {
                    alert(res.data.message);
                    navigate("../../admin/productstore", { replace: true });
                });
        } catch (error) {
            console.error(error.response.data);
        }
    }

    

    return (
        <form onSubmit={productstoreStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm Sản Phẩm Kho</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/product" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                                <div className="md-3">
                                    <label >Mã Sản Phẩm</label>
                                    <input
                                        name="product_id" 
                                        value={product_id} 
                                        onChange={(e) => setProductId(e.target.value)} 
                                        className="form-control">
                                    
                                    </input>
                                </div>

                            <div className="mb-3">
                                <label htmlFor="name">Price</label>
                                <textarea 
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-control"></textarea>
                            </div>


                        </div>

                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="name">Số lượng</label>
                                <textarea 
                                    name="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="form-control"></textarea>
                            </div>



                            <div className="md-3">
                                <label >Trạng thái</label>
                                <select 
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)} >

                                    <option value="1"> Xuất bản</option>


                                    <option value="2"> Chưa xuất bản</option>
                                </select>
                            </div>



                        </div>
                    </div>


                </div>

            </div>
        </form>
    );
}

export default ProductStoreCreate;