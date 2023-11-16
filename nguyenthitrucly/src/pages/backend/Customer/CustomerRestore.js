import { Link } from "react-router-dom";
import { FaPlus,FaRegEye,FaEdit,FaTrash, FaTrashRestore} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import userservice from "../../../services/UserServices";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";

function CustomerRestore() {
    const [statusdel,setStatusDelete]=useState(0);
    const [users,setUsers]=useState([]);
    const [page, setPage] = useState(1);
    const [page_end, set_page_end] = useState(1);


    useEffect(function(){
        (async function(){
            await userservice.getlistRestoreCus(4,page).then(function(result){
                setUsers(result.data.users);
                set_page_end(result.data.end);

            });
        })();

    },[statusdel,page]);   
    function userDelete(id){
        userservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }
    function userRestore(id){
        userservice.restore(id).then(function(result){
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
                        <strong className="text-primary">TẤT CẢ KHÁCH HÀNG</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/customer"}>
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
                            <th className="text-center">Tên</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Phone</th>
                            <th className="text-center">Địa chỉ</th>
                            <th className="text-center">Vai trò</th>
                            <th style ={{width :150}}className="text-center">Chức năng</th>
                            <th className="text-center">ID</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(function(user,index){
                            return(
                                <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address}</td>
                            <td>{user.roles}</td>
                            <td>
                            <button onClick={()=>userRestore(user.id)} className="btn btn-sm btn-danger me-1">
                                    <FaTrashRestore/>
                                </button>

                                <button onClick={()=>userDelete(user.id)} className="btn btn-sm btn-danger">
                                    <FaTrash/>
                                </button>
                            </td>
                            <td>{user.id}</td>
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
export default CustomerRestore;   