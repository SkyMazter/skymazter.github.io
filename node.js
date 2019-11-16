let datalength = slots.projects.length;
slots.projects.name;
console.log(datalength);
function pasteProjects(){
    for( i = 0; i < datalength; i++){
        $("#projects").append("<div class = 'project'>"+
        "<h1>"+slots.projects[i].name+"</h1>"+
        "<img src='"+slots.projects[i].pic+"'>"+
        "<a href='"+slots.projects[i].link+"'>Check It Out!</a>"+
        "</div>");
        
    };
};
pasteProjects();