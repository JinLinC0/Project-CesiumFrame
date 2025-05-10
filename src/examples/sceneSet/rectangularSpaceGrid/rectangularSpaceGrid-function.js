export function addRectangularSpaceGrid(viewer) {
    // 定义矩形的中心位置和尺寸
    const center = Cesium.Cartesian3.fromDegrees(120, 30);
    const width = 200000; // 矩形的宽度，单位为米
    const height = 200000; // 矩形的高度，单位为米

    // 定义网格参数
    const numHorizontalLines = 10; // 水平线数量
    const numVerticalLines = 10; // 垂直线数量

    // 计算每个网格单元的大小
    const horizontalSpacing = width / numHorizontalLines;
    const verticalSpacing = height / numVerticalLines;

    // 创建水平线
    for (let i = 0; i <= numHorizontalLines; i++) {
        const yOffset = (i - numHorizontalLines / 2) * horizontalSpacing;
        const startPoint = Cesium.Cartesian3.add(
            center,
            new Cesium.Cartesian3(-width / 2, yOffset, 0),
            new Cesium.Cartesian3()
        );
        const endPoint = Cesium.Cartesian3.add(
            center,
            new Cesium.Cartesian3(width / 2, yOffset, 0),
            new Cesium.Cartesian3()
        );
        viewer.entities.add({
            name: `Horizontal Line ${i}`,
            polyline: {
                positions: [startPoint, endPoint],
                width: 1,
                material: Cesium.Color.WHITE
            }
        });
    }

    // 创建垂直线
    for (let i = 0; i <= numVerticalLines; i++) {
        const xOffset = (i - numVerticalLines / 2) * verticalSpacing;
        const startPoint = Cesium.Cartesian3.add(
            center,
            new Cesium.Cartesian3(xOffset, -height / 2, 0),
            new Cesium.Cartesian3()
        );
        const endPoint = Cesium.Cartesian3.add(
            center,
            new Cesium.Cartesian3(xOffset, height / 2, 0),
            new Cesium.Cartesian3()
        );
        viewer.entities.add({
            name: `Vertical Line ${i}`,
            polyline: {
                positions: [startPoint, endPoint],
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
