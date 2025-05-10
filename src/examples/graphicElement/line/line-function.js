export function addLine(viewer) {
    const line = viewer.entities.add({
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray([120, 30, 121, 30]),  // 线的起始和结束经纬度
            material: Cesium.Color.YELLOW, // 线的颜色
            width: 5
        }
    })
    viewer.zoomTo(line)
}
