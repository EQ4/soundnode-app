'use strict'

app.directive('tracks', function () {
    return {
        restrict: 'AE',
        scope: { data: '=' },
        templateUrl: "views/common/tracks.html"
    }
});