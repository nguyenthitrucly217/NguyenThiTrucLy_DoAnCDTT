import { Link, useNavigate, useParams } from "react-router-dom";
import userservice from "../../../services/UserServices";
import { useEffect, useState } from "react";

function CustomerUpdate() {
    const {id} =useParams('id');
    const navigate = useNavigate ();
    // const [user,setUser]=useState([]);
    const [users,setUsers]=useState([]);
    useEffect(function(){
        (async function(){
            await userservice.getAll().then(function(result){
                setUsers(result.data.users);
            });
        })();

    },[]);

    useEffect(function(){
        (async function(){
            await userservice.getById(id).then(function(result){

                const tmp=result.data.user;
                // setUser(tmp);
                setName(tmp.name);
                setEmail(tmp.email);
                setPhone(tmp.phone);
                setUsername(tmp.username);
                setPassword(tmp.password);
                setAddress(tmp.address);
                setRoles(tmp.roles);
                setStatus(tmp.status);
             
            });
        })();

    },[]);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [roles, setRoles] = useState("");
    const [status, setStatus] = useState(0);

    async function userEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var user = new FormData();
        user.append("name", name);
        user.append("email", email);
        user.append("phone", phone);
        user.append("username", username);
        user.append("password", password);
        user.append("address", address);
        user.append("roles", roles);
        user.append("status", status);
    if (image.files.length === 0) {
        user.append("image","");
    } 
    else {
        user.append("image", image.files[0]);

    }
    await userservice.update(user,id).then(function (res) {
        alert(res.data.message)
        navigate('../../admin/customer', { replace: true });
    });


}
    return ( 
        <form onSubmit={userEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">CẬP NHẬT KHÁCH HÀNG</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className=" btn btn-sm btn-success me-1">Lưu</button>
                            <Link to="/admin/user" className="btn btn-sm btn-info">Về Danh Sách</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9 w-100">    
                            <div className="mb-3">
                                <label htmlFor="name">Tên </label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Email</label>
                                <input type="email" name="name" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Số điện thoại</label>
                                <input type="text" name="name" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Tên người dùng</label>
                                <input type="text" name="name" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Mật khẩu</label>
                                <textarea type="password" name="name" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Vai trò</label>
                                <input type="text" name="name" value={roles} onChange={(e) => setRoles(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Địa chỉ</label>
                                <input type="text" name="name" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="sort">Trạng Thái</label>
                                <select name="sort" value={status} className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default CustomerUpdate;