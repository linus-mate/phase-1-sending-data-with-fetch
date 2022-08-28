// Add your code here
function submitData(name, email){
    const userData = {
        name: name,
        email: email
    };

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userData),
      };
      
      return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function(user){
          const p = document.createElement('p');
          p.textContent = user.id;
          document.querySelector('body').appendChild(p);
        })

        .catch(function(error){
          const p = document.createElement('p');

          p.textContent = error.message;

          document.querySelector('body').appendChild(p);
        })
        
};
 
  




  