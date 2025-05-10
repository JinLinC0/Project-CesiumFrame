let modelEntity;
export function addGetNodes(viewer) {
    // 添加模型实体并设置其位置
    modelEntity = viewer.entities.add({
        id: 'rocketModel',
        position: Cesium.Cartesian3.fromDegrees(120, 30, 5000),  // 模型的初始位置
        model: {
            uri: 'https://cesium.com/public/SandcastleSampleData/launchvehicle.glb',
            minimumPixelSize: 128
        },
    });

    viewer.trackedEntity = modelEntity;   // 视角跟随模型

    let modelDate = modelEntity.model;
    console.log(modelDate)
}



// /**
//  * @class 获取模型节点类
//  * @classdesc 该类用于在Cesium场景中获取模型的节点
//  */
// class modelNodes{
//     /**
//      * 测站构造函数
//      * @param {Object} viewer - viewer对象
//      */
//     constructor(viewer, id, options = {}) {
//         this.viewer = viewer;
//     }

//     getNodes(site, visible) {

//     }
// }

// export default modelNodes;
