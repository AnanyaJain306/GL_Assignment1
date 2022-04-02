let btnWeight = document.getElementById("kilbtn");
let btnMeasure = document.getElementById("feetbtn");
let btnFah = document.getElementById("fahbtn");
let btnCub = document.getElementById("cubbtn");

btnWeight.addEventListener("click", () => {
    let kgin=document.getElementById('kgsInput');
    let kgs=kgin.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.2046;
})

btnMeasure.addEventListener("click", () => {
    let feetcms=document.getElementById('feetInput');
    let feet=feetcms.value;
    document.getElementById("cmsOutput").innerText = feet * 30.48;
})

btnFah.addEventListener("click", () => {
    let fhcel=document.getElementById('fhInput');
    let fh=fhcel.value;
    document.getElementById("celOutput").innerText = (fh-32)*(5/9);
})

btnCub.addEventListener("click", () => {
    let cubvol=document.getElementById('cubInput');
    let cub=cubvol.value;
    document.getElementById("lOutput").innerText = cub*1000;
})