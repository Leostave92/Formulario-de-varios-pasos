
import {btnNext,step1,validarInput} from "./step_1.js";
import {  btnNext1, btnSwitch, step2} from "./step_2.js";
import {selectComplemento, btnNext2, step3} from "./step_3.js"
import { btn_confirm, step4 } from "./step_4.js";


document.addEventListener("DOMContentLoaded",(e) => {
   
    step1();

});

window.addEventListener("hashchange",() =>{

    let {hash} = location;

    switch (hash) {
        case !hash || "#/STEP1" :
            step1();
            break;
        case "#/STEP2":
            step2();
            break;
        case "#/STEP3":
            step3();
            break;
        case "#/STEP4":
            step4();
            break;
    }
})

document.addEventListener("keyup",(e) => {
    validarInput(e);
});

document.addEventListener("click",(e) => {



    if(e.target.matches(".next")){
        btnNext(e);
        
    }

    if(e.target.matches("#btn_switch")){
       
       btnSwitch();
    }
  
    if(e.target.matches(".next1")){
        btnNext1(e)
    }
    
    if (e.target.matches(".comple_lbl")){
        selectComplemento(e);
    }
   
    if(e.target.matches(".next2")){
        btnNext2(e)
    }

    if(e.target.matches(".confirm")){
        btn_confirm();
    }

});

