import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import userservice from "../../../services/UserServices";
import { urlImage } from "../../../config";


function UserShow() {
    const navigate=useNavigate();
    const { id } = useParams("id");
    const [user, setUser] = useState([]);
    useEffect(function () {
        (async function () {
            await userservice.getById(id).then(function (result) {
                setUser(result.data.user);
            });
        })();

    }, []);

    function userDelete(id){
        userservice.deletetam(id).then(function(result){
            alert(result.data.message);
            navigate('../../admin/user', { replace: true });
        });
    }

    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT THÀNH VIÊN</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/user"}>
                            <FaPlus />Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1 " to={"/admin/user/update/" +user.id}>
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={()=>userDelete(user.id)}className="btn btn-sm btn-danger">
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
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <th>Tên</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>Số điện thoại</th>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <th>Tên người dùng</th>
                            <td>{user.username}</td>
                        </tr>
                        <tr>
                            <th>Mật khẩu</th>
                            <td>{user.password}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{user.address}</td>
                        </tr>
                        <tr>
                            <th>Vai trò</th>
                            <td>{user.roles}</td>
                        </tr>
                        <tr>
                            <th>Ngày</th>
                            <td>{user.created_at}</td>
                        </tr>

                        <tr>
                            <img src={urlImage+'user/'+user.image} alt="hinh" className="img-fluid"
                             style={{maxWidth:100,maxHeight:100}} />
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default UserShow;   