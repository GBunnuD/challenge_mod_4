function Challenge()
{
     const Count=parseFloat(document.querySelector('#coc').value)
     const avgStudent=parseFloat(document.querySelector('#aspc').value)
     
     const EstimatedStudent=Count*avgStudent;
    

     
     document.querySelector('EstimatedStudent').innerHTML=`${EstimatedStudent.toFixed(2)}`
}
     document.querySelector('#calculate').addEventListener('click',Challenge)