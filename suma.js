function suma(ar){
    if(!Array.isArray(ar)|| !ar.length)return 'no valido el array';
    let acc=0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i]<=1000) acc += ar[i];
        
    }
    return acc;
}

document.write('El resutado es:');
document.write('[1,2,3]=');
document.write(suma([1,2,3]));
