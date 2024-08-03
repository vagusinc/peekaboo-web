import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faGlobe } from "@fortawesome/free-solid-svg-icons"

export function OtherInformationCard() {
  return (
    <div className="basis-4/12">
      <div className="p-6 shadow-custom-all rounded-lg">
        <FontAwesomeIcon icon={faPencil} className="float-right" />

        <div className="flex-div-col space-y-5">
          <h1 className="text-xl font-semibold">
            Operating Hours
          </h1>

          <div className="space-y-3">
            <div className="div-flex-row justify-between">
              <h2>
                Monday and Sunday
              </h2>
              <h2 className="text-red">
                CLOSED
              </h2>
            </div>
            <div className="div-flex-row justify-between">
              <h2>
                Tuesday to Saturday
              </h2>
              <h2 className="text-green-500">
                11:00 AM - 5:00 PM
              </h2>
            </div>
          </div>

          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

          <FontAwesomeIcon icon={faPencil} className="float-right" />

          <h1 className="text-xl font-semibold">
            Links
          </h1>

          <div className="space-y-2">
            <div className="div-flex-row space-x-3">
              <FontAwesomeIcon icon={faGlobe} className="self-center" />
              <h2 className="text-blue">
                schoolsite.com
              </h2>
            </div>

            <div className="div-flex-row space-x-3">
              <FontAwesomeIcon icon={faGlobe} />
              <h2 className="text-blue">
                schoolsite2.com
              </h2>
            </div>

            <div className="div-flex-row space-x-3">
            <FontAwesomeIcon icon={faGlobe} />
              <h2 className="text-blue">
                schoolsite3.com
              </h2>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}