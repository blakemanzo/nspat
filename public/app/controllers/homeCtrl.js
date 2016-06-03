angular.module('homeCtrl', [])
.controller('homeCtrl', function($mdDialog, $mdSidenav, $scope) {

    $scope.pageLoaded = true;

    L.mapbox.accessToken = 'pk.eyJ1IjoiYm1jcXVpbGxhbiIsImEiOiJjaWgzZGg0dDQweHdndmttNWQ2d3UwbnlxIn0.LE_50fNS7FII9stGlLld4Q';
    
    var map = L.mapbox.map('map', 'bmcquillan.cih3dh36v0ybi65m0p3yrqumw')
    .setView([-33.849184, 151.21056299999998], 15);

    $scope.mapChange = function(stateTitle) {
        var stateTitle = stateTitle;
        map.featureLayer.eachLayer(function(marker) {

            if (marker.feature.properties.title === stateTitle) {
                map.setView(marker.getLatLng(), 17);
                marker.openPopup();
            }
        });
    }

 
})
