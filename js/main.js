let arr = ['olma','nok','behi','nok','kivi','banan']
console.log("4 harfdan tashkil topgan mevalar: " );
for(var i = 0; i < arr.length; i++){
    if(arr[i].length == 4){
        console.log(arr[i]);
    }
}

let arr2 = ['Olma','Tarvuz','behi','nok','Kivi','banan']
console.log('Katta harfdan boshlangan mevalar: ');
for(var i = 0; i < arr2.length; i++){
    if(arr2[i][0] == arr2[i][0].toUpperCase()){
        console.log(arr2[i]);
    }
}

let arr3 = ['Olma', 123, 'Tarvuz', 'behi', 1000, -7, 'nok', 'Kivi', 993, 'banan'];
console.log('Ro`yxatdagi raqamlar: ');
for(var i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] === 'number') {
        console.log(arr3[i]);
    }
}

let arr4 = [10, 50, 12, 510, 120, 51, 22, 43, 65]
console.log('10 va 50 oralig`idagi raqamlar: ');
for(var i = 0; i < arr4.length; i++){
    if(arr4[i] >= 10 && arr4[i] <=50){
        console.log(arr4[i]);
    }
}