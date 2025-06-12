const API_BASE_URL = "https://chatrooms-backend-6lhi.onrender.com";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { map } from "lodash";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

type Data = {
  fullName?: string;
  nombre?: string;
  userId?: string;
  email?: string;
  roomId?: string;
  createRoom?: string;
  messages: any[];
  realtimeDBRoomId: string;
};

const state = {
  data: {} as Data,
  listener: [] as Function[], //los callbacks
  init() {
    //inicializa el state
    const localStorageState = localStorage.getItem("state");
    if (localStorageState) {
      this.data = JSON.parse(localStorageState);
    } else {
      this.data = {
        fullName: "",
        nombre: "",
        userId: "",
        email: "",
        roomId: "",
        messages: [],
        realtimeDBRoomId: "",
      };
    }
    console.log("Soy el state, e inicializado", this.data);
  },
  listenRoom() {
    const cs = this.getState();
    const chatroomsRef = ref(database, "/rooms/" + cs.realtimeDBRoomId);
    onValue(chatroomsRef, (snapShoot) => {
      const cs = this.getState();
      const messagesFromServer = snapShoot.val();
      console.log("listenRoom", messagesFromServer);
      const messageList = map(messagesFromServer.messages);
      cs.messages = messageList;
      this.setState(cs);
    });
  },
  getState() {
    return this.data;
  },
  setNombre(nombre: string) {
    const currentState = this.getState();
    currentState.nombre = nombre;
    this.setState(currentState);
  },
  pushMessage(message: string) {
    const cs = this.getState();
    const nombreDelState = cs.nombre;
    const chatroomId = cs.realtimeDBRoomId; // <-- usa el aleatorio
    fetch(API_BASE_URL + `/rooms/${chatroomId}/messages`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        text: message,
        author: nombreDelState,
      }),
    });
  },

  setEmailAndFullName(email: string, fullName: string) {
    const cs = this.getState();
    cs.fullName = fullName;
    cs.nombre = fullName; // Para compatibilidad con el código anterior
    cs.email = email;
    this.setState(cs);
  },
  setState(newState: Data) {
    //modifica this.data (el state) e invoca los callbacks
    this.data = newState;
    this.listener.forEach((callback) => callback(newState));
    localStorage.setItem("state", JSON.stringify(newState));
    console.log("Soy el state, e cambiado", this.data);
  }, //,
  signIn(callback: any) {
    const cs = this.getState();
    if (cs.email && cs.fullName) {
      fetch(API_BASE_URL + "/auth", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: cs.email,
        }),
      })
        .then((res) => {
          if (res.status === 404) {
            // Si no existe, lo registro y luego hago auth
            return fetch(API_BASE_URL + "/signup", {
              method: "post",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                email: cs.email,
                nombre: cs.fullName,
              }),
            }).then(() => {
              // Ahora sí hago auth de nuevo
              return fetch(API_BASE_URL + "/auth", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  email: cs.email,
                }),
              });
            });
          } else {
            return res;
          }
        })
        .then((res) => res.json())
        .then((data) => {
          cs.userId = data.id;
          this.setState(cs);
          console.log(data);
          callback();
        })
        .catch((err) => {
          console.error("Error en signIn:", err);
          callback(true);
        });
    } else {
      console.error("No hay un email o nombre en el state");
      callback(true);
    }
  },
  askNewRoom(callback?: () => void) {
    const cs = this.getState();
    if (cs.userId) {
      // console.log(cs.userId);
      fetch(API_BASE_URL + "/rooms", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          userId: cs.userId,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          cs.roomId = data.id;
          this.setState(cs);
          console.log(data);
          if (callback) {
            callback();
          }
        });
    } else {
      console.error("No hay userId");
      if (callback) {
        callback();
      }
    }
  },
  accessToRoom(callback?: () => void) {
    const cs = this.getState();
    const roomId = cs.roomId;
    fetch(API_BASE_URL + "/rooms/" + roomId + "?userId=" + cs.userId)
      .then((res) => res.json())
      .then((data) => {
        cs.realtimeDBRoomId = data.realtimeDB; // <-- este es el aleatorio
        this.setState(cs);
        this.listenRoom();
        if (callback) callback();
      });
  },
  suscribe(callback: Function) {
    this.listener.push(callback);
    // recibe callbacks para ser avisados posteriormente
  },
};
export { state };
