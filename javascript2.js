const skicka = document.getElementById ('submit'); 
//hämta formen från HTML
skicka.addEventListener('click', function(){
    let text;
    const namn = document.getElementById ('förnamn').value;
    if (""==(namn)){
    //här fyller personen i sitt förnamn
        text="Du har glömt att fylla i dina uppgifter";
    //svaret du får om du missat 1 eller flera rutor
    
    } else {
    //svaret du får när du submittat korrekt
        text="Nu har du tagit första steget mot ett starkare hälsosammare liv" + namn;
    }
    //lägg till texten i <p> hejförnamn i HTML
    document.getElementById("hejförnamn"). innerHTML = text;
})