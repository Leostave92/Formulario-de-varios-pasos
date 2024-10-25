import { btnStep } from "./btn_step.js";

let moyr ="";


export function step4 () {
    const plan = JSON.parse(localStorage.getItem("selectPlan"));
  
    let $section =  document.querySelector(".section");
    location.hash="#/STEP4";
   if(plan.monYear ==="Year"){
    moyr="yr"
   }else{
    moyr="mo"
   }

  $section.innerHTML = "";
  $section.innerHTML =`
     <h2 class="title">Finishing up</h2>
      <p class="parrafo">Double-check everything looks OK before confirming.</p>
      <div class="datos_finish">
        <div class="nomb_mes">
          <p class="tipo">${plan.plan} (${plan.monYear}ly) <br>
          <a href="">Change</a></p>
          <p class="tipo">$${plan.valor}/${moyr}</p>
        </div>
        <div class="datosF">
    
        </div>
      </div>
      
      <a href="#/STEP3" class="back">Go Back</a>
      <button  class="confirm">Confirm</button>
      
    
      `;


      addPick();


      btnStep();
}

function addPick (){
  const nombrePick = JSON.parse(localStorage.getItem("NombrePick"));
  const valorPick =JSON.parse(localStorage.getItem("ValorPick"));
  const plan = JSON.parse(localStorage.getItem("selectPlan"));

   const datosF = document.querySelector(".datosF");

   if (nombrePick){
    if(valorPick){

          let nombres = "";
          nombrePick.forEach((nom,i) => {
              if(nom === "pick1"){
                nombres = "Online service"
              } else if(nom === "pick2"){
                nombres = "Larger storage"
              } else if (nom === "pick3"){
                nombres = "Customizable Profile"
              }
          
            datosF.insertAdjacentHTML("beforebegin",`
              <div class="datos_pick">
                      <p class="nombPick">${nombres}</p>
                      <p class="valorpick">+$${valorPick[i]}/${moyr}</p>
              </div>
              `);        
              
      });

      if(plan){
        const datos_finish = document.querySelector(".datos_finish");

        let suma = valorPick.reduce((acumulador, valorActual) => acumulador +  Number(valorActual), 0);
        suma += Number(plan.valor);
        datos_finish.insertAdjacentHTML("afterend",`
          <div class="total_plan">
              <span class="nombPick" >Total (per ${plan.monYear.toLowerCase()})</span> <span class="total">+$${suma}/${moyr}</span>
          </div>
          `);
      }
    }
 
  }
  
}

export function btn_confirm () {
  let $section =  document.querySelector(".section");

  $section.innerHTML = "";
  $section.innerHTML =`
    <div class="thank">
        <img src="assets/images/icon-thank-you.svg" alt="">
        <h2>Thank you!</h2>
        <p>Thanks for confirming your subcription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
   </div>
  `;
  

  localStorage.removeItem("DatosPersona");
  localStorage.removeItem("NombrePick");
  localStorage.removeItem("ValorPick");
  localStorage.removeItem("selectPlan");


}