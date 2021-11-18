import React from "react";
import { shallow } from "enzyme";
import LinkTab from "src/atomic-design/atoms/LinkTab/LinkTab.js";

describe("LinkTab", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LinkTab />);
    expect(wrapper).toMatchSnapshot();
  });
});
