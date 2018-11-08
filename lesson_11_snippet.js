function init(context) {
    console.log("this ",context)
    var myMap = new ymaps.Map(context._id, {
            center: [55.73, 37.75],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [55.75, 37.80],
                    [55.80, 37.90],
                    [55.75, 38.00],
                    [55.70, 38.00],
                    [55.70, 37.80]
                ],
                [
                    [55.75, 37.82],
                    [55.75, 37.98],
                    [55.65, 37.90]
                ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Многоугольник"
        }
    }, {
        fillColor: '#00FF00',
        strokeColor: '#0000FF',
        opacity: 0.5,
        strokeWidth: 5,
        strokeStyle: 'shortdash'
    });

    myMap.geoObjects.add(myGeoObject);
    var myPolygon = new ymaps.Polygon([
        [
            [55.75, 37.50],
            [55.80, 37.60],
            [55.75, 37.70],
            [55.70, 37.70],
            [55.70, 37.50]
        ],
        [
            [55.75, 37.52],
            [55.75, 37.68],
            [55.65, 37.60]
        ]
    ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 5
    });
    myMap.geoObjects.add(myPolygon);
}

(function() {
  Letc.snippet.prototype.onStart = function() {
    ymaps.ready(init.bind(this));
  };
}).call(this);
