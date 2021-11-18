import React from "react";
import { shallow } from "enzyme";
import Companies from "./Companies";

describe("Companies", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Companies />);
    expect(wrapper).toMatchSnapshot();
  });
});
