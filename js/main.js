import { verifyInput } from "./validateForm.js"

const downloadButton = document.querySelector(".hero__button-cv")
const contactImput = document.querySelectorAll("[required]")
const contactForm = document.querySelector("[data-form]")

// Función para descargar CV
downloadButton.addEventListener("click", ()=>{
  
  const miCV = "../Miguel-Colque-CV.pdf"
  const linkPDF = document.createElement('a')
  linkPDF.href = miCV
  linkPDF.download = "Miguel-Colque-CV.pdf"

  document.body.appendChild(linkPDF)
  linkPDF.click()
  document.body.removeChild(linkPDF)
})

// Función para guardar formularios
contactForm.addEventListener("submit", (element)=>{
  element.preventDefault()
  const iNputList = {
    nombre: element.target.elements["nombre"].value,
    email: element.target.elements["email"].value,
    asunto: element.target.elements["asunto"].value,
    mensaje: element.target.elements["mensaje"].value
  }
  localStorage.setItem("contactMessage", JSON.stringify(iNputList))
})

// Función para validar datos
contactImput.forEach(formInput=>{
  formInput.addEventListener("blur", ()=> verifyInput(formInput))
  formInput.addEventListener("invalid", (event) => event.preventDefault())
})

