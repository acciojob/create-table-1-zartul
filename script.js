function insert_Row() {
    //Write your code here
    let val = document.getElementById("sampleTable");
    let newRow = val.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
  
}
