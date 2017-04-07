function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new global.google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new global.google.maps.Marker({
          position: uluru,
          map: map
        });
      }