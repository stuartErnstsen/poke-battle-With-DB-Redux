

const Region = (props) => {
    return (
        <h3 onClick={() => props.initPokemonListFn(props.regionObj.url)}>{props.regionObj.name}</h3>
    )
}


export default Region;