import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc, query, orderBy, where, getDoc, getDocs } from 'firebase/firestore'

function Manilla() {
    const [material, setMaterial] = useState("");
    const [tipo, setTipo] = useState("");
    const [dije, setDije] = useState("");
    const [manilla, setManilla] = useState();
    const [precio, setPrecio] = useState(1);
    const [id, setId] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [total, setTotal] = useState(1)
    const [showModal, setShowModal] = useState(false)

    const [manillas, setManillas] = useState([]);

    const addCarrito = async e => {
        e.preventDefault();

        if (material === "" || dije === "" || tipo === "") {
            setShowModal(true);

            alert("Hay obciones no seleccionadas por favor seleccionar obciones mandatorias ");
            return;

        }

        console.log(material);
        console.log(dije);
        console.log(tipo);

        const manillasRef = collection(db, "manillas");

        const q = query(
            manillasRef,
            where("material", "==", material),
            where("dije", "==", dije),
            where("tipo", "==", tipo)
        );

        const querySnapshot = await getDocs(q);
        const manis = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, cantidad: 1 }));
        agregarManilla(manis[0]);
        console.log(manillas);


    }

    const agregarManilla = (manilla) => {
        const man = manillas.find((m) => m.id == manilla.id);
        if (man) {
            man.cantidad = man.cantidad + 1;
            setManillas([...manillas]);
        }else{
            setManillas((manillas) => [...manillas, manilla]);

        }



    }



    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Manillas</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4 className="text-center"> Selecciona tu configuración para las Manillas </h4>
                    <form onSubmit={addCarrito}>
                        <div className="row">
                            <div className="col-4">
                                <select name="select-material" id="material" className="form-select" value={material} onChange={(e) => setMaterial(e.target.value)}>
                                    <option value="">Seleccione un material</option>
                                    <option value="cuero" >Cuero</option>
                                    <option value="cuerda">Cuerda</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <select name="select-dije" id="dije" className="form-select" value={dije} onChange={(e) => setDije(e.target.value)}>
                                    <option value="">Seleccione un dije</option>
                                    <option value="martillo">Martillo</option>
                                    <option value="ancla">Ancla</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <select name="select-tipo" id="tipo" className="form-select" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                                    <option value="">Seleccione un tipo</option>
                                    <option value="oro, oro rosado" >Oro, Oro rosado</option>
                                    <option value="plata">Plata</option>
                                    <option value="niquel">Niquel</option>
                                </select>
                            </div>

                        </div>
                        <div className="row mt-2">
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button className='btn btn-primary btn-block'>
                                    Agregar al carrito</button>
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
                                        className="img-fluid" alt="Generic placeholder image" />
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
                                        <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style={{ color: '#fdd8d2' }}></i>Martillo</p>
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