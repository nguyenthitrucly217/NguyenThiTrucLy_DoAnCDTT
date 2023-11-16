import BrandCreate from "../pages/backend/Brand/BrandCreate";
import BrandList from "../pages/backend/Brand/BrandList";
import BrandShow from "../pages/backend/Brand/BrandShow";
import BrandUpdate from "../pages/backend/Brand/BrandUpdate";
import CategoryCreate from "../pages/backend/Category/CategoryCreate";
import CategoryList from "../pages/backend/Category/CategoryList";
import CategoryShow from "../pages/backend/Category/CategoryShow";
import CategoryUpdate from "../pages/backend/Category/CategoryUpdate";
import Dashboard from "../pages/backend/Dashboard";
import ProductCreate from "../pages/backend/Product/ProductCreate";
import ProductList from "../pages/backend/Product/ProductList";
import ProductShow from "../pages/backend/Product/ProductShow";
import ProductUpdate from "../pages/backend/Product/ProductUpdate";
import OrderList from "../pages/backend/Order/OrderList";
import OrderCreate from "../pages/backend/Order/OrderCreate";
import OrderUpdate from "../pages/backend/Order/OrderUpdate";
import OrderShow from "../pages/backend/Order/OrderShow";
import ContactList from "../pages/backend/Contact/ContactList";
import ContactCreate from "../pages/backend/Contact/ContactCreate";
import ContactUpdate from "../pages/backend/Contact/ContactUpdate";
import ContactShow from "../pages/backend/Contact/ContactShow";
import MenuList from "../pages/backend/Menu/MenuList";
import MenuCreate from "../pages/backend/Menu/MenuCreate";
import MenuUpdate from "../pages/backend/Menu/MenuUpdate";
import MenuShow from "../pages/backend/Menu/MenuShow";
import OrderdetailList from "../pages/backend/Orderdetail/OrderdetailList";
import OrderdetailCreate from "../pages/backend/Orderdetail/OrderdetailCreate";
import OrderdetailUpdate from "../pages/backend/Orderdetail/OrderdetailUpdate";
import OrderdetailShow from "../pages/backend/Orderdetail/OrderdetailShow";
import PostList from "../pages/backend/Post/PostList";
import PostCreate from "../pages/backend/Post/PostCreate";
import PostUpdate from "../pages/backend/Post/PostUpdate";
import PostShow from "../pages/backend/Post/PostShow";
import SliderList from "../pages/backend/Slider/SliderList";
import SliderCreate from "../pages/backend/Slider/SliderCreate";
import SliderUpdate from "../pages/backend/Slider/SliderUpdate";
import SliderShow from "../pages/backend/Slider/SliderShow";
import TopicList from "../pages/backend/Topic/TopicList";
import TopicCreate from "../pages/backend/Topic/TopicCreate";
import TopicUpdate from "../pages/backend/Topic/TopicUpdate";
import TopicShow from "../pages/backend/Topic/TopicShow";
import UserList from "../pages/backend/User/UserList";
import UserCreate from "../pages/backend/User/UserCreate";
import UserUpdate from "../pages/backend/User/UserUpdate";
import UserShow from "../pages/backend/User/UserShow";
import ProductSaleCreate from "../pages/backend/ProductSale/ProductSaleCreate";
import ProductSaleList from "../pages/backend/ProductSale/ProductSaleList";
import ProductSaleShow from "../pages/backend/ProductSale/ProductSaleShow";
import ProductSaleUpdate from "../pages/backend/ProductSale/ProductSaleUpdate";
import ProductStoreList from "../pages/backend/ProductStore/ProductStoreList";
import ProductStoreCreate from "../pages/backend/ProductStore/ProductStoreCreate";
import ProductStoreUpdate from "../pages/backend/ProductStore/ProductStoreUpdate";
import ProductStoreShow from "../pages/backend/ProductStore/ProductStoreShow";
import BrandRestore from "../pages/backend/Brand/BrandRestore";
import CategoryRestore from "../pages/backend/Category/CategoryRestore";
import ContactRestore from "../pages/backend/Contact/ContactRestore";
import MenuRestore from "../pages/backend/Menu/MenuRestore";
import OrderRestore from "../pages/backend/Order/OrderRestore";
import PostRestore from "../pages/backend/Post/PostRestore";
import ProductRestore from "../pages/backend/Product/ProductRestore";
import ProductSaleRestore from "../pages/backend/ProductSale/ProductSaleRestore";
import ProductStoreRestore from "../pages/backend/ProductStore/ProductStoreRestore";
import SliderRestore from "../pages/backend/Slider/SliderRestore";
import TopicRestore from "../pages/backend/Topic/TopicRestore";
import UserRestore from "../pages/backend/User/UserRestore";
import CustomerCreate from "../pages/backend/Customer/CustomerCreate";
import CustomerList from "../pages/backend/Customer/CustomerList";
import CustomerShow from "../pages/backend/Customer/CustomerShow";
import CustomerUpdate from "../pages/backend/Customer/CustomerUpdate";
import CustomerRestore from "../pages/backend/Customer/CustomerRestore";
import PageList from "../pages/backend/Page/PageList";
import PageCreate from "../pages/backend/Page/PageCreate";
import PageUpdate from "../pages/backend/Page/PageUpdate";
import PageShow from "../pages/backend/Page/PageShow";
import PageRestore from "../pages/backend/Page/PageRestore";










const RouterPrivate =[
    
    { path:'/admin', component:Dashboard},
    { path:'/admin/brand', component:BrandList},
    { path:'/admin/brand/create', component:BrandCreate},
    { path:'/admin/brand/update/:id', component:BrandUpdate},
    { path:'/admin/brand/show/:id', component:BrandShow},
    { path:'/admin/brand/xoa', component:BrandRestore},




    { path:'/admin/category', component:CategoryList},
    { path:'/admin/category/create', component:CategoryCreate},
    { path:'/admin/category/update/:id', component:CategoryUpdate},
    { path:'/admin/category/show/:id', component:CategoryShow},
    { path:'/admin/category/xoa', component:CategoryRestore},



    { path:'/admin/product', component:ProductList},
    { path:'/admin/product/create', component:ProductCreate},
    { path:'/admin/product/update/:id', component:ProductUpdate},
    { path:'/admin/product/show/:id', component:ProductShow},
    { path:'/admin/product/xoa', component:ProductRestore},


    { path:'/admin/order', component:OrderList},
    { path:'/admin/order/create', component:OrderCreate},
    { path:'/admin/order/update/:id', component:OrderUpdate},
    { path:'/admin/order/show/:id', component:OrderShow},
    { path:'/admin/order/xoa', component:OrderRestore},

    
    { path:'/admin/contact', component:ContactList},
    { path:'/admin/contact/create', component:ContactCreate},
    { path:'/admin/contact/update/:id', component:ContactUpdate},
    { path:'/admin/contact/show/:id', component:ContactShow},
    { path:'/admin/contact/xoa', component:ContactRestore},


    { path:'/admin/menu', component:MenuList},
    { path:'/admin/menu/create', component:MenuCreate},
    { path:'/admin/menu/update/:id', component:MenuUpdate},
    { path:'/admin/menu/show/:id', component:MenuShow},
    { path:'/admin/menu/xoa', component:MenuRestore},


    { path:'/admin/orderdetail', component:OrderdetailList},
    { path:'/admin/orderdetail/create', component:OrderdetailCreate},
    { path:'/admin/orderdetail/update/:id', component:OrderdetailUpdate},
    { path:'/admin/orderdetail/show/:id', component:OrderdetailShow},

    { path:'/admin/post', component:PostList},
    { path:'/admin/post/create', component:PostCreate},
    { path:'/admin/post/update/:id', component:PostUpdate},
    { path:'/admin/post/show/:id', component:PostShow},
    { path:'/admin/post/xoa', component:PostRestore},


    { path:'/admin/page', component:PageList},
    { path:'/admin/page/create', component:PageCreate},
    { path:'/admin/page/update/:id', component:PageUpdate},
    { path:'/admin/page/show/:id', component:PageShow},
    { path:'/admin/page/xoa', component:PageRestore},


    { path:'/admin/slider', component:SliderList},
    { path:'/admin/slider/create', component:SliderCreate},
    { path:'/admin/slider/update/:id', component:SliderUpdate},
    { path:'/admin/slider/show/:id', component:SliderShow},
    { path:'/admin/slider/xoa', component:SliderRestore},


    { path:'/admin/topic', component:TopicList},
    { path:'/admin/topic/create', component:TopicCreate},
    { path:'/admin/topic/update/:id', component:TopicUpdate},
    { path:'/admin/topic/show/:id', component:TopicShow},
    { path:'/admin/topic/xoa', component:TopicRestore},


    { path:'/admin/user', component:UserList},
    { path:'/admin/user/create', component:UserCreate},
    { path:'/admin/user/update/:id', component:UserUpdate},
    { path:'/admin/user/show/:id', component:UserShow},
    { path:'/admin/user/xoa', component:UserRestore},



    { path:'/admin/customer', component:CustomerList},
    { path:'/admin/customer/create', component:CustomerCreate},
    { path:'/admin/user/update/:id', component:CustomerUpdate},
    { path:'/admin/customer/show/:id', component:CustomerShow},
    { path:'/admin/customer/xoa', component:CustomerRestore},



    { path:'/admin/productsale', component:ProductSaleList},
    { path:'/admin/productsale/create', component:ProductSaleCreate},
    { path:'/admin/productsale/update/:id', component:ProductSaleUpdate},
    { path:'/admin/productsale/show/:id', component:ProductSaleShow},
    { path:'/admin/productsale/xoa', component:ProductSaleRestore},


    { path:'/admin/productstore', component:ProductStoreList},
    { path:'/admin/productstore/create', component:ProductStoreCreate},
    { path:'/admin/productstore/update/:id', component:ProductStoreUpdate},
    { path:'/admin/productstore/show/:id', component:ProductStoreShow},
    { path:'/admin/productstore/xoa', component:ProductStoreRestore},


];
export default RouterPrivate;