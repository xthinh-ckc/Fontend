export default function CardNews(props)
{
    return(
        <>
        <div className="mainnews">
        <div classNameName="row gx-5">
            <div className="col-md-6 mb-4">
                <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                <img src={props.data.pic} className="img-fluid" />
                <a href="#!">
                    <div className="mask" ></div>
                </a>
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day</span>
                <h4><strong>{props.data.newsname}</strong></h4>
                <p className="text-muted">
                {props.data.content}
                </p>
                <button type="button" className="btn btn-primary">Read more</button>
            </div>
            </div>
        </div>
   
        </>
    );
}