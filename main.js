function story() {
    let adjective = ["attractive", "bald", "beautiful", "long", "magnificent", "blue", "lemon", "alive", "better", "careful"];
    let nonu = ["blood rage", "idiot", "toaster", "death wish", "therapy", "goal in life", "marketing idea", "psychic", "knife", "sandwich"];
    let verb = ["surround", "stab", "return", "medicate", "blindside", "flap", "trip", "explode", "balance", "boggle"];
    let getran = function(start, range) {
            let getrand = Math.floor((Math.random() * range) + start);
            while (getrand > range) {
                getrand = Math.floor((Math.random() * range) + start);
            }
            return getrand;
        }
        /*let st = getran(1, 3);
        console.log(st);
        //console.log(adjective[getran(1, 10)]);
        switch (st) {
            case 1:*/
    document.getElementById("main").innerHTML = "A Day At The " + verb[getran(1, 10)] + " ! <br> Today I went to the " + verb[getran(1, 10)] + ". I saw a(n) " + adjective[getran(1, 10)] + " " + nonu[getran(1, 10)] + " jumping up and down in its tree. <br> He " + verb[getran(1, 10)] + " through the large tunnel that led to its<br> " + adjective[getran(1, 10)] + "";
    document.getElementById("main1").innerHTML = "I got some peanuts and passed them through the cage to a gigantic gray " + nonu[getran(1, 10)] + " <br> towering above my head. Feeding that animal made me hungry. I went to get a " + adjective[getran(1, 10)] + " <br> scoop of ice cream. It filled my stomach. Afterwards I had to " + verb[getran(1, 10)] + " ";
    document.getElementById("main2").innerHTML = " " + verb[getran(1, 10)] + " to catch our bus. When I got home I " + verb[getran(1, 10)] + " my mom for a " + adjective[getran(1, 10)] + " day at the " + verb[getran(1, 10)] + ". ";
    /* break;
        case 2:
            document.getElementById("main").innerHTML = "In The " + verb[getran(1, 10)] + " ! <br> Today I went to the zoo. I saw a(n) " + adjective[getran(1, 10)] + " " + nonu[getran(1, 10)] + " jumping up and down in its tree. <br> He " + verb[getran(1, 10)] + " through the large tunnel that led to its<br> " + adjective[getran(1, 10)] + "";
            document.getElementById("main1").innerHTML = "I got some peanuts and passed them through the cage to a gigantic gray " + nonu[getran(1, 10)] + " <br> towering above my head. Feeding that animal made me hungry. I went to get a " + adjective[getran(1, 10)] + " <br> scoop of ice cream. It filled my stomach. Afterwards I had to " + verb[getran(1, 10)] + " ";
            document.getElementById("main2").innerHTML = " " + verb[getran(1, 10)] + " to catch our bus. When I got home I " + verb[getran(1, 10)] + " my mom for a " + adjective[getran(1, 10)] + " day at the " + verb[getran(1, 10)] + ". ";
            break;
    }
    */
}