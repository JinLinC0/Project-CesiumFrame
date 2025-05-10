export function addVehicle(viewer) {
    // 定义开始时间
    let start = Cesium.JulianDate.fromDate(new Date());  // 设置时间轴当前时间为开始时间
    start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());   // 开始时间加8小时改为北京时间
    let stop = Cesium.JulianDate.addSeconds(start, 400, new Cesium.JulianDate());   // 设置结束时间为开始时间加400秒

    viewer.clock.startTime = start.clone();  // 设置时钟开始时间
    viewer.clock.currentTime = start.clone();  // 设置时钟当前时间
    viewer.clock.stopTime = stop.clone();  // 设置时钟结束时间
    viewer.clock.multiplier = 10;  // 设置时间倍数
    viewer.timeline.zoomTo(start, stop);  // 时间轴绑定到viewer上去
    viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;  // 循环执行，到达终止时间，重新从起点时间开始

    function computeFlight(source) {
		var property = new Cesium.SampledPositionProperty();
		for(var i = 0; i < source.length; i++) {
			var time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate ());
			var position =Cesium.Cartesian3.fromDegrees(source[i].longitude, source[i].latitude, source[i].height);
			property.addSample(time,position);
		}
		return property;
	}   

    let data = [
        { longitude:108.95847801120208, latitude:34.21765422118126, height: -3.948, time: 0 },
        { longitude:108.95849254781227, latitude:34.21800309998983, height: -3.839, time: 100 },
        { longitude:108.9594164044393, latitude:34.21802855891169, height: -2.579, time: 200 },
    ];

    let property = computeFlight(data);              
    // 添加模型
    let entityCar = viewer.entities.add({
        id: "car",
        availability: new Cesium.TimeIntervalCollection([ //要添加到集合中的间隔数组
            new Cesium.TimeInterval({start: start, stop: stop}),
        ]),
        position: property,
        path: {
            resolution: 1, 
            leadTime: 0, 
            trailTime: 200,
            material: new Cesium.PolylineGlowMaterialProperty({
                glowPower: 0.1,
                color: Cesium.Color.ORANGE
            }),
            width: 10
        },
        orientation: new Cesium.VelocityOrientationProperty(property),  // 根据速度计算方向角
        model: {
            uri:'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/CesiumMilkTruck.glb',
            minimumPixelSize: 2,
        }
    });
    viewer.trackedEntity = entityCar;   // 视角跟随模型
}