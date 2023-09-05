// contact list

let lista = {

id : 23561342,
nombres : 'jhonatan',
apellido : 'valencia',
telefono : 3215678900,
ubicacion: {
    ciudad : 'medellin',
    direccion : 'mz8cs666',
},

};
let  contactos = [lista];
// new contact function

function agregarc (id,nombre,apellido,telefono, ciudad, direccion){
    let cont = {
        id,nombre,
        apellido,
        telefono, 
        ubicacion :{
            ciudad,direccion
        }
    }
    contactos.push(cont)
}
agregarc(23232432,'nicolas','valencia',3245678900,'medellin','cl32cs87');
console.log(contactos)


//delete contac

function eliminarc (id){
    for(let j=0; j < contactos.length; j++){
        if(contactos[j].id ===id){
            contactos.splice(j,1);
        }
    }
}
console.log(contactos)
eliminarc(2356134222)
console.log(contactos)
