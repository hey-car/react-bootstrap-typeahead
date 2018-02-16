'use strict';

import React from 'react';
import {render} from 'react-dom';

import Page from './components/Page';

import AsyncSection from './sections/AsyncSection';

import '../css/Typeahead.css';

import './css/bs-docs-override.css';
import './css/example.css';
import './css/code-style.css';

render(
  <Page title="Location typeahead example">
    <AsyncSection />
  </Page>,
  document.getElementById('root')
);
