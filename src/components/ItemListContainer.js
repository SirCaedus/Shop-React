const ItemListContainer = (props) => {
    const condition = props.contenido
    if (condition === 'Balls') {
        return (<div>mostrando: {condition}</div>)
    } 
    
    if (condition === 'Meds'){
    return (<div>mostrando: {condition}</div>)
    }

    if (condition === 'Error'){
        return (<div>Error en el Sistema</div>)
    }
}

export default ItemListContainer