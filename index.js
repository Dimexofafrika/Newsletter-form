const invalidmail = document.querySelector(".invalid")
const email = document.querySelector("input")
const contentSection = document.querySelector("#contentSection")
const emailValue = document.querySelector(".email") 
const confirmationSection = document.querySelector("#confirmationSection")


function confirmation(){
    if(!email.value || email.value.includes("#") || !email.value.includes("@")){
        invalidmail.innerHTML ='Valid email required'
        invalidmail.style.color = 'red'
        email.classList.add("error")
        
    } else{
        invalidmail.innerHTML =''
        contentSection.classList.add("display")
        confirmationSection.style.display = "block"
        emailValue.textContent = email.value
    }
}

function dismissConfirmation(){
    window.location.href = 'index.html'
}
