import { FaEdit, FaEye, FaSearchPlus, FaTrash, FaTrashRestore } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from "react";
import { useEffect } from "react";
import productservice from "../../../services/ProductServices";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";

function ProductRestore() {
    const [statusdel,setStatusDelete]=useState(0);
    const [products,setProducts]=useState([]);
    const [page, setPage] = useState(1);
    const [page_end, set_page_end] = useState(1);

    useEffect(function(){
        (async function(){
            await productservice.getlistRestore(4,page).then(function(result){
                setProducts(result.data.products);
                set_page_end(result.data.end);
            });
        })();

    },[statusdel,page]);   
    function productDelete(id){
        productservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }
    function productRestore(id){
        productservice.restore(id).then(function(result){
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
                        <strong className="text-primary">THÙNG RÁC</strong></div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/product">
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
                        <th>Category_ID</th>
                        <th>Brand_ID</th>
                        <th>Tên sản phẩm</th>
                        {/* <th>Slug</th> */}
                        <th>Đơn giá</th>
                        <th>Giá khuyến mãi</th>
                        {/* <th>Kieu</th> */}
                        <th>Hinh ảnh </th>
                        {/* <th>Sô lượng</th> */}
                        <th>Chi tiết sản phẩm</th>
                        {/* <th>Ngày tạo</th> */}
                        <th style={{width:120}}>Chức năng</th>
                        <th>ID</th>
                    </tr>
                 </thead>
                 <tbody>
                    {products.map(function(product,index){
                        return( 
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{product.category_id}</td>
                            <td>{product.brand_id}</td>
                            <td>
                                {product.name}
                            </td>
                            {/* <td>
                               {product.slug}
                            </td> */}
                            <td>
                                {product.price}
                            </td>
                            <td>
                                {product.pricesale}
                            </td>
                            {/* <td>
                                {product.type}
                            </td> */}


                            <td>
                            <img src={urlImage+'product/'+product.image} alt="hinh.png" className="img-fluid"
                                style={{maxWidth:100, maxHeight:100}}/>
                            </td>
                            {/* <td>
                                {product.quality}
                            </td> */}
                            <td>
                                {product.detail}
                            </td>

                            {/* <td>
                               {product.created_at}
                            </td> */}
                            <td>
                            <button onClick={()=>productRestore(product.id)} className="btn btn-sm btn-danger me-1"><FaTrashRestore/></button>

                               <button onClick={()=>productDelete(product.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
                            </td>
                            <td>{product.id}</td>
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

export default ProductRestore;