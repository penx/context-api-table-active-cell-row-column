import React, { useContext, createContext, useState } from "react";

export const TableContext = createContext({
  activeRow: null,
  activeColumn: null,
  setActiveRow: () => {},
  setActiveColumn: () => {}
});
export const RowContext = createContext({ id: null });
export const CellContext = createContext({
  isActiveColumn: false,
  isActiveRow: false,
  isActive: false
});

export const Table = ({
  render = ({ children, ...props }) => (
    <table {...props}>
      <tbody>{children}</tbody>
    </table>
  ),
  ...props
}) => {
  const [activeRow, setActiveRow] = useState(null);
  const [activeColumn, setActiveColumn] = useState(null);
  return (
    <TableContext.Provider
      value={{ activeRow, setActiveRow, activeColumn, setActiveColumn }}
    >
      {render(props)}
    </TableContext.Provider>
  );
};

export const Row = ({ id, render = props => <tr {...props} />, ...props }) => {
  const { activeRow } = useContext(TableContext);
  return (
    <RowContext.Provider value={{ id }}>
      {render({ ...props, isActiveRow: activeRow === id })}
    </RowContext.Provider>
  );
};

export const Cell = ({
  columnId,
  render = props => <td {...props} />,
  ...props
}) => {
  const { id: rowId } = useContext(RowContext);
  const { activeRow, activeColumn } = useContext(TableContext);
  return (
    <CellContext.Provider
      value={{
        isActiveColumn: columnId === activeColumn,
        isActiveRow: rowId === activeRow,
        isActive: rowId === activeRow && columnId === activeColumn
      }}
    >
      <CellContext.Consumer>{render}</CellContext.Consumer>
    </CellContext.Provider>
  );
};

export default Table;
