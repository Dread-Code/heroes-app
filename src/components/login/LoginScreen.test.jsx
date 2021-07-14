import React from "react";
import { mount } from "enzyme";
import { LoginScreen } from "./LoginScreen";
import { AuthContext } from "../../auth/AuthContext";

describe("LoginScreen", () => {
  const contextValue = {
    dispatch: jest.fn(),
  };

  const historyMock = {
    replace: jest.fn(),
  };
  test("should match snapshoot", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <LoginScreen history={historyMock} />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("should dispatch and make the replace", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <LoginScreen history={historyMock} />
      </AuthContext.Provider>
    );
    const handleClick = wrapper.find("button").prop("onClick");

    handleClick();
    expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
    expect(historyMock.replace).toHaveBeenCalledTimes(1);

    // EMULAMOS EL local storage
    localStorage.setItem("lastpath", "/dc");
    handleClick();
    expect(historyMock.replace).toHaveBeenCalledWith("/dc");
  });
});
