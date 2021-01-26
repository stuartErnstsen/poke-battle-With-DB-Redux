

const Region = (props) => {
    const { url, name } = props.regionObj;
    const { initPokemonListFn, changeViewFn } = props;
    const handleClick = () => {
        initPokemonListFn(url);
        changeViewFn('pokemonListView')
    }
    return (
        <h3 onClick={handleClick}>{name}</h3>
    )
}


export default Region;