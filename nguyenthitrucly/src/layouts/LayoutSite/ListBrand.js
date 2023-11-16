import { Link } from "react-router-dom";
import brandservice from "../../services/BrandServices"
import { useState } from "react";
import { useEffect } from "react";

function ListBrand() {
    const [brands,setBrands]=useState([]);
    useEffect(function(){
        (async function(){
            try{
            const result=await  brandservice.getAll();
            setBrands(result.data.brands);
            }catch(error){
                console.error(error);
            }
        
        })();
    },[])

    return (
        <div className="listbrand mb-5">
            <h3 className="bg-info p-3 m-0 text-center">Thương hiệu</h3>

            <u>
            {brands.map(function(br,index){
                    return (<li key ={index}>
                        <Link className=""to ={"/thuong-hieu/"+br.slug}>{br.name}</Link>
                    </li>)
                })}
            </u>
        </div>
    )
}
export default ListBrand;