import { useEffect } from 'react';
import { connect } from "react-redux";
import { initPokemonList, initRegionList } from '../../ducks/pokemonReducer';
import Region from './Region';

const RegionList = props => {
    const { initRegionList, changeViewFn } = props
    useEffect(() => {
        initRegionList();
    }, [initRegionList])

    const { regionList } = props

    return (
        <section>
            {regionList[0]
                ? (
                    <div>
                        {regionList.map((region, i) => <Region key={i} regionObj={region} changeViewFn={changeViewFn} initPokemonListFn={props.initPokemonList} />)}
                    </div>
                ) : (
                    <div></div>
                )
            }
        </section>
    )
}

const mapStateToProps = stateRedux => stateRedux.pokemon

export default connect(mapStateToProps, { initPokemonList, initRegionList })(RegionList)