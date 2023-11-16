import { useEffect, useState } from "react";
import postservice from "../../../services/PostServices";
import PostItem from "../../../components/frontend/PostItem" 
function PostHome() {
    const [posts, setPosts] = useState([]);

    useEffect(function () {
        (async function () {
            await postservice.getPostHome(1,'post')
                .then(function (result) {
                    setPosts(result.data.posts);
                });
        })();
    }, []);
    if (posts != null) {
        return (
            <div className="container my-4">
                <div className="post-topic">
                    <h3 className="text-center text-danger">Bài viết mới nhất</h3></div>
                <div className="col">
                    {posts.map(function (post, index) {
                        return <PostItem post={post} key={index} />
                    })}
                </div>
            </div>

        );
    }
}
export default PostHome;