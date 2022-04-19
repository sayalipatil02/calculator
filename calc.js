function calc(opt){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out;
    if(opt == 'Add'){
        out = `Summation of Number is ${Number(a)+Number(b)}`
    }else if(opt == 'Sub'){
        out = `Substraction of Number is ${Number(a)-Number(b)}`
    }else if(opt == 'Mult'){
        out = `Multiplication of Number is ${Number(a)*Number(b)}`
    }else{
        out = `Division of Number is ${Number(a)/Number(b)}`
    }
    document.getElementsByClassName('output')[0].innerText = out
}









