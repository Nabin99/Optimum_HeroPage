var modal = document.getElementById('hire-form');
var hireBtn = document.getElementById('hire-btn');
var formContact = document.getElementById("formContact");

hireBtn.addEventListener("click",()=>{
    modal.style.display = "flex";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    close();
  }
}

const close = () =>{
    formContact.classList.toggle("form-close-anime");
    modal.classList.toggle("backdrop");
    setTimeout(()=>{
    modal.classList.toggle("backdrop");
    formContact.classList.toggle("form-close-anime");
    modal.style.display="none";
    },1500);
}

document.getElementById("submit").addEventListener("click", (e)=>{
    e.preventDefault();
    let x = document.forms["contact"];
    if(x["firstName"].value.trim()==="")
        return null;
    if(x["lastName"].value.trim()==="")
    return null;
    if(x["email"].value.trim()==="")
    return null;
    if(x["message"].value.trim()==="")
    return null;
console.log("first name=" + x["firstName"].value.trim(),
"\nlast name=" + x["lastName"].value.trim(),
"\nemail=" + x["email"].value.trim(),
"\nmessage=" + x["message"].value.trim());
    close();
    
});
document.getElementById("close").addEventListener("click", close);

document.getElementById("clear").addEventListener("click",()=>{
    let x = document.forms["contact"];
    x["firstName"].value="";
        
    x["lastName"].value="";
    
    x["email"].value="";
    
    x["message"].value="";
    
});