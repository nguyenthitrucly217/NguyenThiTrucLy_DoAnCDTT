import { useEffect } from 'react';
import { useState } from 'react';
import sliderservice from '../../../services/SliderServices';
import {urlImage} from '../../../config'
function Slidershow() {
    const [sliders,setSliders]=useState([]);
    useEffect(function(){
        (async function(){
            await sliderservice.getByPosition('slidershow').then(function(result){
                setSliders(result.data.sliders);
            });
        })();

    },[]);

    return (
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                {sliders.map(function(slider, index) {
                    if (index === 0) {
                        return (
                            <div class="carousel-item active" key={index}>
                            <img src={urlImage + 'slider/'+slider.image} class="d-block w-100" alt={slider.name}
                            style={{maxHeight:500}}/>
                            </div>
                        )
                    } else {
                        return (
                            <div class="carousel-item"  key={index}>
                            <img src={urlImage + 'slider/'+slider.image} class="d-block w-100" alt={slider.name}
                             style={{maxHeight:500}}/>
                            </div>
                        )
                    }
                })}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Slidershow;