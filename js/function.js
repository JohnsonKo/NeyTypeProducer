

function translateNerType() {

	var str = String(document.getElementById('myInput').value);
	//alert(str);
	//alert(str.length);

   removeAllChild();

    for (var i=0; i< str.length; i++){
    	printNerType(str[i]);	
    	//alert(str[i]);
    } 
}

function printNerType(i) {
	var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var lowerCase = "abcdefghijklmnopqrstuvwxyz";
	var specialCase = " ,.;:";
	var defaultWidth = 0;
	var defaultHeight = 80;
	var preImagePath = "image/";
	var postImagePath = ".png";
	var path;

	if ((upperCase.indexOf(i) == -1) && 
		(lowerCase.indexOf(i) == -1) &&
		(specialCase.indexOf(i) == -1)) 
	{
		alert("please etner English character!");
	}

    if (lowerCase.indexOf(i) != -1)
    	i = i.toUpperCase();

    switch (specialCase.indexOf(i)){
    	case 0:
    		i = "space";
    		break;
    	case 1:
    	case 2:    	
    		i = "dot";
    		break;
    	case 3:
    	case 4:    	
    		i = "colon";
    		break;
    	default:
    		break;
    }

	path = preImagePath + i + postImagePath;
	appendImages(path, defaultWidth, defaultHeight)

}

function appendImages(imageName, width, height) {
    var x = document.createElement("IMG");
    x.setAttribute("src", imageName);
    //x.setAttribute("width", String(width));
    x.setAttribute("height", String(height));
    x.setAttribute("alt", "");
    var node =  document.getElementById("result");
    node.appendChild(x);
}

function removeAllChild(){
	var myNode = document.getElementById("result");
	while (myNode.firstChild) {
	    myNode.removeChild(myNode.firstChild);
	}
}




