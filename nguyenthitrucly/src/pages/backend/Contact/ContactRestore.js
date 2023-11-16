import { useState } from 'react';
import { useEffect } from 'react';
import { FaPlus, FaEdit, FaTrashRestore } from 'react-icons/fa';
import { BsFillEyeFill, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import contactservice from '../../../services/ContactServices';
import { Pagination } from "@mui/material";

function ContactRestore() {   
     const [statusdel,setStatusDelete]=useState(0);
    const [contacts, setBrands] = useState([]);
    const [page, setPage] = useState(1);
    const [page_end, set_page_end] = useState(1);

    useEffect(function () {
        (async function () {
            await contactservice.getlistRestore(4,page).then(function (result) {
                setBrands(result.data.contacts);
                set_page_end(result.data.end);

            });
        })();
    }, [statusdel,page])
    function contactDelete(id){
        contactservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }
    function contactRestore(id){
        contactservice.restore(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id)
        });
    }

    const handleChange = (event, value) => {
        setPage(value);
    };


    return (
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-dark">THÙNG RÁC</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/contact" className="btn btn-sm btn-success">
                           Về danh sách
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: 50 }} className="text-center">#</th>
                            <th style={{ width: 130 }} className="text-center">Tên liên hệ</th>
                            <th style={{ width: 130 }} className="text-center">Email</th>
                            <th style={{ width: 130 }} className="text-center">Số điện thoại</th>
                            <th style={{ width: 130 }} className="text-center">Tiêu đề</th>
                            <th style={{ width: 130 }} className="text-center">Nội dung</th>
                            <th style={{ width: 130 }} className="text-center">Trả lời liên hệ</th>
                            {/* <th style={{ width: 130 }} className="text-center">Ngày Tạo</th> */}
                            <th style={{ width: 140 }} className="text-center">Chức Năng</th>
                            <th style={{ width: 30 }} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(function (contact, index) {
                            return <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                {/* <td className="text-center">
                                    <img style={{ width: 100 }} className="img-fluid" src={urlImage + 'contact/' + contact.image} alt={contact.name} />
                                </td> */}
                                <td className="text-center">{contact.name}</td>
                                <td className="text-center">{contact.email}</td>
                                <td className="text-center">{contact.phone}</td>
                                <td className="text-center">{contact.title}</td>
                                <td className="text-center">{contact.content}</td>
                                <td className="text-center">{contact.replay_id}</td>                               
                                 {/* <td className="text-center">{contact.created_at}</td> */}
                                <td className="text-center">
                                <button onClick={()=>contactRestore(contact.id)}className="btn btn-sm btn-danger me-1">
                                        <FaTrashRestore />
                                    </button>

                                    <button onClick={()=>contactDelete(contact.id)}className="btn btn-sm btn-danger">
                                        <BsFillTrashFill />
                                    </button>
                                </td>
                                <td className="text-center">{contact.id}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <Pagination count={page_end} page={page} onChange={handleChange} />

            </div>
        </section>);
}
export default ContactRestore;