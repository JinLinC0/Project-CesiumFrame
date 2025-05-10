export function changeTime(viewer){
    let date = new Date(); // 获取当前时间
    let utcTime = date.toISOString(); // 将UTC 时间转换为 ISO 8601 格式字符串方便进行下一步转化
    let julianDate = Cesium.JulianDate.fromIso8601(utcTime); // 转换为 JulianDate时间
    console.log(julianDate);
  }