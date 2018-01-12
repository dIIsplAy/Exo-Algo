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

    var lastPosition = null;


    for (i = 0; i < data.length; i++) {
        var markerData = data[i];

        if (markerData['lat'] != 0 && markerData['lng'] != 0) {



            if (lastPosition != null) {

                var flightPlanCoordinates = [
                    { lat: markerData['lat'], lng: markerData['lng'] },
                    lastPosition
                ];


                var flightPath = new google.maps.Polyline({
                    path: flightPlanCoordinates,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                flightPath.setMap(map);
            }

            lastPosition = { lng: markerData['lng'], lat: markerData['lat'] };




            var marker = new google.maps.Marker({
                position: lastPosition,
                map: map,
                animation: google.maps.Animation.DROP,

            });


            function toggleBounce(m) {
                if (m.getAnimation() !== null) {
                    m.setAnimation(null);
                } else {
                    m.setAnimation(google.maps.Animation.BOUNCE);
                }
            }


            if (markerData['name'].length != 0) {
                var contentString =
                    // '<div>Commentaires:(' + markerData['commentaires'] + ')</div>' +
                    '<h1>Nom:(' + markerData['name'] + ')</h1>';

                //console.log(contentString);
                var infowindow = new google.maps.InfoWindow({
                    content: contentString

                });


                google.maps.event.addListener(marker, 'click', (function(marker, contentString, infowindow) {
                    return function() {
                        toggleBounce(marker);
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