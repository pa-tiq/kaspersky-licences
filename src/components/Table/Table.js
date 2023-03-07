import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar/ProgressBar';

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  margin-left: 1rem;
  margin-right: 1rem;

  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: top;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  td,
  th {
    border: 1px solid;
  }
  /* td,
  th {
    border: 1px solid;
  } */
  th,
  td {
    padding: 2px 5px;
  }

  tbody tr {
    font-size: 0.7em;
    font-weight: bold;
    background-color: #c8c1c1;
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightblue;
    }
  }

  thead > tr {
    font-size: 0.9em;
    background-color: #827b7b;
    padding: 5px 10px;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
export default ({ data, mainTitle }) => {
  if (data.length > 0) {
    return (
      <Table mainTitle={mainTitle} titles={Object.keys(data[0])} data={data} />
    );
  } else {
    return <></>;
  }
};
const Table = ({ mainTitle, titles, data }) => (
  <StyledTable>
    <caption style={{ color: 'white' }}>{mainTitle}</caption>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => {
            if (title === 'Progresso') {
              const percentage = item[title];
              return (
                <td key={index}>
                  <ProgressBar bgcolor={'#14ea50'} completed={percentage} />
                </td>
              );
            } else {
              return <td key={index}>{item[title]}</td>;
            }
          })}
        </tr>
      ))}
    </tbody>
    {/* <tfoot>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </tfoot> */}
  </StyledTable>
);
