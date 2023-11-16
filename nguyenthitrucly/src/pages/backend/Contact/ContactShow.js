import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import contactservice from '../../../services/ContactServices';
import { FaEdit } from 'react-icons/fa';
import { BsFillTrashFill } from "react-icons/bs";

function ContactShow() {
    const navigate=useNavigate();
    const { id } = useParams("id");
    const [contact, setContact] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getById(id).then(function (result) {
                setContact(result.data.contact);
            });
        })();
    }, []);
    function contactDelete(id){
        contactservice.deletetam(id).then(function(result){
            alert(result.data.message);
            navigate('../../admin/contact', { replace: true });
        });
    }

    return (
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">CHI TIẾT LIÊN HỆ</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success me-1" to="/admin/contact">
                            Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-warning me-1" to={"/admin/contact/update/" + contact.id}>
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={()=>contactDelete(contact.id)} className="btn btn-sm btn-danger">
                            <BsFillTrashFill /> Xóa
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <td className="text-danger" style={{ width: 300 }}><strong>Tên Trường</strong></td>
                            <td className="text-danger"><strong>Giá Trị</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{id}  </td>
                        </tr>
                        <tr>
                            <td>Tên liên hệ</td>
                            <td>{contact.name}  </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{contact.email}  </td>
                        </tr>
                        <tr>
                            <td>Số điện thoại</td>
                            <td>{contact.phone}  </td>
                        </tr>
                        <tr>
                            <td>Tiêu đề</td>
                            <td>{contact.title}  </td>
                        </tr>
                        <tr>
                            <td>Nội dung</td>
                            <td>{contact.content}  </td>
                        </tr>
                        <tr>
                            <td>Trả lời liên hệ</td>
                            <td>{contact.replay_id}  </td>
                        </tr>

                        <tr>
                            <td>Trạng Thái</td>
                            <td>{contact.status}  </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default ContactShow;