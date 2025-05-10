let viewer = null;
let cesiumInitialized = false;  // 判断是初始化还是触发导弹发射函数

export function addMissileMobileLaunch(startLon, startLat, startHeight, endLon, endLat, endHeight, missileId) {
    if (!cesiumInitialized) {
        const script = document.createElement('script');
        script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';
        script.onload = () => {
            window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'
            viewer = new Cesium.Viewer('cesiumContainer', {
                shouldAnimate: true  // 一开始就播放动画
            });
            cesiumInitialized = true;
            // addMissile(startLon, startLat, startHeight, endLon, endLat, endHeight, missileId);  // 一开始是否自动发射一次导弹
        };
        document.head.appendChild(script);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';
        document.head.appendChild(link);
    } else {
        addMissile(startLon, startLat, startHeight, endLon, endLat, endHeight, missileId);  // 点击导弹发射按钮时触发
    }
}

/**
 * startLon：导弹发射起点的的经度
 * startLat：导弹发射起点的的纬度
 * startHeight：：导弹发射起点的的高度
 * endLon：导弹发射终点的的经度
 * endLat：导弹发射终点的的纬度
 * endHeight：导弹发射终点的高度
 * missileId：导弹的id
 */
function addMissile(startLon, startLat, startHeight, endLon, endLat, endHeight, missileId) {
    const numPoints = 600; // 生成路径的点数
    const cartesianData = generateArcPath(startLon, startLat, startHeight, endLon, endLat, endHeight, numPoints);  // 通过generateArcPath函数生成路径

    const now = Cesium.JulianDate.toIso8601(viewer.clock.currentTime);  // 获取当前的时刻
    
    // 构造导弹的cmzl数组
    var czml =
        [
            {
                id: "document",
                name: "Missile",
                version: "1.0",
                clock: {
                    currentTime: `${now}`,
                    multiplier: 1,
                    range: "LOOP_STOP",
                    step: "SYSTEM_CLOCK_MULTIPLIER"
                }
            },
            {
                id: `MissileLaunch${missileId}`,
                name: `MissileLaunch${missileId}`,
                path: {
                    show: true,
                    width: 1,
                    resolution: 86400,
                    leadTime: 500,
                    trailTime: 500,
                    material: {
                        solidColor: {
                            color: {
                                rgba: [0, 255, 0, 255] // 设置轨迹颜色为绿色
                            }
                        }
                    }
                },
                model: {
                    show: true,
                    gltf: [
                        {
                            interval: `${now}/9999-12-31T23:59:59.9999999Z`,
                            uri: "https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/MissileTwo.glb"
                        }
                    ],
                    minimumPixelSize: 128,
                    scale: 1,
                    runAnimations: false,
                },
                position: {
                    interpolationAlgorithm: "LAGRANGE",
                    interpolationDegree: 5,
                    referenceFrame: "FIXED",
                    epoch: `${now}`,
                    cartographicDegrees: cartesianData
                },
                orientation: {
                    "interpolationAlgorithm": "LINEAR",
                    "interpolationDegree": 1,
                    "epoch": `${now}`,
                    "velocityReference": "#position"  // 方向的参考属性，指向实体的位置属性
                }
            }
        ]

    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));

    dataSourcePromise.then(function (dataSource) {
        viewer.trackedEntity = dataSource.entities.getById('MissileLaunch0');
    }).catch(function (error) {
        console.error(error);
    });
}

// 路径生成函数，通过传入起点和终点的经纬度和高度信息，生成路径数组
function generateArcPath(startLon, startLat, startHeight, endLon, endLat, endHeight, numPoints) {
    const startCartographic = new Cesium.Cartographic(Cesium.Math.toRadians(startLon), Cesium.Math.toRadians(startLat), startHeight);
    const endCartographic = new Cesium.Cartographic(Cesium.Math.toRadians(endLon), Cesium.Math.toRadians(endLat), endHeight);

    const geodesic = new Cesium.EllipsoidGeodesic(startCartographic, endCartographic);  // EllipsoidGeodesic 对象用于计算地球表面上两点之间的最短路径（测地线）

    const cartesianArray = [];
    for (let i = 0; i <= numPoints; i++) {  // 使用循环生成路径上的点，点的数量由 numPoints 决定
        const fraction = i / numPoints;  // fraction 表示当前点在起点和终点之间的比例
        const intermediateCartographic = geodesic.interpolateUsingFraction(fraction);
        const intermediateHeight = Cesium.Math.lerp(startHeight, endHeight, fraction);  // 计算当前点的地理坐标（弧度）
        const intermediatePosition = Cesium.Cartographic.toCartesian(intermediateCartographic);  // 将地理坐标转换为笛卡尔坐标
        const cartographic = Cesium.Cartographic.fromCartesian(intermediatePosition);  // 将笛卡尔坐标转换回地理坐标
        const lon = Cesium.Math.toDegrees(cartographic.longitude);
        const lat = Cesium.Math.toDegrees(cartographic.latitude);
        cartesianArray.push(i * (240 / numPoints), lon, lat, intermediateHeight);
    }
    return cartesianArray;
}