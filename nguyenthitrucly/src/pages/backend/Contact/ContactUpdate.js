import { useEffect, useState } from "react";
import contactservice from '../../../services/ContactServices';
import { Link, useParams, useNavigate } from "react-router-dom";

function ContactUpdate() {
    //Khai báo status
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [title, setTitle] = useState("");
    const [replay_id, setReplayId] = useState(0);
    const [content, setContent] = useState("");
    //const [metakey, setMetakey] = useState("");
    //const [metadesc, setMetadesc] = useState("");
    //const [parent_id, setParentId] = useState(1);
    //const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    const { id } = useParams("id");

    useEffect(function () {
        (async function () {
            await contactservice.getById(id).then(function (result) {
                const tmp = result.data.contact;
                setName(tmp.name);
                setEmail(tmp.email);
                setPhone(tmp.phone);
                setTitle(tmp.title);
                setContent(tmp.content);
                setReplayId(tmp.replay_id);
                //setMetakey(tmp.metakey);
                //setMetadesc(tmp.metadesc);
                setStatus(tmp.status);
                //setSortOrder(tmp.sort_order);
                //setParentId(tmp.parent_id);
            });
        })();
    }, []);
    //Lấy danh sách
    const [contact, setcontacts] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll().then(function (result) {
                setcontacts(result.data.contacts);
            });
        })();
    }, []);

    async function contactEdit(event) {
        event.preventDefault();
        //const image = document.querySelector("#image");
        var contact = new FormData();
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("title", title);
        contact.append("content", content);
        contact.append("status", status);
        contact.append("replay_id", replay_id);

        try {
            await contactservice.update(contact, id)
                .then(function (res) {
                    alert(res.data.message)
                    navigate('/admin/contact', { replace: true });
                });
        } catch (error) {
            console.error(error.response.data);
        }
    }

    return (
        <form onSubmit={contactEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">CẬP NHẬT LIÊN HỆ</strong>
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
                    </div>
                </div>
            </div>
        </form>

    );
}

export default ContactUpdate;