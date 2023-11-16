import { Link } from "react-router-dom";
import { FaPlus,FaRegEye,FaEdit,FaTrash, FaTrashRestore, FaRegTrashAlt} from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import brandservice from "../../../services/BrandServices";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";

function BrandRestore() {
    const [statusdel,setStatusDelete]=useState(0);
        const [brands,setBrands]=useState([]);
        const [page, setPage] = useState(1);
        const [page_end, set_page_end] = useState(1);
    

        useEffect(function(){
            (async function(){
                await brandservice.getlistRestore(4,page).then(function(result){
                    setBrands(result.data.brands);
                    set_page_end(result.data.end);

                });
            })();
    
        },[statusdel,page]);

        function brandDelete(id){
            brandservice.remove(id).then(function(result){
                console.log(result.data.message);
                setStatusDelete(result.data.id)
            });
        }

        function brandRestore(id) {
            brandservice.restore(id).then(function (result) {
                console.log(result.data.message);
                setStatusDelete(result.data.id);
    
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

                        <Link className="btn btn-sm btn-success" to={"/admin/brand"}>
                                <FaPlus />Về danh sách
                            </Link>
                    </div>

                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                        <th style ={{width :50}}>#</th>
                            <th style ={{width :180}} className="text-center">Hình</th>
                            <th className="text-center">Tên sản phẩm</th>
                            <th className="text-center">Chi tiết</th>
                            <th className="text-center">Slup</th>
                            {/* <th style ={{width :250}}className="text-center">Ngày tạo</th> */}
                            <th style ={{width :150}}className="text-center">Chức năng</th>
                            <th className="text-center">ID</th>


                        </tr>
                    </thead>
                    <tbody>
                        {brands.map(function(brand,index){
                            return(
                                <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <img src={urlImage+'brand/'+brand.image} alt="hinh.png" className="img-fluid"
                                style={{maxHeight:100,maxWidth:100}} />
                            </td>
                            <td >{brand.name}</td>
                            <td >{brand.description}</td>

                            <td>{brand.slug}</td>
                            {/* <td className="text-center">{brand.created_at}</td> */}
                            <td>
                                <button onClick={()=>brandRestore(brand.id)} className="btn btn-sm btn-danger me-1"><FaTrashRestore />
                                </button>
                                <button onClick={()=>brandDelete(brand.id)} className="btn btn-sm btn-danger">
                                    <FaTrash/>
                                </button>
                            </td>
                            <td>{brand.id}</td>
                        </tr>
                            );
                        })}
                    </tbody>
                    {/* <Pagination count={page_end} page={page} onChange={ChangePage} /> */}

                </table>
                <Pagination count={page_end} page={page} onChange={handleChange} />

            </div>
        </div>
    );
}
export default BrandRestore;   