enum Operation {
    Add, 
    Sub,
    Div,
    Mul
}

const arithmetic = (n1: number, n2: number, operation: Operation): number => {
    switch(operation){
        case Operation.Add: return n1+n2;
        case Operation.Sub: return n1-n2;
        case Operation.Div:
            if(n2 === 0){
                throw console.error("Zero Divison Error");
            }else{
                return n1/n2;
            }
        case Operation.Mul: return n1*n2;
        default: return operation
    }
}

console.log(arithmetic(10, 100, Operation.Mul))