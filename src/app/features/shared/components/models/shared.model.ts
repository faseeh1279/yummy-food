export interface TableColumn {
    field: string;   // data field name
    header: string;  // table header
}

export interface TableData {
    rowID: string; 
    data: { 
        key: string; 
        value: string; 
    }[] 
}