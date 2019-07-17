module.exports.bestNumberFormat = bestNumberFormat;
module.exports.findLinearEqn = findLinearEqn;
module.exports.parseFormulaLatex = parseFormulaLatex;
module.exports.distance = distance;
module.exports.findClosest = findClosest;

function bestNumberFormat(x, digits = 0) {
    if (!x) return x;
    let ex = Math.abs(x / 100);
    let n = -Math.round(Math.log10(ex));
    n = n>=digits?n:digits;
    return (Math.round(x*(10**n))/(10**n)).toFixed(n);
}

function findLinearEqn(p1, p2, isPickett) {
    let p1X, p1Y, p2X, p2Y;
    if (isPickett) {
        p1X = Math.log10(p1.x);
        p1Y = Math.log10(p1.y);
        p2X = Math.log10(p2.x);
        p2Y = Math.log10(p2.y);
    } else {
        p1X = p1.x;
        p1Y = p1.y;
        p2X = p2.x;
        p2Y = p2.y;
    }
    if (p1X != p2X) {
        let slope = (p1Y - p2Y)/(p1X - p2X);
        let intercept = p1Y - slope * p1X;
        return {
            family:'linear', slope: slope, intercept: intercept
        }
    }
    return {
        family: 'const', x: p1X
    }
}
//function findLinearEqn(p1, p2) {
    //if (p1.x != p2.x) {
        //let slope = (p1.y - p2.y)/(p1.x - p2.x);
        //let intercept = p1.y - slope * p1.x;
        //return {
            //family:'linear', slope: slope, intercept: intercept
        //}
    //}
    //return {
        //family: 'const', x: p1.x
    //}
//}

function parseFormulaLatex(formula) {
    let latex = formula.latex || '';
    switch(formula.family) {
        case "const":
            latex = `x = ${formula.x}`;
            break;
        case "linear":
            let intercept = formula.intercept;
            let slopeStr = bestNumberFormat(formula.slope, 4);
            let interceptStr = bestNumberFormat(Math.abs(formula.intercept), 4);
            latex = `y = ${slopeStr} \\times x ${intercept==0?'':(intercept<0 ? '-' + interceptStr:'+' + interceptStr)}; R^2=${bestNumberFormat(formula.r2, 4)}`;
            break;
        case "exponential":
            latex = `y = ${bestNumberFormat(formula.ae, 4)} \\times e^\{${bestNumberFormat(formula.b, 4)} x\}; R^2=${bestNumberFormat(formula.r2, 4)}`;
            break;
        case "power":
            latex = `y = ${bestNumberFormat(formula.coefficient, 4)} \\times x^\{${bestNumberFormat(formula.exponent, 4)}\}; R^2=${bestNumberFormat(formula.r2, 4)}`;
            break;
        case "mse":
            latex = `MSE = ${bestNumberFormat(formula.mse, 4)}`;
            break;
    }
    return latex.replace(/\+\-/g, '-');
}

function distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2);
}
function findClosest(p, points) {
    let minDistance = 100000;
    let minIdx = undefined;
    for (let i = 0; i < points.length; i++) {
        let d = distance(p, points[i]);
        if (d < minDistance) {
            minDistance = d;
            minIdx = i;
        }
    }
    return {
        distance: minDistance,
        idx : minIdx
    }
}
