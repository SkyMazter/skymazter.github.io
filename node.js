let datalength = slots.projects.length;
slots.projects.name;
console.log(datalength);
function pasteProjects(){
    for( i = 0; i < datalength; i+=1){
        $("#projects").append("<div class = 'project'>"+
        "<img src='"+slots.projects[i].pic+"'>"+
        "<div class = 'side_info'>"+
        "<h1>"+slots.projects[i].name+"</h1>"+
        "<a href='"+slots.projects[i].link+"'>Project Availabe Here</a>"+
        "</div>"+
        "</div>");
    };
};
pasteProjects();