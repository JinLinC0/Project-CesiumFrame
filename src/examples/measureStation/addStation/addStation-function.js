export function addStation(viewer, info) {
    const SITE = {
        id: null,
        show: true,
        ellipsoid: {
            show: true,
            heightReference: undefined,
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
            stackPartitions: 8,
            slicePartitions: 8,
            subdivisions: 128,
            shadows: undefined,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 200000.0),
        },
        model: {
            show:true,
            uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Station.glb',
            scale: 1,
            minimumPixelSize: 30,
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
            clippingPlanes:undefined,
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
            pixelOffset:new Cesium.Cartesian2(15,0),
            eyeOffset: Cesium.Cartesian3.ZERO,
            horizontalOrigin:Cesium.HorizontalOrigin.LEFT,
            verticalOrigin:Cesium.VerticalOrigin.TOP,
            heightReference: Cesium.HeightReference.NONE,
            fillColor:Cesium.Color.WHITE,
            outlineColor:Cesium.Color.BLACK,
            outlineWidth:1.0,
            translucencyByDistance:null,
            pixelOffsetScaleByDistance:null,
            scaleByDistance:null,
            distanceDisplayCondition:new Cesium.DistanceDisplayCondition(0.0, 250000.0),
            disableDepthTestDistance	:null,
        },
        point: {
            id:null,
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
    }

    let { id, position } = { ...SITE, ...info }
    let { ...label } = { ...SITE.label, ...info.label }
    let { ...ellipsoid } = { ...SITE.ellipsoid, ...info.ellipsoid }
    let { ...model } = { ...SITE.model, ...info.model }
    let{...point}={...SITE.point,...info.point}
    ellipsoid.radii = new Cesium.Cartesian3(...ellipsoid.radii)
    ellipsoid.innerRadii = new Cesium.Cartesian3(...ellipsoid.innerRadii)
    ellipsoid.minimumClock = Cesium.Math.toRadians(ellipsoid.minimumClock)
    ellipsoid.maximumClock = Cesium.Math.toRadians(ellipsoid.maximumClock)
    ellipsoid.minimumCone = Cesium.Math.toRadians(ellipsoid.minimumCone)
    ellipsoid.maximumCone = Cesium.Math.toRadians(ellipsoid.maximumCone)
    label.text=`${id}`
    let site = viewer.entities.add({
        id: id,
        position:Cesium.Cartesian3.fromDegrees(...position),
        label: label,
        ellipsoid: ellipsoid,
        model: model,
        point: point,
    })
    viewer.zoomTo(site)
}
