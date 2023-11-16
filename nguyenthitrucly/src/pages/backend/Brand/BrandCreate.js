import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import brandservice from "../../../services/BrandServices";

function BrandCreate() {
    const Navigate =useNavigate();
    const [brands,setBrands]=useState([]);
    useEffect(function(){
        (async function(){
            await brandservice.getAll().then(function(result){
                setBrands(result.data.brands);
            });
        })();

    },[]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    async function brandStore(event) {
        event.preventDefault();
        const image=document.querySelector("#image")
        //dung upload file len
        var brand= new FormData();

        brand.append("name",name);
        brand.append("description",description);

        brand.append(" metakey", metakey);
        brand.append("metadesc",metadesc);
        brand.append("sort_order",sort_order);
        brand.append("status",status);
        brand.append("image",image.files[0]);


        await brandservice.create(brand)
            .then(function (res) {
                alert(res.data.message)
                Navigate("../../admin/brand",{replace:true});
            });
    }
    return (
        <form onSubmit={brandStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Thêm thương hiệu</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success">Lưu</button>
                            <Link to="/admin/brand" className="btn btn-sm btn-info">Về danh sách</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên thương hiệu</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea type="metakey" name="name" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metakey">Chi tiết</label>
                                <textarea type="metakey" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea type="metadesc" name="name" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>
                            </div>
                        </div>

                        <div className="col-md-3">
                            {/* <div className="mb-3">
                                <label htmlFor="parent_id">Danh mục cha</label>
                                <select name="parent_id" className="form-control" value={parent_id} onChange={(e) => setParentId(e.target.value)}>
                                    <option value="0">Danh mục cha</option>
                                    {brands.map(function(bra,index){
                                        return (
                                        <option key={index} value={bra.id}>{bra.name}</option>
                                  ); 
                                   })}
                                </select>
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="sort-order">Sắp xếp</label>
                                <select name="sort-order" className="form-control" value={sort_order} onChange={(e) => setSortOrder(e.target.value)}>
                                    <option value="0">None</option>
                                    {brands.map(function(bra,index){
                                        return (
                                        <option key={index} value={bra.sort_order+1}>sau {bra.name}</option>
                                  ); 
                                   })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
                                <option value="0">None</option>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card-footer"></div>
            </div>
        </form>
    );
}

export default BrandCreate;