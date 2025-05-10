export function addearthCoordinate(viewer) {
    const scene = viewer.scene;
    // 获取地球globe实例
    const globe = scene.globe;
    const baseLayer = viewer.scene.imageryLayers.get(0);
    
    scene.screenSpaceCameraController.enableCollisionDetection = false;
    
    function reset() {
        globe.showGroundAtmosphere = true;
        globe.baseColor = Cesium.Color.BLUE;
        globe.translucency.enabled = false;
        globe.translucency.frontFaceAlpha = 1.0;
        globe.undergroundColor = Cesium.Color.BLACK;
        globe.translucency.rectangle = undefined;
        baseLayer.colorToAlpha = undefined;
    }
    
    function useTranslucencyMask() {
        globe.showGroundAtmosphere = false;
        globe.baseColor = Cesium.Color.TRANSPARENT;
        globe.translucency.enabled = true;
        globe.undergroundColor = undefined;
        baseLayer.colorToAlpha = new Cesium.Color(0.0, 0.016, 0.059);
        baseLayer.colorToAlphaThreshold = 0.2;
    }
    
    reset();
    useTranslucencyMask();

    // 创建一个以地球球心为起点的坐标系
    const center = new Cesium.Cartesian3(0, 0, 0); // 地球球心的坐标
    const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);

    // 添加坐标轴图元
    viewer.scene.primitives.add(new Cesium.DebugModelMatrixPrimitive({
        modelMatrix: modelMatrix,
        length: 10000000, // 坐标轴的长度
        width: 2.0 // 坐标轴的宽度
    }));
}
