import React from 'react'

function Card({url,title,imageurl,description}) {
    return (
          
       <div class="card bg-dark text-light h-100 border-0 shadow-sm mb-3" style={{Width:"350px ",Height:"220px"}}>
  <img style={{ height: "auto", width: "100%" }} src={imageurl?imageurl:"https://media.istockphoto.com/id/1189788155/photo/abstract-digital-news-concept.jpg?b=1&s=612x612&w=0&k=20&c=I4LhZxdSTa_9ISsAzEABkBm4fLkakfwNXJ282-iKtDY="}   class="card-img-top object-fit-md-contain border rounded " alt="..." />
  <div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title fs-6 mb-1 ">{title.slice(0,45)}</h5>
    <p class="card-text small flex-grow-1">{description?description.slice(0,60):"A gripping tale of courage, mystery, and triumph unfolds in this must-watch story. Packed with intense drama, stunning visuals, and powerful performances, it keeps you hooked from start to finish. Stream now to experience the journey that’s captivating audiences worldwide!".slice(0,60)}...</p>
    <a href={url} class="btn btn-primary btn-sm mt-3">Read more</a>
  </div>
</div>
       
    )
}

export default Card
