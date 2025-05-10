export function addPoint(viewer) {
    const polyline = viewer.entities.add({
        polyline:{
            positions:Cesium.Cartesian3.fromDegreesArray([120,20,121000,20]),  
            width:10,
            material:Cesium.Color.WHITE,
            clampToGround: true,
        }
    })
    viewer.entities.add({
        position:Cesium.Cartesian3.fromDegrees(90,35),
        point: {
            pixelSize: 3, 
            color: Cesium.Color.WHITE,
            outlineColor: Cesium.Color.RED,
            outlineWidth: 2,
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
    })
    let Point1 = new Cesium.Cartesian3.fromDegrees(120, 20); 
    let Point2 = new Cesium.Cartesian3.fromDegrees(121000, 20); 
    let lineDirection = Cesium.Cartesian3.subtract(Point2, Point1, new Cesium.Cartesian3());
    Cesium.Cartesian3.normalize(lineDirection, lineDirection);
    let point = new Cesium.Cartesian3.fromDegrees(90, 35); 
    let projection = Cesium.Cartesian3.multiplyByScalar(lineDirection, Cesium.Cartesian3.dot(point, lineDirection), new Cesium.Cartesian3());
    let distance1 = Cesium.Cartesian3.distance(point, projection);
    let distance = distance1.toFixed(4);
    console.log('点到直线最近距离为:', distance + '米');
}