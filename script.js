const extendHex = (shortHex) => {
  // write your code here
	let i=shortHex.length-3,iscapital=false,output="#";
	while(i<shortHex.length){
	let asciivalue=shortHex[i].chartAt(0);
		if(asciivalue>=65 && asciivalue<=90)
		{
			iscapital=true;
		}
		output+=shortHex[i]+shortHex[i];
		i++;
	}
	return output?output.toUpperCase():output;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
