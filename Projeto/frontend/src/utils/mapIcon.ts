import Leaflet from 'leaflet';
import mapMakerImg from '../assets/pin.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMakerImg,

  iconSize: [36, 36],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default mapIcon;
