import { FC, useState } from "react";
import { Header } from "../../layout/header";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";

export const AuditPage: FC<any> = ({ tabs, role }) => {
    const [rowData, setRowData] = useState<any[]>([
        {
            who: "Иванов Иван Иванович",
            when: "01.01.2001",
            action: "действие",
            json: "????????????",
        },
        {
            who: "Иванов Иван Иванович",
            when: "01.01.2001",
            action: "действие",
            json: "????????????",
        },
        {
            who: "Иванов Иван Иванович",
            when: "01.01.2001",
            action: "действие",
            json: "????????????",
        },
    ]);

    const [colDefs, setColDefs] = useState<
        (ColDef<any, any> | ColGroupDef<any>)[]
    >([
        {
            field: "who",
            headerName: "Кто",
        },
        {
            field: "when",
            headerName: "Когда",
        },
        {
            field: "action",
            headerName: "Действие",
        },
        {
            field: "json",
        },
    ]);

    const defaultColDef: ColDef = {
        flex: 1,
    };

    return (
        <div className={styles.audit}>
            <div className={styles.audit_wrapper}>
                <Header tabs={tabs} />
                <div className={styles.audit_content}>
                    <div className="ag-theme-quartz" style={{ height: "100%" }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={colDefs}
                            defaultColDef={defaultColDef}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
