import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash, FaTrashRestore } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import orderservice from "../../../services/OrderServices";
import { Pagination } from "@mui/material";

function OrderRestore() {
    const [statusdel,setStatusDelete]=useState(0);
    const [page, setPage] = useState(1);
    const [page_end, set_page_end] = useState(1);

    const [orders,setOrders]=useState([]);
    useEffect(function(){
        (async function(){
            await orderservice.getlistRestore(4,page).then(function(result){
                setOrders(result.data.orders);
                set_page_end(result.data.end);

            });
        })();

    },[statusdel,page]);   
    function orderDelete(id){
        orderservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }
    function orderRestore(id){
        orderservice.restore(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">THÙNG RÁC</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/order"}>
                           Về danh sách
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                        <th style ={{width :50}}>#</th>
                            {/* <th className="text-center">Hình</th> */}
                            <th className="text-center">User_id</th>
                            <th className="text-center">Tên đơn hàng</th>
                            <th className="text-center">Số điện thoại</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Địa chỉ</th>
                            {/* <th className="text-center">Ghi chú</th>
                            <th style ={{width :250}}className="text-center">Ngày đặt</th> */}
                            <th style ={{width :200}}className="text-center">Chức năng</th>
                            <th className="text-center">ID</th>


                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(function (order, index) {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    {/* <td>
                                        <img src={urlImage+'order/'+order.image} alt="hinh.png" className="img-fluid"
                                        style={{maxWidth:100,maxHeight:100}} />
                                   
                                    </td> */}
                                    <td>{order.user_id}</td>
                                    <td>{order.name}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    {/* <td>{order.note}</td>

                                    <td className="text-center">{order.created_at}</td> */}
                                    <td>
                                    <button  onClick={()=>orderRestore(order.id)} className="btn btn-sm btn-danger me-1">
                                            <FaTrashRestore/>
                                        </button>

                                        <button  onClick={()=>orderDelete(order.id)} className="btn btn-sm btn-danger">
                                            <FaTrash/>
                                        </button>
                                    </td>
                                    <td>{order.id}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Pagination count={page_end} page={page} onChange={handleChange} />

            </div>
        </div>
    );
}
export default OrderRestore;
