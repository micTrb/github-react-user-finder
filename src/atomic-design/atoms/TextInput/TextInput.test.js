import React from "react";
import { shallow } from "enzyme";
import TextInput from "src/atomic-design/atoms/TextInput/TextInput.js";

describe("TextInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
