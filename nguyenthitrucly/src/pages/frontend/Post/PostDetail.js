import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import postservice from "../../../services/PostServices";
import PostItem from "../../../components/frontend/PostItem";
import { urlImage } from "../../../config";

function PostDetail(){
    const {id}=useParams();
    const [post, setPost] = useState([]);

const [post_order, setPostOrder] = useState([]);
useEffect(function () {
    (function () {
        postservice.getPostById(id).then(function (result) {
            if (result.data.success === true) {
                setPost(result.data.post);
                setPostOrder(result.data.post_order);

            }
        });
    })();

}, [id]);
return (
    <section className="maincontent">
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={urlImage + "post/" + post.image} alt="hinh" className="img-fluid w-100" />
                </div>
                <div className="col-md-6">
                    <h1>{post.title}</h1>
                    <h4>{post.detail}</h4>

                    {/* <h1>{post.price}</h1> */}
                </div>
            </div>
            {/* <div className="row">
                <div className="col-md-12">
                    <h1>{post.detail}</h1>
                </div>
            </div> */}
            <h2>Bai viet cùng loại</h2>
            <div className="row ">
                {post_order.map(function (post, index) {
                    return <PostItem key={index} post={post} />
                })}
            </div>
        </div>
    </section>
)
}
export default PostDetail;