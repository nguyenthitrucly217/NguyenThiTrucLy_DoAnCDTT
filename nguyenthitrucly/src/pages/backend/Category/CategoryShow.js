import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import categoryservice from "../../../services/CategoryServices";
import { urlImage } from "../../../config";


function CategoryShow() {
    const navigate=useNavigate();
    const { id } = useParams("id");
    const [category, setCategory] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getById(id).then(function (result) {
                setCategory(result.data.category);
            });
        })();

    }, []);

    function categoryDelete(id){
        categoryservice.deletetam(id).then(function(result){
            alert(result.data.message);
            navigate('../../admin/category', { replace: true });
        });
    }

    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT DANH MỤC</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/category"}>
                            <FaPlus />Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1 " to={"/admin/category/update/" + category.id}>
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={()=>categoryDelete(category.id)}className="btn btn-sm btn-danger">
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
                            <td>{category.id}</td>
                        </tr>
                        <tr>
                            <th>Tên thương hiệu</th>
                            <td>{category.name}</td>
                        </tr>
                        <tr>
                            <th>Chi tiết</th>
                            <td>{category.description}</td>
                        </tr>

                        <tr>
                            <th>Slug</th>
                            <td>{category.slug}</td>
                        </tr>
                        <tr>
                            <img src={urlImage+'category/'+category.image} alt="hinh" className="img-fluid"
                             style={{maxWidth:100,maxHeight:100}} />
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CategoryShow;   