let urlParams = new URLSearchParams(window.location.search);
let paramAdv = urlParams.get('adv');
if (paramAdv != null && paramAdv != "") {
    var x = document.getElementById("selAdventures");    
    var i;    
    for (i = 0; i < x.options.length; i++) {
        if(x.options[i].value == paramAdv)
        {
            x.options[i].selected = true;
            break;
        }
    }
}