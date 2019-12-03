
const lis = document.getElementsByTagName("li");

class Sample
{
    constructor(name)
    {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }
}

Array.from(lis).forEach(element => {
    attachEvent(element);
});

function attachEvent(element)
{
    console.log(element.innerHTML);
    element.addEventListener("click", function() {
        showDetail(this.innerHTML);
    }, false);
}

function showDetail(str)
{
    document.getElementById("hello").innerHTML = str;
}

function showClassDetail(str)
{
    document.getElementById("helloClassDisplay").innerHTML = "Youpi " + str.getName();
}

const samples = [ new Sample("one"), new Sample("two"), new Sample("three") ];

samples.forEach(elt =>
    {
        const newDiv = document.createElement("div");
        newDiv.appendChild(document.createTextNode(elt.getName()));
        const currentDiv = document.getElementById('helloClass');
        document.body.insertBefore(newDiv, currentDiv);

        attachNewEvent(newDiv, elt);
    });


function attachNewEvent(div, classElt)
{
    console.log("About to attach event to " + classElt.getName());
    div.addEventListener("click", function() {
        showClassDetail(classElt);
    }, false);
}
    