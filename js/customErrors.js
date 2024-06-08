export const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "tooLong",
  "customError"
]
export const messages = {
  nombre: {
    valueMissing: "El campo Nombre no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un Nombre válido.",
    tooShort: "Por favor, ingrese un Nombre válido.",
    tooLong: "Superaste la cantidad de caracteres permitidos.",
  },
  email: {
    valueMissing: "El campo E-mail no puede estar vacío.",
    typeMismatch: "Por favor, ingrese un E-mail válido.",
    tooShort: "Por favor, ingrese un E-mail válido.",
    tooLong: "Superaste la cantidad de caracteres permitidos.",
  },
  asunto: {
    valueMissing: "El campo Asunto no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un Asunto válido.",
    tooShort: "Por favor, ingrese un Asunto válido.",
    tooLong: "Superaste la cantidad de caracteres permitidos.",
  },
  mensaje: {
    valueMissing: "El campo Mensaje no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un Mensaje válido.",
    tooShort: "Por favor, ingrese un Mensaje válido.",
    tooLong: "Superaste la cantidad de caracteres permitidos.",
  }
}
