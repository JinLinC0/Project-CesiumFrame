export function addCircularSpaceGrid(viewer) {
    // 定义圆心位置和半径
    const center = Cesium.Cartesian3.fromDegrees(120, 30);
    const radius = 100000; // 半径，单位为米

    // 定义网格参数
    const numRings = 10; // 圆环数量
    const numRadials = 24; // 径向数量

    // 创建圆环
    for (let i = 1; i <= numRings; i++) {
        const circleRadius = radius * i / numRings;
        const circlePositions = [];
        for (let j = 0; j <= 360; j++) {
            const angle = Cesium.Math.toRadians(j);
            const x = circleRadius * Math.cos(angle);
            const y = circleRadius * Math.sin(angle);
            const position = Cesium.Cartesian3.add(center, new Cesium.Cartesian3(x, y, 0), new Cesium.Cartesian3());
            circlePositions.push(position);
        }
        viewer.entities.add({
            name: `Circle Ring ${i}`,
            polyline: {
                positions: circlePositions,
                width: 1,
                material: Cesium.Color.WHITE
            }
        });
    }

    // 创建径向线
    for (let i = 0; i < numRadials; i++) {
        const angle = Cesium.Math.toRadians(360 * i / numRadials);
        const endPoint = Cesium.Cartesian3.add(
            center,
            new Cesium.Cartesian3(radius * Math.cos(angle), radius * Math.sin(angle), 0),
            new Cesium.Cartesian3()
        );
        viewer.entities.add({
            name: `Radial ${i}`,
            polyline: {
                positions: [center, endPoint],
                width: 1,
                material: Cesium.Color.WHITE
            }
        });
    }

    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(120, 30, 300000),
        orientation: {
            heading: Cesium.Math.toRadians(0),
            pitch: Cesium.Math.toRadians(-90),
            roll: 0.0
        }
    });
}
