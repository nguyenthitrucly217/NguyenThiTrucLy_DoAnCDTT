import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import brandservice from "../../../services/BrandServices";
import { urlImage } from "../../../config";


function BrandShow() {
    const navigate=useNavigate();
        const { id } = useParams("id");
        const [brand, setBrand] = useState([]);
        useEffect(function () {
            (async function () {
                await brandservice.getById(id).then(function (result) {
                    setBrand(result.data.brand);
                });
            })();
    
        }, []);
    
        function brandDelete(id){
            brandservice.deletetam(id).then(function(result){
                alert(result.data.message);
                navigate('../../admin/brand', { replace: true });
            });
        }
    
        return (
    
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong className="text-primary">CHI TIẾT THƯƠNG HIỆU</strong>
                        </div>
                        <div className="col-6 text-end">
                            <Link className="btn btn-sm btn-success" to={"/admin/brand"}>
                                <FaPlus />Về danh sách
                            </Link>
                            <Link className="btn btn-sm btn-primary me-1 " to={"/admin/brand/update/" + brand.id}>
                                <FaEdit /> Sửa
                            </Link>
                            <button onClick={()=>brandDelete(brand.id)} className="btn btn-sm btn-danger">
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
                                <td>{brand.id}</td>
                            </tr>
                            <tr>
                                <th>Tên thương hiệu</th>
                                <td>{brand.name}</td>
                            </tr>
                            <tr>
                                <th>Chi tiết</th>
                                <td>{brand.description}</td>
                            </tr>

                            <tr>
                                <th>Slug</th>
                                <td>{brand.slug}</td>
                            </tr>
                            <tr>
                                <img src={urlImage+'brand/'+brand.image} alt="hinh" className="img-fluid"
                                 style={{maxWidth:100,maxHeight:100}} />
                            </tr>
    
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    
export default BrandShow;   