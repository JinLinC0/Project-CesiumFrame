export function addMoonTrack(viewer) {
  var start = new Cesium.JulianDate.fromDate(new Date());
  start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());
  var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());
  viewer.clock.startTime = start.clone();
  viewer.clock.stopTime = stop.clone();
  viewer.clock.currentTime = start.clone();
  viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
  viewer.clock.multiplier = 1;
  viewer.timeline.zoomTo(start, stop);

  const inclination = Cesium.Math.toRadians(28.5); // 轨道倾角（以弧度表示）
  const semiMajorAxis = 384400000; // 半长轴（米），大约为月球到地球的平均距离
  // const period = 27.321582 * 24 * 60 * 60; // 月球的公转周期（秒）
  const period = 360 ; 
  // 定义轨道上的点数
  const numberOfPoints = 1000;

  function createMoonOrbit(inclination, semiMajorAxis, period, numberOfPoints) {
    const positions = [];
    // 计算每个点的位置
    for (let i = 0; i < numberOfPoints; i++) {
      const meanAnomaly = (2 * Math.PI / period) * (i * period / numberOfPoints); // 平均异常
      const trueAnomaly = meanAnomaly; // 简化处理，假设轨道是圆的
      const radius = semiMajorAxis; // 圆轨道的半径等于半长轴

      // 计算笛卡尔坐标
      const x = radius * Math.cos(trueAnomaly);
      const y = radius * Math.sin(trueAnomaly) * Math.cos(inclination);
      const z = radius * Math.sin(trueAnomaly) * Math.sin(inclination);

      // 将笛卡尔坐标转换为经纬度坐标
      const cartographic = Cesium.Cartographic.fromCartesian(Cesium.Cartesian3.fromElements(x, y, z));

      // 添加到位置数组
      positions.push(cartographic);
    }
        positions.push(positions[0])
    return positions;
  }
  // 创建轨道路径
  const moonOrbitPositions = createMoonOrbit(inclination, semiMajorAxis, period, numberOfPoints);

  // 将轨道位置转换为Cartesian3坐标
  const cartesianPositions = moonOrbitPositions.map(position => Cesium.Cartesian3.fromRadians(position.longitude, position.latitude, position.height));

  // 创建SampledPositionProperty
  const orbitPosition = new Cesium.SampledPositionProperty();
  for (let i = 0; i <= numberOfPoints; i++) {
    const time = Cesium.JulianDate.addSeconds(viewer.clock.startTime, i * period / numberOfPoints, new Cesium.JulianDate());
    orbitPosition.addSample(time, cartesianPositions[i]);
  }
  const moonEntity = viewer.entities.add({
    name: 'Moon',
    availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
      start: start,
      stop: stop
    })]),
    position: orbitPosition,
    orientation: new Cesium.VelocityOrientationProperty(orbitPosition),
    // 设置月球的形状
    model: {
      uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/moon.gltf',
      minimumPixelSize: 10,
      scale: 200.0,
    },
    // 显示月球的运动轨迹
    path: {
      resolution: 1,
      material: new Cesium.PolylineGlowMaterialProperty({
        glowPower: 0.1,
        color: Cesium.Color.PINK
      }),
      width: 5
    }
  });

  // 设置插值选项
  moonEntity.position.setInterpolationOptions({
    interpolationDegree: 5,
    interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
  });

};


