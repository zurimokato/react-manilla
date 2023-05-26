import React from 'react'

function Manilla() {
  return (
    <div  className='container mt-5'>
            <h1 className='text-center'>Manillas</h1>
            <hr />
            <div className="row">
            <div className="col-5">
                <h4 className="text-center"> Selecciona tu configuración para las Manillas </h4>
                <form >
                    <div className="row">
                        <div className="col-4">
                            <select name="select-material" id="material" className="form-select">
                                <option value="1">Cuero</option>
                                <option value="2">Cuerda</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select name="select-dije" id="dije" className="form-select">
                                <option value="1">Martillo</option>
                                <option value="2">Ancla</option>
                            </select>
                        </div>
                        <div className="col-5">
                            <select name="select-tipo" id="tipo" className="form-select">
                                <option value="1">Oro, Oro rosado</option>
                                <option value="2">Plata</option>
                                <option value="3">Niquel</option>
                            </select>
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button type='button' className='btn btn-primary'>
                            <svg cxmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>&nbsp;Agregar al carrito</button>
                        </div>
                    </div>
                   
                </form>
                
            </div>
            <div className="col-7">
                <h4 className="text-center">Carrito de Manillas</h4>
                <div className="card mb-4">
                    <div className="card-body p-4">
                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <img src="https://http2.mlstatic.com/D_NQ_NP_642546-MCO50997450359_082022-O.jpg"
                                className="img-fluid" alt="Generic placeholder image"/>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Material</p>
                                    <p className="lead fw-normal mb-0">Cuerda</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Dije</p>
                                    <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style={{color: '#fdd8d2'}}></i>Martillo</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Cantidad</p>
                                    <div className='input-group mb-3'>
                                        <input className="form-control text-center" type="number" name="cantidad" id="cantidad" defaultValue={1} />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                    <p className="small text-muted mb-4 pb-2">Precio</p>
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