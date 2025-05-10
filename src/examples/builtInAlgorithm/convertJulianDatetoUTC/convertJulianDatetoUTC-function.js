export function changeTime(viewer){
    let jd = Cesium.JulianDate.fromDate(new Date());  //获取一个julianDate时间
    let utcDate = Cesium.JulianDate.toDate(jd);  //将julianDatt时间转换为UTC时间(世界协调时)
    console.log(utcDate)
}