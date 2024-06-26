import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import "../styles.css";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  /* Create columns */
  /** TODO: Add column for position specific information **/
  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "longname" },
      { Header: "Position", accessor: "position" },
      { Header: "Team", accessor: "team" },
      { Header: "Height", accessor: "height" },
      { Header: "Weight", accessor: "weight" },
      { Header: "Age", accessor: "age" },
      { Header: "Avg PPR", accessor: "avgPPR" },
      { Header: "Total PPR", accessor: "totalPPR" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <div className="table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ⇧"
                          : " ⇩"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      <Link
                        to={cell.row.original.longname}
                        state={{ from: data }}
                      >
                        {cell.render("Cell")}
                      </Link>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
