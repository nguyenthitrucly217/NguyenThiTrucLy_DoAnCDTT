import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import orderdetailservice from "../../../services/OrderdetailServices";
import { urlImage } from "../../../config";


function OrderdetailShow() {
    const navigate=useNavigate();
    const { id } = useParams("id");
    const [orderdetail, setOrderdetail] = useState([]);
    useEffect(function () {
        (async function () {
            await orderdetailservice.getById(id).then(function (result) {
                setOrderdetail(result.data.orderdetail);
            });
        })();

    }, []);

    function orderdetailDelete(id){
        orderdetailservice.remove(id).then(function(result){
            alert(result.data.message);
            navigate('../../admin/orderdetail', { replace: true });
        });
    }

    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT ĐƠN HÀNG</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/orderdetail"}>
                            <FaPlus />Về danh sách
                        </Link>
                        {/* <Link className="btn btn-sm btn-primary me-1 " to={"/admin/orderdetail/update/" + orderdetail.id}>
                            <FaEdit /> Sửa
                        </Link> */}
                        <button onClick={()=>orderdetailDelete(orderdetail.id)}className="btn btn-sm btn-danger">
                            <FaTrash />Xóa
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{orderdetail.id}</td>
                        </tr>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <td>{orderdetail.order_id}</td>
                        </tr>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <td>{orderdetail.product_id}</td>
                        </tr>
                        <tr>
                            <th>Ngày đặt</th>
                            <td>{orderdetail.created_at}</td>
                        </tr>

                        <tr>
                            <th>Giá</th>
                            <td>{orderdetail.price}</td>
                        </tr>
                        <tr>
                            <th>Giam gia</th>
                            <td>{orderdetail.discount}</td>
                        </tr>

                        <tr>
                            <th>Số lượng</th>
                            <td>{orderdetail.quality}</td>
                        </tr>
                        <tr>
                            <th>Tổng cộng</th>
                            <td>{orderdetail.amount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default OrderdetailShow;   