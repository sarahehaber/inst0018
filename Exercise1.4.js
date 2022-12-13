function main() {

ageNow = Number(prompt("Enter your age:"))
retirementAge = Number(prompt("Enter your company's retirement age:"))
yearsUntilRetirement = (retirementAge - ageNow)
if (yearsUntilRetirement >= 2) {
	alert("You can retire in " + yearsUntilRetirement + " years.") ;
}

if (yearsUnitlRetirement == 1) {
	alert("You can retire in " + yearsUnitlRetirement + " year.") ;
}

if (yearsUntilRetirement <= 0) {
	alert("You are already eligible for retirement.") ;
}
}	
