Parse.initialize( "5NVwDfwrsp0yv61kea9IxTFMBllGGI2W6aHdo7zv",
"uhSeZg2grzRapNlh89hu2WcyX6LUT9p6NUJQiJ0s");
Parse.serverURL = "https://parseapi.back4app.com/";

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
      document.title = "Dug´s - " + usuario.get("Username");
      document.getElementById("pessoa-logada").innerHTML = usuario.get("Username") +" !"
      window.location.href = "paginaLogado.html";
    } else {
      console.log("Invalid username or password.");
    }
  } catch (error) {
    console.error("Error: " + error.code + " " + error.message);
  }
}

// Add on click listener to call the create parse user function
document.addEventListener("DOMContentLoaded", function () {
  // Seu código JavaScript aqui, incluindo a adição do evento de clique
  document
    .getElementById("log-in")
    .addEventListener("click", async function () {
      login();
    });
});