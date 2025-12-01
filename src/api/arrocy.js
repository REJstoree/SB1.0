const BASE = process.env.REACT_APP_ARROCY_BASE;

// ENVIE MENSAGEM PARA CONTATO OU GRUPO
export async function sendMessage({ sender, token, receiver, message }) {
  const res = await fetch(`${BASE}/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sender,
      token,
      number: receiver,
      msgtext: message,
    }),
  });

  return await res.json();
}

// LISTAR GRUPOS
export async function fetchGroups(sender, token) {
  const res = await fetch(`${BASE}/fetchgroups`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sender, token }),
  });

  return await res.json();
}

// VERIFICAR SE NÚMERO EXISTE NO WHATSAPP
export async function isOnWhatsApp(sender, token, number) {
  const res = await fetch(`${BASE}/isonwa`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sender, token, number }),
  });

  return await res.json();
}
