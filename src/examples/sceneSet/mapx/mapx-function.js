export function addMapx(viewerMain, viewerEye) {
    // 禁用鹰眼地图的操作
    const setViewer = (viewer) => {
        let control = viewer.scene.screenSpaceCameraController;
        control.enableRotate = false;
        control.enableTranslate = false;
        control.enableZoom = false;
        control.enableTilt = false;
        control.enableLook = false;
    }

    setViewer(viewerEye)

    //鹰眼地图与主地图同步
    const syncViewer = () =>{
        viewerEye.camera.flyTo({
            destination: viewerMain.camera.position,
            orientation: {
                heading: viewerMain.camera.heading,
                pitch: viewerMain.camera.pitch,
                roll: viewerMain.camera.roll
            },
            duration: 0.0
        });
    };
    //添加主界面Cesium 视图监听事件  
    viewerMain.scene.preRender.addEventListener(syncViewer);  
}
