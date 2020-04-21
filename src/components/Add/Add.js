import React from 'react';
import {connect} from 'react-redux';

const Add = (props) => {
    const {firstValue, secondValue, total, setFirstValue, setSecondValue, setTotal, todoList, addItem} = props;

    const handleFirstChange = (e) => {
        setFirstValue(Number(e.target.value));
    }

    const handleSecondChange = (e) => {
        setSecondValue(Number(e.target.value));
    }

    const handleSum = () => {
        setTotal();
    }

    const handleAdd = () => {
        addItem(total.toString());
    }

    return (
        <div>
            <label>First value - <input value={firstValue} onChange={handleFirstChange} onKeyUp={handleSum} /></label>
            <label>Second value - <input value={secondValue} onChange={handleSecondChange} onKeyUp={handleSum} /></label>
            <label>Total - {total}</label>

            {todoList.length > 0 && <ul>{todoList.map((todo, index) => <li key={index}>{todo.Title}<button>Delete</button><button>Complete</button></li>)}</ul>}

            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        firstValue: store.add.firstValue,
        secondValue: store.add.secondValue,
        total: store.add.total,
        todoList: store.add.list,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFirstValue: (value) => dispatch({type: 'SET_FIRST_VALUE', payload: value}),
        setSecondValue: (value) => dispatch({type: 'SET_SECOND_VALUE', payload: value}),
        setTotal: () => dispatch({type: 'SET_TOTAL'}),
        addItem: (title) => dispatch({type: 'ADD_ITEM', payload: {Title: title}}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);