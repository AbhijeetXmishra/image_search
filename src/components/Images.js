import React from 'react'
import './image.css';

function Images({url, key}) {
  return (
    <section>  
       
        
            <div className="box">

              <div className="imgBox">
              
                {url ? (
                  <img
                    src={url}
                    
                    alt={key}
                  />
                ) : (
                  <div className="poster" style={{ height: "325px" }}>
                    <img
                      src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                     
                      alt={key}
                    />
                  </div>
                )}
           

              </div>

              

            </div>
    
    
  
</section>
  )
}

export default Images;