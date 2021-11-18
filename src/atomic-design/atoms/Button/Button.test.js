import React from "react";
import { shallow } from "enzyme";
import Button from "src/atomic-design/atoms/Button/Button.js";

describe("Button", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
