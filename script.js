function insert_Row() {
    //Write your code here
    let table = document.getElementById("sampleTable");
    let topRow = table.insertRow(0); 
	
    let cell1 = topRow.insertCell(0);
    let cell2 = topRow.insertCell(1);

    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
