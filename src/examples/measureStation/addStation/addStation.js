/**
 * @class 测站类
 * @classdesc 该类用于在Cesium场景中创建测站
 */
class Station {
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
              distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 200000.0),
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
              distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 250000.0),
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
          point: {
              show: true,
              pixelSize: 10,
              heightReference: Cesium.HeightReference.NONE,
              color: Cesium.Color.RED,
              outlineColor: Cesium.Color.BLACK,
              outlineWidth: 0,
              scaleByDistance: undefined,
              translucencyByDistance: undefined,
              distanceDisplayCondition: new Cesium.DistanceDisplayCondition(250000.0, 99999999999999),
              disableDepthTestDistance: undefined,
          }
      };

      let { label, ellipsoid, model, point } = options;
      label = { ...SITE.label, ...label };
      ellipsoid = { ...SITE.ellipsoid, ...ellipsoid };
      model = { ...SITE.model, ...model };
      point = { ...SITE.point, ...point };

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
          point: point,
      });

      viewer.zoomTo(this.entity);
  }

  setSiteVisible(site, visible) {
      site.show = visible;
  }
}

export default Station;