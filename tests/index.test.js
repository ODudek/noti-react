import React from 'react';
import { Notification } from '../src/Notification';
import enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { mount } from 'enzyme';
import { act } from 'react';

enzyme.configure({ adapter: new Adapter() });

describe('Notification', () => {
  let props;
  beforeEach(() => {
    props = {
      label: 'test',
    };
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should render correctly', () => {
    const wrapper = mount(<Notification {...props} />);
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.notification')).toHaveLength(1);
    expect(wrapper.find('.message p').text()).toBe('test');
    wrapper.unmount();
  });

  test('should component disappear with autoHide', async () => {
    jest.useFakeTimers();
    
    const wrapper = mount(<Notification {...props} autoHide={true} hideTime={1000} animationTime={100} />);
    
    // Component should be visible initially with show animation
    expect(wrapper.find('.notification')).toHaveLength(1);
    expect(wrapper.find('.notification').prop('style')).toEqual(
      expect.objectContaining({
        animation: expect.stringContaining('moveIn')
      })
    );
    
    // Fast forward time to trigger auto-hide
    await act(async () => {
      jest.advanceTimersByTime(900); // hideTime - animationTime
    });
    wrapper.update();
    
    // Should start hide animation
    expect(wrapper.find('.notification').prop('style')).toEqual(
      expect.objectContaining({
        animation: expect.stringContaining('moveOut')
      })
    );
    
    wrapper.unmount();
  });

  test('should clear timeout on unmount', () => {
    jest.useFakeTimers();
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
    
    const wrapper = mount(<Notification {...props} autoHide={true} />);
    wrapper.unmount();
    
    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });

  test('should not auto hide when autoHide is false', () => {
    jest.useFakeTimers();
    
    const wrapper = mount(<Notification {...props} autoHide={false} />);
    
    // Fast forward a lot of time
    jest.advanceTimersByTime(10000);
    wrapper.update();
    
    // Component should still be visible
    expect(wrapper.find('.notification')).toHaveLength(1);
    
    wrapper.unmount();
  });

  test('should handle manual close', async () => {
    jest.useFakeTimers();
    
    const wrapper = mount(<Notification {...props} autoHide={false} />);
    
    // Find close button and click it - it's an SVG element
    const closeButton = wrapper.find('.close').at(0);
    expect(closeButton).toHaveLength(1);
    
    // Initially should have show animation
    expect(wrapper.find('.notification').prop('style')).toEqual(
      expect.objectContaining({
        animation: expect.stringContaining('moveIn')
      })
    );
    
    await act(async () => {
      closeButton.simulate('click');
      // Immediately advance timers and allow React to process state updates
      jest.advanceTimersByTime(500);
    });
    wrapper.update();
    
    // Component should be gone after animation completes
    expect(wrapper.html()).toBe(null);
    
    wrapper.unmount();
  });
});
