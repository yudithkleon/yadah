import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { useSelector} from "react-redux";
import ReactImageMagnify from "react-image-magnify";
import { Link } from "react-router-dom";

const LisPortafolioCliente = () => {
  
  const { portafolio } = useSelector((store) => store.portafolio);

  // const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  return (
    <div>

      <Table striped bordered hover>
        <thead></thead>
        <tbody>
          {portafolio ? (
            portafolio.map((porta, index) => (
              <tr key={index}>
                <Modal key={index} 
         
         show={show}
         onHide={() => setShow(false)}
         dialogClassName="modal-100w"
         aria-labelledby="example-custom-modal-styling-title"
       >
       <Modal.Header closeButton>
       <Modal.Title id="example-custom-modal-styling-title">
     {porta.nomTec}
       </Modal.Title>
       </Modal.Header>
       <Modal.Body>
       <ReactImageMagnify
     {...{
       smallImage: {
       alt: "imagen",
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
       </Modal.Body>
       </Modal>
                <td>
                  <div style={{ width: "242px", height: "313px" }}>
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
                  <h7 className="text-secondary ">
                    Nombre de la técnica usada:
                  </h7>
                  <div style={{ color: "violet" }}> {porta.nomTec}</div>
                  <h2 >{porta.DescripServ}</h2>
                  <h1 className="size-5">COP ${porta.precio}</h1>
                  <br />
                  <h7 className="text-secondary ">
                    Pasar el cursor sobre la imagen para ver detalles de foto{" "}
                  </h7>
                </td>
                <td>
                  <Link to="/agendar">
                    <button
                      style={{
                        alignContent: "center",
                        width: "150px",
                        height: "80px",
                        marginTop: "50px",
                        marginLeft: "30px",
                        background: "violet",
                        color: "black",
                        border: "1px solid black",
                        borderRadius: "25px",
                      }}
                    >
                      Agendar Servicio
                    </button>
                  </Link>
                  <br /> <br />
                  <>
                    <Button
                      style={{
                        alignContent: "center",
                        width: "150px",
                        height: "80px",
                        marginTop: "50px",
                        marginLeft: "30px",
                        background: "violet",
                        color: "black",
                        border: "1px solid black",
                        borderRadius: "25px",
                      }}
                      onClick={() => setShow(true)}
                    >
                      Detalle Imagen
                    </Button>
                  </>
                </td>
              </tr>
            ))
          ) : (
            <p>No se cargan datos</p>
          )}
        </tbody>
      </Table>

 
      
    </div >
  );
};

export default LisPortafolioCliente;
