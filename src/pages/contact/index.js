import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { navigate } from 'gatsby'
import Layout from '../../layout/index'
import Grid from "react-md/lib/Grids/Grid";
import Cell from "react-md/lib/Grids/Cell";
import "./contact.scss";
import config from "../../../data/SiteConfig";
import NetlifyForm from 'react-ssg-netlify-forms'

const ContactPage = () => {

  // Pre-Submit for validations and disabling button
  const [processing, setProcessing] = useState(false)
  const preSubmit = async () => {
    if (formValues.name.length > 0 && formValues.email.length > 0) {
      setProcessing(true)
      // Wait 2 seconds to simulate async delay (maybe user confirmation? or
      // external checks?)
      await (new Promise(resolve => setTimeout(resolve, 2000)))
      return true
    }
    else {
      return false
    }
  }

  // Post-Submit for navigating to 'Thank You' page .. or maybe displaying 'sent!'
  // text; totally up to you!
  const postSubmit = () => {
    console.log('Sent!')
    setProcessing(false)
    navigate('/contact/thanks')
  }

  // Simple controlled form setup
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <Layout location={this.props.location} title="Home">
      <div className="index-container">
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
        <Grid className="wrapper">
          <Cell size={3}></Cell>
          <Cell size={6}>
            <div className="contact-page">
              <div className="contact-form">
                <h2 className="md-headline centered">Contact Us</h2>
                <NetlifyForm
                  formName="Contact"
                  formValues={formValues}
                  preSubmit={preSubmit}
                  postSubmit={postSubmit}
                  automaticHoneypot={true}
                >
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Your Name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={handleChange}
                        value={formValues.name}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={handleChange}
                        value={formValues.email}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        onChange={handleChange}
                        value={formValues.message}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div data-netlify-recaptcha="true"></div>
                  <div className="field">
                    <button
                      className="button is-link"
                      type="submit"
                      disabled={processing}
                    >
                      SEND
                    </button>
                  </div>
                </NetlifyForm>
              </div>
            </div>
          </Cell>
          <Cell size={3}></Cell>
        </Grid>
      </div>
    </Layout>
  )
}

export default ContactPage
