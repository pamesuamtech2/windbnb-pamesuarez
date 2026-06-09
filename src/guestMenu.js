export let adultsTotal = 0;
 export let childrenTotal = 0;
export default function initMenuGuest() {

let hide = document.querySelector("#hideMenu")
let show = document.querySelector("#showMenu")
let menu = document.querySelector("#guestMenu")

 show.addEventListener("click", ()=>{
    menu.classList.remove("hidden")
 })

hide.addEventListener("click", (e) => {
    e.stopPropagation();
 hide.addEventListener("click",()=>{
    menu.classList.add("hidden")
 })
 });


//Adding Guests

 let input1=document.querySelector("#input1")
 let adultMinus = document.querySelector("#adultMinus")
 let adultAdd = document.querySelector("#adultAdd")
 let childMinus = document.querySelector("#childMinus")
 let childAdd = document.querySelector("#childAdd")
 let spanAdultCount = document.querySelector("#adultCount");
 let spanChildCount = document.querySelector("#childCount");

// Logic to add adults e=event
adultAdd.addEventListener("click", (e) => {
    e.stopPropagation(); //Avoiding malfunctions
    adultsTotal++; 
    spanAdultCount.textContent = adultsTotal;
    input1.value = `${adultsTotal + childrenTotal} guest(s)`; 
});

// Logic to add children
childAdd.addEventListener("click", (e) => {
    e.stopPropagation();
    childrenTotal++; 
    spanChildCount.textContent = childrenTotal;
    input1.value = `${adultsTotal + childrenTotal} guest(s)`; 
});

// Logic to subtract adults 
adultMinus.addEventListener("click", (e) => {
    e.stopPropagation(); //Avoiding malfunctions
if (adultsTotal > 0 ){ //Conditioning the substract
         adultsTotal--; 
    spanAdultCount.textContent = adultsTotal;
    input1.value = `${adultsTotal + childrenTotal} guest(s)`; 
    } 
});

// Logic to subtract children 
childMinus.addEventListener("click", (e) => {
    e.stopPropagation(); 
if (childrenTotal > 0 ){ 
         childrenTotal--; 
    spanChildCount.textContent = childrenTotal;
    input1.value = `${adultsTotal + childrenTotal} guest(s)`; 
    } 
});
}

// Turning my Guest Counter into an "Actual Filter"