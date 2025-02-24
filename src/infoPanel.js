import * as THREE from 'three';
// InfoPanel.js
class InfoPanel {
    constructor(scene, position = { x: 0, y: 0, z: 0 }) {
        this.scene = scene;
        this.position = position;
        this.panelCanvas = document.createElement('canvas');
        this.context = this.panelCanvas.getContext('2d');
        this.panelTexture = new THREE.CanvasTexture(this.panelCanvas);
        this.panel = null;

        this.createInfoPanel();
    }

    createInfoPanel() {
        this.panelCanvas.width = 512;
        this.panelCanvas.height = 512;

        // Añadir el texto inicial al lienzo
        this.context.fillStyle = 'rgba(49, 98, 153, 0.8)'; // Fondo azul transparente
        this.context.fillRect(0, 0, this.panelCanvas.width, this.panelCanvas.height);
        this.context.fillStyle = 'white';
        this.context.font = '24px Arial';
        this.context.fillText('Información del Panel', 50, 100);

        let panelGeometry = new THREE.PlaneGeometry(2, 2);
        let panelMaterial = new THREE.MeshBasicMaterial({ map: this.panelTexture, side: THREE.DoubleSide, transparent: true });
        this.panel = new THREE.Mesh(panelGeometry, panelMaterial);

        this.panel.position.set(this.position.x, this.position.y, this.position.z);
        this.scene.add(this.panel);
    }

    updatePanelText(newText) {
        // Limpiar el lienzo
        this.context.clearRect(0, 0, this.panelCanvas.width, this.panelCanvas.height);

        // Redibujar el fondo y el nuevo texto
        this.context.fillStyle = 'rgba(49, 98, 153, 0.8)'; // Fondo azul transparente
        this.context.fillRect(0, 0, this.panelCanvas.width, this.panelCanvas.height);
        this.context.fillStyle = 'white';
        this.context.font = '20px Arial';
        const lines = newText.split('\n');
        const lineHeight=30;
        let y = 50;

        lines.forEach(line => {
            this.context.fillText(line, 50, y);
            y += lineHeight;
        });

        // Actualizar la textura del panel
        this.panelTexture.needsUpdate = true
    }

    showPanel() {
        this.panel.visible = true;
    }

    hidePanel() {
        this.panel.visible = false;
    }
}

// Exportar la clase
export default InfoPanel;
