export function perspectiveFly(viewer, longitude, latitude, altitude) {
    if (longitude && latitude && altitude) {
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(parseFloat(longitude), parseFloat(latitude), parseFloat(altitude)),
        });
    } else {
        console.error('请输入有效的经度、纬度和高度');
    }
}