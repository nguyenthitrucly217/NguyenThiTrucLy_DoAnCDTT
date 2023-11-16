import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productsaleservice from "../../../services/ProductSaleServices";
function ProductSaleCreate() {
        const navigate = useNavigate ();
        const [productsale,setProductSale]=useState([]);
        useEffect(function(){
            (async function(){
                await productsaleservice.getAll().then(function(result){
                    setProductSale(result.data.productsales);
                });
            })();
    
        },[]);
    
    
        const [product_id, setProductId] = useState(0);
        const [date_begin, setDateBegin] = useState('');
        const [date_end, setDateEnd] = useState('');


        const [pricesale, setPriceSale] = useState('');
        const [status, setStatus] = useState(1);
        const [quantity,setQuantity]=useState();
    
    async function productsaleStore(event) {
        event.preventDefault();
        // const image =document.querySelector("#image");
        //dùng để upload file lên
        var productsale= new FormData();

        productsale.append("product_id",product_id);

        productsale.append("quantity",quantity);
        productsale.append("pricesale",pricesale);
        productsale.append("date_begin",date_begin);
        productsale.append("date_end",date_end);
        productsale.append("status",status);

        try {
            await productsaleservice.create(productsale)
                .then(function (res) {
                    alert(res.data.message);
                    navigate("../../admin/productsale", { replace: true });
                });
        } catch (error) {
            console.error(error.response.data);
        }
    }

    

    return (
        <form onSubmit={productsaleStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm Sản Phẩm Khuyến Mãi</strong>

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
                        <div className="col-md-6">
                            <div className="md-3">
                                    <label >Mã San Pham Sale</label>
                                    <input
                                    type="number"
                                        name="product_id" 
                                        value={product_id} 
                                        onChange={(e) => setProductId(e.target.value)} 
                                        className="form-control">

                                    
                                    </input>
                                </div>

                            <div className="mb-3">
                                <label htmlFor="name">PriceSale</label>
                                <textarea 
                                    name="pricesale"
                                    value={pricesale}
                                    onChange={(e) => setPriceSale(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Ngay bat dau</label>
                                <textarea 
                                type="Datepicker"
                                    name="date_begin"
                                    value={date_begin}
                                    onChange={(e) => setDateBegin(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="name">Ngay ket thuc</label>


                                <textarea
                                     

                                    name="date_end"
                                    value={date_end}
                                    onChange={(e) => setDateEnd(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                     
                      
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="name">Số lượng</label>
                                <input
                                 type="number"
                                    name="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="form-control"></input>
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

            </div>
        </form>
    );
}

export default ProductSaleCreate;