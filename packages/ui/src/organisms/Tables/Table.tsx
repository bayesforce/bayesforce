import React, { forwardRef, type TableHTMLAttributes, type HTMLAttributes, type ThHTMLAttributes, type TdHTMLAttributes } from "react";
import "./Tables.css";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  dark?: boolean;
  containerClassName?: string;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ dark = false, containerClassName = "", className = "", children, ...props }, ref) => {
    return (
      <div
        className={[
          "bf-table-container",
          dark ? "bf-table-container--dark" : "",
          containerClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <table ref={ref} className={["bf-table", className].filter(Boolean).join(" ")} {...props}>
          {children}
        </table>
      </div>
    );
  }
);
Table.displayName = "Table";

export const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className = "", children, ...props }, ref) => (
    <thead ref={ref} className={["bf-table-head", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </thead>
  )
);
TableHeader.displayName = "TableHeader";

export const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className = "", children, ...props }, ref) => (
    <tbody ref={ref} className={className} {...props}>
      {children}
    </tbody>
  )
);
TableBody.displayName = "TableBody";

export const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className = "", children, ...props }, ref) => (
    <tr ref={ref} className={["bf-table-row", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </tr>
  )
);
TableRow.displayName = "TableRow";

export const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className = "", children, ...props }, ref) => (
    <th ref={ref} className={["bf-table-th", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </th>
  )
);
TableHead.displayName = "TableHead";

export const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className = "", children, ...props }, ref) => (
    <td ref={ref} className={["bf-table-td", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </td>
  )
);
TableCell.displayName = "TableCell";
