import { SelectChangeEvent } from "@mui/material"
import { SelectedFilterType } from "../../../../util/types/filter.types"
import { ReactNode } from "react"

export type SearchAndFilterPropType = {
    queryString: string,
    onSelectChange: (event: SelectChangeEvent<string>, child: ReactNode) => void
    selectedFilter: SelectedFilterType
}