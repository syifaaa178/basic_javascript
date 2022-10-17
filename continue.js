var a=1
console.log('room number')
for(a=1;a<=15;a++){
    if(a==13){
        continue
    }
    console.log(a)
}

var sum=0
for(i=4;i<8;i++){
    if(i == 6){
        continue
    }
    sum +=i;
}
document.write(sum);