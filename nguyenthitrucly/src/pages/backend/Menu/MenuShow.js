import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import menuservice from "../../../services/MenuServices";


function MenuShow() {
    const navigate=useNavigate();
    const { id } = useParams("id");
    const [menu, setMenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getById(id).then(function (result) {
                setMenu(result.data.menu);
            });
        })();

    }, []);
    function menuDelete(id){
        menuservice.deletetam(id).then(function(result){
            alert(result.data.message);
            navigate('../../admin/menu', { replace: true });
        });
    }


    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT MENU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/menu"}>
                            <FaPlus />Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1 " to={"/admin/menu/update/" + menu.id}>
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={()=>menuDelete(menu.id)}className="btn btn-sm btn-danger">
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
                            <td>{menu.id}</td>
                        </tr>
                        <tr>
                            <th>parent_id</th>
                            <td>{menu.parent_id}</td>
                        </tr>
                      
                        <tr>
                            <th>Tên menu</th>
                            <td>{menu.name}</td>
                        </tr>
                        <tr>
                            <th>Link</th>
                            <td>{menu.link}</td>
                        </tr>
                        <tr>
                            <th>Vị trí</th>
                            <td>{menu.position}</td>
                        </tr>

                        <tr>
                        <th>Kiểu</th>
                            <td>{menu.type}</td>
                        </tr>
                        <tr>
                        <th>Sắp xếp</th>
                            <td>{menu.sort_order}</td>
                        </tr>

                        <tr>
                        <th>User_id</th>
                            <td>{menu.user_id}</td>
                        </tr>

                        <tr>
                        <th>Table_id</th>
                            <td>{menu.table_id}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default MenuShow;   