import { Form } from "@remix-run/react";
import { Input } from "stories/Input"
import { Footer } from "../Footer";

export function OnboardingForm() {
  return (
    <Form className="flex justify-center items-center flex-col h-svh">
      <div className="flex flex-col items-center h-svh w-5/12">
        <h1 className="text-5xl font-semibold m-5">
          Complete school information
        </h1>
        <div className="flex flex-col h-4/5 w-full">

          <div className="div-flex-col mb-3">
            <label htmlFor="school-name">
              School name
            </label>
            <Input
              id="school-name"
              placeholder="enter school name here"
              className="custom-input mt-1.5"
            />
          </div>

          <div className="div-flex-col mb-3">
            <label htmlFor="school-description">
              School description
            </label>
            <textarea
              id="school-description"
              placeholder="enter school description"
              className="custom-input mt-1.5 min-h-20"
            />
          </div>

          <div className="div-flex-row space-x-5 mb-3">
            <div className="div-flex-col w-6/12">
              <label htmlFor="contact-number">
                Contact number
              </label>
              <Input
                id="contact-number"
                placeholder="enter contact number"
                className="custom-input mt-1.5"
              />
            </div>

            <div className="div-flex-col w-6/12">
              <label htmlFor="email-address">
                Email address
              </label>
              <Input
                id="email-address"
                placeholder="enter school email address"
                className="custom-input mt-1.5"
              />
            </div>
          </div>

          <div className="div-flex-row space-x-5 mb-3">
            <div className="div-flex-col w-6/12">
              <label htmlFor="website-link">
                Website
              </label>
              <Input
                id="contact-number"
                placeholder="enter website"
                className="custom-input mt-1.5"
              />
            </div>

            <div className="div-flex-col w-6/12">
              <label htmlFor="social-media-link">
                Social media link
              </label>
              <Input
                id="email-address"
                placeholder="enter social media link"
                className="custom-input mt-1.5"
              />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </Form>
  );
}

