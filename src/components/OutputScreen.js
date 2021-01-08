export function OutputScreen(props){
    let output;
    if(typeof(props.formula) !== 'number' ){
        if (props.formula.slice(-1).match(/[\*\+\/\-\.]/g)){ 
            output = props.formula.slice(-1);
        } else {
            const formulaArr = props.formula.split(/[\*\+\/\-\=\.]/g);
            output = formulaArr[formulaArr.length-1];
        }
    } else {
        output = props.formula;
    }

    return (<div>
                {output}
            </div>)
}