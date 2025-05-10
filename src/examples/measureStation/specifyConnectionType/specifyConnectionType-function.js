/**
 * @class 指定连接类型类
 * @classdesc 该类用于在Cesium场景中更改卫星和地面测站的连接类型
 */
export class SpecifyConnectionType {
    constructor(viewer, stationOne, stationTwo, stationThree) {
        this.viewer = viewer;
        this.stationOne = stationOne;
        this.stationTwo = stationTwo;
        this.stationThree = stationThree;
        this.connections = [];
        this.visible = false;

        // 设置时间
        var start = new Cesium.JulianDate.fromDate(new Date());
        start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());
        var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());
        this.viewer.clock.startTime = start.clone();
        this.viewer.clock.stopTime = stop.clone();
        this.viewer.clock.currentTime = start.clone();
        this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
        this.viewer.clock.multiplier = 1;
        this.viewer.timeline.zoomTo(start, stop);

        // 创建卫星轨道的函数
        this.createOrbit = function(inclination, semiMajorAxis, period, numberOfPoints) {
            const positions = [];
            // 计算每个点的位置
            for (let i = 0; i < numberOfPoints; i++) {
                const meanAnomaly = (2 * Math.PI / period) * (i * period / numberOfPoints); // 平均异常
                const trueAnomaly = meanAnomaly; // 简化处理，假设轨道是圆的
                const radius = semiMajorAxis; // 圆轨道的半径等于半长轴
                // 计算笛卡尔坐标
                const x = radius * Math.cos(trueAnomaly);
                const y = radius * Math.sin(trueAnomaly) * Math.cos(inclination);
                const z = radius * Math.sin(trueAnomaly) * Math.sin(inclination);
                // 将笛卡尔坐标转换为经纬度坐标
                const cartographic = Cesium.Cartographic.fromCartesian(Cesium.Cartesian3.fromElements(x, y, z));
                // 添加到位置数组
                positions.push(cartographic);
            }
            positions.push(positions[0])
            return positions;
        };

        const inclination = Cesium.Math.toRadians(28.5);  // 轨道倾角（以弧度表示）
        const semiMajorAxis = 8000000;  // 半长轴（米），大约为月球到地球的平均距离
        const period = 360; 
        const numberOfPoints = 1000;  // 定义轨道上的点数

        // 调用函数创建轨道路径
        const OrbitPositions = this.createOrbit(inclination, semiMajorAxis, period, numberOfPoints);

        // 将轨道位置转换为Cartesian3坐标
        const cartesianPositions = OrbitPositions.map(position => Cesium.Cartesian3.fromRadians(position.longitude, position.latitude, position.height));

        // 创建SampledPositionProperty
        const orbitPosition = new Cesium.SampledPositionProperty();
        for (let i = 0; i <= numberOfPoints; i++) {
            const time = Cesium.JulianDate.addSeconds(this.viewer.clock.startTime, i * period / numberOfPoints, new Cesium.JulianDate());
            orbitPosition.addSample(time, cartesianPositions[i]);
        }
        
        this.satelliteEntity = this.viewer.entities.add({
            name: 'Satellite',
            availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                start: start,
                stop: stop
            })]),  
            position: orbitPosition,
            orientation: new Cesium.VelocityOrientationProperty(orbitPosition),
            model: {
                uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/spaceStation.gltf',
                minimumPixelSize: 64,
            },
            // 卫星的运动轨迹
            path: {
                resolution: 1,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.1,
                    color: Cesium.Color.PINK
                }),
                width: 5
            }
        });

        // 设置插值选项
        this.satelliteEntity.position.setInterpolationOptions({
            interpolationDegree: 5,
            interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
        });
    }

    // 连接方式为圆锥
    useCone() {
        function createCone(viewer, satellitePositionProperty, stationPosition, color, maxDistance) {
            return viewer.entities.add({
                availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                    start: viewer.clock.startTime,
                    stop: viewer.clock.stopTime
                })]),
                position: new Cesium.CallbackProperty((time) => {
                    const satellitePosition = satellitePositionProperty.getValue(time);
                    const distance = Cesium.Cartesian3.distance(satellitePosition, stationPosition);
                    if (distance > maxDistance) {
                        return null; // 返回 null 隐藏圆锥
                    }
                    return satellitePosition;
                }, false),
                cylinder: {
                    length: 3800000,
                    topRadius: 0,
                    bottomRadius: 2000000, // 圆锥底部的半径
                    material: color.withAlpha(0.5),
                    outline: true,
                    outlineColor: color
                }
            });
        }

        // 获取测站位置
        const stationOnePosition = Cesium.Cartesian3.fromDegrees(...this.stationOne.position);
        const stationTwoPosition = Cesium.Cartesian3.fromDegrees(...this.stationTwo.position);
        const stationThreePosition = Cesium.Cartesian3.fromDegrees(...this.stationThree.position);

        // 最大连接显示距离
        const maxDistance = 5000000;

        // 创建圆锥
        this.connections.push(createCone(this.viewer, this.satelliteEntity.position, stationOnePosition, Cesium.Color.BLUE, maxDistance));
        this.connections.push(createCone(this.viewer, this.satelliteEntity.position, stationTwoPosition, Cesium.Color.GREEN, maxDistance));
        this.connections.push(createCone(this.viewer, this.satelliteEntity.position, stationThreePosition, Cesium.Color.YELLOW, maxDistance));
    }

    // 切换圆锥的显示和隐藏
    toggleCone() {
        if (this.visible) {
            this.connections.forEach(connection => {
                this.viewer.entities.remove(connection);
            });
            this.connections = [];
        } else {
            this.useCone();
        }
        this.visible = !this.visible;
    }

    // 连接方式为脉冲线
    usePulseLine() {
        function createPulseLineMaterial() {
            return new Cesium.Material({
                fabric: {
                    type: 'PolylinePulseLink',
                    uniforms: {
                        color: new Cesium.Color(0.0, 1.0, 0.0, 0.5),
                        speed: 1.5,
                        headSize: 0.05,
                        tailSize: 0.5,
                        widthOffset: 0.1,
                        coreSize: 0.05,
                    },
                    source: "float SPEED_STEP = 0.01; \n" +
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
                            "} \n",
                },
            });
        }

        function createConnection(viewer, satellitePositionProperty, stationPosition, color, maxDistance) {
            return viewer.entities.add({
                polyline: {
                    positions: new Cesium.CallbackProperty((time) => {
                        const satellitePosition = satellitePositionProperty.getValue(time);
                        const distance = Cesium.Cartesian3.distance(satellitePosition, stationPosition);
                        if (distance > maxDistance) {
                            return []; // 返回空数组隐藏连线
                        }
                        return [satellitePosition, stationPosition];
                    }, false),
                    width: 1.5,
                    material: createPulseLineMaterial(),
                }
            });
        }

        // 获取测站位置
        const stationOnePosition = Cesium.Cartesian3.fromDegrees(...this.stationOne.position);
        const stationTwoPosition = Cesium.Cartesian3.fromDegrees(...this.stationTwo.position);
        const stationThreePosition = Cesium.Cartesian3.fromDegrees(...this.stationThree.position);

        // 最大连接显示距离
        const maxDistance = 5000000;

        // 创建连线
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationOnePosition, Cesium.Color.BLUE, maxDistance));
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationTwoPosition, Cesium.Color.GREEN, maxDistance));
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationThreePosition, Cesium.Color.YELLOW, maxDistance));
    }

    // 切换脉冲线的显示和隐藏
    togglePulseLine() {
        if (this.visible) {
            this.connections.forEach(connection => {
                this.viewer.entities.remove(connection);
            });
            this.connections = [];
        } else {
            this.usePulseLine();
        }
        this.visible = !this.visible;
    }

    // 连接方式为静态线
    useStaticLines() {
        function createConnection(viewer, satellitePositionProperty, stationPosition, color, maxDistance) {
            return viewer.entities.add({
                polyline: {
                    positions: new Cesium.CallbackProperty((time) => {
                        const satellitePosition = satellitePositionProperty.getValue(time);
                        const distance = Cesium.Cartesian3.distance(satellitePosition, stationPosition);
                        if (distance > maxDistance) {
                            return []; // 返回空数组隐藏连线
                        }
                        return [satellitePosition, stationPosition];
                    }, false),
                    width: 1.5,
                    material: new Cesium.PolylineOutlineMaterialProperty({
                        color: color,
                        outlineWidth: 1,
                        outlineColor: Cesium.Color.BLACK
                    })
                }
            });
        }

        // 获取测站位置
        const stationOnePosition = Cesium.Cartesian3.fromDegrees(...this.stationOne.position);
        const stationTwoPosition = Cesium.Cartesian3.fromDegrees(...this.stationTwo.position);
        const stationThreePosition = Cesium.Cartesian3.fromDegrees(...this.stationThree.position);

        // 最大连接显示距离
        const maxDistance = 5000000;

        // 创建连线
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationOnePosition, Cesium.Color.BLUE, maxDistance));
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationTwoPosition, Cesium.Color.GREEN, maxDistance));
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationThreePosition, Cesium.Color.YELLOW, maxDistance));
    }

    // 切换静态线的显示和隐藏
    toggleStaticLines() {
        if (this.visible) {
            this.connections.forEach(connection => {
                this.viewer.entities.remove(connection);
            });
            this.connections = [];
        } else {
            this.useStaticLines();
        }
        this.visible = !this.visible;
    }

    // 连接方式为虚线
    useDashedLine() {
        function createConnection(viewer, satellitePositionProperty, stationPosition, color, maxDistance) {
            return viewer.entities.add({
                polyline: {
                    positions: new Cesium.CallbackProperty((time) => {
                        const satellitePosition = satellitePositionProperty.getValue(time);
                        const distance = Cesium.Cartesian3.distance(satellitePosition, stationPosition);
                        if (distance > maxDistance) {
                            return []; // 返回空数组隐藏连线
                        }
                        return [satellitePosition, stationPosition];
                    }, false),
                    width: 1.5,
                    material: new Cesium.PolylineDashMaterialProperty({
                        color: color,
                        dashLength: 16
                    })
                }
            });
        }

        // 获取测站位置
        const stationOnePosition = Cesium.Cartesian3.fromDegrees(...this.stationOne.position);
        const stationTwoPosition = Cesium.Cartesian3.fromDegrees(...this.stationTwo.position);
        const stationThreePosition = Cesium.Cartesian3.fromDegrees(...this.stationThree.position);

        // 最大连接显示距离
        const maxDistance = 5000000;

        // 创建连线
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationOnePosition, Cesium.Color.BLUE, maxDistance));
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationTwoPosition, Cesium.Color.GREEN, maxDistance));
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationThreePosition, Cesium.Color.YELLOW, maxDistance));
    }

    // 切换虚线的显示和隐藏
    toggleDashedLine() {
        if (this.visible) {
            this.connections.forEach(connection => {
                this.viewer.entities.remove(connection);
            });
            this.connections = [];
        } else {
            this.useDashedLine();
        }
        this.visible = !this.visible;
    }
}

/**
 * @class 测站类
 * @classdesc 该类用于在Cesium场景中创建测站
 */
export class Station {
    /**
     * 测站构造函数
     * @param {Object} viewer - viewer对象
     * @param {String} id - 测站ID
     * @param {Object} [ellipsoid] - 使用椭圆配置西瓜瓣
     * @param {Object} [label] - 表单属性
     * @param {Object} [model] - 模型属性
     * @param {Object} [point] - 点属性
     * @param {Array} position - 测站位置
     * @param {Boolean} [visible=true] - 测站显隐性
     */
    constructor(viewer, id, options = {}) {
        this.viewer = viewer;
        this.id = id;
        this.visible = options.visible !== undefined ? options.visible : true;
        this.position = options.position || [0, 0, 0];
        this.rotationAngle = 150; // 初始旋转角度

        const SITE = {
            ellipsoid: {
                show: true,
                heightReference: Cesium.HeightReference.NONE, // 默认高度参考方式
                radii: null,
                innerRadii: null,
                minimumClock: 0.0,
                maximumClock: 2 * Cesium.Math.PI,
                minimumCone: 0.0,
                maximumCone: Cesium.Math.PI,
                fill: true,
                material: Cesium.Color.RED.withAlpha(0.3),
                outline: false,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 1.0,
                stackPartitions: 64,
                slicePartitions: 64,
                subdivisions: 128,
                shadows: undefined,
            },
            model: {
                show: true,
                uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Station.glb',
                scale: 1,
                minimumPixelSize: 64,
                maximumScale: 500,
                incrementallyLoadTextures: true,
                runAnimations: true,
                clampAnimations: true,
                shadows: Cesium.ShadowMode.ENABLED,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                silhouetteColor: Cesium.Color.RED,
                silhouetteSize: 0.0,
                color: Cesium.Color.WHITE,
                colorBlendMode: Cesium.ColorBlendMode.HIGHLIGHT,
                colorBlendAmount: 0.5,
                imageBasedLightingFactor: new Cesium.Cartesian2(1.0, 1.0),
                lightColor: undefined,
                nodeTransformations: undefined,
                articulations: undefined,
                clippingPlanes: undefined,
            },
            label: {
                show: true,
                text: null,
                font: '30px sans-serif',
                style: Cesium.LabelStyle.FILL,
                scale: 0.5,
                showBackground: false,
                backgroundColor: new Cesium.Color(0.165, 0.165, 0.165, 0.8),
                backgroundPadding: new Cesium.Cartesian2(7, 5),
                pixelOffset: new Cesium.Cartesian2(15, 0),
                eyeOffset: Cesium.Cartesian3.ZERO,
                horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
                verticalOrigin: Cesium.VerticalOrigin.TOP,
                heightReference: Cesium.HeightReference.NONE,
                fillColor: Cesium.Color.WHITE,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 1.0,
                translucencyByDistance: null,
                pixelOffsetScaleByDistance: null,
                scaleByDistance: null,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 250000.0),
                disableDepthTestDistance: null,
            },
        };

        let { label, ellipsoid, model, point } = options;
        label = { ...SITE.label, ...label };
        ellipsoid = { ...SITE.ellipsoid, ...ellipsoid };
        model = { ...SITE.model, ...model };
        // point = { ...SITE.point, ...point };

        ellipsoid.radii = new Cesium.Cartesian3(...ellipsoid.radii);
        ellipsoid.innerRadii = new Cesium.Cartesian3(...ellipsoid.innerRadii);
        ellipsoid.minimumClock = Cesium.Math.toRadians(ellipsoid.minimumClock);
        ellipsoid.maximumClock = Cesium.Math.toRadians(ellipsoid.maximumClock);
        ellipsoid.minimumCone = Cesium.Math.toRadians(ellipsoid.minimumCone);
        ellipsoid.maximumCone = Cesium.Math.toRadians(ellipsoid.maximumCone);
        label.text = `${id}`;

        this.entity = viewer.entities.add({
            id: id,
            position: Cesium.Cartesian3.fromDegrees(...this.position),
            orientation: new Cesium.CallbackProperty(() => { 
                this.rotationAngle -= 1.5;
                if (this.rotationAngle <= -360) this.rotationAngle = 0;
                return Cesium.Transforms.headingPitchRollQuaternion(
                    Cesium.Cartesian3.fromDegrees(...this.position),
                    new Cesium.HeadingPitchRoll((this.rotationAngle * Math.PI) / 180, 0, 0)
                );
            }, false),
            label: label,
            ellipsoid: ellipsoid,
            model: model,
            // point: point,
        });
    }
}