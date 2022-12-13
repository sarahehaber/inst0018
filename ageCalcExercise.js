function main ()
{
    var yearNow, ageNow, anotherYear, anotherAge;
        
        
    anotherAge = ageNow + (anotherYear - yearNow);
        
	
	var output = '<pre>' + String(anotherAge) + '</pre>';
    document.getElementById('outputDiv').innerHTML = output;
}



function displayAge () {
	var yearNow, ageNow, anotherYear, anotherAge;
	var yearNow = Number(document.getElementById('currentyear').value.trim());
	var ageNow = Number(document.getElementById('currentage').value.trim());
	var anotherYear = Number(document.getElementById('chosenyear').value.trim());
	main();
	anotherAge = ageNow + (anotherYear - yearNow);
	var output = '<pre>' + String(anotherAge) + '</pre>';
    document.getElementById('outputDiv').innerHTML = output;
}