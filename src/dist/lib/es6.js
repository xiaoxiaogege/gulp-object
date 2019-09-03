let a = 1;
let b = 2;

calc(a,b);

function calc(a,b){
    console.log(a +  b)
    return a +  b;
}

class parent {
    constructor(x,y){
        this.x  = x;
        this.y = y;
    }

    calc(){
        console.log(this.x + this.y)
        return this.x + this.y
    }
}

let parents = new parent(2,3);
parents.calc();
