export function getCurrentUTM(callback) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const etrs89Utm30n = '+proj=utm +zone=30 +datum=WGS84 +units=m +no_defs';
      const wgs84 = proj4('EPSG:4326');
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const utmCoords = proj4(wgs84, etrs89Utm30n, [lon, lat]);
      callback(utmCoords);
    },
    error => {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          console.log("El usuario ha denegado el acceso a la geolocalización.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("La información de la ubicación no está disponible.");
          break;
        case error.TIMEOUT:
          console.log("El tiempo de espera para obtener la ubicación ha expirado.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("Se ha producido un error desconocido.");
          break;
        default:
          console.log("Se ha producido un error desconocido.");
      }
    }
  );
}
export function getValues() {
  const coordX = document.getElementById('coordX').value;
  const coordY = document.getElementById('coordY').value;
  const coordZ = document.getElementById('coordZ').value;
  const check = document.getElementById('chk1').checked;
  return [check, coordX, coordY, coordZ];
}