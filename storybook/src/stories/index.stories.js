// TODO: add demo stories
import '../components/counter';
import {storiesOf} from '@storybook/polymer';
import { LitElement, html } from '@polymer/lit-element';

storiesOf('x-counter', module).add(
  'simple',
  () => `<x-counter 
          @valueChange=${(e) => this.log(e)} 
          .value="33">
          </x-counter>`
).add(
  'wide with stylesheet',
  () => '<style>x-counter { width: 100px; }</style><x-counter>a</x-counter>'
);
