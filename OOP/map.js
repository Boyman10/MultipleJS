class Map
{
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.details = [];
    }

    display() {
        document.getElementById("map").innerHTML = `Hi I'm ${this.name} and I'm in ${this.position} position!`;;
    }

    addDetail(detail)
    {
        this.details.push(detail); 
    }

    getDetails()
    {
        return this.details;
    }
}