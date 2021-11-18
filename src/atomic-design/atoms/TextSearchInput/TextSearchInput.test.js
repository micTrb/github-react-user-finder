import React from "react";
import { shallow } from "enzyme";
import TextSearchInput from "./TextSearchInput";

describe("TextSearchInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TextSearchInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
