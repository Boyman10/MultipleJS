const x = 9;

class ToBeBound
{
    constructor()
    {
        this.x = 10;
    }

    static getX()
    {
        return this.x;
    }
}

const ex = ToBeBound.bind(x);

console.log(ToBeBound.getX());
