// this is the js file

//alert("hi it's friday")

var numOfPhotos =  7;
var currentPic = 0;

function hidePhotos() {


	for(var p = 1; p < numOfPhotos; p++)
	{
		var photoID = "image" + p;
		document.getElementById(photoID).style.display = "none";
	}
}


function doRightClick(){
	//alert("You clicked the Left Arrow");
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "none";
	// go to next photo
	currentPic--;
	if(currentPic < 0){
		currentPic=numOfPhotos-1;
	}
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "block";
	
}

function doLeftClick(){
	//alert("You clicked the Left Arrow");
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "none";
	// go to next photo
	currentPic++;
	if(currentPic >= numOfPhotos){
		currentPic=0;
	}
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "block";


}


hidePhotos();