import React from "react";
import styles from "../../../styles/PatientDemographics/PatientDemographics.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function PatientDemographics() {
  return (
    <>
      <div className={styles.wholeContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.heading}>Patient Demographics</div>
          <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validationSchema={Yup.object({
              firstName: Yup.string().required(""),
              lastName: Yup.string().required(""),
              dob: Yup.date().required(""),
              email: Yup.string().email("").required(""),
              primaryPhone: Yup.number()
                .typeError("")
                .positive("")
                .integer("")
                .min(8)
                .required(""),
              preferredName: Yup.string().max(20, ""),
              pronunciation: Yup.string(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form className={styles.form}>
              <div className={styles.FormWrapper}>
                <div className={styles.contactContainer}>
                  <div className={styles.wrapper}>
                    <label className={styles.isRequired} htmlFor="firstName">
                      First Name
                    </label>
                    <Field
                      className={styles.field}
                      name="firstName"
                      type="text"
                    />
                    <ErrorMessage name="firstName" />
                  </div>
                  <div className={styles.wrapper}>
                    <label className={styles.isRequired} htmlFor="lastName">
                      Last Name
                    </label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" />
                  </div>
                  <div className={styles.wrapper}>
                    <label className={styles.isRequired} htmlFor="dob">
                      Date of Birth
                    </label>
                    <Field
                      name="dob"
                      type="date"
                      sx={{ m: 1, width: "25ch" }}
                    />
                    <ErrorMessage name="dob" />
                  </div>
                  <div className={styles.wrapper}>
                    <label className={styles.isRequired} htmlFor="email">
                      Email Address
                    </label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                  </div>
                  <div className={styles.wrapper}>
                    <label className={styles.isRequired} htmlFor="primaryPhone">
                      Primary Phone
                    </label>
                    <Field name="primaryPhone" type="tel" />
                    <ErrorMessage name="primaryPhone" />
                  </div>
                  <div className={styles.wrapper}>
                    <label htmlFor="preferredName">Preferred Name</label>
                    <Field name="preferredName" type="text" />
                    <ErrorMessage name="preferredName" />
                  </div>
                  <div className={styles.rightitem}>
                    <label htmlFor="pronunciation">Pronunciation</label>
                    <Field name="pronunciation" type="text" />
                    <ErrorMessage name="pronunciation" />
                  </div>
                </div>
                <div className={styles.gridWrapper}>
                  <div className={styles.addressContainer}>
                    <div className={styles.wrapper}>
                      <label className={styles.isRequired} htmlFor="Address">
                        Address
                      </label>
                      <Field
                        className={styles.field}
                        placeholder="Address"
                        name="Address"
                        type="text"
                      />
                      <ErrorMessage name="Address" />
                    </div>
                    <div className={styles.wrapper}>
                      <label className={styles.isRequired} htmlFor="City">
                        City
                      </label>
                      <Field name="City" placeholder="City" type="text" />
                      <ErrorMessage name="City" />
                    </div>
                    <div className={styles.statezip}>
                      <div className={styles.wrapper}>
                        <label className={styles.isRequired} htmlFor="State">
                          State
                        </label>
                        <Field name="State" as="select">
                          <option value="">Select State</option>
                          <option value="UP">Uttar Pradesh</option>
                          <option value="DS">Dry State</option>
                        </Field>
                      </div>
                      <div className={styles.wrapper}>
                        <label className={styles.isRequired} htmlFor="zip">
                          Zip Code
                        </label>
                        <Field placeholder="Zip Code" name="zip" type="tel" />
                        <ErrorMessage name="zip" />
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <label htmlFor="mobilePhone">Mobile Phone</label>
                      <Field
                        placeholder="Mobile Phone"
                        name="mobilePhone"
                        type="tel"
                      />
                      <ErrorMessage name="mobilePhone" />
                    </div>
                    <div className={styles.wrapper}>
                      <label htmlFor="otherPhone">Other Phone</label>
                      <Field
                        placeholder="Other Phone"
                        name="otherPhone"
                        type="tel"
                      />
                      <ErrorMessage name="otherPhone" />
                    </div>
                  </div>
                  <hr />
                  <div className={styles.perosnalDetailsContainer}>
                    <div className={styles.wrapper}>
                      <label className={styles.isRequired} htmlFor="State">
                        Sex
                      </label>

                      <Field name="State" as="select">
                        <option value="">Select Sex</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                      </Field>
                    </div>
                    <div className={styles.wrapper}>
                      <label htmlFor="State">Marital Status</label>

                      <Field name="State" as="select">
                        <option value="">Select Marital Status</option>
                        <option value="married">Married</option>
                        <option value="unmarried">Unmarried</option>
                        <option value="complicated">Its complicated</option>
                      </Field>
                    </div>
                    <div className={styles.wrapper}>
                      <label htmlFor="State">Ethnicity</label>

                      <Field name="State" as="select">
                        <option value="">Select Ethnicity</option>
                        <option value="a">Male</option>
                        <option value="b">Female</option>
                        <option value="c">Other</option>
                      </Field>
                    </div>
                    <div className={styles.wrapper}>
                      <label className={styles.isRequired} htmlFor="State">
                        Preffered <br /> Language
                      </label>

                      <Field name="State" as="select">
                        <option value="">Select Preferred Language</option>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="sanskrit">Sanskrit</option>
                      </Field>
                    </div>
                    <div className={styles.wrapperNotes}>
                      <label htmlFor="State">Notes</label>
                      <TextareaAutosize
                        minRows={4}
                        maxRows={4}
                        aria-label="maximum height"
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
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
