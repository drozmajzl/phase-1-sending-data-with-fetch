function submitData(name, email){
    const configurationObject = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
                name: `${name}`,
                email: `${email}`,
            })
          }
         return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      let bodyElement = document.querySelector('body')
      bodyElement.append(`<p>${object.id}</p>`)
      console.log(`${object}`)
    })
    .catch(function (error) {
        let bodyElement2 = document.querySelector('body')
        bodyElement2.append(`<p>${error.message}}</p>`)
        console.log(error.message);
    })
}