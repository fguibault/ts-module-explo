//import * as blas from './node_modules/blasjs/dist/src/lib/index.js';
//import type { FortranArr } from './node_modules/blasjs/dist/src/lib/index.js';
import blas from 'blasjs';
function constructEq() {
    const { dnrm2 } = blas.level1;
    const { fortranArrComplex64 } = blas.helper;
    const realData = [0.3, 2, 0.34, .56];
    const realData2 = [1, 1, 1, 1];
    const sp1 = fortranArrComplex64(realData)();
    console.log('sp1:', sp1);
    const sp2 = fortranArrComplex64(realData2)();
    console.log('sp2:', sp2);
    let n = sp2.r.length;
    console.log('sp2.length:', n);
    let sp2_norm = dnrm2(n, sp2, 1);
    console.log('sp2.norm:', sp2_norm);
    const html_elm = document.getElementById("eq1");
    const p = document.createElement("p");
    p.textContent = sp2_norm.toString();
    html_elm === null || html_elm === void 0 ? void 0 : html_elm.appendChild(p);
}
export { constructEq };
