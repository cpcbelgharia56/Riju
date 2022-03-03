var selectedrow = null;

function addStudent() {

    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var myBtn = document.getElementById("myBtn").value;


    if (myBtn == "Add Contact") {
        //window.alert(contact.length);
        if (contact.length == 10) {
            var table = document.getElementById("contactlist").getElementsByTagName('tbody')[0];
            //var table = contactlist.getElementsByTagName("tbody")[0];

            //window.alert("Total Rows: " + table.length);

            //create New Row means (tr)
            var newRow = table.insertRow(table.length);

            col1 = newRow.insertCell(0);
            col1.innerHTML = name;

            col2 = newRow.insertCell(1);
            col2.innerHTML = contact;

            col3 = newRow.insertCell(2);
            col3.innerHTML = `<a onclick="editContact(this)">Edit</a> <a onclick="deleteContact(this)">Delete</a>`;

            window.alert("New Contact Added Successfully");

            document.getElementById("name").value = "";
            document.getElementById("contact").value = "";
        } else {
            alert("Contact Number Must be 10 digit");
        }
    } else {
        //Update Data
        selectedrow.cells[0].innerHTML = name;
        selectedrow.cells[1].innerHTML = contact;

        alert("Update Successfully");

    }


}

function editContact(tr) {
    selectedrow = tr.parentElement.parentElement;
    document.getElementById("name").value = selectedrow.cells[0].innerHTML;
    document.getElementById("contact").value = selectedrow.cells[1].innerHTML;

    document.getElementById("myBtn").value = "Update Student";
}



function deleteContact(tr) {
    if (confirm('Are you sure to delete Record ?')) {
        row = tr.parentElement.parentElement;
        document.getElementById("contactlist").deleteRow(row.rowIndex);
    }


}

function checkValidation() {
    var contact = document.getElementById("contact").value;
    var len = contact.length;
    //alert(len);
}