import React from "react";
import styles from "../../../styles/PatientDemographics/PatientDemo.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useFormik } from "formik";

export default function PatientDemographics() {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = true;
    } else if (values.firstName.length > 20) {
      errors.firstName = "Must be 20 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = true;
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.dob) {
      errors.dob = true;
    }
    if (!values.primaryPhone) {
      errors.primaryPhone = true;
    }

    if (!values.Address) {
      errors.Address = true;
    }
    if (!values.City) {
      errors.City = true;
    }
    if (!values.State) {
      errors.State = true;
    }
    if (!values.zip) {
      errors.zip = true;
    }
    if (!values.lang) {
      errors.lang = true;
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      primaryPhone: "",
      Address: "",
      City: "",
      State: "",
      zip: "",
      lang: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className={styles.wholeContainer}>
        <div className={styles.mainContainer}>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.FormWrapper}>
              <div className={styles.heading}>Patient Demographics</div>
              <div className={styles.contactContainer}>
                <div className={styles.wrapper}>
                  <label className={styles.isRequired} htmlFor="firstName">
                    First Name
                  </label>
                  <TextField
                    // fullWidth
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                  />
                </div>
                <div className={styles.wrapper}>
                  <label className={styles.isRequired} htmlFor="lastName">
                    Last Name
                  </label>
                  <TextField
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                  />
                </div>
                <div className={styles.wrapper}>
                  <label className={styles.isRequired} htmlFor="dob">
                    Date of Birth
                  </label>
                  <TextField
                    id="dob"
                    name="dob"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.dob}
                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                  />
                </div>
                <div className={styles.wrapper}>
                  <label className={styles.isRequired} htmlFor="email">
                    Email Address
                  </label>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                  />
                </div>
                <div className={styles.wrapper}>
                  <label className={styles.isRequired} htmlFor="primaryPhone">
                    Primary Phone
                  </label>
                  <TextField
                    id="primaryPhone"
                    name="primaryPhone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.primaryPhone}
                    error={
                      formik.touched.primaryPhone &&
                      Boolean(formik.errors.primaryPhone)
                    }
                  />
                </div>
                <div className={styles.wrapper}>
                  <label htmlFor="preferredName">Preferred Name</label>
                  <TextField
                    id="preferredName"
                    name="preferredName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.preferredName}
                  />
                </div>
                <div className={styles.rightitem}>
                  <label htmlFor="pronunciation">Pronunciation</label>
                  <TextField
                    id="pronunciation"
                    name="pronunciation"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.pronounciation}
                  />
                </div>
              </div>
              <div className={styles.gridWrapper}>
                <div className={styles.addressContainer}>
                  <div className={styles.wrapper}>
                    <label className={styles.isRequired} htmlFor="Address">
                      Address
                    </label>
                    <TextField
                      id="Address"
                      className={styles.field}
                      placeholder="Address"
                      name="Address"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                      error={
                        formik.touched.Address && Boolean(formik.errors.Address)
                      }
                    />
                  </div>
                  <div className={styles.wrapper}>
                    <label className={styles.isRequired} htmlFor="City">
                      City
                    </label>
                    <TextField
                      id="City"
                      name="City"
                      placeholder="City"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      error={formik.touched.City && Boolean(formik.errors.City)}
                    />
                  </div>
                  <div className={styles.statezip}>
                    <div className={styles.wrapper}>
                      <label className={styles.isRequired} htmlFor="State">
                        State
                      </label>
                      <Select
                        className={styles.SelectState}
                        name="State"
                        onChange={formik.handleChange}
                        value={formik.values.State}
                        displayEmpty
                        // defaultValue={""}
                        error={
                          formik.touched.State && Boolean(formik.errors.State)
                        }
                      >
                        <MenuItem value="">
                          <em>Select State</em>
                        </MenuItem>
                        <MenuItem value="UP">UP</MenuItem>
                        <MenuItem value="UK">UK</MenuItem>
                        <MenuItem value="PB">PB</MenuItem>
                      </Select>
                    </div>
                    <div className={styles.wrapperZip}>
                      <label className={styles.isRequired} htmlFor="zip">
                        Zip Code
                      </label>
                      <TextField
                        placeholder="Zip Code"
                        name="zip"
                        type="tel"
                        onChange={formik.handleChange}
                        value={formik.values.zip}
                        error={formik.touched.zip && Boolean(formik.errors.zip)}
                      />
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <label htmlFor="mobilePhone">Mobile Phone</label>
                    <TextField
                      placeholder="Mobile Phone"
                      name="mobilePhone"
                      type="tel"
                      onChange={formik.handleChange}
                      value={formik.values.mobilePhone}
                    />
                  </div>
                  <div className={styles.wrapper}>
                    <label htmlFor="otherPhone">Other Phone</label>
                    <TextField
                      placeholder="Other Phone"
                      name="otherPhone"
                      type="tel"
                      onChange={formik.handleChange}
                      value={formik.values.otherphone}
                    />
                  </div>
                </div>
                <hr />
                <div className={styles.perosnalDetailsContainer}>
                  <div className={styles.wrapper}>
                    <label htmlFor="sex">Sex</label>
                    <Select
                      className={styles.Selector}
                      name="sex"
                      onChange={formik.handleChange}
                      value={formik.values.sex}
                      displayEmpty
                      defaultValue={""}
                    >
                      <MenuItem value="">Select Sex</MenuItem>
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="O">Other</MenuItem>
                    </Select>
                  </div>
                  <div className={styles.wrapper}>
                    <label htmlFor="Status">Marital Status</label>

                    <Select
                      className={styles.Selector}
                      name="Status"
                      onChange={formik.handleChange}
                      value={formik.values.Status}
                      displayEmpty
                      defaultValue={""}
                    >
                      <MenuItem value="">Select Marital Status</MenuItem>
                      <MenuItem value="married">Married</MenuItem>
                      <MenuItem value="unmarried">Unmarried</MenuItem>
                      <MenuItem value="complicated">Its complicated</MenuItem>
                    </Select>
                  </div>
                  <div className={styles.wrapper}>
                    <label htmlFor="ethnicity">Ethnicity</label>

                    <Select
                      className={styles.Selector}
                      name="ethnicity"
                      onChange={formik.handleChange}
                      value={formik.values.ethnicity}
                      displayEmpty
                      defaultValue={""}
                    >
                      <MenuItem value="">Select Ethnicity</MenuItem>
                      <MenuItem value="a">Male</MenuItem>
                      <MenuItem value="b">Female</MenuItem>
                      <MenuItem value="c">Other</MenuItem>
                    </Select>
                  </div>
                  <div className={styles.wrapper}>
                    <label className={styles.isRequired} htmlFor="lang">
                      Preffered <br /> Language
                    </label>

                    <Select
                      className={styles.Selector}
                      name="lang"
                      onChange={formik.handleChange}
                      value={formik.values.lang}
                      displayEmpty
                      defaultValue={""}
                      error={formik.touched.lang && Boolean(formik.errors.lang)}
                    >
                      <MenuItem value="">Select Preferred Language</MenuItem>
                      <MenuItem value="english">English</MenuItem>
                      <MenuItem value="hindi">Hindi</MenuItem>
                      <MenuItem value="sanskrit">Sanskrit</MenuItem>
                    </Select>
                  </div>
                  <div className={styles.wrapperNotes}>
                    <label htmlFor="notes">Notes</label>
                    <TextareaAutosize
                      minRows={4}
                      maxRows={4}
                      aria-label="maximum height"
                      onChange={formik.handleChange}
                      value={formik.values.notes}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.next}>
              <Button type="submit">
                Next
                <ArrowForwardIcon fontSize="large" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
