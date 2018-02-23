console.log("test");
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "513a2e5f3a9c438f88d61b74e5f68904",
  'q': "trump",
  'begin_date': "19941029",
  'end_date': "20180129"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
    var articles=result.response.docs ;
  console.log(articles);
  for(var i = 0; i < articles.length; i++){
    var resultDiv = $("<div>")
    var headline= $("<h1>").text(articles[i].headline.main);
    console.log(articles[i].headline.main);
    var byline= $("<h2>").text(articles[i].byline.original);
    console.log(articles[i].byline.original);
    var date= $("<p>").text(articles[i].pub_date);
    console.log(articles[i].pub_date);
    var url=$("<p>").text(articles[i].web_url);
    console.log(articles[i].web_url);
    resultDiv.append(headline, byline, date, url);
    $("#topArticles").append(resultDiv);
    console.log("loop");
  }
}).fail(function(err) {
  throw err;
});