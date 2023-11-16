import { FaEdit, FaEye, FaSearchPlus, FaTrash, FaTrashRestore } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import menuservice from "../../../services/MenuServices";
import { Pagination } from "@mui/material";

function MenuRestore() {
    const [statusdel,setStatusDelete]=useState(0);
    const [page, setPage] = useState(1);
    const [page_end, set_page_end] = useState(1);

    const [menus,setMenus]=useState([]);
    useEffect(function(){
        (async function(){
            await menuservice.getlistRestore(4,page).then(function(result){
                setMenus(result.data.menus);
                set_page_end(result.data.end);

            });
        })();

    },[statusdel,page]);
    function menuDelete(id){
        menuservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }

    function menuRestore(id){
        menuservice.restore(id).then(function(result){
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
                        <strong className="text-primary">THÙNG RÁC </strong></div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/menu">
                            Về danh sách
                        </Link>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>parent_id</th>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Vị trí</th>
                        <th>Kiểu</th>
                        <th>Sắp xếp</th>
                        {/* <th>Ngày tạo</th> */}
                        <th>Chức năng</th>

                    </tr>
                 </thead>
                 <tbody>
                    {menus.map(function(menu,index){
                        return( 
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                {menu.id}
                            </td>
                            <td>
                                {menu.parent_id}
                            </td>

                            <td>
                                {menu.name}
                            </td>
                            <td>
                                {menu.link}
                            </td>
                            <td>
                                {menu.position}
                            </td>

                            <td>
                                {menu.type}
                            </td>
                            <td>
                                {menu.sort_order}
                            </td>

                            {/* <td>
                               {menu.created_at}
                            </td> */}
                            <td>
                            <button onClick={()=>menuRestore(menu.id)}className="btn btn-sm btn-danger me-1"><FaTrashRestore/></button>

                               <button onClick={()=>menuDelete(menu.id)}className="btn btn-sm btn-danger"><FaTrash/></button>
                            
                            </td>
                        </tr>);
                    }
                    )}
                   
                 </tbody>
                 </table>
                 <Pagination count={page_end} page={page} onChange={handleChange} />

             </div>

        </div>
     );
}

export default MenuRestore;