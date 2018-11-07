import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../app/src/scripts/components/Button';
//import {Button} from '@storybook/react/demo';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('Click', () => (
    <Button onClick={action('clicked')} message='I clicked this thing!'>Click to see message</Button>
  ));