class Action {

    constructor()
    {
        this.name = "Hello";
    }

    showDetail(detail)
    {
        document.getElementById("desc").innerHTML = detail.description;
    }
}