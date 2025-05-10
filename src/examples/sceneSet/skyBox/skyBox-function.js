export function addSkyBox(viewer) {
    // 定义图片的URL
    const imageUrls = {
        positiveX: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_px.jpg',
        negativeX: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_mx.jpg',
        positiveY: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_py.jpg',
        negativeY: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_my.jpg',
        positiveZ: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_pz.jpg',
        negativeZ: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_mz.jpg',
    };

    // 异步加载图片
    async function loadImages() {
        const sources = {};
        for (const [key, url] of Object.entries(imageUrls)) {
            const response = await fetch(url);
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            sources[key] = imageUrl;
        }
        return sources;
    }

    // 设置SkyBox
    loadImages().then(sources => {
        viewer.scene.skyBox = new Cesium.SkyBox({
            sources: sources
        });
    });
}
