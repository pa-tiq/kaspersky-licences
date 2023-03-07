import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  margin-left: 1rem;
  margin-right: 1rem;

  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
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

  td {
    padding: 5px 10px;
  }

  tbody tr {
    background-color: #c8c1c1;
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightblue;
    }
  }

  thead > tr {
    background-color: #827b7b;
    padding: 5px 10px;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
export default ({ data, title, align }) => {
  if (data.length > 0) {
    return <Table title={title} align={align} titles={Object.keys(data[0])} data={data} />;
  } else {
    return <></>;
  }
};
const Table = ({ title, align, titles, data }) => (
  <StyledTable align={align}>
    <caption>OMs de Manaus</caption>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead style={{color:'white'}}>
      {title}
    </thead>

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
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
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
