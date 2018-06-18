window.addEventListener('DOMContentLoaded', init);

function init() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  // シーン作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
  camera.position.set(0, 0, +2000);

  // 箱を作成
  const box_geometry = new THREE.BoxGeometry(9, 9, 1400);
  const box_material = new THREE.MeshPhongMaterial({color: 0xAAAA34});
  const box = new THREE.Mesh(box_geometry,box_material);

  // LINE
  const line_material = new THREE.LineBasicMaterial({color: 0xAAAA34});
  const line_geometry = new THREE.Geometry();
  line_geometry.vertices.push(
    new THREE.Vector3(-100, 0, 0),
    new THREE.Vector3(0, 100, 0),
    new THREE.Vector3(100, 0, 0),
    new THREE.Vector3(0, -100, 0)
  );

  const line = new THREE.Line(line_geometry, line_material);
  scene.add(line);
  scene.add(box);

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
  directionalLight.position.set(1, 1, 1);

  // シーンに追加
  scene.add(directionalLight);

  // 初回実行
  tick();

  function tick() {
    requestAnimationFrame(tick);
    // 箱を回転させる
    box.rotation.x += 3;
    box.rotation.y += 0.02;
    // レンダリング
    renderer.render(scene, camera);
  }
   
}
