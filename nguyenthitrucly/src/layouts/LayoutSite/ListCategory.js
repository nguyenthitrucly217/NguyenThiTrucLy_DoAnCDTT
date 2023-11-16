import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../services/CategoryServices";

function ListCategory(){
    const [listCategory,setListCategory]=useState([]);
    useEffect(function(){
        (async function(){
            try{
            const result=await  categoryservice.getCategoryByParentId(0);
                setListCategory(result.data.categorys);
            }catch(error){
                console.error(error);
            }
        
        })();
    },[])
    return (
        <div className="listcategory mb-5">
            <h3 className="bg-info p-3 m-0 text-center">Danh mục sản phẩm</h3>
            <u>
                {listCategory.map(function(cat,index){
                    return (<li key ={index}>
                        <Link to ={"/danh-muc-san-pham/"+cat.slug}>{cat.name}</Link>
                    </li>)
                })}
            </u>
        </div>
    )
}
export default ListCategory;