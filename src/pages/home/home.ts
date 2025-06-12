import type { ReusableInput } from "../../components/input-el/inputEl";
import { state } from "../../state";

export function home(params: { goTo: (arg: string) => void }) {
  const divEl: HTMLDivElement = document.createElement("div");
  divEl.classList.add("app");
  divEl.innerHTML = `
 <header-el></header-el>
 <main class="main">
    <h2>Bienvenidos</h2>              
    <form class="container-btn-input">
     <reusable-input class="input-email" label="Email:" size-label="30px" required></reusable-input>       
       <span class="error-message-email"></span>

    <reusable-input class="input-name" label="Nombre:" size-label="30px" required></reusable-input>    
        <span class="error-message-name"></span>

    <reusable-select class="select-roomid" label="Elige una sala:" size-label="30px" options="Crea una sala, Ingresa a una Sala conocida"></reusable-select>

    <reusable-input class="input-roomid" label="RoomId:" size-label="30px" ></reusable-input>
        <span class="error-message-roomid"></span>

    <reusable-button class="button" label="Comenzar" text-color="fff" border-color="none" hover-bg-color="#88afeb" active-bg-color="#639cf1"></reusable-button>
      </form>
    </main>
  `;

  const styles = document.createElement("style");
  styles.textContent = `
    .app {
        background-color:rgb(43, 42, 42);
        margin-left: auto;
        margin-right: auto;
        max-width: 1260px;
        min-height: 100vh;  
    }
    h2{
        margin: 10px 0;
        font-size: 50px
    }
    .main{
        display: flex;
        flex-direction: column;
        align-items: center;        
    }
     .container-btn-input{
         width: 500px    
    }
    .button{
        display: block;
        margin: 25px 0;
    }
    .error-message-email, .error-message-name, .error-message-roomid {
        background: #f08484;
        padding: 10px;
        border-radius: 4px;
        border: solid 6px rgb(241, 80, 80);
        margin-bottom: 10px;
        display: none;
        color: black;
        font-size: 16px;
        margin-top: 5px;
    }
      @media (max-width: 768px) {
        .container-btn-input {
        width: 90%; /* Hacerlo más adaptable */
      }
      h2 {
          font-size: 32px; 
      }
      .button {
          width: 100%; 
      }
      .error-message {
          font-size: 14px; 
          padding: 8px;
      }
  }
  `;

  console.log("Entré a home");
  // --- Elementos del DOM ---
  const selectElement = divEl.querySelector(".select-roomid") as any;
  const inputEmail = divEl.querySelector(".input-email") as ReusableInput;
  const inputName = divEl.querySelector(".input-name") as ReusableInput;
  const inputRoomId = divEl.querySelector(".input-roomid") as ReusableInput;
  const buttonHome = divEl.querySelector(".button")!;
  const errorMessageEmail: HTMLElement = divEl.querySelector(
    ".error-message-email"
  )!;
  const errorMessageName: HTMLElement = divEl.querySelector(
    ".error-message-name"
  )!;
  const errorMessageRoomId: HTMLElement = divEl.querySelector(
    ".error-message-roomid"
  )!;

  // --- Mostrar/ocultar input de RoomId según selección ---
  inputRoomId.style.display = "none";
  selectElement.addEventListener("change", () => {
    const selectedValue = selectElement.getValue().trim();
    inputRoomId.style.display =
      selectedValue === "Ingresa a una Sala conocida" ? "block" : "none";
  });
  // Inicializa visibilidad
  inputRoomId.style.display =
    selectElement.getValue().trim() === "Ingresa a una Sala conocida"
      ? "block"
      : "none";

  // --- Handler del botón principal ---
  buttonHome.addEventListener("click", (e) => {
    e.preventDefault();
    const inputEmailValue = inputEmail.getValue().trim();
    const inputNameValue = inputName.getValue().trim();
    const inputRoomIdValue = inputRoomId.getValue().trim();
    const selectedRoomId = selectElement.getValue().trim();

    // Limpiar mensajes de error
    errorMessageEmail.style.display = "none";
    errorMessageName.style.display = "none";
    errorMessageRoomId.style.display = "none";

    // Validaciones
    if (!inputEmailValue) {
      errorMessageEmail.textContent =
        "Por favor, ingrese un Email antes de continuar.";
      errorMessageEmail.style.display = "block";
      return;
    }
    if (!inputNameValue) {
      errorMessageName.textContent =
        "Por favor, ingrese un nombre antes de continuar.";
      errorMessageName.style.display = "block";
      return;
    }
    if (selectedRoomId === "Ingresa a una Sala conocida" && !inputRoomIdValue) {
      errorMessageRoomId.textContent = "Por favor, ingrese un RoomId válido.";
      errorMessageRoomId.style.display = "block";
      return;
    }

    // Actualizar state con los valores ingresados
    state.setEmailAndFullName(inputEmailValue, inputNameValue);

    if (selectedRoomId === "Crea una sala") {
      state.signIn((err: any) => {
        if (err) {
          console.error("hubo un error");
          return;
        }
        state.askNewRoom(() => {
          const roomId = state.getState().roomId;
          if (roomId) {
            state.accessToRoom(() => {
              params.goTo("/chat");
            });
          } else {
            alert("No se pudo obtener el Room ID");
          }
        });
      });
    } else if (selectedRoomId === "Ingresa a una Sala conocida") {
      // Guardar el roomId ingresado en el state directamente
      state.getState().roomId = inputRoomIdValue;
      state.signIn((err: any) => {
        if (err) {
          console.error("hubo un error");
          return;
        }
        const roomId = state.getState().roomId;
        if (roomId) {
          state.accessToRoom(() => {
            params.goTo("/chat");
          });
        } else {
          alert("No se pudo obtener el Room ID");
        }
      });
    }
  });

  divEl.appendChild(styles);
  return divEl;
}
