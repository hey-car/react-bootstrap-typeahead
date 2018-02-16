import React from 'react';

import AsyncPaginationExample from '../examples/AsyncPaginationExample';
import AsyncPaginationExampleCode from '!raw-loader!../examples/AsyncPaginationExample';

import ExampleSection from '../components/ExampleSection';
import Section from '../components/Section';

const AsyncSection = (props) => (
  <Section title={props.title}>
    <ExampleSection code={AsyncPaginationExampleCode}>
      <AsyncPaginationExample />
    </ExampleSection>
  </Section>
);

AsyncSection.defaultProps = {
  title: 'Asynchronous Searching',
};

export default AsyncSection;
