import { useEffect, useState } from "react";
import { fetchGeoData } from "../services/geoApi";

export function useGeoData() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGeoData().then((data) => {
      setRows(data);
      setLoading(false);
    });
  }, []);

  return { rows, loading };
}
