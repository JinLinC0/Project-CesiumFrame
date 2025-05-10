
var satelliteEntity
export function addViewTrack(viewer) {
  var start = new Cesium.JulianDate.fromDate(new Date());//把js中的时间转换为儒略时间
  start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());//东八区时间
  // 结束时间
  var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());
  //确保查看器处于预期的时间
  viewer.clock.startTime = start.clone();
  viewer.clock.stopTime = stop.clone();
  viewer.clock.currentTime = start.clone();
  viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //循环结束时
  //时间变化来控制速度 // 时间速率，数字越大时间过的越快
  viewer.clock.multiplier = 10;
  //给时间线设置边界
  viewer.timeline.zoomTo(start, stop);
  class mySatePosition {
    constructor() {
      this.lon = 0;
      this.lat = 0;
      this.satelliteHeight = 700000; //卫星高度
      this.orbitHeight = 700000 / 2; //轨道高度
      this.time = 0;
    }
  }
  function getRandState(ifLat, degree) {
    var arr = [];
    var lat = Math.floor(360);
    for (var i = lat; i <= 360 + lat; i += 30) {
      var aaa = new mySatePosition();
      if (ifLat == 'lon') {
        aaa.lon = degree;
        aaa.lat = i;
      } else {
        aaa.lon = i
        aaa.lat = degree;
      }
      aaa.time = i - lat;
      arr.push(aaa);
    }
    return arr
  }

  function computePosition(source, panduan) {
    var property = new Cesium.SampledPositionProperty();
    for (var i = 0; i < source.length; i++) {
      var time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate());
      var position = Cesium.Cartesian3.fromDegrees(source[i].lon, source[i].lat, panduan === 1 ? source[i].satelliteHeight : source[i].orbitHeight);
      property.addSample(time, position);
    }
    return property;
  }
  let ifLat = 'lon'
  let degree= 60

    //获取路径
    let path = getRandState(ifLat, degree);
    //扫描圆锥
    var entityPath = computePosition(path, 2);
    var entity = viewer.entities.add({
      //关联时间轴  TimeIntervalCollection管理时间间隔数据的集合  把时间轴的起止时间同步为实体的
      availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
        start: start,
        stop: stop
      })]),
      position: entityPath,
      orientation: new Cesium.VelocityOrientationProperty(entityPath)
    });
    entity.position.setInterpolationOptions({
      interpolationDegree: 5,
      interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
    });
    //卫星环绕
    var satellitePath = computePosition(path, 1);
    satelliteEntity = viewer.entities.add({
      // 将实体availability设置为与模拟时间相同的时间间隔。
      availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
        start: start,
        stop: stop
      })]),
      //计算实体位置属性
      position: satellitePath,
      //基于位置移动自动计算方向.
      orientation: new Cesium.VelocityOrientationProperty(satellitePath),
      //加载飞机模型
      model: {
        uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/spaceStation.gltf',
        minimumPixelSize: 100,
        scale: 200.0,
      },
      //白色路径
      path: {
        resolution: 1,
        material: new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.1,
          color: Cesium.Color.PINK
        }),
        width: 5
      }
    });
    //插值器
    satelliteEntity.position.setInterpolationOptions({
      interpolationDegree: 5,
      interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
    })
}

export function viewTrack(viewer) {
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(60, 0, 1000000.0)
  })
    viewer.trackedEntity = satelliteEntity
}