import React, { Component, Fragment } from "react";
import Dimensions from "react-dimensions";
import MapGL from "react-map-gl";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import api from "../services/api";
import Properties from "./Properties";
import { Container } from "./styles";

const TOKEN =
  "pk.eyJ1IjoibHVjYXNjaGF2ZXMiLCJhIjoiY2p5Y2c0OHc5MGllMTNvcGJqOXZsN2M2eCJ9.Jdfsbhex1jRqKsf_UvUWkQ";

class Map extends Component {
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  constructor() {
    super();
    this.updatePropertiesLocalization = debounce(
      this.updatePropertiesLocalization,
      500
    );
  }

  state = {
    viewport: {
      latitude: -27.452508,
      longitude: -53.937325,
      zoom: 12.8,
      bearing: 0,
      pitch: 0
    },
    properties: []
  };

  componentDidMount() {
    this.loadProperties();
  }

  updatePropertiesLocalization() {
    this.loadProperties();
  }

  loadProperties = async () => {
    const { latitude, longitude } = this.state.viewport;
    try {
      const response = await api.get("/", {
        params: { latitude, longitude }
      });
      this.setState({ properties: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { containerWidth: width, containerHeight: height } = this.props;
    const { properties } = this.state;
    return (
      <Fragment>
        <MapGL
          width={width}
          height={height}
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
          onViewStateChange={this.updatePropertiesLocalization.bind(this)}
        >
          <Properties properties={properties} />
        </MapGL>
      </Fragment>
    );
  }
}

const DimensionedMap = Dimensions()(Map);
const App = () => (
  <Container>
    <DimensionedMap />
  </Container>
);

export default App;
