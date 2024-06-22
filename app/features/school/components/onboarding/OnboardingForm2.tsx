import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";
import { Form } from "@remix-run/react";
import { useEffect, useRef } from 'react';
import { useAddressForm } from "../../hooks/useAddressForm";
import { Input } from "stories/Input";

export function OnboardingForm2() {
  const TOKEN = window.ENV.MAPBOX_ACCESS_TOKEN;

  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/standard',
        center: [123.945, 10.293],
        zoom: 13,
        accessToken: TOKEN
      });

      return () => map.remove();
    }
  }, [TOKEN]);

  const form = useAddressForm({
    address: "",
    street: "",
    city: "",
    zip: "",
  });

  return (
    <div className="centered-div flex-col h-full">
      <div className="div-flex-col items-center w-full h-full">
        <h1 className="text-5xl font-semibold m-5">
          School address
        </h1>

        <div className="w-full h-full">
          <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="w-5/12">
        <div className="w-full h-fit mt-5">

          <Form
            className="h-full w-full"
            onSubmit={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <form.Field name="address">
              {(field) => (
                <div className="div-flex-col mb-3">
                  <label htmlFor="address"> Address </label>
                  <Input
                    className="custom-input mt-1.5 cursor-default"
                    id="address"
                    placeholder="Click on the map to display your address here"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    readOnly
                  />
                </div>
              )}
            </form.Field>
          </Form>

        </div>
        </div>
      </div>

    </div>

  );
}
