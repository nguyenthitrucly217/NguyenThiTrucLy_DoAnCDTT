import { FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import productstoreservice from "../../../services/ProductStoreServices";
import { Pagination } from "@mui/material";

function ProductStoreList() {
    const [statusdel,setStatusDelete]=useState(0);
    const [productstore,setProductStore]=useState([]);
    const [page, setPage] = useState(1);
    const [page_end, set_page_end] = useState(1);

    useEffect(function(){
        (async function(){
            await productstoreservice.get_byPageSto(4,page).then(function(result){
                setProductStore(result.data.productstore);
                set_page_end(result.data.end);

            });
        })();

    },[statusdel,page]);   
    function productstoreDelete(id){
        productstoreservice.deletetam(id).then(function(result){
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
                        <strong className="text-primary">DANH SÁCH SẢN PHẨM KHO</strong></div>
                    <div className="col-6 text-end">
                    <Link className="btn btn-sm btn-success me-1" to={"/admin/productstore/xoa"}>
                            <FaTrash />
                        </Link>

                        <Link className=" btn btn-sm btn-success" to="/admin/productstore/create">
                            <FaSearchPlus/>Thêm
                        </Link>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>Product_ID</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Ngày tạo</th>
                        <th style={{width:120}}>Chức năng</th>
                        <th>ID</th>
                    </tr>
                 </thead>
                 <tbody>
                    {productstore.map(function(productstore,index){
                        return( 
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{productstore.product_id}</td>
                            <td>
                                {productstore.price}
                            </td>


                            <td>
                                {productstore.quantity}
                            </td>

                            <td>
                               {productstore.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/productstore/show/"+productstore.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/productstore/update/"+productstore.id}>
                               <FaEdit/> </Link>
                               <button onClick={()=>productstoreDelete(productstore.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
                            </td>
                            <td>{productstore.id}</td>
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

export default ProductStoreList;