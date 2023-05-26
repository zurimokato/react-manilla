import React from 'react'

function Manilla() {
  return (
    <div  className='container mt-5'>
            <h1 className='text-center'>Manillas</h1>
            <hr />

            <div className="row">
            <div className="col-8">
                <h4 className="text-center"> Selecciona tu configuración para las Manillas </h4>
                <form >
                    <div className="row">
                        <div className="col-4">
                            <select name="select-material" id="material" className="form-select">
                                <option value="1">Cuero</option>
                                <option value="2">Cuerda</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <select name="select-dije" id="dije" className="form-select">
                                <option value="1">Martillo</option>
                                <option value="2">Ancla</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <select name="select-tipo" id="tipo" className="form-select">
                                <option value="1">Oro, Oro rosado</option>
                                <option value="2">Plata</option>
                                <option value="3">Niquel</option>
                            </select>
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button type='button' className='btn btn-primary'>Agregar al carrito</button>
                        </div>
                    </div>
                   
                </form>
                
            </div>
            <div className="col-4">
                <h4 className="text-center">Carrito de Manillas</h4>
                <div className="card mb-4">
                    <div className="card-body p-4">
                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                                className="img-fluid" alt="Generic placeholder image"/>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Name</p>
                                    <p className="lead fw-normal mb-0">iPad Air</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Color</p>
                                    <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style={{color: '#fdd8d2'}}></i>
                                        pink rose</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Quantity</p>
                                    <p className="lead fw-normal mb-0">1</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Price</p>
                                    <p className="lead fw-normal mb-0">$799</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Total</p>
                                    <p className="lead fw-normal mb-0">$799</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

    </div>
  )
}

export default Manilla