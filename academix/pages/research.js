
/* I. Research info*/
// Research info here
var rInterests, rConferences, interestList, numInterests, numPublications;
//===================================================

// ================ RESEARCH DESCRIPTION HERE =================
rInterests = { // put your research description and interests here (Don't delete the commas!)
    // ---- 1.  Page Header:----------------------- 
    myHeader: "Research overview" // The short text you put here will appear as a header of the research page
    
    ,// ---- 2. Description text of your research: -------  
    descrText: // Put a text of any length describing your research (You may also format it with html tags).
    
    "Lorem ipsum dolor sit amet, mel ex expetendis interpretaris, doctus nostrum nam an. Eum et denique theophrastus, nec te duis lucilius, quis minim eos cu. Mei nulla mandamus repudiare at, eu vide cibo sadipscing mei, sed et iudico oratio constituam. Vim ex illum adipisci."
    
    
    ,// ------- 3. List of your Research interests: -------    
    interests: [ // Add as many interests as you want. Each interest should be put between "" and entries are separated by a comma
        "Linear quantum psychology",
        "Psychological analysis of great minds",
        "Quantum brain imaging",
    ]
    
}

//==============================================================

interestList = rInterests.interests;
numInterests = interestList.length;





numPublications = rPublications.length;


/* II. Functions to populate the research page */







/*
*/

/* II.2)  Containers */

var rContainers = '<br><div class="jumbotron">' // panel containing descrpiton of research 
    + '<h2 class="display-6" id="rHeader"></h2><p class="lead" id="descrText"></p><hr class="my-4">'
    + '<p>My main research interests are:'
    + '<ul id="rList"></ul></p>' // list of interests appear here
    + '</div>' // End of jumbotron containing research interests, followed by container for publications
    + '<div class="row">' 
    + '<div class="col-sm-7 pub-list">' // left column for pub list
          + '<h2>Publications and preprints</h2>' 
          + '<div class="list-group" id="publist"></div>'
          + '</div>'
    + '<div class="col-sm-5 pub-description">' // right column to display short description for each publication
          + '<div class="panel panel-default"><div class="panel-heading" id="abstractHeading"></div><div class="panel-body" id="description"></div></div>'
     + '</div>' 
    + '</div>';



/* II.3) Utility functions */

// add a function key to publications objects:
/*

*/



/* II.4) Main function */

function showResearch() { 
    
    document.getElementById('content').innerHTML = rContainers; // display containers 
    window.location.hash = 'research'; // show page on url
    
    document.getElementById('rHeader').innerHTML = rInterests['myHeader']; // display text header
    
    document.getElementById('descrText').innerHTML = rInterests['descrText']; // display description text
    
   
    
    
    
    var rList = ''; // instantiate research interest list    
    
    for (var i=0; i < numInterests; i++) { // loop through interest list
        rList += '<li><b>' + interestList[i] + '</b></li>';
    }
    
    document.getElementById('rList').innerHTML = rList;
    
    
    
    
    
    var pubList = ''; // start listing publications
    
    for (var pub of rPublications) { // loop through publication list
        
        
        
        
        var pubAuthors = '';
           for (var author of pub['pubAuthors']) {
            pubAuthors += author  + ' ' + ';'+ ' ' ; 
        };
        
        
        
        pubList += '<button class="list-group-item">' +   pubAuthors + ' ' + '<i>' + pub.pubTitle + '.</i>' 
            + ' ' +  '<br><b>' + pub.journal + '.</b>' +  ' ' + '(' + pub.pubYear + ')'
        + ' ' + 'pp.' + ' ' + pub.pp + '.' +  
        ' ' + 'isbn:' + ' ' 
        + pub.isbn + '</button>'; 
    }
    
    
    document.getElementById('publist').innerHTML = pubList; // display publist
    
    
    //Assign an onclick function to each publication that shows description
    var containerBtns = document.getElementById('publist');
    var btns = containerBtns.querySelectorAll('button');
    btns.forEach(function(button, index) {
        button.addEventListener('mouseover', function() {
            document.getElementById('abstractHeading').innerHTML = 'Short description';
            document.getElementById('description').innerHTML = rPublications[index].pubDescription;
        });
    });     
    
    
    
    
    
   
    
}


