function pieceOfPie(array, startPie, endPie){
    let newArray=array.slice(array.indexOf(startPie), array.indexOf(endPie)+1);

    return newArray;
}

pieceOfPie(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'], 'Key Lime Pie',
'Lemon Meringue Pie')