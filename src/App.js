import React, { useContext, useEffect, useState } from 'react'
import Loading from "./Loading" ;
import ToursList from './ToursList';
import "./assets/app.css" ;

export const toursListContext = React.createContext();
export const toursSetContext = React.createContext();

function App() {
  const [loading , setLoading] = useState(true) ;
  const [toursList , setTours] = useState([]) ;
  const [displayTitle , setTitle] = useState(true)
  
    const getTours = async () => {
      setLoading(true)
      try {
             const response = await fetch ("https://course-api.com/react-tours-project");
             const toursArr = await response.json();
             setTours(toursArr) ;
             setLoading(false) ;

      } catch (error) {
        setLoading(false);
        console.log(error)
      }
    }

  useEffect(() => {
    const toursList = getTours();
  } ,[]) ;


  return (
    <main>
      <div className="tours-info">
          <h1 className="tours-info-title">
            {
              toursList.length === 0 && loading === false ? "no tours found" : "Our Tours"
            }
            {
              toursList.length === 0 && loading === false ? <button className="delete-btn" onClick={getTours}>
                reload
                </button> : ""
            }
          </h1>
      </div>
      {
        loading ? <Loading/> : 
        <toursListContext.Provider value={toursList}>
          <toursSetContext.Provider value={setTours}>
            <ToursList/>
          </toursSetContext.Provider> 
        </toursListContext.Provider> 
      }
    </main>
  )
}

export default App
