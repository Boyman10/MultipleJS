class Detail
{
    constructor(name, desc)
    {
        this.id = name.toLowerCase().replace(/\s/g, '');
        this.name = name;
        this.description = desc;
    }

    display(currentDiv)
    {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", this.id);
        newDiv.appendChild(document.createTextNode(this.name));

        currentDiv.appendChild(newDiv);
    }

    getSpan()
    {
        return document.getElementById(this.id);
    }
}