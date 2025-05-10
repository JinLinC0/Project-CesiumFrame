export function addClickOnPath(viewer) {
    // 存储路径点
    const pathPoints = [];

    const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
    // 处理鼠标左键点击事件
    handler.setInputAction(function(movement) {
        const cartesian = viewer.camera.pickEllipsoid(movement.position, viewer.scene.globe.ellipsoid);
        if (cartesian) {
            pathPoints.push(cartesian);
            viewer.entities.add({
                point: {
                    pixelSize: 10,
                    color: Cesium.Color.RED,
                    position: cartesian
                }
            });

            // 如果路径点数量大于1，绘制路径线
            if (pathPoints.length > 1) {
                const linePositions = pathPoints.slice(-2); // 获取最后两个点
                viewer.entities.add({
                    polyline: {
                        positions: linePositions,
                        width: 2,
                        material: Cesium.Color.YELLOW
                    }
                });
            }
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    
    // 处理鼠标右键点击事件，开始动画
    handler.setInputAction(function() {
        if (pathPoints.length < 2) {
            alert('至少绘制两个点');
            return;
        }
        // 创建一个动态模型
        const modelEntity = viewer.entities.add({
            model: {
                uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb',
                scale: 100,
                minimumPixelSize: 128,
            },
            position: new Cesium.CallbackProperty(function(time, result) {
                const t = (time.secondsOfDay % 20) / 20; // 20秒完成一个循环
                const index = Math.floor(t * (pathPoints.length - 1));
                const start = pathPoints[index];
                const end = pathPoints[index + 1];
                const fraction = (t * (pathPoints.length - 1)) % 1;
                return Cesium.Cartesian3.lerp(start, end, fraction, result);
            }, false),
            orientation: new Cesium.VelocityOrientationProperty(new Cesium.CallbackProperty(function(time, result) {
                const t = (time.secondsOfDay % 20) / 20; // 20秒完成一个循环
                const index = Math.floor(t * (pathPoints.length - 1));
                const start = pathPoints[index];
                const end = pathPoints[index + 1];
                const fraction = (t * (pathPoints.length - 1)) % 1;
                return Cesium.Cartesian3.lerp(start, end, fraction, result);
            }, false))
        });
        // 开始动画
        viewer.clock.shouldAnimate = true;
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
}