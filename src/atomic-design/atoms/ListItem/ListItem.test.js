import React from "react";
import { shallow } from "enzyme";
import ListItem from "src/atomic-design/atoms/ListItem/ListItem.js";

describe("ListItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
