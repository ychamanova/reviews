import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ReviewModule from './reviews/ReviewModule.jsx';

const serverurl = 'http://localhost:3000';
const pageId = 1;

ReactDOM.render(<ReviewModule pageId={pageId} />, document.getElementById('app'));
