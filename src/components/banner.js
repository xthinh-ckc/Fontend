export default function Banner()
{
    return(
        <>  
        <div className="banner">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active" >
                    <img src="a4.png" className="card-img-top  " alt="..."/> 
                    </div> 
                    <div className="carousel-item">
                    <img src="a2.png" className=" card-img-top " alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="a5.png" className=" card-img-top " alt="..."/>
                
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>       
        </div>
        </>
    );
}