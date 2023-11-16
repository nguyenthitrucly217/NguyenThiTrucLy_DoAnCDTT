import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuservice from "../../../services/MenuServices";
function MenuCreate() {
    //function CategoryList() {
        const navigate = useNavigate ();
        const [menus,setMenus]=useState([]);
        useEffect(function(){
            (async function(){
                await menuservice.getAll().then(function(result){
                    setMenus(result.data.menus);
                });
            })();
    
        },[]);
    
    const [name, setName] = useState('');
    const [user_id, setUserId] = useState();
    const [table_id, setTableId] = useState();
    const [link, setLink] = useState('');
    const [type, setType] = useState('');
    const [position, setPosition] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [parent_id, setParentId] = useState(0);
    const [status, setStatus] = useState(1);

    async function menuStore(event) {
        event.preventDefault();
        //dùng để upload file lên
        var menu= new FormData();
        menu.append("name",name);
        menu.append("link",link);
        menu.append("user_id",user_id);
        menu.append("table_id",table_id);
        menu.append("position",position);
        menu.append("type",type);
        menu.append("sort_order",sort_order);
        menu.append("parent_id",parent_id);
        menu.append("status",status);
      //  category.append("image",image.files[0]); //để số 0 đuộc nhiệc thontin
            await menuservice.create(menu).then(function (res) {
                alert(res.data.message)
                navigate('../../admin/menu', { replace: true });
            });
        }


    

    return (
        <form onSubmit={menuStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm menu</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/menu" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên menu</label>
                                <input type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Link</label>
                                <textarea 
                                    name="link"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Vị trí</label>
                                <input type="text"
                                    name="name"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Kiểu</label>
                                <textarea 
                                    name="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="md-3">
                                <label >Danh mục cha</label>
                                <select 
                                    name="parent_id" 
                                    value={parent_id} 
                                    onChange={(e) => setParentId(e.target.value)} 
                                    className="form-control">
                                    <option value="0">None</option>
                                    {menus.map(function(men,index){
                                        return(
                                            <option key={index} value={men.id}>{men.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="sort-order">Sắp xếp</label>
                                <select name="sort-order" className="form-control" value={sort_order} onChange={(e) => setSortOrder(e.target.value)}>
                                    <option value="0">None</option>
                                    {menus.map(function(men,index){
                                        return (
                                        <option key={index} value={men.sort_order+1}>sau {men.name}</option>
                                  ); 
                                   })}
                                </select>
                            </div>

                            <div className="md-3">
                                <label >Trạng thái</label>
                                <select 
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)} >

                                    <option value="1"> Xuất bản</option>


                                    <option value="2"> Chưa xuất bản</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">User_id</label>
                                <textarea 
                                    name="type"
                                    value={user_id}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Table_id</label>
                                <textarea 
                                    name="type"
                                    value={table_id}
                                    onChange={(e) => setTableId(e.target.value)}
                                    className="form-control"></textarea>
                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </form>
    );
}

export default MenuCreate;