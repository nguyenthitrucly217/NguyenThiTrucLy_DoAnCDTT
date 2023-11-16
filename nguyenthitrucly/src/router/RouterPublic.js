import Product from "../pages/frontend/Product";
import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import Post from "../pages/frontend/Post";
import ProductDetail from "../pages/frontend/Product/ProductDetail"
import ProductCategory from "../pages/frontend/ProductCategory"
import ProductBrand from "../pages/frontend/ProductBrand"
import PostDetail from "../pages/frontend/Post/PostDetail"
import PostTopic from "../pages/frontend/Post/PostTopic";
import Login from "../pages/frontend/Login";
import Register from "../pages/frontend/Register"
import ProductSale from "../pages/frontend/Home/ProductSale";
import Cart from "../pages/frontend/Cart/Cart";
import Information from "../pages/frontend/Information/information";
import Search from "../layouts/LayoutSite/Search"
import Don from "../components/frontend/Don";

// import Login from "../pages/frontend/Home/Login";
const RouterPublic=[
    { path:'/', component:Home},
    { path:'san-pham', component:Product},
    { path:'san-pham-sale', component:ProductSale},
    { path:'lien-he', component:Contact},
    { path:'bai-viet', component:Post},
    { path:'chu-de/:slug', component:PostTopic},
    { path:'login', component:Login},
    { path:'register', component:Register},
    { path:'thong-tin', component:Information},
    { path:'danh-muc-san-pham/:slug', component:ProductCategory},
    { path:'thuong-hieu/:slug', component:ProductBrand},
    { path:'chi-tiet-san-pham/:slug', component:ProductDetail},
    { path:'chi-tiet-bai-viet/:id', component:PostDetail},
    { path:'cart', component:Cart},
    { path:'tim-kiem/:keyword', component:Search},
    { path:'don/:slug', component:Don},





    
];
export default RouterPublic;