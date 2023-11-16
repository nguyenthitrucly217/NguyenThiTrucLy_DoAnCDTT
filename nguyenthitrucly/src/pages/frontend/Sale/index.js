// import PostItem from "../../../components/frontend/PostItem";
// import { useState } from "react";
// import { useEffect } from "react";
// import postservice from "../../../services/PostServices"
function Post(){
    // const [posts,setPosts]=useState([]);
    // const [limit,setLimit]=useState(2);
    // useEffect(function(){
    //     (async function(){
    //         await postservice.getPostAll(limit).then(function(result){
    //             setPosts(result.data.post);
    //         });
    //     })();

    // },[limit]);

    return (
        <section className="maincontent my-3">
            <div className=" container post-topic">
                <h3 className="text-center text-danger">TẤT CẢ BÀI VIẾT</h3>
                <div className="col">
                    {/* {posts.map(function (post, index) {
                        return <PostItem post={post} key={index} />
                    })} */}


<div className="product-grid">
            {/* {products.length > 0 && products.map((pro)=>( */}
            <div className="showcase">

                <div className="showcase-banner">

                    <img src={require("../../../assets/images/products/jacket-3.jpg")} alt="Mens Winter Leathers Jackets" width="300" className="product-img default" />
                    <img src={require("../../../assets/images/products/jacket-4.jpg")} alt="Mens Winter Leathers Jackets" width="300" className="product-img hover" />

                    <p className="showcase-badge">15%</p>

                    <div className="showcase-actions">

                        <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="bag-add-outline"></ion-icon>
                        </button>

                    </div>

                </div>

                <div className="showcase-content">

                    <a href="#" className="showcase-category">Dress</a>

                    <a href="#">
                        <h3 className="showcase-title">Pure Garment Dyed Cotton Shirt</h3>
                    </a>

                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>

                    <div className="price-box">
                        <p className="price">$21.00</p>
                        <del>$28.00</del>
                    </div>

                </div>

            </div>

            {/* ))} */}

            <div className="showcase">

                <div className="showcase-banner">
                    <img src={require("../../../assets/images/products/shirt-1.jpg")} alt="Pure Garment Dyed Cotton Shirt" className="product-img default"
                        width="300" />
                    <img src={require("../../../assets/images/products/shirt-2.jpg")} alt="Pure Garment Dyed Cotton Shirt" className="product-img hover"
                        width="300" />

                    <p className="showcase-badge angle black">sale</p>

                    <div className="showcase-actions">
                        <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                </div>

                <div className="showcase-content">
                    <a href="#" className="showcase-category">shirt</a>

                    <h3>
                        <a href="#" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                    </h3>

                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>

                    <div className="price-box">
                        <p className="price">$45.00</p>
                        <del>$56.00</del>
                    </div>

                </div>

            </div>

            <div className="showcase">

                <div className="showcase-banner">
                    <img src={require("../../../assets/images/products/jacket-5.jpg")} alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default"
                        width="300" />
                    <img src={require("../../../assets/images/products/jacket-6.jpg")} alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover"
                        width="300" />

                    <div className="showcase-actions">
                        <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                </div>

                <div className="showcase-content">
                    <a href="#" className="showcase-category">Jacket</a>

                    <h3>
                        <a href="#" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                    </h3>

                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>

                    <div className="price-box">
                        <p className="price">$58.00</p>
                        <del>$65.00</del>
                    </div>

                </div>

            </div>

            <div className="showcase">

                <div className="showcase-banner">
                    <img src={require("../../../assets/images/products/clothes-3.jpg")} alt="Black Floral Wrap Midi Skirt" className="product-img default"
                        width="300" />
                    <img src={require("../../../assets/images/products/clothes-4.jpg")} alt="Black Floral Wrap Midi Skirt" className="product-img hover"
                        width="300" />

                    <p className="showcase-badge angle pink">new</p>

                    <div className="showcase-actions">
                        <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                </div>

                <div className="showcase-content">
                    <a href="#" className="showcase-category">skirt</a>

                    <h3>
                        <a href="#" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                    </h3>

                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>

                    <div className="price-box">
                        <p className="price">$25.00</p>
                        <del>$35.00</del>
                    </div>

                </div>

            </div>

            {/* <div className="showcase">

                <div className="showcase-banner">
                    <img src={require("../../../assets/images/products/shoe-2.jpg")} alt="Casual Men's Brown shoes" className="product-img default"
                        width="300" />
                    <img src={require("../../../assets/images/products/shoe-2_1.jpg")} alt="Casual Men's Brown shoes" className="product-img hover"
                        width="300" />

                    <div className="showcase-actions">
                        <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                </div>

                <div className="showcase-content">
                    <a href="#" className="showcase-category">casual</a>

                    <h3>
                        <a href="#" className="showcase-title">Casual Men's Brown shoes</a>
                    </h3>

                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>

                    <div className="price-box">
                        <p className="price">$99.00</p>
                        <del>$105.00</del>
                    </div>

                </div>

            </div>

            <div className="showcase">

                <div className="showcase-banner">
                    <img src={require("../../../assets/images/products/watch-3.jpg")} alt="Pocket Watch Leather Pouch" className="product-img default"
                        width="300" />
                    <img src={require("../../../assets/images/products/watch-4.jpg")} alt="Pocket Watch Leather Pouch" className="product-img hover"
                        width="300" />

                    <p className="showcase-badge angle black">sale</p>

                    <div className="showcase-actions">
                        <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                </div>

                <div className="showcase-content">
                    <a href="#" className="showcase-category">watches</a>

                    <h3>
                        <a href="#" className="showcase-title">Pocket Watch Leather Pouch</a>
                    </h3>

                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>

                    <div className="price-box">
                        <p className="price">$150.00</p>
                        <del>$170.00</del>
                    </div>

                </div>

            </div>

            <div className="showcase">

                <div className="showcase-banner">
                    <img src={require("../../../assets/images/products/watch-1.jpg")} alt="Smart watche Vital Plus" className="product-img default"
                        width="300" />
                    <img src={require("../../../assets/images/products/watch-2.jpg")} alt="Smart watche Vital Plus" className="product-img hover" width="300" />

                    <div className="showcase-actions">
                        <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                </div>

                <div className="showcase-content">
                    <a href="#" className="showcase-category">watches</a>

                    <h3>
                        <a href="#" className="showcase-title">Smart watche Vital Plus</a>
                    </h3>

                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>

                    <div className="price-box">
                        <p className="price">$100.00</p>
                        <del>$120.00</del>
                    </div>

                </div>

            </div>

            <div className="showcase">

                <div className="showcase-banner">
                    <img src={require("../../../assets/images/products/party-wear-1.jpg")} alt="Womens Party Wear Shoes" className="product-img default"
                        width="300" />
                    <img src={require("../../../assets/images/products/party-wear-2.jpg")} alt="Womens Party Wear Shoes" className="product-img hover"
                        width="300" />

                    <p className="showcase-badge angle black">sale</p>

                    <div className="showcase-actions">
                        <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button>

                        <button className="btn-action">
                            <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                </div>

                <div className="showcase-content">
                    <a href="#" className="showcase-category">party wear</a>

                    <h3>
                        <a href="#" className="showcase-title">Womens Party Wear Shoes</a>
                    </h3>

                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>

                    <div className="price-box">
                        <p className="price">$25.00</p>
                        <del>$30.00</del>
                    </div>

                </div>

            </div>
 */}




        </div>




                </div>
                <div className="row">
                    <div className="col-12 text-center my-4">
                    <button className="btn btn-success" /*onClick={()=>setLimit(limit+1)}*/>Xem Thêm</button>
                    </div>
                </div>
            </div>
            

            {/* <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav> */}

        </section>
    );
}
export default Post;