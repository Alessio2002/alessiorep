/*  
15. Lajittele `teamMembers` aakkosjärjestykseen.  
16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.  
17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".  
18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.
*/

// 1.Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.  

let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];

for(let i = 0; i < teamMembers.length; i++) {
console.log(teamMembers [i]);
}

// 2.Poista taulukon ensimmäinen jäsen.  

teamMembers.shift();
console.log(teamMembers);

// 3.Poista taulukon viimeinen jäsen.

teamMembers.pop();
console.log(teamMembers);

// 4.Lisää uusi jäsen "Alex" taulukon alkuun.

teamMembers.unshift("Alex");
console.log(teamMembers);

// 5.Lisää uusi jäsen "Linda" taulukon loppuun.

teamMembers.push("Linda");
console.log(teamMembers);

// 6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi

let newMembers = teamMembers.slice(2);
console.log(newMembers);

// 7. Etsi "Mikko":n indeksi taulukossa. 

teamMembers.indexOf("Mikko");
console.log(teamMembers.indexOf("Mikko"));

// 8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa).

teamMembers.indexOf("Jake");
console.log(teamMembers.indexOf("Jake"));

// 9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta".

teamMembers.splice(teamMembers.indexOf("Mikko"), 1, "Maria", "Netta");
console.log(teamMembers);

// 10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.  

let addMembers = ["Ahmad", ...teamMembers];
console.log(addMembers);

// 11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.

let cloneMembers = teamMembers.slice();
console.log(cloneMembers);

// 12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.

let newTeam = ["Tiina", "Myrsky", ...teamMembers];
console.log(newTeam);

// 13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon. 

let findMember = teamMembers.indexOf("Joni");
console.log(teamMembers.indexOf("Joni"));

// 14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.

let namesCapital = teamMembers.map(chosen => chosen.toUpperCase());
console.log(namesCapital);

// 15. Lajittele `teamMembers` aakkosjärjestykseen.  

teamMembers.sort();
console.log(teamMembers);

// 16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.  

teamMembers.reverse();
console.log(teamMembers);

// 17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".  

teamMembers.indexOf("Joni");
console.log(teamMembers.indexOf("Joni") >=0? "Yes, they are real" : "They are a myth");

// 18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.

teamMembers.every(value => value.length >=3);
console.log(teamMembers.every(value => value.length >=3));