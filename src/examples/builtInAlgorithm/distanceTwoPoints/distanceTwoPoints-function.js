export function addDistanceTwoPoints(viewer) {
    let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    viewer.scene.globe.depthTestAgainstTerrain = true; //务必开启，否则无论是否有地形，绘制点偏移都很大
    document.getElementById("cesiumContainer").style.cursor = "crosshair"
    let tempEntities = []
    let pointNum = 0
    let floatingPoint = undefined
    let activeShape = undefined
    let position = []
    let tempPoints = []
    let activeShapePoints = []
    
    /* 空间两点距离计算函数 */
    function getLength(start, end) {
        // 将起点与终点位置信息从笛卡尔坐标形式转换为Cartographic形式
        let startCartographic = Cesium.Cartographic.fromCartesian(start)
        let endCartographic = Cesium.Cartographic.fromCartesian(end)
        // 初始化测地线
        let geodesic = new Cesium.EllipsoidGeodesic()
        // 设置测地线起点和终点，EllipsoidGeodesic中setEndPoints常与surfaceDistance搭配使用
        geodesic.setEndPoints(startCartographic, endCartographic)
        // 获取起点和终点之间的表面距离，单位为km，规定四舍五入保留两位小数
        // surfaceDistance返回number 单位为m，带小数
        // console.log((geodesic.surfaceDistance / 1000).toFixed(2))
        return (geodesic.surfaceDistance / 1000).toFixed(2)
    }
    /* 空间两点计算中点函数 */
    function getMidpoint(start, end) {
        let startPoint = Cesium.Cartographic.fromCartesian(start)
        let endPoint = Cesium.Cartographic.fromCartesian(end)
        let geodesic = new Cesium.EllipsoidGeodesic()
        geodesic.setEndPoints(startPoint, endPoint)
        let geoPoint = geodesic.interpolateUsingFraction(0.5)
        console.log(Cesium.Ellipsoid.WGS84.cartographicToCartesian(geoPoint))
        return Cesium.Ellipsoid.WGS84.cartographicToCartesian(geoPoint)
    }
    function addLabel(midPoint, labelLength) {
        return viewer.entities.add({
        name: "中点",
        position: midPoint,
        label: {
            text: labelLength + "km",
            font: "20px sans-serif",
            fillColor: Cesium.Color.WHITE,
            outlineWidth: 2,
            backgroundColor: Cesium.Color.BLACK,
            showBackground: true,
            style: Cesium.LabelStyle.FILL,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            disableDepthTestDistance: Number.POSITIVE_INFINITY
        }
        })
    }
    /* 测量空间面积 */
    // 方向
    function Bearing(from, to) {
        let fromCartographic = Cesium.Cartographic.fromCartesian(from)
        let toCartographic = Cesium.Cartographic.fromCartesian(to)
        let lat1 = fromCartographic.latitude
        let lon1 = fromCartographic.longitude
        let lat2 = toCartographic.latitude
        let lon2 = toCartographic.longitude
        let angle = -Math.atan2(Math.sin(lon1 - lon2) * Math.cos(lat2), Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2))
        if (angle < 0) {
            angle += Math.PI * 2.0
        }
        return angle
    }
    // 角度
    function pointAngle(point1, point2, point3) {
        let bearing21 = Bearing(point2, point1)
        let bearing23 = Bearing(point2, point3)
        let angle = bearing21 - bearing23
        if (angle < 0) {
            angle += Math.PI * 2.0
        }
        return angle
    }
    function getArea(positions) {
        let res = 0
        for (let i = 0; i < positions.length - 2; i++) {
            let j = (i + 1) % positions.length
            let k = (i + 2) % positions.length
            let totalAngle = pointAngle(positions[i], positions[j], positions[k])
            let tempLength1 = getLength(positions[j], positions[0])
            let tempLength2 = getLength(positions[k], positions[0])
            res += tempLength1 * tempLength2 * Math.sin(totalAngle) / 2
        }
        res = res.toFixed(2)
        // console.log(res)
        res = parseFloat(res)
        // console.log(Math.abs(res))
        return Math.abs(res)
    }
    function addArea(area, positions) {
        return viewer.entities.add({
            name: "多边形面积",
            position: positions[positions.length - 1],
            label: {
                text: area + "平方公里",
                font: "20px sans-serif",
                fillColor: Cesium.Color.WHITE,
                outlineWidth: 2,
                backgroundColor: Cesium.Color.BLACK,
                showBackground: true,
                style: Cesium.LabelStyle.FILL,
                pixelOffset: new Cesium.Cartesian2(60, -60),
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                disableDepthTestDistance: Number.POSITIVE_INFINITY
            }
        })
    }
    /* 绘制函数 */
    function drawPointLabel(position, pointNum) {
        // 本质上就是添加一个点的实体
        return viewer.entities.add({
            name: "点几何对象",
            position: position,
            point: {
                color: Cesium.Color.WHEAT,
                pixelSize: 5,
                outlineWidth: 3,
                disableDepthTestDistance: Number.POSITIVE_INFINITY, //
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND // 规定贴地
            },
            label: {
                text: pointNum,
                font: "30px sans-serif",
                fillColor: Cesium.Color.WHITE,
                outlineWidth: 2,
                backgroundColor: Cesium.Color.BLACK,
                showBackground: true,
                style: Cesium.LabelStyle.FILL,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER
            }
        })
    }
    function drawPoint(position) {
        // 本质上就是添加一个点的实体
        return viewer.entities.add({
            position: position,
            point: {
                color: Cesium.Color.WHEAT,
                pixelSize: 5,
                outlineWidth: 3,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND // 规定贴地
            }
        })
    }
    function drawPolyline(positions) {
        if (positions.length < 1) return
        return viewer.entities.add({
            name: "线几何对象",
            polyline: {
                positions: positions,
                width: 5.0,
                material: new Cesium.PolylineGlowMaterialProperty({
                    // eslint-disable-next-line new-cap
                    color: Cesium.Color.WHEAT
                }),
                depthFailMaterial: new Cesium.PolylineGlowMaterialProperty({
                    // eslint-disable-next-line new-cap
                    color: Cesium.Color.WHEAT
                }),
                clampToGround: true
            }
        })
    }
    
    /* 清除实体 */
    function clearAllDrawn() {
        tempEntities = []
        pointNum = 0
        viewer.entities.removeAll()
    }
    
    // 开启深度检测
    viewer.scene.globe.depthTestAgainstTerrain = true
    // 创建场景的HTML canvas元素
    // 取消鼠标双击事件
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
    // 监听鼠标移动
    handler.setInputAction(function (movement) {
        if (Cesium.defined(floatingPoint)) {
            let newPosition = viewer.scene.pickPosition(movement.endPosition)
            if (Cesium.defined(newPosition)) {
                floatingPoint.position.setValue(newPosition)
                activeShapePoints.pop()
                activeShapePoints.push(newPosition)
            }
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    // 左键单击开始画线
    handler.setInputAction(function (click) {
        let earthPosition = viewer.scene.pickPosition(click.position)
        if (Cesium.defined(earthPosition)) {
            floatingPoint = drawPoint(earthPosition)
        }
        // 获取位置信息
        // 从相机位置创建一条射线，这条射线通过世界中movement.position像素所在的坐标,返回Cartesian3坐标
        let ray = viewer.camera.getPickRay(click.position)
        // 找到射线与渲染的地球表面之间的交点。射线必须以世界坐标给出。返回Cartesian3坐标
        position = viewer.scene.globe.pick(ray, viewer.scene)
        tempPoints.push(position) // 记录点位
        pointNum += 1
        let tempLength = tempPoints.length // 记录点数
        // 调用绘制点的接口
        let point = drawPointLabel(tempPoints[tempPoints.length - 1], JSON.stringify(pointNum))
        tempEntities.push(point)
        // 存在超过一个点时
        if (tempLength > 1) {
            // 绘制线
            let pointLength = getLength(tempPoints[tempPoints.length - 2], tempPoints[tempPoints.length - 1])
            let midPosition = getMidpoint(tempPoints[tempPoints.length - 2], tempPoints[tempPoints.length - 1])
            let pointline = drawPolyline([tempPoints[tempPoints.length - 2], tempPoints[tempPoints.length - 1]])
            let pointLabel = addLabel(midPosition, pointLength)
            tempEntities.push(pointline) // 保存记录
            tempEntities.push(pointLabel)
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    // 右键单击结束画线
    handler.setInputAction(function (click) {
        console.log(pointNum)
        activeShapePoints.pop()
        viewer.entities.remove(activeShapePoints)
        viewer.entities.remove(floatingPoint)
        tempPoints = [] // 清空点位记录
        handler.destroy()
        handler = null
        floatingPoint = undefined
        activeShape = undefined
        activeShapePoints = []
        console.log(pointNum)
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
}
