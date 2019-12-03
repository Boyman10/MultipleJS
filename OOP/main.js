const map = new Map("hello", "position");
const detailElement = document.getElementById("details");
const action = new Action();

map.display();

map.addDetail(new Detail("Detail 1", "this is detail 1"));
map.addDetail(new Detail("Detail 2", "this is detail 2"));
map.addDetail(new Detail("Detail 3", "this is detail 3"));

// FOLLOWING IS BUGGY : SEE closures and https://dev.to/kapantzak/js-illustrated-the-event-loop-4mco ...

map.getDetails().forEach(element => {
    element.display(detailElement);
    const elt = element.getSpan();
    attachEvent(elt, element);
});

function attachEvent(elt, element)
{
    console.log(element.name);
    elt.addEventListener("click", function() {
        action.showDetail(element);
    }, false);
}
