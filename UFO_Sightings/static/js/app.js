0// from data.js
var tableData = data;

// select table
var tbody = d3.select("tbody");

// select filter Table button
var filter = d3.select("#filter-btn");

filter.on("click", function() {
    // prevent page refresh
    d3.event.preventDefault();
    
    tbody.html("")

    // select input date
    var date = d3.select("#datetime");
 
    // get date value
    var datevalue = date.property("value");
  
    
    // console.log(datevalue);
    // console.log(tableData);

    var filterdate = tableData.filter(sighting => sighting.datetime ===datevalue);


    filterdate.forEach(function(ufoData) {
        // console.log(ufoData);
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key,value]){
            console.log([key,value]);
            row.append("td").text(value);
            
        });
    });
})