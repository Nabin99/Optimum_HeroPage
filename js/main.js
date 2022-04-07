const documentBody = document.body;
const toggleTheme =()=>{
documentBody.classList.toggle("dark");
}
document.getElementById("toggle").addEventListener("change",toggleTheme);
console.log(document.getElementById("toggle"));