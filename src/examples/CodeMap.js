// 太空任务
import vueCodeMoonTrack from '@/examples/spaceMissions/moonTrack/moonTrack.vue?raw'
import vueCodeSunTrack from '@/examples/spaceMissions/sunTrack/sunTrack.vue?raw'

// 测站
import vueCodeAddStation from '@/examples/measureStation/addStation/addStation.vue?raw'
import vueCodeStationCoordinate from '@/examples/measureStation/stationCoordinate/stationCoordinate.vue?raw'
import vueCodeSpecifyConnectionType from '@/examples/measureStation/specifyConnectionType/specifyConnectionType.vue?raw'

// 动目标
import vueCodeVehicle from '@/examples/movingTarget/vehicle/vehicle.vue?raw'
import vueCodeShip from '@/examples/movingTarget/ship/ship.vue?raw'
import vueCodeAircraft from '@/examples/movingTarget/aircraft/aircraft.vue?raw'
import vueCodeRobotArmAnimation from '@/examples/movingTarget/robotArmAnimation/robotArmAnimation.vue?raw'
import vueCodeRealTimeDriver from '@/examples/movingTarget/realTimeDriver/realTimeDriver.vue?raw'
import vueCodeCoordinateAxis from '@/examples/movingTarget/coordinateAxis/coordinateAxis.vue?raw'
import vueCodeMovingTargets from '@/examples/movingTarget/movingTargets/movingTargets.vue?raw'
import vueCodeMovingTargetsWebsocket from '@/examples/movingTarget/movingTargetsWebsocket/movingTargetsWebsocket.vue?raw'
import vueCodeMovingTargetsSocketIO from '@/examples/movingTarget/movingTargetsSocketIO/movingTargetsSocketIO.vue?raw'
import vueCodeClickOnPath from '@/examples/movingTarget/clickOnPath/clickOnPath.vue?raw'
import vueCodeMissileLaunch from '@/examples/movingTarget/missileLaunch/missileLaunch.vue?raw'
import vueCodeMissileMobileLaunch from '@/examples/movingTarget/missileMobileLaunch/missileMobileLaunch.vue?raw'
import vueCodeRocketLaunch from '@/examples/movingTarget/rocketLaunch/rocketLaunch.vue?raw'
import vueCodeRocketLaunchIntoOrbit from '@/examples/movingTarget/rocketLaunchIntoOrbit/rocketLaunchIntoOrbit.vue?raw'
import vueCodeGetNodes from '@/examples/movingTarget/getNodes/getNodes.vue?raw'

// 图元
import vueCodePoint from '@/examples/graphicElement/point/point.vue?raw'
import vueCodeLine from '@/examples/graphicElement/line/line.vue?raw'
import vueCodeMultiLine from '@/examples/graphicElement/multiLine/multiLine.vue?raw'
import vueCodePlane from '@/examples/graphicElement/plane/plane.vue?raw'
import vueCodeCirclesAndEllipses from '@/examples/graphicElement/circlesAndEllipses/circlesAndEllipses.vue?raw'
import vueCodeBox from '@/examples/graphicElement/box/box.vue?raw'
import vueCodeStraightArrow from '@/examples/graphicElement/straightArrow/straightArrow.vue?raw'

// 场景设置
import vueCodeTerminatorLine from '@/examples/sceneSet/terminatorLine/terminatorLine.vue?raw'
import vueCodeJingweiNetwork3D from '@/examples/sceneSet/jingweiNetwork3D/jingweiNetwork3D.vue?raw'
import vueCodeSceneInfo from '@/examples/sceneSet/sceneInfo/sceneInfo.vue?raw'
import vueCodeSceneScreenshot from '@/examples/sceneSet/sceneScreenshot/sceneScreenshot.vue?raw'
import vueCodeJingweiNetwork2D from '@/examples/sceneSet/jingweiNetwork2D/jingweiNetwork2D.vue?raw'
import vueCodeDial from '@/examples/sceneSet/dial/dial.vue?raw'
import vueCodeScale from '@/examples/sceneSet/scale/scale.vue?raw'
import vueCodeCircularSpaceGrid from '@/examples/sceneSet/circularSpaceGrid/circularSpaceGrid.vue?raw'
import vueCodeRectangularSpaceGrid from '@/examples/sceneSet/rectangularSpaceGrid/rectangularSpaceGrid.vue?raw'
import vueCodeEarthCoordinate from '@/examples/sceneSet/earthCoordinate/earthCoordinate.vue?raw'
import vueCodeSkyBox from '@/examples/sceneSet/skyBox/skyBox.vue?raw'
import vueCodeMapx from '@/examples/sceneSet/mapx/mapx.vue?raw'

// 相机
import vueCodeViewTrack from '@/examples/camera/viewTrack/viewTrack.vue?raw'
import vueCodePerspectiveFly from '@/examples/camera/perspectiveFly/perspectiveFly.vue?raw'
import vueCodeCameraZoom from '@/examples/camera/cameraZoom/cameraZoom.vue?raw'

// 天气
import vueCodeRain from '@/examples/weather/rain/rain.vue?raw'
import vueCodeSnow from '@/examples/weather/snow/snow.vue?raw'
import vueCodeFog from '@/examples/weather/fog/fog.vue?raw'
import vueCodeWaterSurface from '@/examples/weather/waterSurface/waterSurface.vue?raw'

// 内置算法
import vueCodeConvertECEFtoWGS84 from '@/examples/builtInAlgorithm/convertECEFtoWGS84/convertECEFtoWGS84.vue?raw'
import vueCodeConvertWGS84toECEF from '@/examples/builtInAlgorithm/convertWGS84toECEF/convertWGS84toECEF.vue?raw'
import vueCodeConvertUTCtoJulianDate from '@/examples/builtInAlgorithm/convertUTCtoJulianDate/convertUTCtoJulianDate.vue?raw'
import vueCodeConvertJulianDatetoUTC from '@/examples/builtInAlgorithm/convertJulianDatetoUTC/convertJulianDatetoUTC.vue?raw'
import vueCodeDistancePointToLine from '@/examples/builtInAlgorithm/distancePointToLine/distancePointToLine.vue?raw'
import vueCodeDistanceTwoPoints from '@/examples/builtInAlgorithm/distanceTwoPoints/distanceTwoPoints.vue?raw'

const vueCodeMap = {
    // 太空任务
    月球轨道: vueCodeMoonTrack,
    绕太阳: vueCodeSunTrack,

    // 测站
    添加测站: vueCodeAddStation,
    测站坐标系: vueCodeStationCoordinate,
    指定连接类型: vueCodeSpecifyConnectionType,

    // 动目标
    车: vueCodeVehicle,
    船: vueCodeShip,
    飞机: vueCodeAircraft,
    机械臂动画: vueCodeRobotArmAnimation,
    实时驱动: vueCodeRealTimeDriver,
    坐标轴: vueCodeCoordinateAxis,
    大批量动目标: vueCodeMovingTargets,
    大批量动目标websocket: vueCodeMovingTargetsWebsocket,
    大批量动目标socketIO: vueCodeMovingTargetsSocketIO,
    点选路径: vueCodeClickOnPath,
    导弹发射: vueCodeMissileLaunch,
    导弹机动发射: vueCodeMissileMobileLaunch,
    火箭发射: vueCodeRocketLaunch,
    火箭发射卫星入轨: vueCodeRocketLaunchIntoOrbit,
    获取模型节点数: vueCodeGetNodes,

    // 图元
    点: vueCodePoint,
    线: vueCodeLine,
    多颜色线: vueCodeMultiLine,
    面: vueCodePlane,
    椭圆: vueCodeCirclesAndEllipses,
    盒子: vueCodeBox,
    直线箭头: vueCodeStraightArrow,

    // 场景设置
    晨昏线: vueCodeTerminatorLine,
    经纬网络3D: vueCodeJingweiNetwork3D,
    场景信息: vueCodeSceneInfo,
    场景截图: vueCodeSceneScreenshot,
    经纬网络2D: vueCodeJingweiNetwork2D,
    时间盘: vueCodeDial,
    圆形空间网格: vueCodeCircularSpaceGrid,
    矩形空间网格: vueCodeRectangularSpaceGrid,
    地球坐标系: vueCodeEarthCoordinate,
    天空盒: vueCodeSkyBox,
    鹰眼图: vueCodeMapx,
    刻度盘: vueCodeScale,

    // 相机
    相机缩放: vueCodeCameraZoom,
    视角飞行: vueCodePerspectiveFly,
    跟踪视角: vueCodeViewTrack,

    // 天气
    雨: vueCodeRain,
    雪: vueCodeSnow,
    雾: vueCodeFog,
    水面: vueCodeWaterSurface,

    // 内置算法
    经纬高转地固XYZ: vueCodeConvertWGS84toECEF,
    地固XYZ转经纬高: vueCodeConvertECEFtoWGS84,
    UTC时间转JulianDate: vueCodeConvertUTCtoJulianDate,
    JulianDate转UTC时间: vueCodeConvertJulianDatetoUTC,
    计算点到直线的距离: vueCodeDistancePointToLine,
    计算两点间距离: vueCodeDistanceTwoPoints,
}

export function findVueCodeById(id){
    if(!vueCodeMap.hasOwnProperty(id)){
        throw new Error(`${id}不存在`);
    } 
    return vueCodeMap[id]
}