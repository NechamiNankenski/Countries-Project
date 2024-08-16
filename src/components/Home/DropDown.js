import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

export default function DropDown({ countries }) {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={{ width: '200px' }}>בחר מדינה</Dropdown.Toggle>

      <Dropdown.Menu>
        {countries.map((country) => (
          <Link to={`/country/${country.name}`} key={country.name} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Label key={country.name}>
              {country.name}
            </Label>
          </Link>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

const Label = styled.div`
padding:1px 4px;
`;
