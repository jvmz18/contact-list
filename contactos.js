// contact list

let lista = ["jhonatan valencia", "edwin valencia", "mario valencia", "nicolas valencia"];

// new contact function

let agcontactos = (contacto) => {
   let m = {lista : contacto}
   lista.push (m)
}
 agcontactos ("jv")
 console.log(lista) 

 //  delete contacts

function quitarc (eliminarc){
    lista.pop(eliminarc);
} 

quitarc()
console.log(lista)

// print existing contacts

function lisc (){
    for ( j = 0 ; j < lista.length; j++){
        console.log(lista[j]);
    }
}

lisc();
