// Shared objects we'll instantiate later.
var container, camera, scene, renderer, origin = new THREE.Vector3(0,0,0);

// Initialise
init();

// Then animate the scene.
animate();

function init() {
    // Create a new scene
    scene = new THREE.Scene();
    
    // Length of the line that we want to draw
    var axisLength = 350;
    
    // Create a new material, of type LineBasicMaterial with a colour of red
    var material = new THREE.LineBasicMaterial({color: 0xff0000});
    // Create an empty geometry object
    var geometry = new THREE.Geometry();
    
    // Add two vertices to the geometry, one for each end of the line
    geometry.vertices.push(
        // From x = -axisLength 
        new THREE.Vector3(-axisLength, 0, 0),
        // To x = axisLength
        new THREE.Vector3(axisLength, 0, 0)
    );

    // Create a new line, with the given geometry and material.
    // Think of a line as a special type of Mesh for now.
    var line = new THREE.Line(geometry, material);  
    // Add the line to the scene.
    scene.add(line);

    
    // ------
    // Repeat for the Y-axis, of green from y = -axisLength to y = axisLength
    material = new THREE.LineBasicMaterial({color: 0x00ff00});
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(0, -axisLength, 0),
        new THREE.Vector3(0, axisLength, 0)
    );
    line = new THREE.Line(geometry, material);  
    scene.add(line);


    // ------
    // Repeat for the Z-axis, of blue from z = -axisLength to z = axisLength
    material = new THREE.LineBasicMaterial({color: 0x0000ff});
    geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(0, 0, -axisLength),
        new THREE.Vector3(0, 0, axisLength)
    );
    line = new THREE.Line(geometry, material);  
    scene.add(line);

    
    // Create a new camera, don't worry about the details of this for now.
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    
    // Set the camera x, y, z position:
    // 100 units left (-100) along the x-axis (red),
    // 150 units up (100) along the y-axis (green)
    // 600 units along the z-axis (blue) which moves the camera backwards
  
    // Play with these numbers!
    // Notice that the blue line becomes invisible if we're looking directly
    // at it: (0, 0, 600)
    camera.position.set(-100, 100, 600);
    
    // Point the camera towards the origin
    camera.lookAt(origin);
    // Add the camera to the scene
    scene.add(camera);
    
    
    // Create a new WebGL renderer
    renderer = new THREE.WebGLRenderer();
    // Set the window size
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Set the clear (background) colour to black, fully opaque
    renderer.setClearColor(0x000000, 1.0);

    // three.js creates a canvas element for us, we need to append it to the dom.
    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    // Update the scene, for the current camera position
    renderer.render(scene, camera);
}



