export function addMovingTargets(viewer) {
	// 定义开始时间
  let start = Cesium.JulianDate.fromDate(new Date());  // 设置时间轴当前时间为开始时间
  start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());   // 开始时间加8小时改为北京时间
  let stop = Cesium.JulianDate.addSeconds(start, 400, new Cesium.JulianDate());   // 设置结束时间为开始时间加400秒

  viewer.clock.startTime = start.clone();  // 设置时钟开始时间
  viewer.clock.currentTime = start.clone();  // 设置时钟当前时间
  viewer.clock.stopTime = stop.clone();  // 设置时钟结束时间
  viewer.clock.multiplier = 1;  // 设置时间倍数
  viewer.timeline.zoomTo(start, stop);  // 时间轴绑定到viewer上去
  viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;  // 循环执行，到达终止时间，重新从起点时间开始

	// 模型的路径数据
  var data = [];
  data[0] = [
    { longitude:108.95847801120208, latitude:34.21765422118126, height: -3.948, time: 0 },
    { longitude:108.95849254781227, latitude:34.21800309998983, height: -3.839, time: 100 },
    { longitude:108.9594164044393, latitude:34.21802855891169, height: -2.579, time: 200 },
  ];
  data[1] = [
    { longitude:108.95950701639765, latitude:34.217844331494476, height: 60, time: 0 },
    { longitude:108.9595823050117, latitude:34.21968058035922, height: 60, time: 90 },
    { longitude:108.95962187417913, latitude:34.2203211325976, height: 60, time: 110 },
    { longitude:108.95893458332738, latitude:34.22035583250216, height: 60, time: 150 },
    { longitude:108.95890809899528, latitude:34.21925021094963, height: 60, time: 200 },
  ];

	function computeFlight(source) {
		var property = new Cesium.SampledPositionProperty();
		for(var i = 0; i < source.length; i++) {
			var time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate ());
			var position =Cesium.Cartesian3.fromDegrees(source[i].longitude, source[i].latitude, source[i].height);
			property.addSample(time,position);
		}
		return property;
	}   

  for(var j = 0; j < data.length; j++) {
    var property = computeFlight(data[j]);              
    // 添加模型
    if(j == 0){
			let entityCar = viewer.entities.add({
        id: "entities" + j,
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
				orientation: new Cesium.VelocityOrientationProperty(property),
				model: {
					uri:'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/CesiumMilkTruck.glb',
					minimumPixelSize: 2,
				},
  		});
			// viewer.trackedEntity = entityCar;
		}
		else if(j == 1) {
			let entityAir = viewer.entities.add ({
				id:"entities" + j,
				availability: new Cesium.TimeIntervalCollection([
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
				orientation: new Cesium.VelocityOrientationProperty(property),
				model: {
					uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb',
					minimumPixelSize: 2,
				},
			});
			viewer.trackedEntity = entityAir;
    }
	}
}