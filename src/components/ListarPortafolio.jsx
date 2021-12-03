import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { eliminarAsincrono} from "../actions/actionsPortafolio";
import ReactImageMagnify from "react-image-magnify";
import swal from "sweetalert";


export const ListarPortafolio = () => {

  const { portafolio } = useSelector((store) => store.portafolio);
 
  const dispatch = useDispatch();


const MostrarAlert1=()=>{
    return(
        swal({
            icon: "success",
            title: "En Construcción...",
          })
    )
}

const MostrarAlert=()=>{
    return(
        swal({
            text: "Eliminando....",
          })
    )
}



  return (
    <div>
      <Table striped bordered hover>
        <thead></thead>
        <tbody>
          {portafolio ? (
            portafolio.map((porta, index) => (
              <tr key={index}>
                <td>
                  <div style={{ width: "242px", height: "300px" }}>
                    <div>
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            src: porta.imagen,
                          },
                          largeImage: {
                            src: porta.imagen,
                            width: 1099,
                            height: 1428,
                          },
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <h7 className="text-secondary ">Elaborado Por: </h7>
                  <br />
                  <h5>{porta.nomProf}</h5>
                  <h7 className="text-secondary ">Nombre de la tecnica usada:</h7>
                  <div className="text-warning"> {porta.nomTec}</div>
                  <h2 className="text-warning">{porta.DescripServ}</h2>
                  <h1 className="size-5">COP ${porta.precio}</h1>
                  <br />
                  <h7 className="text-secondary ">Pasar el cursor sobre la imagen para ver detalles de foto </h7>
                </td>
                 <td><button style={{width: "250px", height: "60px", background:'violet', color: 'black', borderRadius:'25px' }}
                 onClick={()=>
                 {MostrarAlert();
                dispatch(eliminarAsincrono(porta.emailProf));
                    
                 } }>Eliminar
                  </button>
                <br/> <br />
                   <button  style={{width: "250px", height: "60px", background:'violet', color: 'black', borderRadius:'25px' }}  onClick={MostrarAlert1} >Editar</button></td>
                
              </tr>
            ))
          ) : (
            <p>No se cargan datos</p>
          )}
        </tbody>
      </Table>
    </div>
  );
};
