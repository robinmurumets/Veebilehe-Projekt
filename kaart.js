const fulfillmentCenters = [
    { name: 'Seattle HQ', lat: 47.6221, lon: -122.3358 },
  { name: 'Arlington HQ', lat: 38.8579, lon: -77.0598 },
  { name: 'London Office', lat: 51.5202, lon: -0.1021 },
  { name: 'Berlin Office', lat: 52.5060, lon: 13.3695 },
  { name: 'Tokyo Office', lat: 35.6604, lon: 139.7286 },
  { name: 'Sydney Office', lat: -33.8679, lon: 151.2074 },
  { name: 'São Paulo Office', lat: -23.5873, lon: -46.6564 },
  { name: 'Vancouver Office', lat: 49.2827, lon: -123.1207 },
  { name: 'Paris Office', lat: 48.8900, lon: 2.3470 },
  { name: 'Madrid Office', lat: 40.4455, lon: -3.6951 },
  { name: 'Milan Office', lat: 45.4804, lon: 9.1900 },
  { name: 'Cape Town Office', lat: -33.918861, lon: 18.423300 },
  { name: 'Dubai Office', lat: 25.0767, lon: 55.1402 },
  { name: 'Singapore Office', lat: 1.2806, lon: 103.8501 },
  { name: 'Amsterdam Office', lat: 52.3388, lon: 4.8921 },
  { name: 'Stockholm Office', lat: 59.3316, lon: 18.0637 },
  { name: 'Warsaw Office', lat: 52.2248, lon: 21.0118 },
  { name: 'Moscow Office', lat: 55.7485, lon: 37.5339 },
  { name: 'Istanbul Office', lat: 41.0697, lon: 29.0044 },
  { name: 'Tel Aviv Office', lat: 32.0652, lon: 34.7770 },
  { name: 'Toronto Office', lat: 43.6435, lon: -79.3813 },
  { name: 'Mexico City Office', lat: 19.4337, lon: -99.1340 },
  { name: 'Buenos Aires Office', lat: -34.6118, lon: -58.4173 },
  { name: 'New York Office', lat: 40.7506, lon: -73.9866 },
  { name: 'San Francisco Office', lat: 37.7916, lon: -122.3996 },
  { name: 'Austin Office', lat: 30.4020, lon: -97.7338 },
  { name: 'Vancouver Fulfillment Center', lat: 49.1938, lon: -123.0365 },
];

const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

fulfillmentCenters.forEach(center => {
    const marker = L.marker([center.lat, center.lon]).addTo(map);
    marker.bindPopup(`<b>${center.name}</b><br>Coordinates: ${center.lat}, ${center.lon}`);
});