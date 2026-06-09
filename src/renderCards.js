import { adultsTotal, childrenTotal } from './guestMenu.js';
let stayContainer = document.querySelector("#productId"); 

//Function to bring data
async function bringStaysData() { 
    try {
        let response = await fetch("/stays.json"); 
        let data = await response.json(); 
        return data;
    } catch (error) {
        console.error("Ups, error al traer los datos:", error);
    }
}          

//Function to show the cards
function showCards(stays){
     stayContainer.innerHTML = ''; 
     let cardsHTML = '';
     
     for (let i = 0; i < stays.length; i++) {
        let stay = stays[i];

        let bedsText = stay.beds ? `. ${stay.beds} beds` : '';
        
        let superHostBadge = stay.superHost 
            ? `<span class="border border-gray-800 dark:border-white dark:text-cyan-900 dark:bg-amber-400 text-gray-800 px-2 py-1 rounded-full text-xs font-bold uppercase mr-2">SUPERHOST</span>` 
            : '';

        cardsHTML += `
        <div class="flex flex-col gap-2 w-full hover:scale-105 transition-transform mb-6 cursor-pointer">
            <img src="${stay.photo}" alt="${stay.title}" class="w-full aspect-[3/2] object-cover rounded-2xl mb-2">
            
            <div class="flex justify-between items-center text-sm text-gray-500 dark:text-red-400">
                <div class="flex items-center">
                    ${superHostBadge}
                    <p>${stay.type} ${bedsText}</p>
                </div>
                <p class="flex items-center gap-1 text-gray-700 dark:text-amber-50 font-semibold">
                    <span class="text-red-500 dark:text-amber-300">★</span> ${stay.rating}
                </p>
            </div>
            
            <p class="font-semibold text-gray-800 dark:text-amber-50 text-base mt-1">
                ${stay.title}
            </p>
        </div>`;
    }
    //Here everything is injected to the main container
    stayContainer.innerHTML = cardsHTML;
}


// Starting Function 
   export default async function renderCards() {
    let dataStay = await bringStaysData();
    let filtro = document.querySelector("#inputFilter");
    
    if (dataStay) {
        showCards(dataStay);
    }
    
    if (filtro) {
        filtro.addEventListener("input", function(){
            let busqueda = filtro.value.toLowerCase(); 
            let locationFiltered = dataStay.filter(stay => 
                stay.city.toLowerCase().includes(busqueda) ||
                stay.country.toLowerCase().includes(busqueda) ||
                stay.title.toLowerCase().includes(busqueda)
            );
            
            showCards(locationFiltered); 
        });
    }}
    //Turning the OKAY button into a search trigger

    let btnOkay = document.querySelector("#hideMenu");
    if (btnOkay) {
    btnOkay.addEventListener("click", () => {
        let totalGuestsWanted = adultsTotal + childrenTotal;
        
        let guestsFiltered = dataStay.filter(stay => stay.maxGuests >= totalGuestsWanted);

        showCards(guestsFiltered);
    });
}