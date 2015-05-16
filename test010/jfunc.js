$('#HDG').click(function () {
    fgCommand.propertyAssign("/autopilot/settings/heading-bug-deg", 0);
    SetListener( "/autopilot/settings/heading-bug-deg", function(n) { $("#HDG").val( n.value ); });
});

$('#CRS').click(function () {
    fgCommand.propertyAssign("/instrumentation/nav/radials/selected-deg", 90);
    SetListener( "/instrumentation/nav/radials/selected-deg", function(n) { $("#CRS").val( n.value ); });
});

$('#ND').click(function () {
    fgCommand.propertyAssign("/instrumentation/nd/range", 5);
    SetListener("/instrumentation/nd/range", function(n) { $("#ND").val(n.value); });
});


// ************************
// **** HEADING SETTING ***
// ************************

$('#HDGbtnr1').click(function () { 
    var hdg = $('#HDG').val();
    hdg = parseFloat(hdg) - parseFloat(1);

    if (hdg < 0) {
        hdg = hdg + 360;
    }

    $('#HDG').val(hdg);
    fgCommand.propertyAssign("/autopilot/settings/heading-bug-deg", hdg);
});

$('#HDGbtnr10').click(function () { 
    var hdg = $('#HDG').val();
    hdg = parseFloat(hdg) - parseFloat(10);

    if (hdg < 0) {
        hdg = hdg + 360;
    }

    $('#HDG').val(hdg);
    fgCommand.propertyAssign("/autopilot/settings/heading-bug-deg", hdg);
});

$('#HDGbtnl1').click(function () { 
    var hdg = $('#HDG').val();
    hdg = parseFloat(hdg) + parseFloat(1);

    if (hdg > 360) {
        hdg = hdg - 360;
    }

    $('#HDG').val(hdg);
    fgCommand.propertyAssign("/autopilot/settings/heading-bug-deg", hdg);
});

$('#HDGbtnl10').click(function () { 
    var hdg = $('#HDG').val();
    hdg = parseFloat(hdg) + parseFloat(10);

    if (hdg > 360) {
        hdg = hdg - 360;
    }

    $('#HDG').val(hdg);
    fgCommand.propertyAssign("/autopilot/settings/heading-bug-deg", hdg);
});

// ************************
// **** COURSE SETTING ****
// ************************

$('#CRSbtnr1').click(function () { 
    var crs = $('#CRS').val();
    crs = parseFloat(crs) - parseFloat(1);

    if (crs < 0) {
        crs = crs + 360;
    }

    $('#CRS').val(crs);
    fgCommand.propertyAssign("/instrumentation/nav/radials/selected-deg", crs);
});

$('#CRSbtnr10').click(function () { 
    var crs = $('#CRS').val();
    crs = parseFloat(crs) - parseFloat(10);

    if (crs < 0) {
        crs = crs + 360;
    }

    $('#CRS').val(crs);
    fgCommand.propertyAssign("/instrumentation/nav/radials/selected-deg", crs);
});

$('#CRSbtnl1').click(function () { 
    var crs = $('#CRS').val();
    crs = parseFloat(crs) + parseFloat(1);

    if (crs > 360) {
        crs = crs - 360;
    }

    $('#CRS').val(crs);
    fgCommand.propertyAssign("/instrumentation/nav/radials/selected-deg", crs);
});

$('#CRSbtnl10').click(function () { 
    var crs = $('#CRS').val();
    crs = parseFloat(crs) + parseFloat(10);

    if (crs > 360) {
        crs = crs - 360;
    }

    $('#CRS').val(crs);
    fgCommand.propertyAssign("/instrumentation/nav/radials/selected-deg", crs);
});

// ************************
// *** ND RANGE SETTING ***
// ************************

$('#NDr').click(function () {
    var NDrange = $('#ND').val();
    NDrange = parseFloat(NDrange) + parseFloat(1);

    if (NDrange > 100) {
        NDrange = 100;
    }

    $('#ND').val(NDrange);
    fgCommand.propertyAssign("/instrumentation/nd/range", NDrange);
});

$('#NDl').click(function () {
    var NDrange = $('#ND').val();
    NDrange = parseFloat(NDrange) - parseFloat(1);

    if (NDrange < 0) {
        NDrange = 0;
    }

    $('#ND').val(NDrange);
    fgCommand.propertyAssign("/instrumentation/nd/range", NDrange);
});
    
