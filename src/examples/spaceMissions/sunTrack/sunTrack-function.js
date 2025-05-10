export function addSunTrack(viewer) {
  var start = new Cesium.JulianDate.fromDate(new Date());
  const scene = viewer.scene;
  const globe = scene.globe;
  const baseLayer = viewer.scene.imageryLayers.get(0);
  globe.showGroundAtmosphere = false;
  globe.baseColor = Cesium.Color.TRANSPARENT;
  globe.translucency.enabled = true;
  globe.undergroundColor = undefined;
  scene.screenSpaceCameraController.enableCollisionDetection = false;
  // Set oceans on Bing base layer to transparent
  baseLayer.colorToAlpha = new Cesium.Color(0.0, 0.016, 0.059);
  baseLayer.colorToAlphaThreshold = 0.2;
  viewer.scene.globe.enableLighting = false;
  viewer.shadows = false;
  viewer.scene.sun.show = false;//还可以viewer.scene.sun.destroy();
  //月亮
  viewer.scene.moon.show = false;
  viewer.scene.skyAtmosphere.show = false;
  //雾
  viewer.scene.fog.enable = false;
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
  const semiMajorAxis = 38440000; // 半长轴（米），大约为月球到地球的平均距离
  // const period = 27.321582 * 24 * 60 * 60; // 月球的公转周期（秒）
  const period = 360;
  // 定义轨道上的点数
  const numberOfPoints = 1000;
  function createMoonOrbit(inclination, semiMajorAxis, period, numberOfPoints) {
    const positions = [];
    // 计算每个点的位置
    for (let i = 0; i < numberOfPoints; i++) {
      const meanAnomaly = (2 * Math.PI / period) * (i * period / numberOfPoints); // 平均异常
      const trueAnomaly = meanAnomaly; // 简化处理，假设轨道是圆的
      const radius = semiMajorAxis; // 圆轨道的半径等于半长轴
      const x = radius * Math.cos(trueAnomaly);
      const y = radius * Math.sin(trueAnomaly) * Math.cos(inclination);
      const z = radius * Math.sin(trueAnomaly) * Math.sin(inclination);
      const cartographic = Cesium.Cartographic.fromCartesian(Cesium.Cartesian3.fromElements(x, y, z));
      positions.push(cartographic);
    }
    positions.push(positions[0])
    return positions;
  }
  const moonOrbitPositions = createMoonOrbit(inclination, semiMajorAxis, period, numberOfPoints);
  const cartesianPositions = moonOrbitPositions.map(position => Cesium.Cartesian3.fromRadians(position.longitude, position.latitude, position.height));
  const orbitPosition = new Cesium.SampledPositionProperty();
  for (let i = 0; i <= numberOfPoints; i++) {
    const time = Cesium.JulianDate.addSeconds(viewer.clock.startTime, i * period / numberOfPoints, new Cesium.JulianDate());
    orbitPosition.addSample(time, cartesianPositions[i]);
  }
  const mantleRadius = 6400000.0;
  const sunEntity = viewer.entities.add({
    position: Cesium.Cartesian3.ZERO,
    ellipsoid: {
      radii: new Cesium.Cartesian3(
        mantleRadius,
        mantleRadius,
        mantleRadius
      ),
      material: new Cesium.ImageMaterialProperty({
              image: "https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/sun.jpg",
              repeat: new Cesium.Cartesian2(1, 1)
            })
    },
  })
  const moonEntity = viewer.entities.add({
    name: 'Moon',
    availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
      start: start,
      stop: stop
    })]),
    position: orbitPosition,
    orientation: new Cesium.VelocityOrientationProperty(orbitPosition),
    model: {
      uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/earth.gltf',
      minimumPixelSize: 100,
      scale: 200.0,
      shadows: Cesium.ShadowMode.DISABLED,
    },

    path: {
      resolution: 1,
      material: new Cesium.PolylineGlowMaterialProperty({
        glowPower: 0.1,
        color: Cesium.Color.PINK
      }),
      width: 5
    }
  });
  moonEntity.position.setInterpolationOptions({
    interpolationDegree: 5,
    interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
  }); 
}

