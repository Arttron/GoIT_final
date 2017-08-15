/**
 * Created by User on 14.08.2017.
 */
(function(){
    var randomSearch = ["glass", "animal", "green", "city", "yellow", "red", "flower", "sky", "summer"];
    var requestSend = 0;
function pixaBayRequest(query = "city", page = 1) {
    let serchRes = {};
    var key = "5780982-5f1903b9b55e403f26dbb04a1";
    var pixaBayHTTP = new XMLHttpRequest();
    pixaBayHTTP.open(
        "GET","https://pixabay.com/api/?key="+key+"&q="+query+"&page="+page+"&per_page=7&image_type=photo",
        true
    );
    pixaBayHTTP.onreadystatechange = ()=> {
        if (pixaBayHTTP.readyState == 4) {
            if (pixaBayHTTP.status == 200) {

                renderIdeasTenplate(JSON.parse(pixaBayHTTP.responseText));
                var grid = document.querySelector('.grid');
                var msnry = new Masonry( grid, {
                    // options...
                    columnWidth: '.grid-sizer',
                    // do not use .grid-sizer in layout
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    gutter: '.grid-gutter'
                });
            }
        }
    };
    pixaBayHTTP.send("null");
    return serchRes;
}
    function renderIdeasTenplate(data){
        var reg = /^[\w \ ]+/g;
        let i = 0;
        _.forEach(data.hits, (item)=>{
            data.hits[i].tags = item.tags.match(reg)[0];
            i++;
        });
        var partnersTmpl = _.template(document.querySelector("#IdeasTemplate").innerText);
        document.querySelector("#ideas__api-img").innerHTML = partnersTmpl(data);
    }
    pixaBayRequest(randomSearch[_.random(0,8)]);
    var searchBtn = document.querySelector("#search__button");
    var searchText = document.querySelector('#search__input');

    searchBtn.addEventListener("click", (event)=>{
        event.preventDefault();

        if (!requestSend) {
            setTimeout(()=>{
                requestSend = 0;
            },2000);
            pixaBayRequest(searchText.value);
            requestSend = 1;
        }
    });
}());