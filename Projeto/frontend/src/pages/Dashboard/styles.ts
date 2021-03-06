import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: #9e3dad;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: var(--pink);
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`;

export const Aside = styled.aside`
  width: 440px;
  background-color: var(--blueLight);
  background-position: center center;
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    display: flex;
    height: 120px;
  }

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 40px;
    color: var(--light);
  }

  p {
    line-height: 28px;
    margin-top: 24px;
    opacity: 0.8;
    color: var(--dark);
  }
`;
