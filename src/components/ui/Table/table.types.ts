import { LeiAttributes } from "../../../store/api/types/LeiRecords.types";

export type LeiTableDataType = {
    id: string;
    lei: string;
    legalName: string;
    status: string;
    country: string;
}

export type TablePropTypes = {
  columns: TableColumn[];
  data: unknown[];
  rowKey: unknown; // rowKey should match a key in LeiAttributes
  onRowClick: (row: LeiAttributes) => void;
  customStyles: TableCustomStyles;
  pagination: unknown;
};

export type ColumnsType = {
  key: string;
  label: string;
};

export type TableCustomStyles = {
  container?: string;
  table?: string;
  headerRow?: string;
  headerCell?: string;
  row?: string;
  cell?: string;
};

export type TableColumn = {
  key: string;
  label: string;
  render?: (value: unknown, row: unknown) => JSX.Element; // Optional render function for custom cell content
};
