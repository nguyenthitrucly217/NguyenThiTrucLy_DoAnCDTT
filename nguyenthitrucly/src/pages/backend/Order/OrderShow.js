import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import orderservice from "../../../services/OrderServices";


function OrderShow() {
    const navigate=useNavigate();
    const { id } = useParams("id");
    const [order, setOrder] = useState([]);
    useEffect(function () {
        (async function () {
            await orderservice.getById(id).then(function (result) {
                setOrder(result.data.order);
            });
        })();

    }, []);
    function orderDelete(id){
        orderservice.deletetam(id).then(function(result){
            alert(result.data.message);
            navigate('../../admin/order', { replace: true });
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
                        <Link className="btn btn-sm btn-success" to={"/admin/order"}>
                            <FaPlus />Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1 " to={"/admin/order/update/" + order.id}>
                            <FaEdit /> Sửa
                        </Link>
                        <button  onClick={()=>orderDelete(order.id)}className="btn btn-sm btn-danger">
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
                            <td>{order.id}</td>
                        </tr>
                        <tr>
                            <th>Tên đơn hàng</th>
                            <td>{order.name}</td>
                        </tr>
                        <tr>
                            <th>Số điện thoại</th>
                            <td>{order.phone}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{order.email}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{order.address}</td>
                        </tr>
                        <tr>
                            <th>ghi chú</th>
                            <td>{order.note}</td>
                        </tr>

                        {/* <tr>
                            <img src={urlImage+'order/'+order.image} alt="hinh" className="img-fluid"
                             style={{maxWidth:100,maxHeight:100}} />
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default OrderShow;   