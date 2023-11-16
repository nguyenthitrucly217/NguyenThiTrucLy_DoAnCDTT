    import { useEffect, useState } from "react";
    import { Link, navigate, useNavigate } from "react-router-dom";
    import orderdetailservice from "../../../services/OrderdetailServices";
    function OrderdetailCreate(){
        const navigate =useNavigate();
        const [orderdetails,setOrderdetails]=useState([]);
        useEffect(function(){
            (async function(){
                await orderdetailservice.getAll().then(function(result){
                    setOrderdetails(result.data.orderdetails);
                });
            })();
    
        },[]);
        const [order_id, setOrderId] = useState();
        const [product_id, setProductId] = useState();
        const [price, setPrice] = useState();
        const [discount, setDiscount] = useState();
        
        const [quality, setQuality] = useState();
        const [amount, setAmount] = useState();
    
        async function orderdetailStore(event) {
            event.preventDefault();
            // const image=document.querySelector("#image")
            //dung upload file len
            var orderdetail= new FormData();
            orderdetail.append("order_id",order_id)
            orderdetail.append("product_id",product_id);
            orderdetail.append("price", price);
            orderdetail.append("discount", discount);
            orderdetail.append("quality",quality);
            orderdetail.append("amount",amount);
            // order.append("image",image.files[0]);
    
    
            await orderdetailservice.create(orderdetail)
            .then(function (res) {
                alert(res.data.message)
               navigate("../../admin/orderdetail",{replace:true});
            });
    }

        return (
            <form onSubmit={orderdetailStore} method="post">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <strong className="text-danger">Thêm chi tiet đơn hàng</strong>
                            </div>
                            <div className="col-md-6 text-end">
                                <button type="submit" className="btn btn-sm btn-success">Lưu</button>
                                <Link to="/admin/orderdetail" className="btn btn-sm btn-info">Về danh sách</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                                    <label htmlFor="name">mã đơn hàng</label>
                                    <input type="number" name="name" value={order_id} onChange={(e) => setOrderId(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name">mã sản phẩm</label>
                                    <input type="number" name="name" value={product_id} onChange={(e) => setProductId(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name">Giá</label>
                                    <textarea type="number" name="name" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control"></textarea>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="name">Giam gia</label>
                                    <textarea type="number" name="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} className="form-control"></textarea>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="name">Số lượng</label>
                                    <textarea type="number" name="name" value={quality} onChange={(e) => setQuality(e.target.value)} className="form-control"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name">tổng cộng</label>
                                    <textarea type="number" name="name" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control"></textarea>
                                </div>

                            </div>
    
                        </div>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </form>
        );
    }
    
   export default OrderdetailCreate;   