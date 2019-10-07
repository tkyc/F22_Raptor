import React from 'react';
import './App.css';
import Scene from './components/Scene'

// const cube = new THREE.Mesh(new THREE.BoxGeometry( 1, 1, 1 ), new THREE.MeshBasicMaterial( { color: 0x00ff00 } ));

function App() {
	return (
		<div className="App">
			<Scene/>
			{/* <div style={style}></div> */}
		</div>
	);
}

export default App;
