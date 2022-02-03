
const herores = ['Batman','Superman','MujerMaravilla','Aquaman',];

console.warn('Tradicional For');
// for tiene 3 partes
// 1-Donde se inicializa la variable
// 2-Va a servirnos como while 
// 3-contador o incrementador
for( let i = 0; i < herores.length; i++){
    console.log(herores[i]);
};

console.warn('For in');
for( let i in herores){
    console.log(herores[i]);
};

console.warn('For of');
for( let heroe of herores){
    console.log( heroe );
}
