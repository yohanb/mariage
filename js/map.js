(function($){
    var canvas = $("#map-canvas")[0];
    var coordinates = new google.maps.LatLng(45.313342,-72.6392743);
    var options = {
      center: coordinates,
      zoom: 8,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(canvas, options);
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'Auberge Château-Bromont',
        url: "https://www.google.ca/maps/place/Auberge+Chateau-Bromont,+95+Rue+de+Montmorency,+Bromont,+QC+J2L+2J1/@45.313342,-72.6392743,17z/data=!4m2!3m1!1s0x4cc9d98a4fda2783:0x4f45b205bcf841b7"
    });

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = this.url;
    });

}(jQuery.noConflict()));