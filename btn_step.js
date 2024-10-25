export  function btnStep () {
    let {hash} = location;

    switch (hash) {
        case !hash || "#/STEP1" :
            document.querySelector(".s1").style.backgroundColor = "var(--Light_blue)";
            document.querySelector(".s1").style.color = "var(--Marine_blue)";

            document.querySelector(".s2").style.backgroundColor = "transparent";
            document.querySelector(".s3").style.backgroundColor = "transparent";
            document.querySelector(".s4").style.backgroundColor = "transparent";


            document.querySelector(".s2").style.color = "var(--Light_gray)";
            document.querySelector(".s3").style.color = "var(--Light_gray)";
            document.querySelector(".s4").style.color = "var(--Light_gray)";
            break;
        case "#/STEP2":
            document.querySelector(".s2").style.backgroundColor = "var(--Light_blue)";
            document.querySelector(".s2").style.color = "var(--Marine_blue)";

            document.querySelector(".s1").style.backgroundColor = "transparent";
            document.querySelector(".s3").style.backgroundColor = "transparent";
            document.querySelector(".s4").style.backgroundColor = "transparent";


            document.querySelector(".s1").style.color = "var(--Light_gray)";
            document.querySelector(".s3").style.color = "var(--Light_gray)";
            document.querySelector(".s4").style.color = "var(--Light_gray)";
            break;
        case "#/STEP3":
            document.querySelector(".s3").style.backgroundColor = "var(--Light_blue)";
            document.querySelector(".s3").style.color = "var(--Marine_blue)";

            document.querySelector(".s2").style.backgroundColor = "transparent";
            document.querySelector(".s1").style.backgroundColor = "transparent";
            document.querySelector(".s4").style.backgroundColor = "transparent";


            document.querySelector(".s2").style.color = "var(--Light_gray)";
            document.querySelector(".s1").style.color = "var(--Light_gray)";
            document.querySelector(".s4").style.color = "var(--Light_gray)";
            break;
        case "#/STEP4":
            document.querySelector(".s4").style.backgroundColor = "var(--Light_blue)";
            document.querySelector(".s4").style.color = "var(--Marine_blue)";

            document.querySelector(".s2").style.backgroundColor = "transparent";
            document.querySelector(".s3").style.backgroundColor = "transparent";
            document.querySelector(".s1").style.backgroundColor = "transparent";


            document.querySelector(".s2").style.color = "var(--Light_gray)";
            document.querySelector(".s3").style.color = "var(--Light_gray)";
            document.querySelector(".s1").style.color = "var(--Light_gray)";
            break;
    }
}