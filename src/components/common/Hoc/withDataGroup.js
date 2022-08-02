import React, { Component } from "react";
import PropTypes from "prop-types";




export default function withDataGroup(Comp) {

    return class DataGroupWrapper extends Component {
        static defaultProps = {
            datas: []
        }
        static propTypes = {
            datas: PropTypes.array.isRequired
        }

        render() {
            const comps = this.props.datas.map(it => (<Comp key={it.value} info={it} {...this.props}/>))
            return (
                <>
                    {comps}
                </>
            )
        }
    }
}