////= lory.min.js
//= sliders.js
//= searchIdea.js
'use strict';
(function(document){
    function myJsonRequest(ID = '1d1pv5') {
        let serchRes = {};
        var myJsonHTTP = new XMLHttpRequest();
        myJsonHTTP.open(
            "GET",`https://api.myjson.com/bins/${ID}`,
            true
        );
        myJsonHTTP.send();
        myJsonHTTP.onreadystatechange = function() {

            if (myJsonHTTP.readyState == 4) {
                if (myJsonHTTP.status == 200) {
                    renderTenplate(JSON.parse(myJsonHTTP.responseText));
                    return myJsonHTTP.responseText;
                }
            }
        };

        return serchRes;
    }
    function renderTenplate(data) {
        var partnersTmpl = _.template(document.querySelector("#PartnersTemplate").innerText);
        document.querySelector("#partners-cont").innerHTML = partnersTmpl(data);
    }
    myJsonRequest();
    // vanilla JS
    // init with element

}(document));