$(document).ready(function(){

$("#aller").click(function(){
    //alert('test');
    var city = $("#city").val();
    //alert(city);
    var url ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3cd9b178a77c22b464a787085e5dfcc3&lang=fr";


    $.get(url, function(data){
        var description = data.weather[0].description;
        var pays = data.sys.country;
        $("#response").empty().append(description + "<hr>" + pays);
    });
});

});