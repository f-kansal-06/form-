class Form{
    constructor(){

    }
    display() {
        var title = createElement("h2");
        title.html("Car Racing Game")
        title.position(130,0);
        var input = createInput("name");
        var button = createButton("start");
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            var greeting = createElement("h3");
            greeting.html("Hello "+ name);
            greetings.position(130,160);
        })
    }
}


