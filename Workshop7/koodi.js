// tehtävä 1
function parseData() {
    var quotes = document.getElementsByTagName("quotes");
    var output = document.getElementById("output");
    output.innerHTML = "";
    
    for (var i = 0; i < quotes.length; i++) {
        var quoteText = quotes[i].getElementsByTagName("quote")[0].textContent;
        var authorText = quotes[i].getElementsByTagName("author")[0].textContent;
        
        var para = document.createElement("p");
        para.innerHTML = "<strong>Quote:</strong> " + quoteText + "<br><strong>Author:</strong> " + authorText;
        output.appendChild(para);
    }
}


// tehtävä 2
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
        }
    }
}


// tehtävä 3
function loadAndParseXML() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            var quotes = xmlDoc.getElementsByTagName("quotes");
            var tableData = "<table border='1'><tr><th>Quote</th><th>Author</th></tr>";

            for (var i = 0; i < quotes.length; i++) {
                var quoteText = quotes[i].getElementsByTagName("quote")[0].childNodes[0].nodeValue;
                var authorText = quotes[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;

                tableData += "<tr><td>" + quoteText + "</td><td>" + authorText + "</td></tr>";
            }

            tableData += "</table>";
            document.getElementById("tabledata").innerHTML = tableData;
        }
    }
}


// tehtävä 4
function loadAndParseNews(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            var items = xmlDoc.getElementsByTagName("item");
            var newsList = "<ul>";

            for (var i = 0; i < items.length; i++) {
                var title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                var link = items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                
                newsList += "<li><a href='" + link + "' target='_blank'>" + title + "</a></li>";
            }

            newsList += "</ul>";
            document.getElementById("news-list").innerHTML = newsList;
        }
    }
}
