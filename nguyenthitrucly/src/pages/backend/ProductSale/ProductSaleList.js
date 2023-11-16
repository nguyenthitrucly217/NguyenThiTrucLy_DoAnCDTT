import { FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import productsaleservice from "../../../services/ProductSaleServices";
import { Pagination } from "@mui/material";

function ProductSaleList() {
    const [statusdel,setStatusDelete]=useState(0);
    const [productsale,setProductSale]=useState([]);
    const [page, setPage] = useState(1);
    const [page_end, set_page_end] = useState(1);


    useEffect(function(){
        (async function(){
            await productsaleservice.get_byPageSale(4,page).then(function(result){
                setProductSale(result.data.productsales);
                set_page_end(result.data.end);
            });
        })();

    },[statusdel,page]);   
    function productsaleDelete(id){
        productsaleservice.deletetam(id).then(function(result){
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
                        <strong className="text-primary">DANH SÁCH SẢN PHẨM SALE</strong></div>
                    <div className="col-6 text-end">
                    <Link className="btn btn-sm btn-success me-1" to={"/admin/productsale/xoa"}>
                            <FaTrash />
                        </Link>

                        <Link className=" btn btn-sm btn-success" to="/admin/productsale/create">
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
                        <th>Giá khuyến mãi</th>
                        <th>Số lượng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th style={{width:120}}>Chức năng</th>
                        <th>ID</th>
                    </tr>
                 </thead>
                 <tbody>
                    {productsale.map(function(productsale,index){
                        return( 
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{productsale.product_id}</td>
                            <td>
                                {productsale.pricesale}
                            </td>
                            <td>
                               {productsale.quantity}
                            </td>
                            <td>
                                {productsale.date_begin}
                            </td>
                            <td>
                                {productsale.date_end}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/productsale/show/"+productsale.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/productsale/update/"+productsale.id}>
                               <FaEdit/> </Link>
                               <button onClick={()=>productsaleDelete(productsale.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
                            </td>
                            <td>{productsale.id}</td>
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

export default ProductSaleList;