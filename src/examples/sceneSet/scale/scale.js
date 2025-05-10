export function change(viewer, divisionCount) {
    if(Cesium.FeatureDetection.supportsImageRenderingPixelated()){  // 判断是否支持图像渲染像素化处理
        viewer.resolutionScale = window.devicePixelRatio;
    }
    // 开启抗锯齿(在折线进行放大的时候会出现锯齿状的形态，开启抗锯齿可以避免这种情况)
    viewer.scene.fxaa = true;
    viewer.scene.postProcessStages.fxaa.enabled = true;
    
    for (let i = 0; i < divisionCount; i++) {
      const angle = (360 / divisionCount) * i;
      const startLongitude = angle - 180;
      const endLongitude = startLongitude + 10; 

      viewer.entities.add({
        polyline: {
          positions: Cesium.Cartesian3.fromDegreesArrayHeights([
            startLongitude, 0, 100000, 
            endLongitude, 0, 100000 
          ]),
          width: 2,
          material: Cesium.Color.PINK,
        }
      });

      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(startLongitude + 5, 0, 0),
        label: {
          text: `${startLongitude}°`,
          font: '16px Helvetica',
          fillColor: Cesium.Color.WHITE,
          pixelOffset: new Cesium.Cartesian2(0, -10),
          scale: 0.5,
        }
      });
    }
}
  
