var quote = {}

var getQuote = function(json) {
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

	$('.quote-box').html(html);

};

var quote_URL = 'https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

$(document).ready(function (){
	$.getJSON(quote_URL, getQuote);
	$("#getQuoteButton").on("click", function (){
		$.getJSON(quote_URL, getQuote);
	});
	$("#tweetQuoteButton").on("click", function (){
		var textToTweet = quote.quoteText + " " + quote.quoteAuthor;
		if (textToTweet.length > 140) {
 			alert('Tweet should be less than 140 Chars');
 		}
 		else {
 			var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
 			window.open(twtLink,'_blank');
 		}

	});
});