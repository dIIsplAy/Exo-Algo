// AIzaSyDYUChuIifKO50HuB5zXMa6J-GoOCVA91s

var uluru = { lat: -25.363, lng: 131.044 };
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
});
var marker = new google.maps.Marker({
    position: uluru,
    map: map
});



$.getJSON('./map.json', function(data) {
    console.log(data);
    Work(data);
});

function Work(data) {

    for (i = 0; i < data.length; i++) {
        var markerData = data[i];

        if (markerData['lat'] != 0 && markerData['lng'] != 0) {
            var marker = new google.maps.Marker({
                position: { lng: markerData['lng'], lat: markerData['lat'] },
                map: map

            });
            if (markerData['name'].length != 0) {
                var contentString =
                    // '<div>Commentaires:(' + markerData['commentaires'] + ')</div>' +
                    '<h1>Nom:(' + markerData['name'] + ')</h1>';

                console.log(contentString);
                var infowindow = new google.maps.InfoWindow({
                    content: contentString

                });


                google.maps.event.addListener(marker, 'click', (function(marker, contentString, infowindow) {
                    return function() {
                        infowindow.setContent(contentString);
                        infowindow.open(map, marker);
                    };
                })(marker, contentString, infowindow));

                // marker.addListener('click', function() {
                //     infowindow.open(map, marker);

                // });
            }


        }

    }
}
// markerData['commentaires'].length != 0 &&