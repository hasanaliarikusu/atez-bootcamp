let number = prompt ("sayı giriniz")
let factor =1;
if(number==0){
    console.log(`${number} faktöriyel 1`);
} else if(number < 0){
    console.log(`Pozif Değer giriniz`);
}
    else if (typeof n !== "number" )
    {console.log(`Rakam giriniz`);
}
else{
    for(let i=1; i<=number;i++){
        factor=factor * i;
    }
    console.log(`${number} faktöriyel ${factor}`)
}
