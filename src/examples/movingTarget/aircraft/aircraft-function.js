export function addAircraft(viewer) {
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
            id: "path",
            name: "path for Spacex",
            description: "<p>this is a description</p>",
            availability: "2019-08-28T04:00:00Z/2019-08-28T04:20:00Z",
            path: {
                material: {
                    polylineOutline: {
                        color: {
                            rgba: [255, 0, 255, 255],
                        },
                        outlineColor: {
                            rgba: [0, 255, 255, 255],
                        },
                        outlineWidth: 5    
                    }, 
                },
                width: 8,   // 折线宽度
                leadTime: 5,  
                trailTime: 50000,
                resolution: 5,
                },
                orientation: {
                "velocityReference": "#position"
                },
                model: {
                    gltf: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb',
                    // https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb
                    // https://gitee.com/jin-linchao/cesium-assets/raw/master/3Dmodel/Cesium_Air.glb  
                    minimumPixelSize: 128,
                },
                position: {
                    epoch: "2019-08-28T04:00:00.00Z",
                    cartographicDegrees: [
                        0, 120, 40, 65000,
                        1200, 130, 40, 80000
                    ]
                }
        },
    ];
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
    dataSourcePromise.then(function (dataSource) {
        // 根据模型所在的实体去进行加载
        viewer.trackedEntity = dataSource.entities.getById('path');
    }).catch(function (error) {
        console.error(error);
    });
}
