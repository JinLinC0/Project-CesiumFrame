export function addSceneInfo(viewer) {
    const czml = [
        {
          id: "document",
          name: "CZML Point",
          version: "1.0",
        },
        {
          id: "point",
          name: "point",
          description: "<!--HTML-->\r\n<p>GeoEye-1 is a high-resolution earth observation satellite owned by GeoEye, which was launched in September 2008.</p>\r\n\r\n<p>On December 1, 2004, General Dynamics C4 Systems announced it had been awarded a contract worth approximately $209 million to build the OrbView-5 satellite. Its sensor is designed by the ITT Exelis.</p>\r\n\r\n<p>The satellite, now known as GeoEye-1, was originally scheduled for April 2008 but lost its 30-day launch slot to a U.S. government mission which had been delayed. It was rescheduled for launch August 22, 2008 from Vandenberg Air Force Base aboard a Delta II launch vehicle. The launch was postponed to September 4, 2008, due to unavailability of the Big Crow telemetry-relay aircraft. It was delayed again to September 6 because Hurricane Hanna interfered with its launch crews.</p>\r\n\r\n<p>The launch took place successfully on September 6, 2008 at 11:50:57 a.m. PDT (18:50:57 UTC). The GeoEye-1 satellite separated successfully from its Delta II launch vehicle at 12:49 p.m. PDT (19:49 UTC), 58 minutes and 56 seconds after launch.</p>",
          position: {
            cartographicDegrees: [-111.0, 40.0, 0],
          },
          point: {
            color: {
              rgba: [255, 255, 255, 255],
            },
            outlineColor: {
              rgba: [255, 0, 0, 255],
            },
            outlineWidth: 4,
            pixelSize: 20,
          },
        },
      ];
      
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));

    dataSourcePromise.then(function (dataSource) {
        viewer.zoomTo(dataSource).then(function() {
            viewer.trackedEntity = dataSource.entities.getById('point');
        });
    }).catch(function (error) {
        console.error(error);
    });

    // 监听selectedEntityChanged事件，更新InfoBox内容
    viewer.selectedEntityChanged.addEventListener(function(entity) {
        if (Cesium.defined(entity) && Cesium.defined(entity.description)) {
            viewer.infoBox.viewModel.description = entity.description;
        }
    });
}