//太空任务
import functionCodeMoonTrack from '@/examples/spaceMissions/moonTrack/moonTrack-function.js?raw'
import functionCodeSunTrack from '@/examples/spaceMissions/sunTrack/sunTrack-function.js?raw'

// 测站
import functionCodeAddStation from '@/examples/measureStation/addStation/addStation.js?raw'
import functionCodeStationCoordinate from '@/examples/measureStation/stationCoordinate/stationCoordinate-function.js?raw'

// 动目标
import functionCodeVehicle from '@/examples/movingTarget/vehicle/vehicle-function.js?raw'
import functionCodeShip from '@/examples/movingTarget/ship/ship-function.js?raw'
import functionCodeAircraft from '@/examples/movingTarget/aircraft/aircraft-function.js?raw'
import functionCodeRobotArmAnimation from '@/examples/movingTarget/robotArmAnimation/robotArmAnimation-function.js?raw'
import functionCodeRealTimeDriver from '@/examples/movingTarget/realTimeDriver/realTimeDriver-function.js?raw'
import functionCodeCoordinateAxis from '@/examples/movingTarget/coordinateAxis/coordinateAxis-function.js?raw'
import functionCodeMovingTargets from '@/examples/movingTarget/movingTargets/movingTargets-function.js?raw'
import functionCodeMovingTargetsWebsocket from '@/examples/movingTarget/movingTargetsWebsocket/movingTargetsWebsocket-function.js?raw'
import functionCodeMovingTargetsSocketIO from '@/examples/movingTarget/movingTargetsSocketIO/movingTargetsSocketIO-function.js?raw'
import functionCodeClickOnPath from '@/examples/movingTarget/clickOnPath/clickOnPath-function.js?raw'
import functionCodeMissileLaunch from '@/examples/movingTarget/missileLaunch/missileLaunch-function.js?raw'
import functionCodeMissileMobileLaunch from '@/examples/movingTarget/missileMobileLaunch/missileMobileLaunch-function.js?raw'
import functionCodeRocketLaunch from '@/examples/movingTarget/rocketLaunch/rocketLaunch-function.js?raw'
import functionCodeRocketLaunchIntoOrbit from '@/examples/movingTarget/rocketLaunchIntoOrbit/rocketLaunchIntoOrbit-function.js?raw'
import functionCodeGetNodes from '@/examples/movingTarget/getNodes/getNodes-function.js?raw'

// 可见性
import functionCodeSpecifyConnectionType from '@/examples/visible/specifyConnectionType/specifyConnectionType-function.js?raw'

// 图元
import functionCodePoint from '@/examples/graphicElement/point/point-function.js?raw'
import functionCodeLine from '@/examples/graphicElement/line/line-function.js?raw'
import functionCodeMultiLine from '@/examples/graphicElement/multiLine/multiLine-function.js?raw'
import functionCodePlane from '@/examples/graphicElement/plane/plane-function.js?raw'
import functionCodeCirclesAndEllipses from '@/examples/graphicElement/circlesAndEllipses/circlesAndEllipses-function.js?raw'
import functionBox from '@/examples/graphicElement/box/box-function.js?raw'
import functionStraightArrow from '@/examples/graphicElement/straightArrow/straightArrow-function.js?raw'

// 场景设置
import functionCodeTerminatorLine from '@/examples/sceneSet/terminatorLine/terminatorLine-function.js?raw'
import functionCodeJingweiNetwork3D from '@/examples/sceneSet/jingweiNetwork3D/jingweiNetwork3D-function.js?raw'
import functionCodeSceneInfo from '@/examples/sceneSet/sceneInfo/sceneInfo-function.js?raw'
import functionCodeSceneScreenshot from '@/examples/sceneSet/sceneScreenshot/sceneScreenshot-function.js?raw'
import functionCodeJingweiNetwork2D from '@/examples/sceneSet/jingweiNetwork2D/jingweiNetwork2D-function.js?raw'
import functionCodeDial from '@/examples/sceneSet/dial/dial-function.js?raw'
import functionCodeScale from '@/examples/sceneSet/scale/scale.js?raw'
import functionCodeCircularSpaceGrid from '@/examples/sceneSet/circularSpaceGrid/circularSpaceGrid-function.js?raw'
import functionCodeRectangularSpaceGrid from '@/examples/sceneSet/rectangularSpaceGrid/rectangularSpaceGrid-function.js?raw'
import functionCodeEarthCoordinate from '@/examples/sceneSet/earthCoordinate/earthCoordinate-function.js?raw'
import functionCodeSkyBox from '@/examples/sceneSet/skyBox/skyBox-function.js?raw'
import functionCodeMapx from '@/examples/sceneSet/mapx/mapx-function.js?raw'

// 相机
import functionCodeViewTrack from '@/examples/camera/viewTrack/viewTrack-function.js?raw'
import functionCodePerspectiveFly from '@/examples/camera/perspectiveFly/perspectiveFly-function.js?raw'
import functionCodeCameraZoom from '@/examples/camera/cameraZoom/cameraZoom-function.js?raw'

// 天气
import functionCodeRain from '@/examples/weather/rain/rain-function.js?raw'
import functionCodeSnow from '@/examples/weather/snow/snow-function.js?raw'
import functionCodeFog from '@/examples/weather/fog/fog-function.js?raw'
import functionCodeWaterSurface from '@/examples/weather/waterSurface/waterSurface-function.js?raw'

// 内置算法
import functionCodeConvertWGS84toECEF from '@/examples/builtInAlgorithm/convertWGS84toECEF/convertWGS84toECEF-function.js?raw'
import functionCodeConvertECEFtoWGS84 from '@/examples/builtInAlgorithm/convertECEFtoWGS84/convertECEFtoWGS84-function.js?raw'
import functionCodeConvertUTCtoJulianDate from '@/examples/builtInAlgorithm/convertUTCtoJulianDate/convertUTCtoJulianDate-function.js?raw'
import functionCodeConvertJulianDatetoUTC from '@/examples/builtInAlgorithm/convertJulianDatetoUTC/convertJulianDatetoUTC-function.js?raw'
import functionCodeDistancePointToLine from '@/examples/builtInAlgorithm/distancePointToLine/distancePointToLine-funtion.js?raw'
import functionCodeDistanceTwoPoints from '@/examples/builtInAlgorithm/distanceTwoPoints/distanceTwoPoints-function.js?raw'

const functionCodeMap = {
    // 太空任务
    月球轨道: functionCodeMoonTrack,
    绕太阳: functionCodeSunTrack,

    // 测站
    添加测站: functionCodeAddStation,
    测站坐标系: functionCodeStationCoordinate,

    // 动目标
    车: functionCodeVehicle,
    船: functionCodeShip,
    飞机: functionCodeAircraft,
    机械臂动画: functionCodeRobotArmAnimation,
    实时驱动: functionCodeRealTimeDriver,
    坐标轴: functionCodeCoordinateAxis,
    大批量动目标: functionCodeMovingTargets,
    大批量动目标websocket: functionCodeMovingTargetsWebsocket,
    大批量动目标socketIO: functionCodeMovingTargetsSocketIO,
    点选路径: functionCodeClickOnPath,
    导弹发射: functionCodeMissileLaunch,
    导弹机动发射: functionCodeMissileMobileLaunch,
    火箭发射: functionCodeRocketLaunch,
    火箭发射卫星入轨: functionCodeRocketLaunchIntoOrbit,
    获取模型节点数: functionCodeGetNodes,

    // 可见性
    指定连接类型: functionCodeSpecifyConnectionType,

    // 图元
    点: functionCodePoint,
    线: functionCodeLine,
    多颜色线: functionCodeMultiLine,
    面: functionCodePlane,
    椭圆: functionCodeCirclesAndEllipses,
    盒子: functionBox,
    直线箭头: functionStraightArrow,

    // 场景设置
    晨昏线: functionCodeTerminatorLine,
    经纬网络3D: functionCodeJingweiNetwork3D,
    场景信息: functionCodeSceneInfo,
    场景截图: functionCodeSceneScreenshot,
    经纬网络2D: functionCodeJingweiNetwork2D,
    时间盘: functionCodeDial,
    圆形空间网格: functionCodeCircularSpaceGrid,
    矩形空间网格: functionCodeRectangularSpaceGrid,
    地球坐标系: functionCodeEarthCoordinate,
    天空盒: functionCodeSkyBox,
    鹰眼图: functionCodeMapx,
    刻度盘: functionCodeScale,

    // 相机
    跟踪视角: functionCodeViewTrack,
    视角飞行: functionCodePerspectiveFly,
    相机缩放: functionCodeCameraZoom,

    // 天气
    雨: functionCodeRain,
    雪: functionCodeSnow,
    雾: functionCodeFog,
    水面: functionCodeWaterSurface,

    // 内置算法
    经纬高转地固XYZ: functionCodeConvertWGS84toECEF,
    地固XYZ转经纬高: functionCodeConvertECEFtoWGS84,
    UTC时间转JulianDate: functionCodeConvertUTCtoJulianDate,
    JulianDate转UTC时间: functionCodeConvertJulianDatetoUTC,
    计算点到直线的距离: functionCodeDistancePointToLine,
    计算两点间距离: functionCodeDistanceTwoPoints,
}

export function findFunctionCodeById(id){
    if(!functionCodeMap.hasOwnProperty(id)){
        throw new Error(`${id}不存在`);
    } 
    return functionCodeMap[id]
}