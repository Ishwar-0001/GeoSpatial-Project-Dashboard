import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";

export default function DataTable({
  rows,
  loading,
  selectedId,
  onSelect,
}) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      pageSizeOptions={[10, 25, 50]}
      initialState={{
        pagination: { paginationModel: { pageSize: 25, page: 0 } },
      }}
      onRowClick={(params) => onSelect(params.id)}
      getRowClassName={(params) =>
        params.id === selectedId ? "Mui-selected" : ""
      }
      sx={{
        "& .Mui-selected": {
          backgroundColor: "#e3f2fd !important",
        },
      }}
    />
  );
}
