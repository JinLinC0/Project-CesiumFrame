<template>
    <div id="cesiumContainer" class="cesium-container"></div>
</template>

<script setup>
import { onMounted } from 'vue';

let viewer;

onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';
    script.onload = () => {
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'

        viewer = new Cesium.Viewer('cesiumContainer', {
            shouldAnimate: true  // 一开始就播放动画
        }); 

        const setPathData = (pointStart, pointEnd, h) => {
            pointStart = pointStart;
            pointEnd = pointEnd;
            h = h;
            let pathData = getBSRxyz(pointStart[0], pointStart[1], pointEnd[0], pointEnd[1], h);
            return pathData;
        };

        const getBSRxyz = (x1, y1, x2, y2, h) => {
            let arr3d = getBSRPoints(x1, y1, x2, y2, h);
            let arrAll = [];
            for (let ite of arr3d) {
                arrAll.push(ite[0]);
                arrAll.push(ite[1]);
                arrAll.push(ite[2]);
            }
            return Cesium.Cartesian3.fromDegreesArrayHeights(arrAll);
        };

        const getBSRPoints = (x1, y1, x2, y2, h) => {
            let pointStart = [y1, 0];
            let pointEnd = [(y2 + y1) / 2, h];
            let point3 = [y2, 0];
            let arr = getBSR(pointStart, pointEnd, point3);
            let arr3d = [];
            for (let i = 0; i < arr.length; i++) {
                let x = ((x2 - x1) * (arr[i][0] - y1)) / (y2 - y1) + x1;
                arr3d.push([x, arr[i][0], arr[i][1]]);
            }
            return arr3d;
        };

        // 生成贝塞尔曲线
        const getBSR = (pointStart, pointEnd, point3) => {
            let ps = [
                { x: pointStart[0], y: pointStart[1] },
                { x: pointEnd[0], y: pointEnd[1] },
                { x: point3[0], y: point3[1] },
            ];
            // 100 每条线由100个点组成
            let guijipoints = CreateBezierPoints(ps, 100);
            return guijipoints;
        };

        const CreateBezierPoints = (anchorpoints, pointsAmount) => {
            let points = [];
            for (let i = 0; i < pointsAmount; i++) {
                let point = MultiPointBezier(anchorpoints, i / pointsAmount);
                points.push([point.x, point.y]);
            }
            return points;
        };

        const MultiPointBezier = (points, t) => {
            let len = points.length;
            let x = 0, y = 0;
            let erxiangshi = function (start, end) {
                let cs = 1, bcs = 1;
                while (end > 0) {
                    cs *= start;
                    bcs *= end;
                    start--;
                    end--;
                }
                return cs / bcs;
            };
            for (let i = 0; i < len; i++) {
                let point = points[i];
                x += point.x * Math.pow(1 - t, len - 1 - i) * Math.pow(t, i) * erxiangshi(len - 1, i);
                y += point.y * Math.pow(1 - t, len - 1 - i) * Math.pow(t, i) * erxiangshi(len - 1, i);
            }
            return { x: x, y: y };
        };

        let positions = setPathData([120.17, 23.8], [114.0, 22.5], 50000);

        let FlowingLineMaterialGLSL =
            "float SPEED_STEP = 0.01; \n" +
            "vec4 drawLight(float xPos, vec2 st, float headOffset, float tailOffset, float widthOffset){ \n" +
            "float lineLength = smoothstep(xPos + headOffset, xPos, st.x) - smoothstep(xPos, xPos - tailOffset, st.x); \n" +
            "float lineWidth = smoothstep(widthOffset, 0.5, st.y) - smoothstep(0.5, 1.0 - widthOffset, st.y); \n" +
            "return vec4(lineLength * lineWidth); \n" +
            "}\n" +
            "czm_material czm_getMaterial(czm_materialInput materialInput) \n" +
            "{ \n" +
            "czm_material m = czm_getDefaultMaterial(materialInput);\n" +
            "float sinTime = sin(czm_frameNumber * SPEED_STEP * speed); \n" +
            "vec4 v4_core;\n" +
            "vec4 v4_color;\n" +
            "float xPos = 0.0; \n" +
            "if (sinTime < 0.0){ \n" +
            "xPos = cos(czm_frameNumber * SPEED_STEP * speed)+ 1.0 - tailsize; \n" +
            "}else{ \n" +
            "xPos = -cos(czm_frameNumber * SPEED_STEP * speed)+ 1.0 - tailsize; \n" +
            "} \n" +
            "v4_color = drawLight(xPos, materialInput.st, headsize, tailsize, widthoffset);\n" +
            "v4_core = drawLight(xPos, materialInput.st, coresize, coresize*2.0, widthoffset*2.0);\n" +
            "m.diffuse = color.xyz + v4_core.xyz*v4_core.w*0.8; \n" +
            "m.alpha = pow(v4_color.w, 3.0); \n" +
            "return m; \n" +
            "} \n";

        viewer.scene.primitives.add(
            new Cesium.Primitive({
                geometryInstances: new Cesium.GeometryInstance({
                    geometry: new Cesium.PolylineGeometry({
                        positions: positions,
                        width: 2.0,
                        vertexFormat: Cesium.PolylineColorAppearance.VERTEX_FORMAT,
                        colors: new Cesium.Color(0.0, 1.0, 0.0, 0.5),
                        colorsPerVertex: true,
                    }),
                }),
                appearance: new Cesium.PolylineColorAppearance(),
            })
        );

        let FlowingLineMaterial = new Cesium.Material({
            fabric: {
                type: "FlowingLineMaterial",
                uniforms: {
                    color: new Cesium.Color(0.0, 1.0, 0.0, 0.5),
                    speed: 3,
                    headsize: 0.01,
                    tailsize: 0.8,
                    widthoffset: 0.1,
                    coresize: 0.05,
                },
                source: FlowingLineMaterialGLSL,
            },
        });

        let primitive = new Cesium.Primitive({
            geometryInstances: new Cesium.GeometryInstance({
                geometry: new Cesium.PolylineGeometry({
                    positions: positions,
                    width: 20.0,
                    vertexFormat: Cesium.VertexFormat.ALL,
                }),
            }),
            appearance: new Cesium.PolylineMaterialAppearance({
                material: FlowingLineMaterial,
            }),
        });
        viewer.scene.primitives.add(primitive);

    };
    document.head.appendChild(script);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';
    document.head.appendChild(link);
});
</script>

<style>
.cesium-container {
    width: 100%;
    height: 100vh;
}
.btn-class {
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>