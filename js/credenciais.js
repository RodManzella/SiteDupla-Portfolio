Parse.initialize("5NVwDfwrsp0yv61kea9IxTFMBllGGI2W6aHdo7zv", "uhSeZg2grzRapNlh89hu2WcyX6LUT9p6NUJQiJ0s");
Parse.serverURL = "https://parseapi.back4app.com/";

document.getElementById("cadastro").addEventListener("click", async() =>{
    const myNewObject = new Parse.Object('Usuario');
    myNewObject.set('Email', document.querySelector("nomeUser").value);
    myNewObject.set('Email', document.querySelector("#email").value);
    myNewObject.set('Senha', document.querySelector("senha").value);
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('Usuario created', result);
    } catch (error) {
      console.error('Error while creating Usuario: ', error);
    }
})
