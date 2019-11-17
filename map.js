function initMap() {
            var hankow = {lat: 30.576, lng: 114.298};
            var map = new google.maps.Map(document.getElementById('map'), {zoom: 8, center: hankow});
            var marker = new google.maps.Marker({position: hankow, map: map});
}             
