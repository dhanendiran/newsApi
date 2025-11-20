import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './card'
import Navbar from './navbar'

function Content({articles}) {
    
 

    return (
        
       <div className="hero">
        
     <h2 className='text-center mt-2'><i class="bi bi-newspaper">News<span class="text-primary ml-2">Flash</span></i></h2>
     <div className="row">
         {articles && articles.map((article, index) => {
        return (
           <div  key={index} className='container col-3 p-2 col-12 col-sm-6 col-md-4 col-lg-3'  >
            <Card
           
            title={article.title} 
            description={article.description}
            imageurl={article.urlToImage}
            url={article.url}
            />
            </div>
        )
     })}
     </div>
    
    </div>
    )}


export default Content
