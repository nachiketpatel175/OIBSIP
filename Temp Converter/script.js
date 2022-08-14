let celRef = document.getElementById("cel");
let ferRef = document.getElementById("fer");
let kelRef = document.getElementById("kel");

let convertFromcel = () => {
    let cel = celRef.value;

    ferRef.value = (((cel) * 9 / 5) + 32).toFixed(2);
    //kelRef.value = (cel + 273.15).toFixed(2);
};

let convertFromfer = () => {
    let fer = ferRef.value;

    celRef.value = ((fer - 32 * 5) / 9).toFixed(2);
    //kelRef.value = (((fer - 32 * 5) / 9) + 273.15).toFixed(2);
};

// let convertFromkel = () => {
//     let kel = kelRef.value;

//     celRef.value = (kel - 273.15).toFixed(2);
//     ferRef.value = (((kel - 273.15 * 9) / 5) + 32).toFixed(2);
// };
celRef.addEventListener("input", convertFromcel);
ferRef.addEventListener("input", convertFromfer);
kelRef.addEventListener("input", convertFromkel);
window.addEventListener("load", convertFromcel);