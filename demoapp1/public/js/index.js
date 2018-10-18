$(document).ready(function () {

    $.get('/api/track', function (data) {
        let array = $.map( data, function( value, index ) {
            return $('<div>').attr('id', value["_id"]).html(value.name);
        });
        console.log(array);
        $("#placeholder").append(array);

    });
});