const modal = document.querySelector("#modal"); //en konstant variable kaldet modal, fundet i html ved hjælp af id'et modal
const title = document.querySelector("#title");//en konstant variable kaldet title, fundet i html ved hjælp af id'et title

const arrImages = [ //konstant variable som er et array. Der er fire arrays i array'et.
    ["blomst.jpg", "Fine roser"], //der er to values i hvert af de fire arrays.
    ["blomst2.jpg", "Hvide roser"],
    ["blomst3.jpg", "Også fine hvide roser her"],
    ["blomst4.jpg", "Fin blomst"],
];

console.log(arrImages);

let html = ""; //variable kaldet html, med en tom værdi, som er klar til at køre en string.

arrImages.forEach(function(value) { //for hvert array starter funtionen med parameteret value
    console.log(value);
    html += `<img src="assets/images/${value[0]}" title="${value[1]}" width="250px" onclick="openImg(this)">`;//.getAttribute('data-image')
}); // tildeling af en html-kode til variablen html. som bestå af et img-tag med en source til mappen img, 
    //som for tildelt en variable fra arrayet via value[0] og en title fra value[1]. Ved onclick starter functionen openImg(this).
    //${} betyder templete string
wrapper.insertAdjacentHTML("afterbegin", html); //metode for at tilføre html kode til html-siden. (first-child)

function openImg(e){ // e er et parameter, som man kan referer til inde i functionen. - Den er locally scoped.
    console.log(e);
    modal.showModal(); //åbner modal(dialogen i html) ved showModal
    modal.style.backgroundImage = `url(${e.src})`; //ændre baggrundsbilledet på modalen ved at url sourcen ændres til this(e)?
    title.innerText = e.title; //henter title fra arrayet og sætter det i value[1].
};

modal.addEventListener("click", function(){ //ved click starter functionen, som lukker modalen.
    modal.close();
});

// JS validation on Newsletter sign up form

function validate (formObj) {

    let errors = [];

    if (formObj.fname.value === "") {
        
        errors.push("First name is required");
    }

    if (formObj.lname.value === ""){

        errors.push("Last name is required");
    }

    if (formObj.email.value === "") {
        errors.push("Email is required");
    }

    if(errors.length > 0){
        let msg ="The following errors have been found\n\n";

        for(let i = 0; i< errors.length; i++) {

            msg += errors[i] + "\n";
        }

        console.log(errors);
        alert(msg);
        return false;

    }

    return true;
}