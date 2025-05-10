export function addFog(viewer) {
    viewer.scene.postProcessStages.add(new Cesium.PostProcessStage({
        fragmentShader: `
                uniform sampler2D colorTexture;
                uniform sampler2D depthTexture;
                uniform float visibility;
                uniform vec4 fogColor;
                varying vec2 v_textureCoordinates; 
                varying vec4 fragColor;
                void main(void) 
                { 
                        vec4 origcolor = texture2D(colorTexture, v_textureCoordinates);
                    float depth = czm_readDepth(depthTexture, v_textureCoordinates); 
                    vec4 depthcolor = texture2D(depthTexture, v_textureCoordinates);
                    float f = visibility * (depthcolor.r - 0.3) / 0.2; 
                    if (f < 0.0) f = 0.0; 
                    else if (f > 1.0) f = 1.0; 
                    gl_FragColor = mix(origcolor, fogColor, f);
                }
            `,
        uniforms: {
            visibility: 0.1,
            fogColor: new Cesium.Color(0.8, 0.8, 0.8, 0.8),
        },
    }));     
}
