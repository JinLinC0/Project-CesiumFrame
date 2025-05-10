export function addMovingTargetsSocketIO(viewer) {
    const socket = io('http://localhost:8080');
  
    socket.on('connect', function() {
      console.log('连接开启');
    });
  
    let start = Cesium.JulianDate.fromDate(new Date());  // 设置时间轴当前时间为开始时间
    start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());   // 开始时间加8小时改为北京时间
    let stop = Cesium.JulianDate.addSeconds(start, 400, new Cesium.JulianDate());   // 设置结束时间为开始时间加400秒
  
    viewer.clock.startTime = start.clone();  // 设置时钟开始时间
    viewer.clock.currentTime = start.clone();  // 设置时钟当前时间
    viewer.clock.stopTime = stop.clone();  // 设置时钟结束时间
    viewer.clock.multiplier = 1;  // 设置时间倍数
    viewer.timeline.zoomTo(start, stop);  // 时间轴绑定到viewer上去
    viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;  // 循环执行，到达终止时间，重新从起点时间开始
  
    let modelArr = [];
    let pendingUpdates = {};
  
    // 创建飞机
    function createModel(obj) {
      let property = new Cesium.SampledPositionProperty();
      property.setInterpolationOptions({
        interpolationDegree: 5,
        interpolationAlgorithm: Cesium.LagrangePolynomialApproximation,
      });
      let entity = viewer.entities.add({
        position: property,
        orientation: new Cesium.VelocityOrientationProperty(property),
        model: {
          uri: "https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb",
          minimumPixelSize: 60
        },
        path: {
          resolution: 1, 
          leadTime: 0, 
          trailTime: 200,
          material: new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.1,
            color: Cesium.Color.ORANGE
          }),
          width: 10
        }
      });
      entity.attr = {
        property: property,
        icao: obj.icao
      };
      return entity;
    }
  
    // 获取模型
    function getModelById(id) {
      if (!id) return null;
      let obj = {};
      for (let i = 0; i < modelArr.length; i++) {
        let item = modelArr[i];
        if (id === item.attr.icao) {
          obj.index = i;
          obj.model = item;
          break;
        }
      }
      return obj;
    }
  
    // 更新模型位置
    function updateModelPosition(icao, position, time) {
      let obj = getModelById(icao);
      if (obj.model) {
        obj.model.attr.property.addSample(time, position);
      }
    }
  
    socket.on('waypoint', function(data) {
        console.log('Received data:', data);
      const item = data; // 单个数据点
      const icao = item.icao;
      const position = Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude, item.altitude);
      const julianDate = Cesium.JulianDate.addSeconds(start, item.time, new Cesium.JulianDate());
  
      // 存储待更新的数据
      pendingUpdates[icao] = { position, julianDate };
  
      // 延迟几秒钟再更新位置
      setTimeout(() => {
        if (pendingUpdates[icao]) {
          let obj = getModelById(icao);
          if (!obj.model) {
            // 如果模型不存在，创建模型
            obj.model = createModel(item);
            modelArr.push(obj.model);
          }
          updateModelPosition(icao, pendingUpdates[icao].position, pendingUpdates[icao].julianDate);
          delete pendingUpdates[icao];
        }
      }, 3000); // 延迟3秒钟
    });
  
    socket.on('disconnect', function() {
      console.log('连接关闭');
    });
  }
  