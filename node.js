//DOM constructor
// new Document();

var datalength = slots.projects.length;

var numJournals = 0;
console.log(datalength);

//code to pasting the project data from the object to the page
function pasteProjects(){
    for( i = 0; i < datalength; i+=1){
        if(slots.projects[i].name != ""){
            $("#projects").append("<div class = 'project'>"+
            "<img src='"+slots.projects[i].pic+"'>"+
            "<div class = 'side_info'>"+
            "<h1>"+slots.projects[i].name+"</h1>"+
            "<a href='"+slots.projects[i].link+"'>Project Availabe Here</a>"+
            "</div>"+
            "</div>");
        }
    };
};
pasteProjects();

//switches from displaying cs projects to displaying journalism stuff

var sub_title = document.querySelector(".sub-title");
var portfolio_content = document.querySelector("#projects");
var main = document.querySelector("#main");


function pasteJournals(){
    $("#projects").html("<embed class = 'journals' src='profile.pdf' width='800px' height='700px' />"
    + "<embed class = 'journals' src='QandA.pdf' width='800px' height='700px' />");

    sub_title.innerHTML = "<h1 class>Journals</h1>";
    document.getElementById("header").appendChild(btn);
};
//Show journalism stuff
$("#postJourn").click(function(){
    pasteJournals();
});
var journ = document.createElement("button");
    journ.innerHTML = "Journalism";
    journ.id = "postJourn";
    journ.addEventListener("click", function(){
        pasteJournals();
    });

//return to CS
var btn = document.createElement("button");   // Create a <button> element
    btn.innerHTML = "Coding";                   // Insert text
    btn.id = "postCs";
    btn.addEventListener("click", function(){
        $("#projects").html("");
        document.getElementById("header").removeChild(btn);
        document.getElementById("header").innerHTML = "<h1>CSS - HTML - Javascript</h1>";
        // $("#header").append("<button id  = 'postJourn'>Clear</button>");
        pasteProjects();
        document.getElementById("header").appendChild(journ);
        console.log("done");
    });





//contact page buttons


$("#insta").click(function(){
    window.open("https://www.instagram.com/kevincomunidad/");
});
$("#linkedIn").click(function(){
    window.open("https://www.linkedin.com/in/oscar-comunidad-90b224168/");
});
$("#twitch").click(function(){
    window.open("https://www.twitch.tv/a_little_syco");
});
$("#github").click(function(){
    window.open("https://github.com/SkyMazter");
});