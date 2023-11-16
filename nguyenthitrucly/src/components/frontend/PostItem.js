import { Link } from "react-router-dom";
import { urlImage } from "../../config";
function PostItem(props) {
    return (
        <section className="maincontent">
        <div className="container my-4">
            <div className="row">
                <div className="col-3 ">
                    <Link to={"/chi-tiet-bai-viet/"+props.post.id}>
                        <img src={urlImage+ "post/"+props.post.image} className="img-fluid" alt={props.post.image}/>
                    </Link></div>
               <div className="col w-100">
                    <h3 className="fs-6 text-danger">
                        <Link to ={"/chi-tiet-bai-viet/"+props.post.id}>
                            {props.post.title}
                            </Link>
                            </h3>
                <div className="link-detail">{props.post.detail}</div></div>
            </div> </div>
            </section>

     
    )
}
export default PostItem;
