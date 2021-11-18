import React from "react";
import { shallow } from "enzyme";
import NavTabs from "./NavTabs";

describe("NavTabs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NavTabs />);
    expect(wrapper).toMatchSnapshot();
  });
});
