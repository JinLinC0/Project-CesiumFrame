
export function addDial(viewer, timetext) {
         // 格式化时间轴
        viewer.timeline.makeLabel = function (date) {
        const julianDT = new Cesium.JulianDate();
        Cesium.JulianDate.addHours(date, 8, julianDT);
        var gregorianDT = Cesium.JulianDate.toGregorianDate(julianDT);
        let hour = gregorianDT.hour + "";
        let minute = gregorianDT.minute + "";
        let second = gregorianDT.second + "";
        timetext = `${gregorianDT.year}年${gregorianDT.month}月${gregorianDT.day}日${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2,"0")}`
        return `${gregorianDT.year}年${gregorianDT.month}月${gregorianDT.day}日${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2,"0")}`;
        };
    };

export function forward(viewer) {
  let t = viewer.clockViewModel.multiplier;
  viewer.clockViewModel.multiplier = Math.abs(t);
  viewer.clock.shouldAnimate = true;
}
var flag = false;
export function start(viewer) {
   flag = !(flag);
  if(flag==true)
    viewer.clock.shouldAnimate = true;
  else
    viewer.clock.shouldAnimate = false;
}
export function back(viewer) {
  let t = viewer.clockViewModel.multiplier;
  viewer.clockViewModel.multiplier = -Math.abs(t);
  viewer.clock.shouldAnimate = true;
}
export function multiplier(viewer) {
  viewer.clockViewModel.multiplier *= 2;
}

export function divide(viewer) {
  viewer.clockViewModel.multiplier /= 2;

}
export function reset(viewer) {
  viewer.clock.currentTime = viewer.clock.startTime;
}