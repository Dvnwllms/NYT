console.log("test");
var bDate = 1990
var eDate = 2018
$("#displayResults").on("click", function(event) {
    event.preventDefault();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    // the below variables will be defined by the input feilds
    var searchQ = $("#searchField").val();
    console.log(searchQ);
    bDate = parseInt($("#bDate").val().trim());
    // eDate = parseInt($("#eDate").val().trim());
    var limit = 10;
    console.log($("#bDate").val().trim());
    console.log($("#eDate").val().trim());

    url += '?' + $.param({
    'api-key': "513a2e5f3a9c438f88d61b74e5f68904",
    'q': searchQ,
    'begin_date': bDate + "0101",
    'end_date': eDate + "1231"
    });
    $.ajax({
    url: url,
    method: 'GET',
    }).done(function(result) {
        var articles=result.response.docs ;
    console.log(articles);
    for(var i = 0; i < limit; i++){
        var resultDiv = $("<div>");
        var line = $("<br>");
        var headline= $("<h1>").text(articles[i].headline.main);
        console.log(articles[i].headline.main);
        var byline= $("<h2>").text(articles[i].byline.original);
        console.log(articles[i].byline.original);
        var date= $("<p>").text(articles[i].pub_date);
        console.log(articles[i].pub_date);
        var url=$("<p>").text(articles[i].web_url);
        console.log(articles[i].web_url);
        resultDiv.append(headline, byline, date, url, line);
        $("#topArticles").append(resultDiv);
        console.log("loop");
    }
    }).fail(function(err) {
    throw err;
    });
});
$("#topArticles").empty();
