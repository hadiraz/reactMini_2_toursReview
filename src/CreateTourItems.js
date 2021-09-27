import React, { useContext, useState } from 'react'
import {toursListContext , toursSetContext} from "./App" ;function CreateTourItems({data}) {
    const [ readMore , setReadMore ] = useState(false)
    const {image,id,info,name,price} = data ;
    const setTours = useContext(toursSetContext) ;
    const toursList = useContext(toursListContext) ;

    const deleteTour = (id,event) => {
        const newList = toursList.filter((tour)=> tour.id !== id)
        setTours(newList);
    }
    return (
        <li key={id} className="tour-item">
                        <img src={image} alt={name}/>
                        <div className="detail-box">
                            <span className="tour-name-price">
                                <p className="tour-name">{name}
                                </p>
                                <p className="tour-price">${price}
                                </p>
                            </span>
                          <p className="tour-info">
                            {
                                (readMore) ? info : `${info.substring(0,200)}...`
                            }
                            <button className="read-more-btn" onClick={()=>setReadMore(!readMore)}>
                                {
                                    readMore ? "show less" : "read more"
                                }
                            </button>
                          </p>  
                        </div>
                        <button  onClick={(event)=>deleteTour(id,event)} className="delete-btn">not interested
                        </button>
                    </li>
    )
}

export default CreateTourItems
