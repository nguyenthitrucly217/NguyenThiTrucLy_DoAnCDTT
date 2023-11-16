import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import productstoreservice from "../../../services/ProductStoreServices";

function ProductStoreShow() {
    const navigate = useNavigate();
    const { id } = useParams(); //"id" trong routes
    const [productstore, setProductStore] = useState([]);
    useEffect(function () {
        (async function () {
            await productstoreservice.getById(id).then(function (result) {
                setProductStore(result.data.productstore);
            });
        })();
    }, []);
    function productDelete(id) {
        productstoreservice.deletetam(id).then(function (result) {
            alert(result.data.message);
            navigate('../../admin/productstore', { replace: true });
        });
    }


    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT SẢN PHẨM KHO </strong></div>
                    <div className="col-6 text-end">
                        <Link to="/admin/productstore" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/productstore/update/" + productstore.id}>
                            <FaEdit />Sửa </Link>
                        <button onClick={() => productDelete(productstore.id)} className="btn btn-sm btn-danger">
                            <FaTrash />Xóa
                        </button>
                    </div>

                </div>
            </div>

            <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                    <tr>
                            <th>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{productstore.id}</td>
                        </tr>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <td>{productstore.product_id}</td>
                        </tr>
                        <tr>
                            <th>Đơn giá</th>
                            <td>{productstore.price}</td>
                        </tr>


                        <tr>
                            <th>Số lượng</th>
                            <td>{productstore.quantity}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{productstore.created_at}</td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ProductStoreShow;