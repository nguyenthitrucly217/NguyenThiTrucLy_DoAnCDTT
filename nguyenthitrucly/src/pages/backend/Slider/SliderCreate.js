import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sliderservice from "../../../services/SliderServices";
function SliderCreate() {
    //function CategoryList() {
        const navigate = useNavigate ();
        const [sliders,setSliders]=useState([]);
        useEffect(function(){
            (async function(){
                await sliderservice.getAll().then(function(result){
                    setSliders(result.data.sliders);
                });
            })();
    
        },[]);
    
    
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [position, setPosition] = useState("");
    const [description, setDescription] = useState("");

    const [status, setStatus] = useState(1);

    async function sliderStore(event) {
        event.preventDefault();
        const image=document.querySelector("#image")

        //dùng để upload file lên
        var slider= new FormData();

        slider.append("name",name);
        slider.append("link",link);
        slider.append("position",position);
        slider.append("description",description);

        slider.append("sort_order",sort_order);
        slider.append("status",status);
       slider.append("image",image.files[0]); //để số 0 đuộc nhiệc thontin
            await sliderservice.create(slider).then(function (res) {
                alert(res.data.message)
                navigate('../../admin/slider', { replace: true });
            });
        }


    return (
        <form onSubmit={sliderStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm Slider</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/slider" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên Slider</label>
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
                                <label htmlFor="name">Vị Trí</label>
                                <textarea 
                                    name="position"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    className="form-control"></textarea>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="name">Chi tiết</label>
                                <textarea 
                                    name="position"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="md-3">
                                <label >Danh mục cha</label>
                                <select 
                                    name="sort_order" 
                                    value={sort_order} 
                                    onChange={(e) => setSortOrder(e.target.value)} 
                                    className="form-control">
                                    <option value="0">None</option>
                                    {sliders.map(function(sli,index){
                                        return(
                                            <option key={index} value={sli.id}>{sli.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
                                <option value="0">None</option>
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



                        </div>
                    </div>


                </div>

            </div>
        </form>
    );
}

export default SliderCreate;