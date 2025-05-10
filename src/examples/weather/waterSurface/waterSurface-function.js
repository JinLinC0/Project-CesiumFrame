export function addWaterSurface(viewer) {
    viewer.scene.primitives.add(
        new Cesium.Primitive({
            geometryInstances: new Cesium.GeometryInstance({
                geometry: new Cesium.RectangleGeometry({
                    rectangle: Cesium.Rectangle.fromDegrees(
                        100,
                        30,
                        101,
                        31
                    ),
                    vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,
                    height: 0,
                }),
            }),
            appearance: new Cesium.EllipsoidSurfaceAppearance({
                material: new Cesium.Material({
                    fabric: {
                        type: "Water",
                        uniforms: {
                            baseWaterColor: new Cesium.Color(
                                64 / 255.0,
                                157 / 255.0,
                                253 / 255.0,
                                0.6
                            ),
                            normalMap: "https://webgishome-pic.oss-cn-chengdu.aliyuncs.com/cesium/waterMaterial.jpg",
                            frequency: 1000.0,
                            animationSpeed: 0.1,
                            amplitude: 10,
                            specularIntensity: 8,
                        },
                    },
                }),
            }),
        })
    );

    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(100.5, 30.5, 150000),
        orientation: {
            heading: 6.283185, //相机绕z轴旋转。左右摇头。
            pitch: 30, //相机绕y轴旋转。上下点头。
            roll: 0.0, //相机绕x轴旋转。左右歪头。
        },
    });
}
