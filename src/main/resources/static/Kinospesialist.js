
let person = [];
function klikkBestill(){
    let ut = "Du har lagt igjen følgende persondata: ";
    const fornavn = document.getElementById('fornamefield').value;
    ut += "Fornavn: " + fornavn + ", ";

    const etternavn = document.getElementById('surnamefield').value;
    ut += "Etternavn: " + etternavn + ", ";

    const nummer = document.getElementById('nummerfield').value;
    ut += "Nummer: " + nummer + ", ";

    const epost = document.getElementById('epostfield').value;
    ut += "Epost: " + epost + ", ";


        ut += "<br/> Din film: + " + document.getElementById('movieChooser').value;
        document.getElementById('herefield').innerHTML = ut;

        person.push(fornavn, etternavn, nummer, epost);
        console.log(person)
}