function hovIn() {
    var areaID = $(this).attr('id');
    //alert('['+areaID+']');
    if (areaID == 'CUST_1') {
        $('#myDiv').show();
    }
}

function hovOut() {
    $('#myDiv').hide();
}

$('map area').hover(hovIn, hovOut);
