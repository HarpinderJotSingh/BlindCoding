function getLeaderboard() {
    $.ajax({
        url : "http://127.0.0.1:8000/accounts/profile/leaderboard/",
        type : "GET",
        beforeSend : function() {
            document.getElementById('position').innerHTML = "Please Wait...";
            for (var i = 0; i < 10; ++i) {
                document.getElementsByClassName('name')[i].innerHTML = "Please Wait...";
            }
        },
        success : function(jsondata) {
            var objRecieved = jQuery.parseJSON(JSON.stringify(jsondata));
            for (var i = 0; i < 10; ++i) {
                document.getElementsByClassName('name')[i].innerHTML = objRecieved.username[i]; //Get Array of Username's here
                document.getElementsByClassName('score')[i].innerHTML = objRecieved.score[i]; //Get Array of Score's here
            }
            document.getElementById('position').innerHTML = objRecieved.rank;
        },
        error : function() {
            console.log("Error");
        }
    })
}