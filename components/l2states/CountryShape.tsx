"use client";

import { useEffect, useState, useMemo } from "react";
import { geoMercator, geoPath, geoBounds, geoCentroid } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { Feature, FeatureCollection, Geometry } from "geojson";

interface CountryProperties {
  name: string;
}

interface CountryShapeProps {
  countryName: string;
  className?: string;
  fillColor?: string;
  strokeColor?: string;
}

// Map of country name variations to match TopoJSON data
const countryNameMap: Record<string, string> = {
  "United States": "United States of America",
  "United Kingdom": "United Kingdom",
  "South Korea": "South Korea",
  "North Macedonia": "Macedonia",
  "Czech Republic": "Czech Republic",
  "Democratic Republic of the Congo": "Dem. Rep. Congo",
  "Republic of the Congo": "Congo",
  "Côte d'Ivoire": "Côte d'Ivoire",
  "Taiwan": "Taiwan",
};

export default function CountryShape({
  countryName,
  className = "",
  fillColor = "#C5A059",
  strokeColor = "#0D0D0D",
}: CountryShapeProps) {
  const [countries, setCountries] = useState<Feature<Geometry, CountryProperties>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/world-low.json")
      .then((response) => response.json())
      .then((topology: Topology<{ countries: GeometryCollection<CountryProperties> }>) => {
        const geojson = feature(topology, topology.objects.countries) as FeatureCollection<Geometry, CountryProperties>;
        setCountries(geojson.features);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading map data:", error);
        setLoading(false);
      });
  }, []);

  const { path, viewBox } = useMemo(() => {
    // Find the country
    const mappedName = countryNameMap[countryName] || countryName;
    const country = countries.find(
      (c) =>
        c.properties?.name?.toLowerCase() === mappedName.toLowerCase() ||
        c.properties?.name?.toLowerCase() === countryName.toLowerCase()
    );

    if (!country) {
      return { path: null, viewBox: "0 0 100 100" };
    }

    // Calculate bounds and center
    const bounds = geoBounds(country);
    const center = geoCentroid(country);

    // Calculate dimensions
    const width = bounds[1][0] - bounds[0][0];
    const height = bounds[1][1] - bounds[0][1];
    const maxDim = Math.max(width, height);

    // Create projection centered on country
    const projection = geoMercator()
      .center(center)
      .scale(800 / maxDim)
      .translate([50, 50]);

    const pathGenerator = geoPath().projection(projection);
    const pathData = pathGenerator(country);

    // Calculate actual rendered bounds for viewBox
    if (pathData) {
      // Use a simple viewBox that works for most cases
      return {
        path: pathData,
        viewBox: "0 0 100 100",
      };
    }

    return { path: null, viewBox: "0 0 100 100" };
  }, [countries, countryName]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!path) {
    return (
      <div className={`flex items-center justify-center text-stone-light ${className}`}>
        <span className="text-4xl">🌍</span>
      </div>
    );
  }

  return (
    <svg
      viewBox={viewBox}
      className={className}
      style={{ overflow: "visible" }}
    >
      <path
        d={path}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

