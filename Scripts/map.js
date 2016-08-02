function initMap() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude,
        u = "./Content/Images/ghost3.svg",
        f = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 16,
            panControl: !0,
            zoomControl: !0,
            mapTypeControl: !1,
            streetViewControl: !0,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: 1,
            styles: [{
                stylers: [{
                    hue: "#ff1a00"
                }, {
                    invert_lightness: !0
                }, {
                    saturation: -100
                }, {
                    lightness: 33
                }, {
                    gamma: .5
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#2D333C"
                }]
            }]
        },
        i = new google.maps.Map(document.getElementById("google-map"), f),
        pos1 = new google.maps.LatLng(lat - 0.002, lng + 0.004),
        pos2 = new google.maps.LatLng(lat + 0.003, lng - 0.001),
        pos3 = new google.maps.LatLng(lat + 0.004, lng),
        e1 = new google.maps.Marker({
            position: pos1,
            map: i,
            visible: !0,
            icon: u
        }),
        e2 = new google.maps.Marker({
            position: pos2,
            map: i,
            visible: !0,
            icon: u
        }),
        e3 = new google.maps.Marker({
            position: pos3,
            map: i,
            visible: !0,
            icon: u
        });
    //,
    //    o = new google.maps.InfoWindow({
    //        content: "F1"
    //    });
    //o.open(i, e)
}