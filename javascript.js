//variabler
const photos = ["dumbell.jpg", "jumprope.jpg", "kettlebell.jpg", "yogamat.jpg", "shoes.jpg", "waterbottle.jpg"];

//loopen (forloop)
for(let i = 0; i <photos.length; i++){
//Här skapas en bildtagg för samtliga bilder
    const bild = document.createElement("img");
//Här går jag igenom Arrayen
    bild.src = photos[i];
//Här skrivs bilderna ut från Arrayen till HTML<div> som heter bilder
    document.getElementById("bilder").appendChild(bild);
}