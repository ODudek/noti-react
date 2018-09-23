import React from 'react';
import { Notification } from '../src/Notification';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

enzyme.configure({ adapter: new Adapter() });
function wait(ms) {
	var start = new Date().getTime();
	var end = start;
	while(end < start + ms) {
		end = new Date().getTime();
   }
}

describe('Notification', () => {
	let props;
	beforeEach(() => {
    	props = {
			label: "test",
		};
  	});
	test('should render correctly', () => {
		const wrapper = mount(<Notification {...props} />);
		expect(wrapper).not.toBeNull();
		wrapper.unmount();
	});
	test('should component disappear', () => {
		jest.useFakeTimers();
		const wrapper = mount(<Notification {...props} />);

        expect(setTimeout.mock.calls.length).toEqual(1);

        jest.runAllTimers();

        expect(wrapper.html()).toBeNull();
        wrapper.unmount();
	})
	test('should clear timeout', () => {
		jest.useFakeTimers();
		const mockTimerValue = 5000;
		setTimeout.mockReturnValue(mockTimerValue);
		const wrapper = mount(<Notification {...props} />);
		wrapper.unmount();
		expect(clearTimeout.mock.calls.length).toEqual(2);
		expect(clearTimeout.mock.calls[0][0]).toEqual(mockTimerValue);
	})
});
