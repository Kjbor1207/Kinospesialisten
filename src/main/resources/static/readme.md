This oblig, is nothing but a piece of trial and error. It took me 
several attempts and a lot of frustration, but it was all worth it in the end.

userinfo:
Name: Borgan, Kjetil Hoem.
OsloMet username: kjbor1207@oslomet.no
GitHub username: kjbor1207@oslomet.no

Introduction:
 
This project includes four files, which is: This (readme.md), MovieTheater.html, Movie.css and TheaterTickets.js.

It all started with the HTML file, which laid the foundation of the structure for the rest of the project. 

Then I continued with the js file, which laid functionality to this project.

Last I added some style. This was very basic and not an official part of the oblig. 

MovieTheater.html:
The HTML file is structured from top to bottom and is divided into three parts, each separated by a <hr>. Section
on the top is for the header, which contains a h1 header and a support paragraph.

The second is the part which let the user select movie and put info. Here I used pattern to recognize wrong inputs,
though this does not work as expected and the console will tell you there is some errors going on there.

The third is a part to make a neat presentation of the user's order(Though it was not as neat as I hoped for), and
should work as a display of the user inputs.

TheaterTickets.JS:
The JS file contains an array for the user inputs, then a function called "typeTickets" for declaring the variables
and then some if / else sentences to deal with wrong user-inputs, which I realized right before delivering was not 
working as expected. As you might notice, console.log have been used several places to keep track of the user inputs
coming in. Then the function out, which sends out the array to display for the user. Lastly, the function deleteTickets
let the user delete the array(This was also expected to empty the fields, which I have to continue to work on to 
make work).

Movie.css:
Very basic. Mostly used for simply styling like text-align to make everything at the center, add some color 
and also some hover effect.

Final thoughts:
Though I am satisfied this oblig have come to an end, I wish that this page was even better. It lack some of the 
functionality which was asked for, e.g. the error message for each user-input and being able to delete the field
simultaneously as emptying the array.

I think I can still work on this project to improve both the page structure, design and functionality. 
I wanted to add a section in the HTML-document with "ticket-types" where the user could choose between child, 
adult and pensioner - but this also made me want to make the prices integrated into each type - but the time 
ran out and I had to prioritize between wanted and necessary functions.
