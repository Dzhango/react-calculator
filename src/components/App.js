import {Dashboard} from "./Dashboard.js";
import {FormulaScreen} from "./FormulaScreen.js";
import {OutputScreen} from "./OutputScreen.js"
import React, { useState, } from 'react';
import './App.css';

export function App() {
    const [formula, setFormula] = useState("");
    // const [result, setResult] = useState("");
    

    if(typeof(formula) !== 'number'){
        let result;
        if (formula.slice(-1) === "="){
            result = eval(formula.substring(0, formula.length-1));
            setFormula(formula+result);
            console.log(formula);
        }
    }


    return (
        <div className="main">
            <FormulaScreen formula={formula} />
            <OutputScreen formula={formula} />
            <Dashboard formula={formula} 
            setFormula={setFormula}/>
        </div>
    )
}