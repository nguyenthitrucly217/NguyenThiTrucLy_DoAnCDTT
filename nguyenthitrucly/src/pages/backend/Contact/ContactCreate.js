import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import contactservice from '../../../services/ContactServices';

function ContactCreate() {
    const navigate = useNavigate();
    const [contacts, setContact] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll().then(function (result) {
                setContact(result.data.contacts);
            });
        })();
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [replay_id, setReplayId] = useState(0);
    //const [metakey, setMetakey] = useState("");
    //const [metadesc, setMetadesc] = useState("");
    //const [parent_id, setParentId] = useState(0);
    //const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    async function contactStore(event) {
        event.preventDefault();
        //const image = document.querySelector("#image");
        var contact = new FormData();
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("title", title);
        contact.append("content", content);
        contact.append("replay_id", replay_id);

        //contact.append("metakey", metakey);
        //contact.append("metadesc", metadesc);
        //contact.append("parent_id", parent_id);
        //contact.append("sort_order", sort_order);
        contact.append("status", status);
        //contact.append("image", image.files[0]);
        // if (image.files.length === 0) {
        //     contact.append("image", "");
        // }
        // else {
        //     contact.append("image", image.files[0]);
        // }
        try {
            await contactservice.create(contact)
                .then(function (res) {
                    alert(res.data.message);
                    navigate("../../admin/contact", { replace: true });
                });
        } catch (error) {
            console.error(error.response.data);
        }
    }
    return (
        <form onSubmit={contactStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">THÊM LIÊN HỆ</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className=" btn btn-sm btn-success me-1">Lưu</button>
                            <Link to="/admin/contact" className="btn btn-sm btn-info">Về Danh Sách</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9 w-100">    
                            <div className="mb-3">
                                <label htmlFor="name">Tên liên hệ</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Email</label>
                                <input type="email" name="name" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Số điện thoại</label>
                                <input type="text" name="name" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Tiêu đề</label>
                                <input type="text" name="name" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Nội dung</label>
                                <textarea type="text" name="name" value={content} onChange={(e) => setContent(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Trả lời liên hệ</label>
                                <textarea type="text" name="name" value={replay_id} onChange={(e) => setReplayId(e.target.value)} className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="sort">Trạng Thái</label>
                                <select name="sort" value={status} className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                        {/* <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="sort_order">Sắp Xếp</label>
                                <select name="sort_order" value={sort_order} className="form-control" onChange={(e) => setSortOrder(e.target.value)}>
                                    <option value="0">None</option>
                                    {contact.map(function (contact, index) {
                                        return (
                                            <option key={index} value={contact.sort_order + 1}>{contact.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">Hình Đại Diện</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="sort">Trạng Thái</label>
                                <select name="sort" value={status} className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ContactCreate;