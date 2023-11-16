import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import productsaleservice from "../../../services/ProductSaleServices";
function ProductSaleUpdate() {
    const {id} =useParams('id');
        const navigate = useNavigate ();
        const [productsale,setProductSale]=useState([]);
        useEffect(function(){
            (async function(){
                await productsaleservice.getAll().then(function(result){
                    setProductSale(result.data.productsale);
                });
            })();
    
        },[]);

        useEffect(function(){
            (async function(){
                await productsaleservice.getById(id).then(function(result){
    
                    const tmp=result.data.productsale;
                    // setCategory(tmp);
                    setProductId(tmp.product_id);
                    setPriceSale(tmp.pricesale);
                    setDateBegin(tmp.date_begin);
                    setDateEnd(tmp.date_end);

                    setQuantity(tmp.quantity);
                    setStatus(tmp.status);
                 
                });
            })();
    
        },[]);
    const [product_id, setProductId] = useState('');

    const [pricesale, setPriceSale] = useState('');
    const [date_begin, setDateBegin] = useState('');
    const [date_end, setDateEnd] = useState('');

    const [status, setStatus] = useState(1);
    const [quantity,setQuantity]=useState();


    async function productsaleEdit(event) {
        event.preventDefault();
        //dùng để upload file lên
        var productsale= new FormData();

        productsale.append("product_id",product_id);

        productsale.append("quantity",quantity);
        productsale.append("pricesale",pricesale);
        productsale.append("date_begin",date_begin);
        productsale.append("date_end",date_end);
        productsale.append("status",status);
        await productsaleservice.update(productsale,id).then(function (res) {
            alert(res.data.message)
            navigate('../../admin/productsale', { replace: true });
        });
        
    }
    return (
        <form onSubmit={productsaleEdit} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Cập Nhật Sản Phẩm Khuyến Mãi</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/productsale" className="btn btn-sm btn-info">
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
                                    name="date_begin"
                                    value={date_begin}
                                    onChange={(e) => setDateBegin(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Ngay ket thuc</label>
                                <textarea 
                                    name="date_end"
                                    value={date_end}
                                    onChange={(e) => setDateEnd(e.target.value)}
                                    className="form-control"></textarea>
                            </div>


                        </div>
                        <div className="col-md-6">
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


export default ProductSaleUpdate;