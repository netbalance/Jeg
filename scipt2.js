document.getElementById("goToSolde").addEventListener("click",function(event){
    event.preventDefault();
    var password = prompt("Password:");
    
    if (password==="jocarter"){
        window.location.href="gestion solde.html";
    } 
    else{
        alert("Denied.");
    }
});