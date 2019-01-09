import React from 'react';
import TextField from './TextField';
import withRoot from '../withRoot';

class Index extends React.Component {
  render() {
    return <TextField />;
  }
}

export default withRoot(Index);
