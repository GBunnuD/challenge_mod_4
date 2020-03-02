function Challenge() {
    const Count = parseInt(document.querySelector('#coc').value)
    const avgStudent = parseInt(document.querySelector('#aspc').value)

    const EstimatedStudent = Count * avgStudent;



    document.querySelector('#EstimatedStudent').innerHTML = `${EstimatedStudent}`
}
document.querySelector('#calculate').addEventListener('click', Challenge)