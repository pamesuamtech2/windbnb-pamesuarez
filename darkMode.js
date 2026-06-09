export default function initDarkMode() {
const darkBtn = document.querySelector("#darkMode")
const initDocument = document.querySelector("html")

if (darkBtn) {
darkBtn.addEventListener('click', () => {
  
  initDocument.classList.toggle('dark');
if (initDocument.classList.contains('dark')) {
                darkBtn.textContent = '🌙'; 
            } else {
                darkBtn.textContent = '💡'; 
            }
        });
    }
}