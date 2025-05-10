export function exportImage(viewer){
    // 获取场景的canvas
    const canvas = viewer.scene.canvas;
    // 创建一个临时的a标签用于下载图片
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'screenshot.png';
    // 模拟点击a标签进行下载
    a.click();
}