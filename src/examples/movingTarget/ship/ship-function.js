export function addShip(viewer) {
    let start = Cesium.JulianDate.fromDate(new Date());  // 设置时间轴当前时间为开始时间
    start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());   // 开始时间加8小时改为北京时间
    let stop = Cesium.JulianDate.addSeconds(start, 400, new Cesium.JulianDate());   // 设置结束时间为开始时间加400秒

    viewer.clock.startTime = start.clone();  // 设置时钟开始时间
    viewer.clock.currentTime = start.clone();  // 设置时钟当前时间
    viewer.clock.stopTime = stop.clone();  // 设置时钟结束时间
    viewer.clock.multiplier = 1;  // 设置时间倍数
    viewer.timeline.zoomTo(start, stop);  // 时间轴绑定到viewer上去
    viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;  // 循环执行，到达终止时间，重新从起点时间开始

    // 生成路径
    function computeFlight(source) {
        let property = new Cesium.SampledPositionProperty();
        for (let i = 0; i < source.length; i++) {
          let time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate);
          let position = Cesium.Cartesian3.fromDegrees(source[i].longitude, source[i].latitude, source[i].height);
          // 添加位置，和时间对应
          property.addSample(time, position);
        }
        return property;
    }

    let data =  [
        { longitude: 121, latitude: 33, height: 0, time: 0 },
        { longitude: 123, latitude: 32, height: 0, time: 180 },
        { longitude: 122, latitude: 31, height: 0, time: 400 }
    ]
    let property = computeFlight(data);
    let entity = viewer.entities.add({
        availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
            start: start,  
            stop: stop
        })]),
        position: property,
        orientation: new Cesium.VelocityOrientationProperty(property),  // 根据速度计算方向角
        model: {
            uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/ship.glb', //gltf文件的URL
            scale: 0.05,     // 放大倍数
            silhouetteColor: Cesium.Color.fromCssColorString('rgba(0, 255, 0, 1)'),   // 船模型边框颜色
            silhouetteSize: 1,      // 船模型边框宽度
            minimumPixelSize: 128
        },
        path: {    // 船路径
            resolution: 1,
            material: new Cesium.PolylineGlowMaterialProperty({
                glowPower: 0.1,    // 颜色透明度
                color: Cesium.Color.fromCssColorString('rgba(0, 253, 239, 0.5)')   // 路线颜色
            }),
            width: 2  // 路线的显示宽度
        }
    });
    viewer.trackedEntity = entity;   // 视角跟随模型
}