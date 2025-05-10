export function addCoordinateAxis(viewer) {
    const czml = [
        {
            id: "document",
            name: "SpaceX",
            version: "1.0",
            clock: {
              interval: "2019-08-28T04:00:00Z/2019-08-28T04:20:00Z",
              currentTime: "2019-08-28T04:00:00.00Z",
              multiplier: 1,
              range: "LOOP_STOP",
              step: "SYSTEM_CLOCK_MULTIPLIER"
              }
        },
        {
            id: "point",
            name: "point",
            position: {
              cartographicDegrees: [120.0, 30.0, 0],
            },
            point: {
              color: {
                rgba: [255, 255, 255, 255],
              },
              outlineColor: {
                rgba: [255, 0, 0, 255],
              },
              outlineWidth: 4,
              pixelSize: 20,
            },
          },
    ];

    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
    dataSourcePromise.then(function (dataSource) {
        // 根据模型所在的实体去进行加载
        viewer.trackedEntity = dataSource.entities.getById('point');

        let matrix = viewer.trackedEntity?.computeModelMatrix(Cesium.JulianDate.fromIso8601('2019-08-28T04:00:00.00Z'))
        // 通过调试的实体来绘制模型坐标轴
        viewer.scene.primitives.add(
            new Cesium.DebugModelMatrixPrimitive({  // 加载模型偏移矩阵的图元
                modelMatrix: matrix,  // 设置偏移矩阵
                length: 100000,
                width: 10
            })
        );
    }).catch(function (error) {
      console.error(error);
    });
}
