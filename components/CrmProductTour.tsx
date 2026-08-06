"use client";

import { useState } from "react";
import { crmScreens } from "./CrmMockScreens";

export default function CrmProductTour() {
  const [active, setActive] = useState(0);
  const current = crmScreens[active];

  return (
    <div className="cs-tour">
      <div className="cs-tour-tabs" role="tablist" aria-label="Auto Parts CRM screens">
        {crmScreens.map((screen, index) => (
          <button
            type="button"
            key={screen.id}
            role="tab"
            id={`cs-tab-${screen.id}`}
            aria-selected={active === index}
            aria-controls={`cs-panel-${screen.id}`}
            className={`cs-tour-tab${active === index ? " is-active" : ""}`}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {screen.tab}
          </button>
        ))}
      </div>

      <div className="cs-tour-copy" key={current.id}>
        <h3>{current.title}</h3>
        <p>{current.blurb}</p>
      </div>

      <div className="cs-tour-stage">
        {crmScreens.map((screen, index) => (
          <div
            key={screen.id}
            role="tabpanel"
            id={`cs-panel-${screen.id}`}
            aria-labelledby={`cs-tab-${screen.id}`}
            hidden={active !== index}
          >
            <figure className="crm-frame cs-frame">
              <div className="crm-frame-chrome" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>crm.meeautoparts.com/{screen.id}</span>
              </div>
              {screen.node}
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
