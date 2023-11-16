import Slidershow from "./Slidershow";
// import Contact from "../Contact";
import { useState } from "react";
import { useEffect } from "react";
import categoryservice from "../../../services/CategoryServices";
import ProductHome from "./ProductHome";
import PostHome from "./PostHome";
import ProductSale from "./ProductSale";
import NewProduct from "./NewProduct";
// import postservice from "../../../services/PostServices";
function Home() {
    const [categorys,setCategorys]=useState([]);
    // const [post,setPost]=useState([]);
    useEffect(function(){
        (async function(){
            await categoryservice.getCategoryByParentId(0).then(function(result){
                setCategorys(result.data.categorys);
            // postservice.getPostHome(1,'çustom').then(function(result){
            //         setPost(result.data.posts);
    
            });
        })();

    },[]);


    return (
        <section className="maincontent">
           <Slidershow />
            {categorys.map(function(category,index){
                return <ProductHome key={index} category={category}/>
            })}
            <NewProduct/>
            <ProductSale/>
            <PostHome/>


                {/* {post.map(function(post,index){
                return <PostHome key={index} post={post}/>
            })} */}
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

            {/* <div className="contact"><Contact /></div> */}
        </section>
    );
}
export default Home;
