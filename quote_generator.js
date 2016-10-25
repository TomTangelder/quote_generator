//var myVariable = 'Hello';
//window.alert(myVariable);

var quote = {}

var getQuote = function(json) {
	//console.log(json)
	//console.log(json.quoteText)
	//console.log(json.quoteAuthor)
	quote = {
		'quoteText': json.quoteText,
		'quoteAuthor': json.quoteAuthor
	};

	if (quote.quoteAuthor == ""){
		quote.quoteAuthor = "Unknown";
	}

	var html = ""
	html += "<blockquote>"
	html += quote.quoteText
	html += "<footer>"
	html += quote.quoteAuthor
	html += "</footer>"
	html += "</blockquote>"

	window.alert(json.quoteText)

	$('.quote-box').html(html);

};

var quote_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

$(document).ready(function (){
	window.alert("hello")
	$.getJSON(quote_URL, getQuote);
	$("#getQuoteButton").on("click", function (){
		window.alert("quote clicked")
		$.getJSON(quote_URL, getQuote);
	});
	$("#tweetQuoteButton").on("click", function (){
		window.alert("Tweet quote clicked")
	});
});