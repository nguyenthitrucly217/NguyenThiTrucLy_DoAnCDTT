import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import orderservice from "../../../services/OrderServices";
function OrderCreate() {
    const navigate = useNavigate ();
    const [orders,setOrders]=useState([]);
    useEffect(function(){
        (async function(){
            await orderservice.getAll().then(function(result){
                setOrders(result.data.orders);
            });
        })();

    },[]);
    const [user_id, setUserId] = useState();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState(1);

    async function orderStore(event) {
        event.preventDefault();
        // const image=document.querySelector("#image")
        //dung upload file len
        var order= new FormData();
        order.append("user_id",user_id)
        order.append("name",name);
        order.append("phone", phone);
        order.append("email",email);
        order.append("address",address);
        order.append("note",note);
        order.append("status",status);
        // order.append("image",image.files[0]);


        await orderservice.create(order)
            .then(function (res) {
                alert(res.data.message)
                navigate("../../admin/order",{replace:true});
            });
    }
    return (
        <form onSubmit={orderStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Thêm đơn hàng</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success">Lưu</button>
                            <Link to="/admin/order" className="btn btn-sm btn-info">Về danh sách</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                        <div className="md-3">
                                <label >User_id</label>
                                <input
                                    type="number" 
                                    value={user_id} 
                                    onChange={(e) => setUserId(e.target.value)} 
                                    className="form-control">
                                        </input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Tên đơn hàng</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Số điện thoại</label>
                                <textarea type="text" name="name" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Email</label>
                                <textarea type="email" name="name" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></textarea>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="name">Địa chỉ</label>
                                <textarea type="text" name="name" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Ghi chú</label>
                                <textarea type="text" name="name" value={note} onChange={(e) => setNote(e.target.value)} className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card-footer"></div>
            </div>
        </form>
    );
}

export default OrderCreate;