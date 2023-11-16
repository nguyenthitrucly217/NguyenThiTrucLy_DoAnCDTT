import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import topicservice from "../../services/TopicServices";

function ListTopic() {
    const [topic,setTopic]=useState([]);
    useEffect(function(){
        (async function(){
            try{
            const result=await  topicservice.getAll();
            setTopic(result.data.topics);
            }catch(error){
                console.error(error);
            }
        
        })();
    },[])

    return (
        <div className="listtopic mb-5">
            <h3 className="bg-info p-3 m-0 text-center">Chủ đề</h3>

            <u>
            {topic.map(function(top,index){
                    return (<li key ={index}>
                        <Link className=""to ={"/chu-de/"+top.slug}>{top.name}</Link>
                    </li>)
                })}
            </u>
        </div>
    )
}
export default ListTopic;