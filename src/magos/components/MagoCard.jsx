export const MagoCard = ({imagen, nombre}) => {
    return( 
     
        <div className="contenedor container">
            <img className="imagen" src={imagen} alt={nombre} />
        </div> 
    
    )
}
