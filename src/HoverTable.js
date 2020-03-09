import React, { useContext } from "react";
import { useHover } from "react-hooks-lib";

import * as ActiveTable from "./ActiveTable";

export const Row = ({ id, render = props => <tr {...props} />, ...props }) => {
  const { hovered, bind } = useHover();
  const { setActiveRow } = useContext(ActiveTable.TableContext);
  if (hovered) {
    setActiveRow(id);
  }
  return (
    <ActiveTable.Row
      id={id}
      render={props => render({ ...props, ...bind })}
      {...props}
    />
  );
};

export const Cell = ({ columnId, children }) => {
  const { hovered, bind } = useHover();
  const { setActiveColumn } = useContext(ActiveTable.TableContext);
  if (hovered) {
    setActiveColumn(columnId);
  }
  return (
    <ActiveTable.Cell
      columnId={columnId}
      {...bind}
      render={props => children({ ...props, bind })}
    />
  );
};

export default ActiveTable.default;
