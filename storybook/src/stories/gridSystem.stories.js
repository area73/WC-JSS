import '../components/layers/objects/layout';
import { storiesOf } from '@storybook/polymer';

storiesOf('jss-layout', module)
  .add(
    'simple with info',
    () => '<jss-layout ></jss-layout>',
  );
