# Geo Data Dashboard

## Objective
A React-based dashboard to visualize geo-spatial and tabular project data.

## Tech Stack
- React (Vite)
- MUI DataGrid
- Leaflet (react-leaflet)

## Features
- Paginated & sortable data table (5k+ rows)
- Interactive map with synced markers
- Bidirectional selection (table ↔ map)
- Client-side filtering

## Architecture Decisions
- Local state only (no Redux)
- Shared selection state for sync
- Virtualized table for performance
- Custom hook for data fetching

## Performance
- MUI DataGrid virtualization
- Memoized rows & markers
- Minimal re-renders

## Time Spent
~6–8 hours (including polish & README)

## Screenshots
(attach images here)

## GitHub
https://github.com/Ishwar-0001/GeoSpatial-Project-Dashboard.git

## Link 
https://geo-spatial-project-dashboard.vercel.app/