export default function Card(props)
{
    return(
        <>  
            < div className="col location">
                <div className="card" >
                  <img  src={props.data.pic} className="card-img-top imgcard " alt="Skyscrapers"/>
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <p className="card-text">{props.data.name}</p>
                    <p className="card-text">{props.data.price}</p>
                    <button className="btn btn-primary">Buy</button>
                  </div>
              </div>
             </div>        
        </>
    );

}