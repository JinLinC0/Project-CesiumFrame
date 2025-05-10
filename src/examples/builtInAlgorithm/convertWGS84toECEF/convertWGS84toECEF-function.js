export function changeCoordinate(viewer, longitude, latitude, height) {
    // let nums = []; //定义一个数组
    // nums = input.value.split(","); //将输入框的字符串数据取出来放入数组中 在数组中的input数据做个分隔
    let longitude2 = Cesium.Math.toRadians(longitude); //将经纬度转换为弧度
    let latitude2 = Cesium.Math.toRadians(latitude); //将经纬度转换为弧度
    let height2 = Number(height);
    let cartesianPosition = Cesium.Cartesian3.fromRadians(
      longitude2,
      latitude2,
      height2
    );
    let x = cartesianPosition.x.toFixed(4); //将需要输出的xyz坐标保留四位小数
    let y = cartesianPosition.y.toFixed(4);
    let z = cartesianPosition.z.toFixed(4);
    let Position = "X: " + x + ", Y: " + y + ", Z: " + z;
    console.log(Position);
}