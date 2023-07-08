import { useEffect, useState, useRef } from "react";
import { GoogleMap, useLoadScript, Polygon } from "@react-google-maps/api";
import party from "party-js";

export default function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyClr98Nqg7ibKg9bRN3hhYpofRfaFoRNkk",
  });
  const [countries, setCountries] = useState(null);
  const mouseX = useRef();
  const mouseY = useRef();

  useEffect(() => {
    fetch("geo.json")
      .then((response) => response.json())
      .then((data) => initPaths(data.features))
      .then((countriesArray) => setCountries(countriesArray));
  }, []);

  useEffect(() => {
    if (props.last) handleConfetti(mouseX, mouseY);
  }, [props.counter]);

  function handlePolyClick(selectedCountry, e) {
    if (selectedCountry === props.prompt) {
      mouseX.current = e.domEvent.clientX;
      mouseY.current = e.domEvent.clientY;
      props.setLast(true);
      props.setCorrect((prev) => prev + 1);
    } else {
      props.setLast(false);
    }
    if (props.counter === props.total - 1) {
      props.setGamestate(2);
    }
    props.setCounter((prev) => prev + 1);
  }

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerClassName="absolute inset-0" options={mapOptions}>
      {countries &&
        countries.map((country, i) => (
          <Polygon
            key={i}
            paths={country.paths}
            options={polyOptions}
            onClick={(e) => handlePolyClick(country.name, e)}
            onLoad={(polygon) => {
              polygon.addListener("mouseover", () =>
                polygon.setOptions({ fillOpacity: 0.25 })
              );
              polygon.addListener("mouseout", () =>
                polygon.setOptions({ fillOpacity: 0 })
              );
            }}
          />
        ))}
    </GoogleMap>
  );
}

function handleConfetti(mouseX, mouseY) {
  let x = mouseX.current;
  let y = mouseY.current;
  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  document.body.append(div);
  party.confetti(div, {
    count: party.variation.range(30, 30),
  });
  setTimeout(() => {
    div.remove();
  }, 10);
}

function initPaths(countries) {
  let countriesArray = [];

  for (let i = 0; i < countries.length; i++) {
    let countryName = countries[i].properties.admin;
    let type = countries[i].geometry.type;
    let coordinatesArray = countries[i].geometry.coordinates;
    let paths = [];
    coordinatesArray.forEach((array) => {
      if (type === "MultiPolygon") array = array[0];
      array = array.map((coordinates) => {
        let lng = coordinates[0];
        let lat = coordinates[1];
        return {
          lat,
          lng,
        };
      });
      paths.push(array);
    });
    countriesArray.push({ paths, name: countryName });
  }
  return countriesArray;
}

const mapStyles = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

const mapOptions = {
  styles: mapStyles,
  center: { lat: 20, lng: 10 },
  zoom: 2,
  minZoom: 2,
  disableDoubleClickZoom: true,
  disableDefaultUI: true,
  restriction: {
    latLngBounds: {
      north: 80,
      south: -70,
      east: 180,
      west: -180,
    },
  },
};

const polyOptions = {
  fillOpacity: 0,
  strokeColor: "#000000",
  strokeWeight: 0.1,
};
