import { btnStep } from "./btn_step.js";


let monYear = "";
let plan = "";
let valor = "";
let selectPlan = JSON.parse(localStorage.getItem("selectPlan"));

const valorPlan = {

  ArcadeMo: 9,
  AdvanceMo: 12,
  ProMo: 15,
  ArcadeYear: 90,
  AdvanceYear: 120,
  ProYear: 150

};

export function step2 () {

  let $section =  document.querySelector(".section");
    location.hash="#/STEP2"
    $section.innerHTML = "";
  $section.innerHTML =`
   <article>
    <h2 class="title">Select your plan</h2>
      <p class="parrafo">You have the option of monthly or yearly billing</p>
      <div class="planes">


        <div class="plan">
          <input type="radio"  id="Arcade" name="plan">
          <label for="Arcade" class="lbl_p">
          </label>
         
          <div >
         
            <img src="assets/images/icon-arcade.svg" alt="arcade">
          </div>
          <div class="Arcade">
          </div>
        </div>
  
        <div class="plan">
          <input type="radio" id="Advance" name="plan">
          <label for="Advance" class="lbl_p">
          </label>
          <div >
            <img src="assets/images/icon-advanced.svg" alt="arcade">
          </div>
          <div class="Advanced">
           
          </div>
        </div>

        <div class="plan">
          <input type="radio"  id="Pro" name="plan">
          <label for="Pro" class="lbl_p">
          </label>
          <div >
            <img src="assets/images/icon-pro.svg" alt="arcade">
          </div>
        <div class="pro">
            
        </div>
        </div>
      </div> <!-- class planes -->
      
      <div class="planType">
        <span class="mes">Monthly</span>
        <input type="checkbox" id="btn_switch" >
        <label for="btn_switch" class="lbl_switch"></label>
        <span class="anio">Yearly</span>
      </div>
     
  </article>
         <a href="#/STEP1" class="back">Go Back</a>
      <button  class="next1">Next Step</button>
  `;

  btnStep()

    
    setTimeout(() => {
        

      if(selectPlan){
        
        document.getElementById(`${selectPlan.plan}`).checked = true;

        if (selectPlan.monYear === "Year"){
          document.getElementById("btn_switch").checked = true;
        }else{
          document.getElementById("btn_switch").checked = false;
  
        }
      }


      
      
    }, 10);

    planType();

}

export function planType () {

  if (!selectPlan){

    pintarMon();

  }
  if (selectPlan) {
  
    if(selectPlan.monYear === "Month"){
        pintarMon();
    }else if (selectPlan.monYear === "Year"){
      pintarYear();
    } 

  }
      
}

function pintarMon () {
 
    monYear = "Month";
    document.querySelector(".mes").style.color="var(--Marine_blue)";
    document.querySelector(".anio").style.color="var(--Cool_gray)";

    document.querySelectorAll(".plan").forEach(plan =>{
        plan.style.height ="auto";
    })

    document.querySelector(".Arcade").innerHTML = "";
    document.querySelector(".Arcade").innerHTML = `
        <b class="namePlan">Arcade</b>
        <br>
        <span class="valor" data-valor="${valorPlan.ArcadeMo}">$${valorPlan.ArcadeMo}/mo</span>
   `;

   document.querySelector(".Advanced").innerHTML = "";
   document.querySelector(".Advanced").innerHTML = `
        <b class="namePlan">Advanced</b>
        <br>
        <span class="valor" data-valor="${valorPlan.AdvanceMo}">$${valorPlan.AdvanceMo}/mo</span>
        <br>
   `;

   document.querySelector(".pro").innerHTML = "";
   document.querySelector(".pro").innerHTML = `
        <b class="namePlan">Pro</b>
        <br>
        <span class="valor" data-valor="${valorPlan.ProMo}" >$${valorPlan.ProMo}/mo</span>
        <br>
   `;

}

function pintarYear() {
 
    monYear = "Year";
    document.querySelector(".mes").style.color="var(--Cool_gray)";
    document.querySelector(".anio").style.color="var(--Marine_blue)";

    document.querySelectorAll(".plan").forEach(plan =>{
        plan.style.height ="auto";
    })

   document.querySelector(".Arcade").innerHTML = "";
   document.querySelector(".Arcade").innerHTML = `
        <b class="namePlan">Arcade</b>
        <br>
        <span class="valor" data-valor="${valorPlan.ArcadeYear}">$${valorPlan.ArcadeYear}/yr</span>
        <br>
        <span class="mesAdd">2 months free</span>
   `;

   document.querySelector(".Advanced").innerHTML = "";
   document.querySelector(".Advanced").innerHTML = `
        <b class="namePlan">Advanced</b>
        <br>
        <span class="valor" data-valor="${valorPlan.AdvanceYear}">$${valorPlan.AdvanceYear}/yr</span>
        <br>
        <span class="mesAdd">2 months free</span>
   `;

   document.querySelector(".pro").innerHTML = "";
   document.querySelector(".pro").innerHTML = `
        <b class="namePlan">Pro</b>
        <br>
        <span class="valor" data-valor="${valorPlan.ProYear}">$${valorPlan.ProYear}/yr</span>
        <br>
        <span class="mesAdd">2 months free</span>
   `;

  
}

export function btnSwitch (){

  if(document.getElementById("btn_switch").checked === false){
      pintarMon();
    }else {
      pintarYear();
    }

  
}

export function btnNext1 (e){

  if(document.getElementById("btn_switch").checked === true){
    monYear = "Year"
  }else{
    monYear = "Month"
  }

  document.querySelectorAll(`input[type="radio"]`).forEach(radio => {

    
    if(radio.checked === true){
      plan = radio.id
      valor = radio.parentElement.children[3].children[2].dataset.valor
    }
    
  })

    if (plan !==""){
      selectPlan = ({
        plan: plan,
        monYear: monYear,
        valor: valor
      })

      localStorage.setItem("selectPlan",JSON.stringify(selectPlan))
      
   
      location.hash="#/STEP3"

    }

  
  
}