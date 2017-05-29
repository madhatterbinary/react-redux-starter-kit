import React from 'react';
import { Button } from 'reactstrap';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  exampleBox: {
    border: 'solid 1px #E6ECF0',    
    padding: '4px 14px 14px 14px',
    marginBottom: '20px'
  },

  exampleHeading: {
    color: '#AAB8C2',
    textTransform: 'uppercase',
  }

};

export default class Buttons extends React.Component {
  render() {
    return (
      <div style={styles.main}>
        <h1>Buttons</h1>
        <p>List of bootstrap buttons with different options and styles.</p>
        <p>For more details and options, see <a href="https://reactstrap.github.io/components/buttons/">Reactstrap Documentation</a></p>        
        <h4>Options</h4>
        <div style={styles.exampleBox}>
          <h6 style={styles.exampleHeading}>Example</h6>
          <Button color="default" onClick={action('clicked')}>Default</Button>
          <span> </span>
          <Button color="primary" onClick={action('clicked')}>Primary</Button>
          <span> </span>
          <Button color="success" onClick={action('clicked')}>Success</Button>
          <span> </span>
          <Button color="info" onClick={action('clicked')}>Info</Button>
          <span> </span>
          <Button color="warning" onClick={action('clicked')}>Warning</Button>
          <span> </span>
          <Button color="danger" onClick={action('clicked')}>Danger</Button>
          <span> </span>
        </div>
        
        <h4>Sizes</h4>
        <div style={styles.exampleBox}>
          <h6 style={styles.exampleHeading}>Example</h6>
          <Button bsSize="xsmall" color="default" onClick={action('clicked')}>Extra small</Button>
          <span> </span>
          <Button bsSize="small" color="default" onClick={action('clicked')}>Small</Button>
          <span> </span>
          <Button color="default" onClick={action('clicked')}>Default</Button>
          <span> </span>
          <Button bsSize="large" color="default" onClick={action('clicked')}>Large</Button>
          <span> </span>
        </div>      
        <div style={styles.exampleBox}>
          <h6 style={styles.exampleHeading}>Example</h6>
          <Button bsSize="xsmall" color="primary" onClick={action('clicked')}>Extra small</Button>
          <span> </span>
          <Button bsSize="small" color="primary" onClick={action('clicked')}>Small</Button>
          <span> </span>
          <Button color="primary" onClick={action('clicked')}>Default</Button>
          <span> </span>
          <Button bsSize="large" color="primary" onClick={action('clicked')}>Large</Button>
          <span> </span>
        </div>

        <h4>Block</h4>
        <div style={styles.exampleBox}>
          <h6 style={styles.exampleHeading}>Example</h6>
          <Button color="default" block onClick={action('clicked')}>Default</Button>
          <Button color="primary" block onClick={action('clicked')}>Primary</Button>
          <Button color="success" block onClick={action('clicked')}>Success</Button>
          <Button color="info" block onClick={action('clicked')}>Info</Button>
          <Button color="warning" block onClick={action('clicked')}>Warning</Button>
          <Button color="danger" block onClick={action('clicked')}>Danger</Button>
        </div>

      </div>      
    );
  }
}
