import { errorTypes, messages } from "./customErrors.js"

// Función para validar datos
export function verifyInput(formInput){
  let message = ""
  formInput.setCustomValidity("")

  errorTypes.forEach((error)=>{
    if(formInput.validity[error]){
      message = messages[formInput.name][error]
      console.log(message);
    }
  })
  const errorMessage = formInput.parentNode.querySelector(".error-message")
  const inputCheck = formInput.checkValidity()

  if(!inputCheck){
    errorMessage.textContent = message
  } else{
    errorMessage.textContent = ""
  }
}