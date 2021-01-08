import { create, all } from 'mathjs';
import { useState } from 'react';

const config = { };
const math = create(all, config);


export function Dashboard(props) {
    const [input, setInput] = useState("");
    function handleClick(e){
        console.log(props.formula)
        e.preventDefault();
        if (e.target.value === "AC"){
            props.setFormula("");
        } else {
            if ((props.formula.slice(-1)).match(/[\*\+\/\-\=\.]/g) 
                    && e.target.value.match(/[\*\+\/\-\=\.]/g)){
                        return;
            } else {
                props.setFormula(props.formula + e.target.value);
            }

        }
    }

    function handleChange(e){
        setInput(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
        const inputArr = input.split(',');
        const f = math.parse(inputArr[0]);
        const x = math.parse(inputArr[1]);
        props.setFormula(parseInt((math.derivative(f, x).evaluate({x: inputArr[2]}))));
    }
    return (<div className="dashboard">
                    <button onClick={handleClick}value="AC">AC</button>
                    <button onClick={handleClick}value="/">/</button>
                    <button onClick={handleClick}value="*">X</button>

                    <button onClick={handleClick}value="-">-</button>
                    <button onClick={handleClick}value="+">+</button>
                    <button onClick={handleClick}value="=">=</button>
               
                    <button onClick={handleClick}value="7">7</button>
                    <button onClick={handleClick}value="8">8</button>
                    <button onClick={handleClick}value="9">9</button>
               
                    <button onClick={handleClick}value="4">4</button>
                    <button onClick={handleClick}value="5">5</button>
                    <button onClick={handleClick}value="6">6</button>
                
                    <button onClick={handleClick}value="1">1</button>
                    <button onClick={handleClick}value="2">2</button>
                    <button onClick={handleClick}value="3">3</button>
                    <button onClick={handleClick}value="0">0</button>
                    <button onClick={handleClick}value=".">.</button>
                    <form onSubmit={handleSubmit}>
                        <label >Derivative sample: x^2, x, value</label> 
                        <input type="text" value={input} onChange={handleChange}/>
                        <input type="submit"/>       
                    </form>
           </div>) 
}