import { useEffect, useState } from "react";
import { Link, navigate, useNavigate } from "react-router-dom";
import postservice from "../../../services/PostServices";
function PostCreate() {
    const navigate =useNavigate();
    const [posts,setPosts]=useState([]);
    useEffect(function(){
        (async function(){
            await postservice.getAll().then(function(result){
                setPosts(result.data.posts);
            });
        })();

    },[]);
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [topic_id, setTopicId] = useState();
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [detail, setDetail] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("1");

    async function postStore(event) {
        event.preventDefault();
        const image=document.querySelector("#image")
        //dung upload file len
        var post= new FormData();

        post.append("topic_id",topic_id);
        post.append("title",title);
        post.append("slug",slug);
        post.append("detail",detail);
        post.append("type",type);
        post.append("status",status);
        post.append("image",image.files[0]);
        post.append(" metakey", metakey);
        post.append("metadesc",metadesc);

        await postservice.create(post)
            .then(function (res) {
                alert(res.data.message)
               navigate("../../admin/post",{replace:true});
            });
    }
    return (
        <form onSubmit={postStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Thêm bài viết</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success">Lưu</button>
                            <Link to="/admin/post" className="btn btn-sm btn-info">Về danh sách</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="name">topic_id</label>
                                <input type="text" name="name" value={topic_id} onChange={(e) => setTopicId(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">tieu de</label>
                                <input type="text" name="name" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"></input>
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="name">tên bài viết</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control"></input>
                            </div> */}

                            <div className="mb-3">
                                <label htmlFor="name">ten thuong hieu</label>
                                <input type="text" name="name" value={slug} onChange={(e) => setSlug(e.target.value)} className="form-control"></input>
                            </div>

                        </div>    
                        <div className="col-md-6">              
                                  <div className="mb-3">
                                <label htmlFor="name">Từ khóa</label>
                                <input type="text" name="name" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <input type="text" name="name" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">kieu</label>
                                <input type="text" name="name" value={type} onChange={(e) => setType(e.target.value)} className="form-control"></input>
                            </div>

</div>

                                <div className="mb-3">
                                <label htmlFor="name">chi tiet</label>
                                <textarea type="text" name="name" value={detail} onChange={(e) => setDetail(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>

                      
                    </div>
                </div>
                <div className="card-footer"></div>
            </div>
        </form>
    );
}

export default PostCreate;