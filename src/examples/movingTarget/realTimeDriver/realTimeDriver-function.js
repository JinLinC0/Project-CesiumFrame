export function addRealTimeDriver(viewer) {
    const czml = [
        {
            id: "document",
            name: "realTimeDriver",
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
            id: "realTimeDriver",
            name: "realTimeDriver",
            description: "<p>this is a realTimeDriver</p>",
            availability: "2019-08-28T04:00:00Z/2019-08-28T04:20:00Z",
            position: {
                cartographicDegrees: [120, 30, 0]
            },
            model: {
                show: true,
                gltf: [
                    {
                        interval: "2019-08-28T04:00:00Z/9999-12-31T23:59:59.9999999Z",
                        uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Station.glb'
                    }
                ],
                minimumPixelSize: 128,
                scale: 1,
                runAnimations: true
            }
        },
    ];

    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
    dataSourcePromise.then(function (dataSource) {
        // 根据模型所在的实体去进行加载
        viewer.trackedEntity = dataSource.entities.getById('realTimeDriver');
    }).catch(function (error) {
        console.error(error);
    });
}
