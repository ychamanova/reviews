import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ReviewModule from '../client/reviews/ReviewModule.jsx';

describe('<ReviewModule />', () => {
    test('get something to work', () => {
        const wrapper = shallow(<ReviewModule />);
        expect(wrapper.text()).toEqual('hello warld');
    });
});
