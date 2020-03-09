import React from "react";

import "./styles.css";

import * as HoverTable from "./HoverTable";
import {
  StyledTable,
  StyledTableBody,
  StyledCell,
  StyledRow,
  Point
} from "./styles";

const Cell = ({ columnId, children }) => (
  <HoverTable.Cell columnId={columnId}>
    {({ isActive, isActiveColumn, isActiveRow, bind }) => (
      <StyledCell
        isActiveCell={isActive}
        isActiveColumn={isActiveColumn}
        isActiveRow={isActiveRow}
        {...bind}
      >
        <>
          <Point isActive={isActive} />
        </>
      </StyledCell>
    )}
  </HoverTable.Cell>
);

const Row = props => (
  <HoverTable.Row {...props} render={props => <StyledRow {...props} />} />
);

export default function App() {
  return (
    <div class="App">
      Hover over a cell
      <HoverTable.default
        render={props => (
          <StyledTable>
            <StyledTableBody {...props} />
          </StyledTable>
        )}
      >
        <Row id="row-one">
          <Cell columnId="column-one">
            <Point />
          </Cell>
          <Cell columnId="column-two">
            <Point />
          </Cell>
          <Cell columnId="column-three">
            <Point />
          </Cell>
          <Cell columnId="column-four">
            <Point />
          </Cell>
          <Cell columnId="column-five">
            <Point />
          </Cell>
        </Row>
        <Row id="row-two">
          <Cell columnId="column-one">
            <Point />
          </Cell>
          <Cell columnId="column-two">
            <Point />
          </Cell>
          <Cell columnId="column-three">
            <Point />
          </Cell>
          <Cell columnId="column-four">
            <Point />
          </Cell>
          <Cell columnId="column-five">
            <Point />
          </Cell>
        </Row>
        <Row id="row-three">
          <Cell columnId="column-one">
            <Point />
          </Cell>
          <Cell columnId="column-two">
            <Point />
          </Cell>
          <Cell columnId="column-three">
            <Point />
          </Cell>
          <Cell columnId="column-four">
            <Point />
          </Cell>
          <Cell columnId="column-five">
            <Point />
          </Cell>
        </Row>
        <Row id="row-four">
          <Cell columnId="column-one">
            <Point />
          </Cell>
          <Cell columnId="column-two">
            <Point />
          </Cell>
          <Cell columnId="column-three">
            <Point />
          </Cell>
          <Cell columnId="column-four">
            <Point />
          </Cell>
          <Cell columnId="column-five">
            <Point />
          </Cell>
        </Row>
      </HoverTable.default>
    </div>
  );
}
