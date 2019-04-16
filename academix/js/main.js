/*############################################\
\###############   ACADEMIX   ################/
/##### MAIN Script rendering all the pages ###\
\######## Academix is simple single webpage ##/
/############## for Academics ################\
\######### Author: Elk. Moutuou ##############/
/########2019#################################\
\############################################*/


//0. ======  Add all js files =========


addScript('pages/publicationList.js');
addScript('pages/research.js');
addScript('pages/cv.js');
addScript('pages/teaching.js');


addScript('media/pictures.js');
addScript('media/docs.js');

//=======================================
// I. Render Site Headers and home containers


//I. 1) Headers 

headerValues = Object.values(headerItems);

numItems = headerValues.length; // number of items in headersItems


myHeaders = /* instantiate headers by splitting through three div: thumbnail div + left header and right header.*/
    '<div class="col-sm-1 pic-thumbnail"><a href="index.html"><img src="img/pic.jpg"></img></a></div>' 

    + '<div class="col-sm-4"> <span class="pull-left">'
    +  headerItems.myTitle + ' ' 
    + headerItems.name
    +  '</span><br>'     
    +  '<span class="pull-left" style="font-size:12px;"><i>' 
    + headerItems.jobTitle + ' ' + 'of' + ' '
    + headerItems.area + '</i></span></div>' 
    + '<div class="col-sm-7 rightHeader">'; 




for (i = 4; i < numItems; i++) {
    myHeaders += '<span style="font-size:12px;">' + headerValues[i] +  '</span><br>' ;
}

myHeaders += '</div>';


document.getElementById('headers').innerHTML = myHeaders;



// I.2 ======   Home content main containers ==== 

var homeContent = document.getElementById('content');


var homeContainers = '<br>' 
    + '<div class="row">'
         + '<div class="col-sm-7">'
              + '<div class="jumbotron">' // panel containing landing message and info
                 + '<h2 class="display-6" id="aboutHeader"></h2><hr class="my-4"><p class="lead" id="presentation"></p>'
     
             + '</div>' // End of jumbotron containing 

         + '</div>' 
         + '<div class="col-sm-5" id="pictures">'
         + '</div>'
    + '</div>';
    

// render main content containers

homeContent.innerHTML = homeContainers;

    
   



// =================================================


// II. Sub Pages and Navigation bar

// II.1) 
var subPages,  NumPages, navList, i; /* declare subpages, number of pages, ...*/

subPages = [ 
    /*put all pages here, ordered as blocks of titles and url files.*/
    {
        pTitle: 'Research',
        pFile: 'pages/research.html',
        pFunction: function() {return showResearch();} 
    },
    {
        pTitle: 'Teaching',
        pFile: 'pages/teaching.html',
        pFunction: function() {return showTeaching();}
    },
    {
        pTitle: 'CV',
        pFile: 'pages/cv.html',
        pFunction: function() {return showCV();}
    },
    {
        pTitle: 'Miscelaneous',
        pFile: 'pages/misc.html',
        pFunction: function() {return showMiscelaneous();}
    }
    
];


numPages = subPages.length; // number of all subpages

navList = ''; // listing page titles in the navbar

for (i = 0; i < numPages; i++) { //loop on titles in subPages
    navList += '<li class="nav-item"><button class="btn btn-primary">' + subPages[i]['pTitle'] + '</button></li>';
}

document.getElementById("pageList").innerHTML = navList; /* add all items onto the navbar */

// ===================================================

//  II.2)=== Render sub pages 
var containerNavBtns = document.getElementById('pageList');
var pageBtns = containerNavBtns.querySelectorAll('li');
pageBtns.forEach(function(li, index) {
    li.addEventListener('click', function() {
        subPages[index].pFunction();
    });
});

// ====================================================


/* III Populate home containers */

// III.1) =======  Display the 'About Me page' ============

document.getElementById('aboutHeader').innerHTML = aboutMySelf.pageTite; // render the about page title

document.getElementById('presentation').innerHTML = aboutMySelf.myPresentation;




// II.2) ===== Display pictures ======


var myPic = '<div class="card">'
            + '<img src="media/pictures/' + myPictures[0].picFile + '"></img>'
            + '<div class="card-body"><h4 class="card-title">'
            + myPictures[0].picCaption + '</h4>'
            + '<p class="card-text">'
            + myPictures[0].picText + '</p>'
            + '</div></div>';

document.getElementById('pictures').innerHTML = myPic;


/* II.3) ===== Other info


/* ==================  Footer ====================== */

var footer = '2019 &copy; - Academix - <span style="font-size:10px;">Powered by <a href="http://moutuou.net">Elk Moutuou</a></span>'; // Feel free to replace this text with your own.

document.getElementById('footer').innerHTML = footer;
















/// Other utility functions 

// Function to import scripts into the index file 

function addScript(sFilePath) { // Takes as variable the path of the js file
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = sFilePath;
    document.getElementsByTagName('head')[0].appendChild(s);
}

