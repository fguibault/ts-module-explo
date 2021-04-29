//import * as blas from './node_modules/blasjs/dist/src/lib/index.js';
//import type { FortranArr } from './node_modules/blasjs/dist/src/lib/index.js';
import blas from 'blasjs';
import type { FortranArr } from 'blasjs';
import {add, subtract } from './math/lib';

function constructEq()
{
    const { dnrm2 } = blas.level1;
    const { fortranArrComplex64 } = blas.helper;

    const realData = [ 0.3, 2, 0.34, .56 ];
    const realData2 = [1,1,1,1];

    const sp1 : FortranArr = fortranArrComplex64(realData)();
    console.log('sp1:', sp1);

    const sp2 : FortranArr = fortranArrComplex64(realData2)();
    console.log('sp2:', sp2);
    let n : number = sp2.r.length;
    console.log('sp2.length:', n);
    let sp2_norm : number = dnrm2(n,sp2,1);
    console.log('sp2.norm:', sp2_norm);
    let sum = add(n, sp2_norm);
    let difference = subtract(n,sp2_norm);

    const html_elm = document.getElementById("eq1");
    const p = document.createElement("p");
    p.textContent = "somme = "+sum.toString()+", difference = "+difference;
    html_elm?.appendChild(p);
}

export { constructEq }

constructEq()