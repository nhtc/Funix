$(document).ready(function () {
    let numOfStudent = $("#mark_table tr").length-1;
    const testScore = {
        name: "",
        math: 0,
        physical: 0,
        chemistry: 0
    };
    $("#btn-input").click(function () {
        insertInfo();
    });
    $("#btn-avg").click(function (){
        calcAverage();
    });
    $("#btn-del").click(function(){
        deleteRow();
    });
    $("#btn-classify").click(function(){
        classification();
    });
    
    $("#id_col").click(function(){
        sortTable(0);
    });
    $("#name_col").click(function(){
        sortTable(1);
    });
    $("#maths_col").click(function(){
        sortTable(2);
    });
    $("#physics_col").click(function(){
        sortTable(3);
    });
    $("#chemistry_col").click(function(){
        sortTable(4);
    });
    $("th#avg_col").click(function(){
        sortTable(5);

    });
    
    
function insertInfo() {
    testScore.name = $("#name").val();
    testScore.math = $("#maths").val();
    testScore.physical = $("#physics").val();
    testScore.chemistry = $("#chemistry").val();
    if (testScore.name == "" || testScore.math == "" || testScore.physical == "" ||
        testScore.chemistry == "") {
        alert("Vui lòng nhập đủ các thông tin!");
    } else if (!between(testScore.math, 0, 10) || !between(testScore.physical, 0, 10) ||
        !between(testScore.chemistry, 0, 10)) {
        alert("Điểm tối đa là 10!");

    } else {
        numOfStudent++;
        insertTable();
        $("#name").val("");
        $("#maths").val("");
        $("#physics").val("");
        $("#chemistry").val("");
    }
}


function insertTable() {
    var table = $("#mark_table");
    var row = $('<tr></tr>');
    row.append($("<td></td>").text(numOfStudent));
    row.append($("<td></td>").text(testScore.name));
    row.append($("<td></td>").text(testScore.math));
    row.append($("<td></td>").text(testScore.physical));
    row.append($("<td></td>").text(testScore.chemistry));
    row.append($("<td></td>").text("?"));
    table.append(row);
}


function calcAverage() {
    //các row có index greater than 0-- bỏ row header
    $("#mark_table tr:gt(0)").each(function(){
        var currentRow=$(this);
        var avg = (parseFloat(currentRow.find("td:eq(2)").text()) +
                 parseFloat(currentRow.find("td:eq(3)").text()) +
                  parseFloat(currentRow.find("td:eq(4)").text())) / 3;
        currentRow.find("td:eq(5)").text(avg.toFixed(1));
});
}

function classification() {
    var x = $("#mark_table tr:gt(0)").find("td:eq(5)").text();
    if(x.indexOf("?") > -1){//kiểm tra xem đã tính hết điểm trung bình chưa
        alert("Vui lòng tính điểm trung bình trước!");    
    }
    $("#mark_table tr:gt(0)").each(function(){
        var currentRow=$(this);
    if(parseFloat(currentRow.find("td:eq(5)").text())>=8){
        // currentRow.css("background-color","red");
        currentRow.addClass("red");
    }
    });
}

function between(x, min, max) {
    return x >= min && x <= max;
}


function deleteRow() {
    n = parseInt($("#id-student").val());
    $("#id-student").val("");
    len_tb = $("#mark_table tr").length;
    if (parseInt(n) < len_tb && parseInt(n) != 0) {
        $("#mark_table tr:eq(" + n +")").remove();
        numOfStudent--;
        $("#mark_table tr:gt("+(n-1)+")").each(function(){
            currentRow=$(this);
            var st = parseInt(currentRow.find("td:eq(0)").text()) - 1;
            currentRow.find("td:eq(0)").text(st);
        });
    }
}



//Tham khảo nguồn từ W3School là code js thuần, em đã tự thay đổi
// và điều chỉnh về cú pháp của jquery
//  https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(n) {
    var currentRow, switching, x, y, shouldSwitch, dir, switchcount = 0;
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        $("#mark_table tr:gt(0)").each(function(){
            shouldSwitch = false;
            currentRow=$(this);
            if(currentRow.next().find("td:eq("+n+")").text() != ""){
                x = currentRow.find("td:eq("+n+")").text();
                y = currentRow.next().find("td:eq("+n+")").text();
            }
            if(n==1){
                if (dir == "asc") {
                    if (x.toLowerCase() > y.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    return false;
                    } 
                } else if (dir == "desc") {
                        if (x.toLowerCase() < y.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        return false;
                            }
                        }
            } else {
                if (dir == "asc") {
                    if (parseFloat(x)> parseFloat(y)) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    return false;
                    }
                    } else if (dir == "desc") {
                        if (parseFloat(x) < parseFloat(y)) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        return false;
                            }
                        }
                }
        });
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
           currentRow.next().insertBefore(currentRow);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;      
            } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }  
        }
    }
}

});