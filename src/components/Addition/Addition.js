import React from 'react';
import {connect} from 'react-redux';

const Addition = (props) => {
    const handleChange = (e) => {
        if(e.currentTarget.name === "numberA"){
            props.setA(Number(e.currentTarget.value));
        }else if(e.currentTarget.name === "numberB"){
            props.setB(Number(e.currentTarget.value));
        }
    }

    const handleSave = () => {
        props.setTotal();
    }

    return (
        <div>
            <input type="text" value={props.valueA} name="numberA" onChange={handleChange} onKeyUp={handleSave} />
            <input type="text" value={props.valueB} name="numberB" onChange={handleChange} onKeyUp={handleSave} />
            <span> = <b>{props.total}</b></span>
        </div>
    );
}

const mapStateToProps = (store) => {
    console.log('store', store);
    return {
        valueA: store.valueA,
        valueB: store.valueB,
        total: store.total,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setA: (a) => dispatch({type: 'SETA', payload: a}),
        setB: (b) => dispatch({type: 'SETB', payload: b}),
        setTotal: () => dispatch({type: 'ADD'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Addition);