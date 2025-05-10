export function addStraightArrow(viewer) {
    const czml = [
        {
            id: "document",
            name: "CZML Geometries: Polyline",
            version: "1.0",
        },
        {
          id: "purpleLine",
          name: "Purple arrow at height",
          polyline: {
            positions: {
              cartographicDegrees: [-75, 43, 500000, -125, 43, 500000],
            },
            material: {
              polylineArrow: {
                color: {
                  rgba: [148, 0, 211, 255],
                },
              },
            },
            arcType: "NONE",
            width: 10,
          },
        },
    ];
      
    const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
    viewer.dataSources.add(dataSourcePromise);
    viewer.zoomTo(dataSourcePromise);
}
