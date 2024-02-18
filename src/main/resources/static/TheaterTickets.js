let movieArray = [];
function typeTickets() {
    let movie = document.getElementById('moviePicker').value;
    let amount = document.getElementById('amountField').value;
    let firstname = document.getElementById('nameField').value;
    let surname = document.getElementById('surnameField').value;
    let email = document.getElementById('emailField').value;
    let phone = document.getElementById('phoneField').value;

    let outPut = {
        "moviePicker": movie,
        "amountField": amount,
        "nameField": firstname,
        "surnameField": surname,
        "emailField": email,
        "phoneField": phone
    }
    if(firstname === ""){
        document.getElementById('wrongName').innerHTML = "You have to write a valid first name!";
    }else{
        document.getElementById('wrongName').innerHTML = "";
    }
    if(surname === ""){
        document.getElementById('wrongSurName').innerHTML = "You have to write a valid surname!";
        }else{
        document.getElementById('wrongSurName').innerHTML = "";
    }
    if(email === ""){
        document.getElementById('wrongEmail').innerHTML = "You have to write a valid email!";
    }else{
        document.getElementById('wrongEmail').innerHTML = "";
    }
    if(phone === ""){
        document.getElementById('wrongPhone').innerHTML = "You have to write a valid number!";
    }else{
        document.getElementById('wrongPhone').innerHTML = "";
    }

    movieArray.push(outPut);
    console.log(outPut);
    out(outPut)

    }


     document.getElementById('moviePicker').value = "";
     document.getElementById('amountField').value = "";
     document.getElementById('nameField').value = "";
     document.getElementById('surnameField').value = "";
     document.getElementById('emailField').value = "";
     document.getElementById('phoneField').value = "";


    function out() {
        let ut = "Order: " + " ";
        ut +=
            "<table><tr><td>First name </td><td>Last Name </td><td>Number </td>" +
            "<td>Email </td><td>Movie </td><td>Tickets </td></tr></table>";

        for (let a = 0; a < movieArray.length; a++) {
            ut = ut + "<tr><td>" + movieArray[a].nameField + "</td> <td>" +
                "</td><td>" + movieArray[a].surnameField + "</td> <td>" +
                "</td><td>" + movieArray[a].phoneField + "</td> <td>" +
                "</td><td>" + movieArray[a].emailField + "</td> <td>" +
                "</td><td>" + movieArray[a].moviePicker + "</td> <td>" +
                "</td><td>" + movieArray[a].amountField + "</td> </tr> " +
                "</table>"
        }
                document.getElementById('theOrder').innerHTML = ut;
             console.log(ut);
        }
           ut += "you ordered this type of tickets: ";
           const typeArray = document.getElementsByName('typeTicket');
           for(let type of typeArray) {
               if (type.checked) {
                   ut += type.value + " ";
               }
           }

                   function deleteTickets() {
                       movieArray = [];
                       console.log(movieArray);
                       out();
                   }

