export function changeCoordinate(viewer, x, y, z) {
    // 创建Cesium.Cartesian3对象
    let cartesian3 = new Cesium.Cartesian3(x, y, z);
    // 转换为WGS84弧度坐标
    let cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian3);
    // 转换弧度为度数
    let longitudeDegrees = Cesium.Math.toDegrees(cartographic.longitude);
    let latitudeDegrees = Cesium.Math.toDegrees(cartographic.latitude);
    let degreesLongitude = longitudeDegrees.toFixed(4);
    let degreesLatitude = latitudeDegrees.toFixed(4);
    let Height = cartographic.height.toFixed(4);
    // 输出WGS84坐标
    console.log("经度: " + degreesLongitude + "度");
    console.log("纬度: " + degreesLatitude + "度");
    console.log("海拔: " + Height + "米");
  }