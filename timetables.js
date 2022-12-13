function main ()
{
	var firstNumber, lastNumber, totalLines, outputString = ' ';
	
	firstNumber = Number(prompt('Enter the number of the first times table you want:'));
    lastNumber = Number(prompt('Enter the number of the last times table you want:'));
    totalLines = Number(prompt('Enter the number of lines for each table:'));
	
	tableCount = firstNumber;
	tableCount <= lastNumber;
	lineCount = 1;
	
	while (lineCount <= totalLines) {
		outputString += String(tableCount) + ' x ' + String(lineCount);
        outputString += ' = ' + String(tableCount * lineCount) + '\n';
		lineCount++;
	}
	
	alert(outputString);
}	
