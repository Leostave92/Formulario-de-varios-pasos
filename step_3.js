import { btnStep } from "./btn_step.js";



let nombrePick = JSON.parse(localStorage.getItem("NombrePick"));
let valorPick = JSON.parse(localStorage.getItem("ValorPick"));
const pickAdd = {
  onlineMo: 1,
  largerMo: 2,
  customizableMo: 2,
  onlineYear: 10,
  largerYear: 20,
  customizableYear: 20
};


export function step3 () {
    let selectPlan = JSON.parse(localStorage.getItem("selectPlan"));
    let $section =  document.querySelector(".section");
    location.hash="#/STEP3";
   
  $section.innerHTML = "";
  $section.innerHTML =`
      <h2 class="title">Pick add-ons</h2>
      <p class="parrafo">Add-ons help enhance your gaming experience.</p>

      <div class="complementos">
        <label for="pick1" class="comple_lbl" id="online">
          <input class="comple_inp" type="checkbox"  id="pick1" name="Online Service" >
          <p class="comple_p">
            Online Service <br>
            <span class="comple_desc">Access to multiplayer games</span>
          </p>
          
        </label>

        <label for="pick2" class="comple_lbl" id="larger">
          <input class="comple_inp" type="checkbox"  id="pick2" name="Larger storage" >
          <p class="comple_p">
            Larger storage <br>
            <span class="comple_desc">Extra 1TB of cloud save</span>
          </p>
          
        </label>

        <label for="pick3" class="comple_lbl" id="custom">
          <input class="comple_inp" type="checkbox"  id="pick3" name="Customizable profile" >
          <p class="comple_p">
            Customizable profile <br>
            <span class="comple_desc">Custom theme on your profile</span>
          </p>
          
        </label>

      </div>
      <a href="#/STEP2" class="back">Go Back</a>
      <button  class="next2">Next Step</button>

      `;

    
 


    if (selectPlan.monYear === "Month"){
      pintarMes();
    }else{
      pintarAnio();
    }

    if(nombrePick){
      nombrePick.forEach(p => {

        if(document.getElementById(p))
          document.getElementById(p).checked = true
      })
    }

   btnStep();

}

function pintarMes () {
 

  document.getElementById("online").insertAdjacentHTML("beforeend",`
  <p class="comple_precio" data-valor="${pickAdd.onlineMo}">+$${pickAdd.onlineMo}/mo</p>
  `);

  document.getElementById("larger").insertAdjacentHTML("beforeend",`
  <p class="comple_precio" data-valor="${pickAdd.largerMo}">+$${pickAdd.largerMo}/mo</p>
  `);

  document.getElementById("custom").insertAdjacentHTML("beforeend",`
  <p class="comple_precio" data-valor="${pickAdd.customizableMo}">+$${pickAdd.customizableMo}/mo</p>
  `);
  
}

function pintarAnio () {
 
  document.getElementById("online").insertAdjacentHTML("beforeend",`
  <p class="comple_precio" data-valor="${pickAdd.onlineYear}">+$${pickAdd.onlineYear}/yr</p>
  `);

  document.getElementById("larger").insertAdjacentHTML("beforeend",`
  <p class="comple_precio" data-valor="${pickAdd.largerYear}">+$${pickAdd.largerYear}/yr</p>
  `);

  document.getElementById("custom").insertAdjacentHTML("beforeend",`
  <p class="comple_precio" data-valor="${pickAdd.customizableYear}">+$${pickAdd.customizableYear}/yr</p>
  `);
}

export function selectComplemento (e) {

    let $check = document.getElementById(e.target.children[0].id)
  
    if (!$check.checked){
        e.target.style.border= "1px solid var(--Purplish_blue)";
    }else{
        e.target.style.border = "1px solid var(--Cool_gray)";
    } 

}

export function btnNext2 () {
   
    nombrePick = "";
    valorPick ="";
    document.querySelectorAll(`input[type="checkbox"]`).forEach(check => {

      if (check.checked === true){
        let nombrePickadd = check.id;
        let valorPickadd = check.nextElementSibling.nextElementSibling.dataset.valor;
        nombrePick = [...nombrePick,nombrePickadd];
        valorPick = [...valorPick, valorPickadd]
          
        };
              
        localStorage.setItem('NombrePick', JSON.stringify(nombrePick));
        localStorage.setItem('ValorPick', JSON.stringify(valorPick));
    })
      
   
    location.hash="#/STEP4"
   
      
}
      
