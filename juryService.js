const MIN_AGE = 18, MAX_AGE = 65;

function main ()
{
    var age, hasCriminalRecord = false, yesOrNo;
    
    age = Number(prompt('Enter your age:'));
    yesOrNo = prompt('Do you have a criminal record? (y/n):');
    if (yesOrNo == 'y' || yesOrNo == 'Y')
        hasCriminalRecord = true;
   
    if (hasCriminalRecord || age < MIN_AGE || age > MAX_AGE)
        alert('You are excluded from jury service.');   
    else 
        alert('You are required to do jury service.');   
}