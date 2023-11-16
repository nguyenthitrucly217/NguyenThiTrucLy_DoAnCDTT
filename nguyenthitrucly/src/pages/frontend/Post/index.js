import PostItem from "../../../components/frontend/PostItem";
import { useState } from "react";
import { useEffect } from "react";
import postservice from "../../../services/PostServices"
function Post(){
    const [posts,setPosts]=useState([]);
    const [limit,setLimit]=useState();
    useEffect(function(){
        (async function(){
            await postservice.getPostHome(2,'post').then(function(result){
                setPosts(result.data.posts);
            });
        })();

    },[limit]);
    return (
        <section className="maincontent my-3">
            <div className=" container post-topic">
                <h3 className="text-center text-danger">TẤT CẢ BÀI VIẾT</h3>
                <div className="col">
                    {posts.map(function (post, index) {
                        return <PostItem post={post} key={index} />
                    })}
                </div>
                <div className="row">
                    <div className="col-12 text-center my-4">
                    <button className="btn btn-success" onClick={()=>setLimit(limit+1)}>Xem Thêm</button>
                    </div>
                </div>
            </div>
            

            {/* <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav> */}

        </section>
    );
}
export default Post;