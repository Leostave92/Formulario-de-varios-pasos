import { btnStep } from "./btn_step.js";


let datosPerso = JSON.parse(localStorage.getItem("DatosPersona")) || [];



export  function step1 () {

 location.hash="#/STEP1"
  
    let $section =  document.querySelector(".section");

    $section.innerHTML = `
      <article class="Info_Personal">
        <h2 class="title">Personal Info</h2>
        <p class="parrafo">
          please provide your, email address, and phone number.
        </p>


        <form class="formulario">
          <label for="name">
            <span>Name</span>  <span class="error" id="name">This field is required</span>
            </label>
            <input type="text" name="name" placeholder="Name" required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$">


    
          <label for="email">
            <span>Email Address</span>    <span class="error" id="email">This field is required</span> 
          </label>
          <input type="email" name="email" placeholder="Email" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9\-]+(\.[a-z0-9\-]+)*(\.[a-z]{2,15})$" required>


    
          <label for="phone">
            <span>Phone Number</span>    <span class="error" id="phone">This field is required</span> 
          </label>
          <input type="tel" name="phone" placeholder="3001234567" pattern="^(?:\+57)?(?:3[0-9]{9}|[1-9][0-9]{0,1}[0-9]{7})$" required>

         
          
        </form>
         
    </article>
    
    
    <button class="next">Next Step</button>
    
    `;
   
       
    setTimeout(() => {
        document.querySelectorAll(".error").forEach(span => {
            span.style.display = "none"
        })

      let input1 = document.querySelectorAll(".formulario [pattern]")[0],
      input2 = document.querySelectorAll(".formulario [pattern]")[1],
      input3 = document.querySelectorAll(".formulario [pattern]")[2];

     
        if (datosPerso.nombre !== undefined){
          input1.value = datosPerso.nombre
          input2.value = datosPerso.correo
          input3.value = datosPerso.telefono
        
        }
      
      

      

      }, 10);
      btnStep();
    
}

 export function validarInput (e) {

  if (e.target.matches(".formulario [pattern]")){
      let $input = e.target,
       pattern = $input.pattern

    if (pattern && $input.value.trim() !==""){

      let regex = new RegExp(pattern);

      return regex.exec($input.value)
      ? document.getElementById($input.name).style.display ="none"
      : document.getElementById($input.name).style.display ="block"
    }
    
  }

}

export function btnNext (e) {

  
  e.preventDefault();

  let input1 = document.querySelectorAll(".formulario [pattern]")[0],
      input2 = document.querySelectorAll(".formulario [pattern]")[1],
      input3 = document.querySelectorAll(".formulario [pattern]")[2];
      if(input1.value ===""){
        document.getElementById(input1.name).style.display ="block"
      } else if (input2.value ==="") {
        document.getElementById(input2.name).style.display ="block"
      }else if (input3.value ===""){
        document.getElementById(input3.name).style.display ="block"
      }else{
        
        datosPerso = ({
          nombre: input1.value,
          correo: input2.value,
          telefono: input3.value
        })

        localStorage.setItem("DatosPersona",JSON.stringify(datosPerso))
     
         location.hash="#/STEP2"
      }
    
}
