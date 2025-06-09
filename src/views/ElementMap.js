import MoonTrack from "@/assets/MoonTrack.png"
import SunTrack from "@/assets/SunTrack.png"

import Station from "@/assets/Station.png"
import StationCoordinate from "@/assets/StationCoordinate.png"
import SpecifyConnectionType from "@/assets/SpecifyConnectionType.png"

import Vehicle from "@/assets/Vehicle.png"
import Ship from "@/assets/Ship.png"
import Aircraft from "@/assets/Aircraft.png"
import RobotArmAnimation from "@/assets/RobotArmAnimation.png"
import RealTimeDriver from "@/assets/RealTimeDriver.png"
import CoordinateAxis from "@/assets/CoordinateAxis.png"
import MovingTargets from "@/assets/MovingTargets.png"
import MovingTargetsWebsocket from "@/assets/MovingTargetsWebsocket.png"
import MovingTargetsSocketIO from "@/assets/MovingTargetsSocketIO.png"
import ClickOnPath from "@/assets/ClickOnPath.png"
import MissileLaunch from "@/assets/MissileLaunch.png"
import MissileMobileLaunch from "@/assets/MissileMobileLaunch.png"
import RocketLaunch from "@/assets/RocketLaunch.png"
import RocketLaunchIntoOrbit from "@/assets/RocketLaunchIntoOrbit.png"

import Point from "@/assets/Point.png"
import Line from "@/assets/Line.png"
import MultiLine from "@/assets/MultiLine.png"
import Plane from "@/assets/Plane.png"
import CirclesAndEllipses from "@/assets/CirclesAndEllipses.png"
import ColumnBody from "@/assets/ColumnBody.png"
import StraightArrow from "@/assets/StraightArrow.png"

import TerminatorLine from "@/assets/TerminatorLine.png"
import JingweiNetwork3D from "@/assets/JingweiNetwork3D.png"
import SceneInfo from "@/assets/SceneInfo.png"
import SceneScreenshot from "@/assets/SceneScreenshot.png"
import JingweiNetwork2D from "@/assets/JingweiNetwork2D.png"
import Dial from "@/assets/Dial.png"
import Scile from "@/assets/Scile.png"
import CircularSpaceGrid from "@/assets/CircularSpaceGrid.png"
import RectangularSpaceGrid from "@/assets/RectangularSpaceGrid.png"
import EarthCoordinate from "@/assets/EarthCoordinate.png"
import SkyBox from "@/assets/SkyBox.png"
import Mapx from "@/assets/Mapx.png"

import ViewTrack from "@/assets/ViewTrack.png"
import PerspectiveFly from "@/assets/PerspectiveFly.png"
import CameraZoom from "@/assets/CameraZoom.png"

import Rain from "@/assets/Rain.png"
import Snow from "@/assets/Snow.png"
import Fog from "@/assets/Fog.png"
import WaterSurface from "@/assets/WaterSurface.png"

import ConvertWGS84toECEF from "@/assets/ConvertWGS84toECEF.png"
import ConvertECEFtoWGS84 from "@/assets/ConvertECEFtoWGS84.png"
import DistanceTwoPoints from "@/assets/DistanceTwoPoints.png"

// 太空任务
export const elementSpaceMissionsMap = {
    月球轨道: {
        title: '月球轨道',
        pngUrl: MoonTrack
    },
    绕太阳: {
        title: '绕太阳',
        pngUrl: SunTrack
    }
}

// 测站
export const elementStationMap = {
    添加测站: {
        title: '添加测站',
        pngUrl: Station
    },
    测站坐标系: {
        title: '测站坐标系',
        pngUrl: StationCoordinate
    },
    指定连接类型: {
        title: '指定连接类型',
        pngUrl: SpecifyConnectionType
    }
}

// 动目标
export const elementMovingMap = {
    车: {
        title: '车',
        pngUrl: Vehicle
    },
    船: {
        title: '船',
        pngUrl: Ship
    },
    飞机: {
        title: '飞机',
        pngUrl: Aircraft
    },
    机械臂动画: {
        title: '机械臂动画',
        pngUrl: RobotArmAnimation
    },
    实时驱动: {
        title: '实时驱动',
        pngUrl: RealTimeDriver
    },
    坐标轴: {
        title: '坐标轴',
        pngUrl: CoordinateAxis
    },
    大批量动目标: {
        title: '大批量动目标',
        pngUrl: MovingTargets
    },
    大批量动目标websocket: {
        title: '大批量动目标websocket',
        pngUrl: MovingTargetsWebsocket
    },
    大批量动目标socketIO: {
        title: '大批量动目标socketIO',
        pngUrl: MovingTargetsSocketIO
    },
    点选路径: {
        title: '点选路径',
        pngUrl: ClickOnPath
    },
    导弹发射: {
        title: '导弹发射',
        pngUrl: MissileLaunch
    },
    导弹机动发射: {
        title: '导弹机动发射',
        pngUrl: MissileMobileLaunch
    },
    火箭发射: {
        title: '火箭发射',
        pngUrl: RocketLaunch
    },
    火箭发射卫星入轨: {
        title: '火箭发射卫星入轨',
        pngUrl: RocketLaunchIntoOrbit
    },
    // 获取模型节点数: {
    //     title: '获取模型节点数',
    //     pngUrl: '/src/assets/RocketLaunchIntoOrbit.png'
    // }
}

// 图元
export const elementGraphicMap = {
    点: {
        title: '点',
        pngUrl: Point
    },
    线: {
        title: '线',
        pngUrl: Line
    },
    多颜色线: {
        title: '多颜色线',
        pngUrl: MultiLine
    },
    面: {
        title: '面',
        pngUrl: Plane
    },
    椭圆: {
        title: '椭圆',
        pngUrl: CirclesAndEllipses
    },
    盒子: {
        title: '盒子',
        pngUrl: ColumnBody
    },
    直线箭头: {
        title: '直线箭头',
        pngUrl: StraightArrow
    }
}

// 场景设置
export const elementSceneSetMap = {
    晨昏线: {
        title: '晨昏线',
        pngUrl: TerminatorLine
    },
    经纬网络3D: {
        title: '经纬网络3D',
        pngUrl: JingweiNetwork3D
    },
    场景信息: {
        title: '场景信息',
        pngUrl: SceneInfo
    },
    场景截图: {
        title: '场景截图',
        pngUrl: SceneScreenshot
    },
    经纬网络2D: {
        title: '经纬网络2D',
        pngUrl: JingweiNetwork2D
    },
    时间盘: {
        title: '时间盘',
        pngUrl: Dial
    },
    刻度盘: {
        title: '刻度盘',
        pngUrl: Scile
    },
    圆形空间网格: {
        title: '圆形空间网格',
        pngUrl: CircularSpaceGrid
    },
    矩形空间网格: {
        title: '矩形空间网格',
        pngUrl: RectangularSpaceGrid
    },
    地球坐标系: {
        title: '地球坐标系',
        pngUrl: EarthCoordinate
    },
    天空盒: {
        title: '天空盒',
        pngUrl: SkyBox
    },
    鹰眼图: {
        title: '鹰眼图',
        pngUrl: Mapx
    }
}

// 相机
export const elementCameraMap = {
    跟踪视角: {
        title: '跟踪视角',
        pngUrl: ViewTrack
    },
    视角飞行: {
        title: '视角飞行',
        pngUrl: PerspectiveFly
    },
    相机缩放: {
        title: '相机缩放',
        pngUrl: CameraZoom
    }
}

// 天气
export const elementWeatherMap = {
    雨: {
        title: '雨',
        pngUrl: Rain
    },
    雪: {
        title: '雪',
        pngUrl: Snow
    },
    雾: {
        title: '雾',
        pngUrl: Fog
    },
    水面: {
        title: '水面',
        pngUrl: WaterSurface
    }
}

// 内置算法
export const elementAlgorithmMap = {
    经纬高转地固XYZ: {
        title: '经纬高转地固XYZ',
        pngUrl: ConvertWGS84toECEF
    },
    地固XYZ转经纬高: {
        title: '地固XYZ转经纬高',
        pngUrl: ConvertECEFtoWGS84
    },
    UTC时间转JulianDate: {
        title: 'UTC时间转JulianDate',
        pngUrl: DistanceTwoPoints
    },
    JulianDate转UTC时间 : {
        title: 'JulianDate转UTC时间 ',
        pngUrl: DistanceTwoPoints
    },
    计算点到直线的距离: {
        title: '计算点到直线的距离',
        pngUrl: DistanceTwoPoints
    },
    计算两点间距离: {
        title: '计算两点间距离',
        pngUrl: DistanceTwoPoints
    },
}