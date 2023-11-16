import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import postservice from "../../../services/PostServices";
import { urlImage } from "../../../config";


function PageShow() {
    const navigate=useNavigate();
    const { id } = useParams("id");
    const [post, setPost] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getById(id).then(function (result) {
                setPost(result.data.post);
            });
        })();

    }, []);

    function postDelete(id){
        postservice.deletetam(id).then(function(result){
            alert(result.data.message);
            navigate('../../admin/page', { replace: true });
        });
    }

    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT BÀI VIẾT</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/page"}>
                            <FaPlus />Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1 " to={"/admin/page/update/" + post.id}>
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={()=>postDelete(post.id)}className="btn btn-sm btn-danger">
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
                            <td>{post.id}</td>
                        </tr>
                        <tr>
                            <th>chủ đề</th>
                            <td>{post.title}</td>
                        </tr>
                        {/* <tr>
                            <th>tên bài viết</th>
                            <td>{post.name}</td>
                        </tr> */}
                        <tr>
                            <th>Tên thương hiệu</th>
                            <td>{post.slug}</td>
                        </tr>
                        <tr>
                            <th>chi tiết</th>
                            <td>{post.detail}</td>
                        </tr>
                        <tr>
                            <th>kiểu</th>
                            <td>{post.type}</td>
                        </tr>
                        <tr>
                            <th>từ khóa</th>
                            <td>{post.metakey}</td>
                        </tr>
                        <tr>
                            <th>mô tả</th>
                            <td>{post.metadesc}</td>
                        </tr>

                        <tr>
                            <th>ngày tạo</th>
                            <td>{post.created_at}</td>
                        </tr>

                        <tr>
                            <img src={urlImage+'post/'+post.image} alt="hinh" className="img-fluid"
                             style={{maxWidth:100,maxHeight:100}} />
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default PageShow;   