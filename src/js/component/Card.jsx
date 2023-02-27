import React from "react";
const Card = (prop) =>{
    return (
        <div className="card col-2 p-3 m-2 ">
            <img src="https://images.unsplash.com/photo-1670349148055-e11a0b3be242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top " alt="..." />
            <div className="card-body">
                <h5 className="card-title">{prop.title}</h5>
                <p className="card-text"> {prop.text} </p>
                <a href="#" className="btn btn-warning">Go somewhere</a>
            </div>
        </div>
 
  );


}

export default Card;