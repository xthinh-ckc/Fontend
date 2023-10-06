export default function Information ()
{
    return (
    <>
         <section className="py-5 ">
            <div className="container">
                <div className="row gx-5">
                <aside className="col-lg-6 imgpro">
                    <div className="border rounded-4 mb-3 d-flex justify-content-center">
                    <a data-fslightbox="mygalley" className="rounded-4" target="_blank">
                        <img  className="rounded-4 fit" src="a10.png" />
                    </a>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" >
                        <img  className="rounded-2" src="a6.png" />
                    </a>
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" >
                        <img  className="rounded-2" src="a7.png" />
                    </a>
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" >
                        <img  className="rounded-2" src="a8.png" />
                    </a> 
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank"  >
                        <img  className="rounded-2" src="a9.png" />
                    </a>
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank"  >
                        <img  className="rounded-2" src="a1.png" />
                    </a>
                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank"  >
                        <img  className="rounded-2" src="a2.png" />
                    </a>
                    </div>
                    
                   

                </aside>
                <main className="col-lg-6 ">
                    <div className="ps-lg-5">
                    <h4 className="title text-dark">
                        Compo GOJO sensei limited edition.
                    </h4>
                    <div className="d-flex flex-row my-3">
                        <div className="text-warning mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span className="ms-1">
                            xxxx
                        </span>
                        </div>
                        <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>xxxxxx</span>
                        <span className="text-success ms-2">xxxx</span>
                    </div>

                    <div className="mb-3">
                        <span className="h5">$5.000.000</span>
                        <span className="text-muted">/set</span>
                    </div>

                    <p>
                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    </p>

                    <div className="row">
                        <dt className="col-3">Type</dt>
                        <dd className="col-9">Regular</dd>

                        <dt className="col-3">Color</dt>
                        <dd className="col-9">Brown</dd>

                        <dt className="col-3">Material</dt>
                        <dd className="col-9">Plastic</dd>

                        <dt className="col-3">Brand</dt>
                        <dd className="col-9">Catier</dd>
                    </div>

                    <hr />

                    <div className="row mb-4">
                        <div className="col-md-4 col-6">
                        <label className="mb-2">Size</label>
                        <select className="form-select border border-secondary" >
                            <option>Normal</option>
                            <option>Pro</option>
                            <option>Pro Max</option>
                        </select>
                        </div>
                
                        <div className="col-md-4 col-6 mb-3">
                        <label className="mb-2 d-block">Quantity</label>
                        <div className="input-group mb-3">
                            <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                            <i className="fas fa-minus"></i>
                            </button>
                            <input type="text" className="form-control text-center border border-secondary" placeholder="20" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                            <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary border border-secondary shadow-0"> Buy now </a>
                    <a href="#" className="btn btn-warning shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                    <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3"> <i className="me-1 fa fa-heart fa-lg"></i> Save </a>
                    </div>
                </main>
                </div>
            </div>
        </section>
    </>          
    );

}