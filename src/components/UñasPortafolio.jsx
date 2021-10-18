import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import ReactImageMagnify from 'react-image-magnify'

export const UñasPortafolio = ({buscar}) => {

   const { portafolio } = useSelector((store) => store.portafolio)

    const [busPorta, setBusPorta] = useState(portafolio)

    useEffect(() => {
       setBusPorta(portafolio)
    }, [portafolio])

    useEffect(() => {
       setBusPorta(portafolio.filter(tecnica=> tecnica.nomTec.toLowerCase().includes(buscar)))
    }, [buscar, portafolio])

    
    return (
        <div>
            <Table>
                <thead></thead>
                <tbody>
                    {
                       busPorta.map((porta, index) => (
                            <tr key={index}>

                                { 
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
                                    </div>
                                </td>
                              
                              }
                             </tr>
                     ))
                   }

                </tbody>
            </Table>
        </div>
    )
}
