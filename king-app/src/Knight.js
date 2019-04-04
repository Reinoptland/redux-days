import React from 'react'

const Knight = (props) => {
    return (<form style={{backgroundColor: 'red'}} onSubmit={props.conquer}>
        <h1>KNIGHT - CONQUERING:</h1>
        <label>Kind</label>
        <input 
            name="kind" 
            value={props.conquering.kind} 
            onChange={props.handleChange} />
        <label>Income</label>
        <input 
            name="income" 
            value={props.conquering.income} 
            onChange={props.handleChange} />
        <input type='submit'/>
    </form>)
}

export default Knight