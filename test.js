var i=[0,1];
var a=0;
var out;
while(a<10){
     out=i[a]+i[a+1];
     i.push(out);
     a++;
}

for(a=0;a<10;a++){
    console.log(i[a]);
}