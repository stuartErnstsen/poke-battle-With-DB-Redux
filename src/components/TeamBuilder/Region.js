

const Region = (props) => {
    const { url, name } = props.regionObj
    return (
        <h3 onClick={() => props.initPokemonListFn(url)}>{name}</h3>
    )
}


export default Region;