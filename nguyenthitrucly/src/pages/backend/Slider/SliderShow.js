import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import sliderservice from "../../../services/SliderServices";
import { urlImage } from "../../../config";

function SliderShow() {
    const navigate=useNavigate();
    const {id} =useParams("id"); //"id" trong routes
    const [slider,setSlider]=useState([]);
    useEffect(function(){
        (async function(){
            await sliderservice.getById(id).then(function(result){//// show controller 
                setSlider(result.data.slider);
            });
        })();
    },[]);
    function sliderDelete(id){
        sliderservice.deletetam(id).then(function(result){
            alert(result.data.message);
            navigate('../../admin/slider', { replace: true });
        });
    }


    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT SLIDER</strong></div>
                        <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/slider"}>
                            <FaPlus />Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1 " to={"/admin/slider/update/" + slider.id}>
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={()=>sliderDelete (slider.id)}className="btn btn-sm btn-danger">
                            <FaTrash />Xóa
                        </button>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/* <tr>
                        <th>ID</th>
                        <th>Tên danh mục</th>
                        <th>Slug</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                    </tr> */}
                 </thead>
                 <tbody>
                       <tr>
                            <th>Id</th>
                            <td>{slider.id}</td>
                        </tr>
                        <tr>
                            <th>Tên liên hệ</th>
                            <td>{slider.name}</td>
                        </tr>
                        <tr>
                            <th>Liên Kết</th>
                            <td>{slider.link}</td>
                        </tr>
                        <tr>
                            <th>Sắp xếp</th>
                            <td>{slider.sort_order}</td>
                        </tr>
                        <tr>
                            <th>Vị trí</th>
                            <td>{slider.position}</td>
                        </tr>
                        <tr>
                            <th>Chi tiết</th>
                            <td>{slider.description}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{slider.created_at}</td>
                        </tr>

                        <tr>
                            <img src={urlImage + 'slider/' + slider.image} alt="hinh" className="img-fluid"
                                style={{ maxWidth: 100, maxHeight: 100 }} />
                        </tr>

                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default SliderShow;