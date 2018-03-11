var arrays = [];
var stringHolder="";
var postFixArray = [];
var count=0;
var count2 = 0;
var outputAns = [];
var evaluator =[];
var answer=0;
var pressedOnce = false;
var teststring = "";


function clicks(o){

	var quest = document.getElementById("ans");

	if(pressedOnce){
		if(/^-*[0-9]+/.test(o.innerHTML) || o.innerHTML === "cos" || o.innerHTML === "sin" || o.innerHTML === "tan"|| o.innerHTML === "log"|| o.innerHTML === "ln" || o.innerHTML === "sin^(-1)"|| o.innerHTML === "cos^(-1)"|| o.innerHTML === "tan^(-1)"){
			quest.innerHTML = "";
			 document.getElementById("question").innerHTML = "";
		arrays.pop();

		}
		pressedOnce = false;
	}

	if(o.innerHTML === "+"  || o.innerHTML === "×" || o.innerHTML === "÷"||  o.innerHTML === ")"|| o.innerHTML === "/"|| o.innerHTML === "*"|| o.innerHTML === "^" || o.innerHTML === "aCb" ||o.innerHTML === "aPb" || o.innerHTML === "1/x" ){

		(stringHolder === "") ? arrays.length: arrays.push(stringHolder);
		if(o.innerHTML ==="aCb"){
			arrays.push("C");
		stringHolder ="";
		quest.innerHTML += "C";
		}else if(o.innerHTML === "aPb"){
			arrays.push("P");
		stringHolder ="";
		quest.innerHTML += "P";
		}else if(o.innerHTML === "1/x"){
			if(stringHolder==="" ){
					arrays.push("1");
					arrays.push("÷");
					stringHolder = "";
					quest.innerHTML	+="1÷";

			}else if(!/^-*[0-9]+/.test(stringHolder)){
			
				arrays.push(stringHolder);
				arrays.push("(")
				arrays.push("1");
					arrays.push("÷");
				stringHolder = "";
					quest.innerHTML	+="1÷";	
			
			}
			else{
				arrays.push("×");
			arrays.push("1");
			arrays.push("÷");
			stringHolder = "";
			quest.innerHTML	+="×1÷";
			}
			
		}
		else{
			arrays.push(o.innerHTML);
		stringHolder ="";
		quest.innerHTML += o.innerHTML;
		}
		

	}else if(o.innerHTML === "Ans"){
		stringHolder+= answer;
		quest.innerHTML += o.innerHTML;
	}else if(o.innerHTML === "e"){
		stringHolder+= Math.exp(1);
			quest.innerHTML += o.innerHTML;
	}
		
	
	else if(o.innerHTML === "(" ){
		var item = arrays.pop();
		if(item != undefined){


		
		if(stringHolder === "" && item != "+"&& item != "×" && item != "÷" && item != "-" && item!= "(" && item != ")"&& item != "/"&& item != "*"&& item != "^"){
		
			arrays.push(item);
			arrays.push("×");
			
		}else if(item === "+"|| item === "×" || item === "÷" || item === "-" || item=== "(" || item === ")"|| item === "/"|| item === "*"|| item === "^" ){
			arrays.push(item);
			arrays.push(o.innerHTML);
		}
		else if(!(/^-*[0-9]+/.test(item)) && stringHolder!=""){
			arrays.push(item);
				arrays.push(stringHolder);
				arrays.push("×");
			
		}else{
			arrays.push(item);
			arrays.push(stringHolder);
			arrays.push("×");
		
		}
	}else{

		if(stringHolder !=""){
					arrays.push(stringHolder);
			arrays.push("×");
		}else{
			arrays.push("×");
		}

			
	}
		stringHolder ="";
		quest.innerHTML += o.innerHTML;

	}
	else if(o.innerHTML === "-"){
		
		if(arrays.length === 0 && stringHolder.length === 0){
			
			stringHolder = o.innerHTML;
		}else if(arrays.length === 0 && stringHolder.length>0){
			
			    arrays.push(stringHolder);
				arrays.push(o.innerHTML);
				stringHolder ="";
		}
		else{
			
			var item  = arrays.pop();
			if(item === "+"  || item === "×" || item === "÷" || item === "-" || item=== "(" || item === ")"|| item === "/"|| item === "*"|| item === "^" ){
					arrays.push(item);
					if(stringHolder!=""){
						arrays.push(stringHolder);
						arrays.push(o.innerHTML);
						stringHolder = "";
					}else{
						stringHolder = o.innerHTML;
					}
					
			}else{
				arrays.push(item);
				//(stringHolder === "") ? arrays.length: arrays.push(stringHolder);
				arrays.push(o.innerHTML);
				stringHolder ="";
			}
			
			
		}
		
		quest.innerHTML += o.innerHTML;

	}else if( o.innerHTML === "n!"){
				if(arrays.length === 0	&& stringHolder	!=""){
						arrays.push(stringHolder);
			arrays.push("!");
				}else if(arrays.length === 0 && stringHolder===""	){

				}else{
					if(stringHolder !=""){
						arrays.push(stringHolder);
					}else{
						arrays.push("×");
					}
					arrays.push("!");
				}
			
		
		stringHolder="";
		quest.innerHTML += "!";

	}
	else if(o.innerHTML === "cos" || o.innerHTML === "sin" || o.innerHTML === "tan" || o.innerHTML === "sin^(-1)"|| o.innerHTML === "cos^(-1)"|| o.innerHTML === "tan^(-1)"|| o.innerHTML === "log"|| o.innerHTML === "ln"){
		if(stringHolder === ""){
			
		}else if(stringHolder === "-" ){
			stringHolder +="1";
			arrays.push(stringHolder);
			arrays.push("×");
		}
		else{
			arrays.push(stringHolder);
				
		}
		
		arrays.push(o.innerHTML);
		arrays.push("(");
		stringHolder ="";
		quest.innerHTML += o.innerHTML + "(";
	}

	else if (o.innerHTML === "=") {
		(stringHolder === "") ? arrays.length: arrays.push(stringHolder);
		stringHolder= "";
		document.getElementById("question").innerHTML = quest.innerHTML;
		
		action();
		

	}else if(o.innerHTML === "π"){
			stringHolder+= Math.PI;
			quest.innerHTML += o.innerHTML;
	}
	else if(o.innerHTML === "←"){

		
		
		// (stringHolder === "") ? arrays.pop(): arrays.length;
		if(stringHolder ===""){

			var item=arrays.pop();
			
			var	lenquest = quest.innerHTML.length-item.length; 
			

		}else{
			var len = stringHolder.length-1;
		var lenquest = quest.innerHTML.length-1;
		}
		stringHolder = stringHolder.substr(0,len);
		quest.innerHTML = quest.innerHTML.substr(0,lenquest);
	}
	else{
		stringHolder+= o.innerHTML;
		quest.innerHTML += o.innerHTML;
	} 
	
	
		
}

function addition(a,b){
	return parseFloat(a)+parseFloat(b);
}

function multiply(a,b){
	return parseFloat(a)*parseFloat(b);
}

function division(a,b){
	return parseFloat(a)/parseFloat(b);
}

function subtraction(a,b){
	return parseFloat(a)-parseFloat(b);
}

function cosine(a){
	return Math.cos(parseFloat(a)*(Math.PI/180));
}

function sine(a){
	return Math.sin(parseFloat(a)*(Math.PI/180));
}

function tan(a){
	return Math.tan(parseFloat(a)*(Math.PI/180)) ;
}
function exponent(a,b){
	return Math.pow(parseFloat(a),parseFloat(b));
}

function asin(a){
	return	Math.asin(parseFloat(a))*(180/Math.PI); 
}
function acos(a){
	return Math.acos(parseFloat(a))*(180/Math.PI);
}

function atan(a){
	return Math.atan(parseFloat(a))*(180/Math.PI);
}

function log(a){
	return Math.log2(parseInt(a));
}
function ln(a){
	return Math.log(parseInt(a));
}

function factorial(a){
	var fact = 1;
	for (var i = 1; i <=a; i++) {
		fact*= i;
	}
	return fact;
}

function permutation(a,b){
	return factorial(a)/factorial(b);
}

function combination(a,b){
	return factorial(a)/factorial(a-b);
}

function showArray(){
	document.write(arrays);
}

function ISP(a){
	if(a === "+" || a === "-"){
		return 0;
	}else if(a === "×"|| a === "÷" || a === "*" || a === "/"){
		return 2;
	}else if(a  === "^" ||a === "!"||a === "C"||a === "P"){
		return 3;
	}else if (a === "sin" || a === "cos" || a === "tan" || a === "cos^(-1)" || a === "sin^(-1)"|| a === "tan^(-1)" || a === "log" ){
		return 5;
	}	
	else if(a==="("){
		return -2;
	}else{
		return 8;
	}
}

function ICP(a){
	if(a === "+" || a === "-"){
		return -1;
	}else if(a === "×"|| a === "÷" || a === "*" || a === "/"){
		return 1;
	}else if(a  === "^" ||a === "!" ||a === "C"||a === "P"){
		return 4;
	}else if (a === "sin" || a === "cos" || a === "tan" || a === "cos^(-1)" || a === "sin^(-1)" || a === "tan^(-1)" || a === "log"){
		return 6;
	}
	else if(a==="("){
		return 9;
	}else if(a === ")"){
		return -2;
	}
	else{
		return 7;
	}
}

function readSymbol(){
	if(count < arrays.length){
	 return(arrays[count++]);
	}else{
		return "empty";
	}
}

function readSymbol2(){
	if(count2 < outputAns.length){
	 return(outputAns[count2++]);
	}else{
		return "empty";
	}
}

function toPostfix(){
	postFixArray.push("(");
	while(postFixArray.length > 0){
		var item = readSymbol();
		var x = postFixArray.pop();
		if(item === "empty"){
			
			while( postFixArray.length>=1){
				
				trimBrackets(x);
				
				x = postFixArray.pop();
			}

		}else{
			if (/^-*[0-9]+/.test(item)) {
			postFixArray.push(x);
			trimBrackets(item);
			}
			else if(item === ")"){
				while(x != "("){
					trimBrackets(x);
					x = postFixArray.pop();
					}	
			}else if(ISP(x) >= ICP(item)){
				while(ISP(x) >= ICP(item)){
					trimBrackets(x);
					x = postFixArray.pop();
				}
				postFixArray.push(x);
				postFixArray.push(item);	
			}else if(ISP(x) < ICP(item)){
				
				postFixArray.push(x);
				postFixArray.push(item);
			
			} else{
				document.getElementById("ans").innerHTML = "Invalid Expression"  +item;
			}
		}
		
		
	}



}

function trimBrackets(a){
	if(a === "(" || a === ")"){

	}else{
		outputAns.push(a);
	}
}

function action(){
	toPostfix();
	answer = evaluatePostfix();
	document.getElementById("ans").innerHTML = answer;
	//showArray();
	 

	continueCalc();
	pressedOnce = true;

}
function continueCalc(){
	
	
	 arrays = [answer];
	 
     stringHolder="";
     postFixArray = [];
     count=0;
     count2 = 0;
	outputAns = [];
	 evaluator =[];
	
	 
	 
}

function clears(){

	arrays = [];
	 
    stringHolder="";
    postFixArray = [];
    count=0;
    count2 = 0;
	outputAns = [];
	evaluator =[];
	document.getElementById("ans").innerHTML = "";
	document.getElementById("question").innerHTML ="";  

}

function evaluatePostfix(){
	outputAns.push("#");
	var item = readSymbol2();
	while(item != "#"){
		if (/^-*[0-9]+/.test(item)) {
			evaluator.push(item);
		}else if(item === "cos" || item === "sin" || item === "tan" || item ==="sin^(-1)" || item ==="tan^(-1)"|| item ==="cos^(-1)" ||item === "!" ||item === "log"||item === "ln" ){
			var op = item;
			var x = evaluator.pop();
			switch(op){
				case "cos":
					var t = cosine(x);
					break;
				case "sin":
					var t = sine(x);
					break;
				case "tan":
					var t = tan(x);
					break;
				case "sin^(-1)":
					var t = asin(x);
					break;
				case "cos^(-1)":
					var t = acos(x);
					break;
				case "tan^(-1)":
					var t = atan(x);
					break;	
				case "!":
				 	var t = factorial(parseInt(x));
				 	break;	
				 case "log":
				 	var t = log(x);
				 	break;	
				 case "ln":
				 	var t = ln(x);
				 	break;					
				default:
					break;			
			}
			evaluator.push(t);
		}
		else{
			var op = item;
			var y = evaluator.pop();
			var x = evaluator.pop();
			switch(op){
				case "+":
					var t = addition(x,y);
					break;
				case "-":
					var t = subtraction(x,y);
					break;
				case "×":
					var t  = multiply(x,y);
					break;
				case "*":
					var t  = multiply(x,y);
					break;	
				case "/":
					var t  = division(x,y);
					break;	
				case "÷":		
					var t = division(x,y);
					break;	
				case "^":
					var t  =exponent(x,y);
					break;
				case "C":
				    var t = combination(parseInt(x),parseInt(y));
				    break;	
				case "P":
				    var t = permutation(parseInt(x),parseInt(y));
				    break;    				
				default:
					break;	
			}
			evaluator.push(t);

		}
		item = readSymbol2();
	}
	var value = evaluator.pop();

	return (value);

}	

function showTime(){
	var Dat = new Date();
	document.getElementById("time").innerHTML = Dat.getHours()+":"+Dat.getMinutes()+":"+Dat.getSeconds();
}