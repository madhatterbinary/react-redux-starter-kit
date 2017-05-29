import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyBeautifulButton from './MyBeautifulButton'

const Story = ({ name, icon }) => (
  <MyBeautifulButton name='Test' icon='user' />
);

Story.propTypes = {
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired
};

storiesOf('MyBeautifulButton', module)
  .add('Incomplete', () => (
    <MyBeautifulButton name="User" icon="user" status='0' />
  ))
  .add('Started', () => (
    <MyBeautifulButton name="User" icon="user" status='50' />
  ))  
  .add('Next', () => (
    <MyBeautifulButton name="User" icon="user" status='0' isNext />
  ))  
  .add('Completed', () => (
    <MyBeautifulButton name="User" icon="user" status={100} />
  ))
  .add('Disabled', () => (
    <MyBeautifulButton name="User" icon="user" disabled={true} />
  ));

