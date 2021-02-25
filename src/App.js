import React from "react";

import {
  Banner,
  Icon,
  TextInput,
  EmailInput,
  PasswordInput,
  Checkbox,
  Radio,
  Toggle,
  Button,
  OutlineButton,
  Tooltip,
  Alert,
} from "labsystem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRadio: false,
      showAlertCheckbox: false,
      showSimulationMessage: false,
    };
  }

  toggleRadio = () => {
    const { showRadio } = this.state;

    this.setState({ showRadio: !showRadio });
  };

  registerUser = () => {
    const { showAlertCheckbox, showSimulationMessage } = this.state;
    const checkedBlogPosts = document.getElementById("checkbox-blogposts")
      .checked;
    const checkedManageSystem = document.getElementById(
      "checkbox-manage-system"
    ).checked;
    const checkedReviewTexts = document.getElementById("checkbox-review-texts")
      .checked;

    if (checkedBlogPosts || checkedManageSystem || checkedReviewTexts) {
      this.setState({
        showAlertCheckbox: false,
        showSimulationMessage: !showSimulationMessage,
      });
    } else {
      this.setState({ showAlertCheckbox: !showAlertCheckbox });
    }
  };

  render() {
    const { showRadio, showAlertCheckbox, showSimulationMessage } = this.state;
    return (
      <div className=" app">
        <div className="container ">
          {showSimulationMessage ? (
            <Banner
              type="info"
              text="This is a simulation. This is for demonstration. This is a test-only page and your data will not be stored."
              icon="star"
              buttonProps={{
                text: "DISMISS",
                onClick: () => alert("Button to DISMISS Banner was clicked!"),
              }}
            />
          ) : (
            ""
          )}
          <div className="app__body">
            <span className="app__header-text">Labcodes’ blog</span>
            <h1 className="app__page-text">New user registration</h1>
            <div className="form-user">
              <div className="columns">
                <div className="column">
                  <span className="form-user__info">
                    Before you start doing your thing, we need to get you
                    registered. Please fill the following information (all
                    fields are required).
                  </span>
                </div>
                <div className="column">
                  <p className="form-user__login-link">
                    <a href="teste.com" className="doc-link--purple">
                      Login
                    </a>
                    if you have already registered.
                  </p>
                </div>
              </div>
              <h2 className="form-user__title">
                Let's go! <br /> It is all about you
              </h2>
              <div className="columns">
                <div className="column">
                  <TextInput
                    id="first-name"
                    label="What's your first and last name?"
                    required
                  />
                  <br />
                  <TextInput
                    id="username"
                    label="Choose an username"
                    required
                  />
                </div>
                <div className="column">
                  <EmailInput id="email" label="Your e-mail" required />
                </div>
              </div>
              <span className="form-user__secure-text">
                <Icon type="key" color="black-75" size="small" /> Secure your
                account
              </span>
              <div className="columns">
                <div className="column">
                  <PasswordInput
                    id="password"
                    icon="eye-opened"
                    label="Set a password"
                    helpMessage="At least 8 characters, containing letters and numbers"
                    required
                  />
                </div>
                <div className="column">
                  <PasswordInput
                    id="confirm-password"
                    label="Confirm password"
                    icon="eye-opened"
                    required
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h3 className="form-user__column-title">
                    Now select the task(s) you will perform
                  </h3>
                  <Checkbox
                    className="lab-checkbox--purple"
                    id="checkbox-blogposts"
                    label="Write blogposts"
                    name="checkbox2"
                  />
                  <br />
                  <Checkbox
                    className="lab-checkbox--purple"
                    id="checkbox-manage-system"
                    label="Manage the system"
                    name="checkbox2"
                  />
                  <br />
                  <Checkbox
                    className="lab-checkbox--purple"
                    id="checkbox-review-texts"
                    label="Review texts"
                    name="checkbox2"
                    onChange={() => this.toggleRadio()}
                  />
                  <br />
                  {showAlertCheckbox ? (
                    <Alert
                      type="error"
                      text="You must select at least one item"
                      icon="remove"
                    />
                  ) : (
                    ""
                  )}

                  <div
                    className={`${showRadio ? "show-radio" : "hide-radio"}`}
                    id="toggle-row"
                  >
                    <div className="column" sm={{ size: "auto", offset: 1 }}>
                      <p className="form-user__toggle-title">
                        Choose your reviewer role:
                      </p>
                      <Radio
                        className="lab-radio--purple"
                        id="language"
                        label="Language"
                        name="radio2"
                        value=""
                      />
                      <br />
                      <Radio
                        className="lab-radio--purple"
                        id="techinical"
                        label="Technical"
                        name="radio2"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <h3 className="form-user__column-title">
                    Set some personal preferences
                  </h3>
                  <div className="form-user__toggle-item">
                    <span>Display my e-mail to readers</span>

                    <Tooltip
                      id="tooltip-small-text"
                      text="Your email will be shown in the posts
                        you have written and your personal
                        author page."
                      placement="top-end"
                    >
                      <Toggle id="toggle-1" name="toggle-1" color="purple" />
                    </Tooltip>
                  </div>
                  <br />
                  <div className="form-user__toggle-item">
                    <span>Receive notifications on my e-mail</span>
                    <Toggle id="toggle-2" name="toggle-2" color="purple" />
                  </div>
                  <br />
                  <div className="form-user__toggle-item">
                    <span>Call me by my username</span>
                    <Toggle id="toggle-3" name="toggle-3" color="purple" />
                  </div>
                </div>
              </div>
              <div className="column align-right">
                <div className="form-user__btn-actions">
                  <OutlineButton text="Clear and cancel" />
                  <Button
                    text="Register"
                    icon="check"
                    onClick={() => this.registerUser()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
