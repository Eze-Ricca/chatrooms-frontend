import page from "page";
import { home } from "./pages/home/home";
import { chat } from "./pages/chat/chat";

const divEl = document.querySelector<HTMLDivElement>("#app")!;
if (!divEl) {
  throw new Error("Elemento #app no encontrado");
}

// Detecta si estás en local (localhost, 127.0.0.1, 192.168.x.x, IPv6)
const isLocal =
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1" ||
  location.hostname.startsWith("192.168.") ||
  location.hostname === "[::1]"; // IPv6 localhost

// Solo aplica el base en producción (GitHub Pages)
if (!isLocal) {
  page.base("/chatrooms-frontend");
}

export function goTo(route: string) {
  page(route);
}

// Configuración del router
page("/", () => page.redirect("/home"));
page("/home", () => {
  divEl.innerHTML = "";
  divEl.appendChild(home({ goTo }));
});
page("/chat", () => {
  divEl.innerHTML = "";
  divEl.appendChild(chat());
});

// Iniciar rutas
export function initRouter() {
  page.start();
}
