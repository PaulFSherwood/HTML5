// get an element from the DOM (Document Object Model)
var main = function () {
    var CANVAS = document.getElementById('your_canvas');
    CANVAS.width = window.innerWidth - 100;
    CANVAS.height = window.innerHeight - 100;
    
    /*========== GET WEBGL CONTEXT ==========*/
    var GL;
    try {
        GL = CANVAS.getContext("webgl", { antialias: true });
        // console.log("You are webgl compatible");
    } catch (e) {
        console.log("You are not webgl compatible;(");
        return false
    }
    /*=============== SHADERS ===============*/
    /* jshint multistr: true */
    /* The vertext shader is executed for each summit of the triangle (3 times). It computes 
       the position of the point on the viewport (displayed on the canvas), gl_Position. 
       gl_Position is given in clipping coordinates
     */
    var shader_vertext_source = "\n\
    attribute vec2 position; // the position of the point \n\
    attribute vec3 color; // the color of the point\n\
    \n\
    varying vec3 vColor;\n\
    void main(void) { // pre-built function\n\
    gl_Position = vec4(position, 0., 1.); // 0. is the z, and 1 is w\n\
    vColor = color;\n\
    }";
    /* 
       The fragment(or pixel) shader is executed for each pixel of the render of the triangle. 
       It returns the RGBA color of the pixel with the pre-built variable gl_FragColor.
     */
    var shader_fragment_source = "\n\
    precision mediump float;\n\
    \n\
    \n\
    \n\
    varying vec3 vColor;\n\
    void main(void){\n\
    gl_FragColor = vec4(vColor, 1.);\n\
    }";
    /* main is a GLSL pre-built function */
    
    // this function is used to compile a shader
    var get_shader = function (source, type, typeString) {
        var shader = GL.createShader(type);
        GL.shaderSource(shader, source);
        GL.compileShader(shader);
        if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
            alert("ERROR IN " + typeString + " SHADER: " + GL.getShaderInfoLog(shader));
            return false;
        }
        return shader;
    };
    // Compilation of the vertex shader
    var shader_vertex = get_shader(shader_vertext_source, GL.VERTEX_SHADER, "VERTEX");
    // Compilation of the fragment shader
    var shader_fragment = get_shader(shader_fragment_source, GL.FRAGMENT_SHADER, "FRAGMENT");
    
    // creation of the shader program
    var SHADER_PROGRAM = GL.createProgram();
    GL.attachShader(SHADER_PROGRAM, shader_vertex);
    GL.attachShader(SHADER_PROGRAM, shader_fragment);
    
    // linking of the shader program
    GL.linkProgram( SHADER_PROGRAM);
    // position GLSL variable links to position js variable
    var color = GL.getAttribLocation(SHADER_PROGRAM, "color");
    var position = GL.getAttribLocation( SHADER_PROGRAM, "position");
    // GLSL attributes variables must be enabled
    GL.enableVertexAttribArray(color);
    GL.enableVertexAttribArray(position);
    // Linking is over, tells webgl context to use SHADER_PROGRAM for rendering
    GL.useProgram(SHADER_PROGRAM);
    
    /*=============== THE TRIANGLE ===============*/
    // POINTS:
    // We build the point coordinates array of the triangle
    var triangle_vertex=[
                          -1, -1, // first summit -> bottom left of the viewport
                        0, 0,  1, // first summit color; blue
                           1, -1, // bottom right of the viewport
                        1, 1,  0, // second summit color: yellow
                           1,  1, // top right of the viewport
                        1, 0,  0  // thrird sumit color: red
                        ];
    
    var TRIANGLE_VERTEX = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TRIANGLE_VERTEX);
    GL.bufferData(GL.ARRAY_BUFFER,
                  new Float32Array(triangle_vertex),
                  GL.STATIC_DRAW);
    
    //FACES
    // Use points with index 0, 1, 2 to build a triangle
    var triangle_faces = [0, 1, 2];
    var TRIANGLE_FACES = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TRIANGLE_FACES);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER,
                  new Uint16Array(triangle_faces),
                  GL.STATIC_DRAW);
    
    /*=============== DRAWING ===============*/
    // Set clear color to transparent
    GL.clearColor(0.0,0.0,0.0,0.0);
    //this function draws the scene
    var animate = function(){
        // set the drawing area on the canvas and clear it
        GL.viewport(0.0, 0.0, CANVAS.width, CANVAS.height);
        GL.clear(GL.COLOR_BUFFER_BIT);
        // Draw stuff here :)
        GL.bindBuffer(GL.ARRAY_BUFFER, TRIANGLE_VERTEX);
        GL.vertexAttribPointer(position, 2, GL.FLOAT, false, 4*(2+3), 0);
        GL.vertexAttribPointer(color   , 3, GL.FLOAT, false, 4*(2+3), 2*4);
        // draw the triangle
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TRIANGLE_FACES);
        GL.drawElements(GL.TRIANGLES, 3, GL.UNSIGNED_SHORT, 0);
        // Drawing is finishe. show the render
        GL.flush();
        // Redraws the scene as soon as ready
        window.requestAnimationFrame(animate);
    };
    // launch animate for the first time
    animate();
};