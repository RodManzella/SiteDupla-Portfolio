Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  '5NVwDfwrsp0yv61kea9IxTFMBllGGI2W6aHdo7zv', // This is your Application ID
  'uhSeZg2grzRapNlh89hu2WcyX6LUT9p6NUJQiJ0s', // This is your Javascript key // This is your Master key (never use it in the frontend)
);


 async function login() {
  const usernameInput = document.getElementById("nomeUser").value;
  const senhaInput = document.getElementById("senha-login").value;

  const Usuario = Parse.Object.extend("Usuario");
  const query = new Parse.Query(Usuario);

  query.equalTo("Username", usernameInput);
  query.equalTo("Senha", senhaInput);

  try {
    const usuario = await query.first();
    if (usuario) {
      console.log("Login successful!");
      window.location.href = "paginaLogado.html";
    } else {
      console.log("Invalid username or password.");
    }
  } catch (error) {
    console.error("Error: " + error.code + " " + error.message);
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Verificar se o usuário está na página "paginaLogado.html"
    if (window.location.pathname.endsWith("paginaLogado.html")) {
      // Obter o nome de usuário da URL (por exemplo, "paginaLogado.html?username=seuNomeDeUsuario")
      const urlParams = new URLSearchParams(window.location.search);
      const username = urlParams.get("username");
  
      // Atualizar o título da página (elemento <title>)
      document.title = "Dug's - " + username;
  
      // Atualizar o texto do elemento <span> com ID "pessoa-logada"
      document.getElementById("pessoa-logada").innerText = username;
    }
  });

}



// const btn_login = document.getElementById("log-in");
// // Add on click listener to call the create parse user function
// btn_login.onclick = () =>{
//   login()
// }