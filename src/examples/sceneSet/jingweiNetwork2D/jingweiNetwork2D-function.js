export function addJingweiNetwork2D(viewer) {
    if(Cesium.FeatureDetection.supportsImageRenderingPixelated()){  // 判断是否支持图像渲染像素化处理
        viewer.resolutionScale = window.devicePixelRatio;
    }
    // 开启抗锯齿(在折线进行放大的时候会出现锯齿状的形态，开启抗锯齿可以避免这种情况)
    viewer.scene.fxaa = true;
    viewer.scene.postProcessStages.fxaa.enabled = true;

    const entities = viewer.entities;
    for (let lang = -180; lang <= 180; lang += 20) {
        let text = "";
        if (lang === 0) {
            text = "0";
        }
        text += lang === 0 ? "" : "" + lang + "°";
        if (lang === -180) {
            text = "";
        }

        entities.add({
            position: Cesium.Cartesian3.fromDegrees(lang, 0),
            polyline: {
                positions: Cesium.Cartesian3.fromDegreesArray([
                    lang,
                    -90,
                    lang,
                    0,
                    lang,
                    90,
                ]),
                width: 1.0,
                material: Cesium.Color.WHITE,
            },
            label: {
                text: text,
                verticalOrigin: Cesium.VerticalOrigin.TOP,
                font: "12px sans-serif",
                fillColor: Cesium.Color.WHITE,
            },
        });
    }

    //纬度
    let langS = [];
    for (let lang = -180; lang <= 180; lang += 5) {
        langS.push(lang);
    } 
    // 每隔10读绘制一条纬度线和纬度标注
    for (let lat = -80; lat <= 80; lat += 10) {
        let text = "";
        text += "" + lat + "°";
        if (lat === 0) {
            text = "";
        }
        entities.add({
            position: Cesium.Cartesian3.fromDegrees(0, lat),
            polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(
                langS
                .map((long) => {
                    return [long, lat].join(",");
                })
                .join(",")
                .split(",")
                .map((item) => Number(item))
            ),
            width: 1.0,
            material: Cesium.Color.WHITE,
            },
            label: {
                text: text,
                font: "12px sans-serif",
                fillColor: Cesium.Color.WHITE,
            },
        });
    }
}
