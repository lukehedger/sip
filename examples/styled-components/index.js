import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Sip from 'sip.css';

const Text = styled.p`
  ${/* you can mix static styles */ ''}
  color: ${props => props.color || 'black'};
  font-weight: normal;

  ${/* with dynamic Sips and default fallbacks */ ''}
  ${({ sip }) => Sip(Object.assign({}, Text.default.sip, sip))}
`;

Text.default = {
  sip: {
    fs: 4,
  },
};

const Container = () => (
  <Text sip={{ m: 4, fs: 6, ta: 'c' }}>Ahh, refreshing</Text>
);

ReactDOM.render(<Container />, document.getElementById('Root'));
