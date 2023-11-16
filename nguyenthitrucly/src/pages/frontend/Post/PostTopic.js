import { useParams } from "react-router-dom";
import PostItem from "../../../components/frontend/PostItem";
import postservice from "../../../services/PostServices";
import topicservice from "../../../services/TopicServices";
import { useState } from "react";
import { useEffect } from "react";
import ListTopic from "../../../layouts/LayoutSite/ListTopic";

function PostTopic(){
    const {slug} = useParams();//hoa-tulip
    const [limit, setLimit] = useState(1);
    const [title, setTitle] = useState("");
    const [posts, setPost] = useState([]);
    document.title=title;
    useEffect(function () {
        (async function () {
            try {
                const result_topic = await topicservice.getById(slug);
                const topicid = result_topic.data.topic.id;
                setTitle(result_topic.data.topic.name);
                const result = await postservice.getPostByTopicId(limit, topicid);
                setPost(result.data.posts);
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, [limit,slug]);


    return (
        <section className="maincontent">
        <div className="container my-4">
            <div className="row">
                <div className="col-md-3">
                   <ListTopic/>
                </div>
                <div className="col-md-9">
                    <h3 className="text-center text-danger">{title}</h3>
                    <div className="row">
                        {posts.map(function (post, index) {
                            return <PostItem post={post} key={index} />
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center my-4">
                            <button className="btn btn-success" onClick={() => setLimit(limit + 1)}>Xem Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )

}
export default PostTopic;