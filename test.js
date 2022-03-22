function appendText() {
    var table = $("#mark_table");
    var row = $('<tr></tr>');
    for(i=0; i<5; i++){
        var cell = $("<td></td>").text("abc");
        row.append(cell)

    }
    table.append(row);
}