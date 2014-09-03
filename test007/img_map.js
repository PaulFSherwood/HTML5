    $(document).ready(function() {
        if($('#map')) {
            $('#map area').each(function() {
                var id = $(this).attr('id');
                $(this).mouseover(function() {
                    $('#overlay'+id).show();
                    
                });
                
                $(this).mouseout(function() {
                    var id = $(this).attr('id');
                    $('#overlay'+id).hide();
                });
            
            });
        }
    });
