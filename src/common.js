module.exports.bestNumberFormat = bestNumberFormat;
module.exports.findLinearEqn = findLinearEqn;
module.exports.parseFormulaLatex = parseFormulaLatex;

function bestNumberFormat(x) {
    let ex = Math.abs(x / 100);
    let n = -Math.round(Math.log10(ex));
    n = n>=0?n:0;
    return x.toFixed(n);
}

function findLinearEqn(p1, p2) {
    if (p1.x != p2.x) {
        let slope = (p1.y - p2.y)/(p1.x - p2.x);
        let intercept = p1.y - slope * p1.x;
        return {
            family:'linear', slope: slope, intercept: intercept
        }
    }
    return {
        family: 'const', x: p1.x
    }
}

function parseFormulaLatex(formula) {
    switch(formula.family) {
        case "const":
            return `x = ${formula.x}`;
        case "linear":
            let intercept = formula.intercept;
            let slopeStr = bestNumberFormat(formula.slope);
            let interceptStr = bestNumberFormat(Math.abs(formula.intercept));
            return `y = ${slopeStr} \\times x ${intercept==0?'':(intercept<0 ? '-' + interceptStr:'+' + interceptStr)}`;
        case "exponential":
            return `y = ${formula.ae} \\times e^\{${formula.b} x\}`;

    }
}
