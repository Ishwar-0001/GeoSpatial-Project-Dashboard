import { useState } from "react";
import { Box } from "@mui/material";
import DataTable from "../DataTable/DataTable";
import MapView from "../MapView/MapView";
import { useGeoData } from "../../hooks/useGeoData";

export default function Dashboard() {
  const { rows, loading } = useGeoData();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Box display="flex" height="100vh">
      <Box width="55%" p={2}>
        <DataTable
          rows={rows}
          loading={loading}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </Box>

      <Box width="45%">
        <MapView
          rows={rows}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </Box>
    </Box>
  );
}
