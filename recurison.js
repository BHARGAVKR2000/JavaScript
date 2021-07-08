function pow(x, n){
    if(n==1){
        return x;
    }
    else{
        return x * pow(x, n-1);
    }
}

const result = pow(2,4); // find result of(2 ** 4)
alert(result);