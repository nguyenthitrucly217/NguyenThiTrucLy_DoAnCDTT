import { Link, useNavigate, useParams } from "react-router-dom";
import orderdetailservice from "../../../services/OrderdetailServices";
import { useEffect, useState } from "react";

function OrderdetailUpdate() {
    const { id } = useParams('id');
    const navigate = useNavigate();
    // const [orderdetail,setOrderdetail]=useState([]);
    const [orderdetails, setOrderdetails] = useState([]);
    useEffect(function () {
        (async function () {
            await orderdetailservice.getAll().then(function (result) {
                setOrderdetails(result.data.orderdetails);
            });
        })();

    }, []);

    useEffect(function () {
        (async function () {
            await orderdetailservice.getById(id).then(function (result) {

                const tmp = result.data.orderdetail;
                // setorderdetail(tmp);
                setOrderId(tmp.order_id);
                setProductId(tmp.product_id);
                setPrice(tmp.price);
                setDiscount(tmp.discount);

                setQuality(tmp.quality);
                setAmount(tmp.amount);
            });
        })();

    }, []);


    const [order_id, setOrderId] = useState();
    const [product_id, setProductId] = useState();
    const [price, setPrice] = useState();
    const [discount, setDiscount] = useState();

    const [quality, setQuality] = useState();
    const [amount, setAmount] = useState();

    async function orderdetailEdit(event) {
        event.preventDefault();
        // const image=document.querySelector("#image")
        //dung upload file len
        var orderdetail = new FormData();
        orderdetail.append("order_id", order_id)
        orderdetail.append("product_id", product_id);
        orderdetail.append(" price", price);
        orderdetail.append(" discount", discount);

        orderdetail.append("quality", quality);
        orderdetail.append("amount", amount);
        // orderdetail.append("image",image.files[0]);

        await orderdetailservice.update(orderdetail, id).then(function (res) {
            alert(res.data.message)
            navigate('../../admin/orderdetail', { replace: true });
        });
    }
    return (
        <form onSubmit={orderdetailEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Thêm chi tiet đơn hàng</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success">Lưu</button>
                            <Link to="/admin/order" className="btn btn-sm btn-info">Về danh sách</Link>
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

export default OrderdetailUpdate;