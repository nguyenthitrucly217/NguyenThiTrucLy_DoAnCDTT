import { FaEdit, FaEye, FaSearchPlus, FaTrash, FaTrashRestore } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from "react";
import sliderservice from "../../../services/SliderServices";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";


function SliderRestore() {
    const [statusdel, setStatusDelete] = useState(0);
    const [sliders, setSlider] = useState([]);
    const [page, setPage] = useState(1);
    const [page_end, set_page_end] = useState(1);

    useEffect(function () {
        (async function () {
            await sliderservice.getlistRestore(4,page).then(function (result) {
                setSlider(result.data.sliders);
                set_page_end(result.data.end);

            });
        })();
    }, [statusdel,page])
    function sliderDelete(id) {
        sliderservice.remove(id).then(function (result) {
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }
    function sliderRestore(id) {
        sliderservice.restore(id).then(function (result) {
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
                        <Link className=" btn btn-sm btn-success" to="/admin/slider">
                            Về danh sách
                        </Link>
                    </div>

                </div>
            </div>

            <div className="card-body">
                <table className="table table-bordered table-hover table-striped text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hình</th>
                            <th>ID</th>
                            <th>Tên Slider</th>
                            <th>Đường Dẫn</th>
                            <th>Vị Trí</th>
                            <th>Chi tiết</th>
                            <th>Ngày Tạo</th>
                            <th>Chức Năng</th>

                        </tr>
                    </thead>
                    <tbody>
                        {sliders.map(function (slider, index) {
                            return (<tr key={index}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>
                                    <img src={urlImage + 'slider/' + slider.image} alt="hinh.png" className="img-fluid"
                                        style={{ maxWidth: 100, maxHeight: 100 }} />

                                </td>

                                <td>{slider.id}</td>
                                <td>
                                    {slider.name}
                                </td>
                                <td>
                                    {slider.link}
                                </td>
                                <td>
                                    {slider.position}
                                </td>
                                <td>
                                    {slider.description}
                                </td>

                                <td>
                                    {slider.created_at}
                                </td>
                                <td>
                                <button onClick={() => sliderRestore(slider.id)} className="btn btn-sm btn-danger me-1"><FaTrashRestore /></button>

                                    <button onClick={() => sliderDelete(slider.id)} className="btn btn-sm btn-danger"><FaTrash /></button>

                                </td>

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

export default SliderRestore;