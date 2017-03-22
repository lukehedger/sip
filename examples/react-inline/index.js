import React from 'react';
import Sip from 'sip-css';

const Component = ({ sip }) => <div style={Sip(sip)} />;

const Container = () => <Component sip={{ m: 4, p: 1, ta: 'c', z: 99 }} />;

export default Container;

// Container ↣ `<div style="margin: 16px; padding: 8px; text-align: 'center'; z-index: 99;"></div>`
