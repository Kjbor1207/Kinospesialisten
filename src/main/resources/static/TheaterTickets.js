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
        let ut = "Your order: ";
        ut +=
            "<table><tr><td>First name: </td><td>Last Name: </td><td>Number: </td>" +
            "<td>Email: </td><td>Movie: </td><td>Amount: </td></tr></table>";

        for (let a = 0; a < movieArray.length; a++) {
            ut = ut + "<tr><td>" + movieArray[a].nameField + "</td><td>" +
                "</td><td>" + movieArray[a].surnameField + "</td><td>" +
                "</td><td>" + movieArray[a].phoneField + "</td><td>" +
                "</td><td>" + movieArray[a].emailField + "</td><td>" +
                "</td><td>" + movieArray[a].moviePicker + "</td><td>" +
                "</td><td>" + movieArray[a].amountField + "</td></tr></table>"
        }
                document.getElementById('theOrder').innerHTML = ut;
             console.log(ut);
        }


        function deleteTickets() {
            movieArray = [];
            console.log(movieArray);
            out();
        }
