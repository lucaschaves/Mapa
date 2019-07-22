import React from "react";
import { Marker } from "react-map-gl";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Pin } from "./styles";

const Properties = ({ properties, match }) =>
  properties.map(property => (
    <Marker
      key={property.id}
      longitude={property.longitude}
      latitude={property.latitude}
    >
      <Pin>
        <Link to={`/`}>
          {property.nome} - {property.descricao}
        </Link>
      </Pin>
    </Marker>
  ));

Properties.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nome: PropTypes.string,
      descricao: PropTypes.string,
      longitude: PropTypes.number,
      latitude: PropTypes.number
    })
  ).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string
  }).isRequired
};

export default Properties;
