import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import productsaleservice from "../../../services/ProductSaleServices";
import { urlImage } from "../../../config";

function ProductSaleShow() {
    const navigate = useNavigate();
    const { id } = useParams("id"); //"id" trong routes
    const [productsale, setProductSale] = useState([]);
    useEffect(function () {
        (async function () {
            await productsaleservice.getById(id).then(function (result) {
                setProductSale(result.data.productsale);
            });
        })();
    }, []);
    function productsaleDelete(id) {
        productsaleservice.deletetam(id).then(function (result) {
            alert(result.data.message);
            navigate('../../admin/productsale', { replace: true });
        });
    }


    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT SẢN PHẨM SALE</strong></div>
                    <div className="col-6 text-end">
                        <Link to="/admin/product" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/productsale/update/" + productsale.id}>
                            <FaEdit />Sửa </Link>
                        <button onClick={() => productsaleDelete(productsale.id)} className="btn btn-sm btn-danger">
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
                            <td>{productsale.id}</td>
                        </tr>
                        <tr>
                            <th>Mã Sản Phẩm</th>
                            <td>{productsale.product_id}</td>
                        </tr>
                        <tr>
                            <th>Giá khuyến mãi</th>
                            <td>{productsale.pricesale}</td>
                        </tr>
                        <tr>
                            <th>Ngày bắt đầu</th>
                            <td>{productsale.date_begin}</td>
                        </tr>

                        <tr>
                            <th>Ngày kết thúc</th>
                            <td>{productsale.date_end}</td>
                        </tr>


                        <tr>
                            <th>Số lượng</th>
                            <td>{productsale.quantity}</td>
                        </tr>
                        <tr>
                            <th>Ngày tạo</th>
                            <td>{productsale.created_at}</td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ProductSaleShow;