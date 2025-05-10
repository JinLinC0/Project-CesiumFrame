export function zoomByBound(viewer, flag){
    var ellipsoid = viewer.camera.pickEllipsoid(new Cesium.Cartesian2(
        viewer.canvas.clientWidth / 2,
        viewer.canvas.clientHeight / 2));
    var curPosition = Cesium.Ellipsoid.WGS84.cartesianToCartographic(ellipsoid);
    var lon = curPosition.longitude * 180 / Math.PI;
    var lat = curPosition.latitude * 180 / Math.PI;
    var height = viewer.camera.positionCartographic.height;
    const camera = viewer.camera;
    var boundingSph = new Cesium.BoundingSphere(Cesium.Cartesian3.fromDegrees(lon, lat, 1000), height);
    var moveRate = 0;
    if(flag){
        moveRate = 0.5
    }
    else{
        moveRate = 1.5
    }
    var zoomParams = {
        duration: 0.8,
        offset: new Cesium.HeadingPitchRange(camera.heading, camera.pitch, height * moveRate)
    }
    camera.flyToBoundingSphere(boundingSph,zoomParams);
}
