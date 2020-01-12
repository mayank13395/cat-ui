// $(document).ready(function() {
//     console.log("fefefg");
    
//     $(".dropdown-toggle").dropdown();
// });

function onLoad() {
    myWorkSpaces();
    // document.getElementById("my-workspace").focus(
    //     document.getElementById("my-workspace").style.backgroundColor = "white",
    //     document.getElementById("my-workspace").style.color = "#2E5878",


    // );
}

const setStylesOnElement = function(styles, element){
    Object.assign(element.style, styles);
}


function myWorkSpaces() {
    console.log("my workspace..............................");
    $('#my-dashboard-container').empty();
    $("#my-dashboard-container").load("./workspaces/workspace.html"); 
   
    
}


function myGroups() {
    console.log("my groups..............................");
    $('#my-dashboard-container').empty();
    $("#my-dashboard-container").load("./groups/groups.html"); 
  
    
}




function myTrash() {
    console.log("my trash..............................");
    $('#my-dashboard-container').empty();
    $("#my-dashboard-container").load("./trash/trash.html"); 
   


    
}


function  groupDetails() {
    console.log("groupDetails..................");
    $('#my-dashboard-container').empty();
    $("#my-dashboard-container").load("./groups/groupDetails/groupDetails.html"); 
   
}


// ......................responsive text content.......... 

const mq = window.matchMedia( "(min-width: 1000px)" );


if (matchMedia) {
    const mq = window.matchMedia("(max-width: 1050px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
    }
    
    // media query change
    function WidthChange(mq) {
        
    if (mq.matches) {
    // window width is at least 500px
    console.log("changed text for this screen");
    console.log(document.getElementById("newproject"));
    
    document.getElementById("newproject").innerText = "New";
    document.getElementById("my-workspaces").innerText = "Workspaces";
    

    } else {
    // window width is less than 500px
    if (document.getElementById("newproject")!=null ||  document.getElementById("my-workspaces")!=null) {
        document.getElementById("newproject").innerText = "New Project";     
        document.getElementById("my-workspaces").innerText = "My Workspaces";
    }
  
    }
    
    }