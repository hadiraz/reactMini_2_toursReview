import React, { useContext } from 'react' ;
import CreateTourItems from './CreateTourItems';
import {toursListContext , toursSetContext} from "./App" ;

function ToursList() {
    const toursList = useContext(toursListContext) ;
    console.log(toursListContext)
    return (
        <section className="tours-list-container">
            <article>
            <ul className="tours-items-box">
                
            {
                toursList.map((value,index)=>(
                    <CreateTourItems key={value.id} data={value} />
                ))
            }
            </ul>
            </article>
        </section>
    )
}

export default ToursList
