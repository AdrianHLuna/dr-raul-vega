"use client";

import React, { useEffect } from "react";

interface DoctoraliaWidgetProps {
  id?: string;
  type?: string; // "big_with_calendar", "big", "button_calendar_floating_medium", etc.
  className?: string;
}

export default function DoctoraliaWidget({
  id = "zl-url",
  type = "big_with_calendar",
  className = "",
}: DoctoraliaWidgetProps) {
  useEffect(() => {
    const scriptId = "zl-widget-s";
    
    // Dynamically load or re-trigger Doctoralia script
    const scriptExists = document.getElementById(scriptId);
    if (!scriptExists) {
      const js = document.createElement("script");
      js.id = scriptId;
      js.src = "https://platform.docplanner.com/js/widget.js";
      js.async = true;
      document.body.appendChild(js);
    } else {
      // Re-trigger script for SPA hydration / navigation
      const js = document.createElement("script");
      js.src = "https://platform.docplanner.com/js/widget.js";
      js.async = true;
      document.body.appendChild(js);
      setTimeout(() => js.remove(), 1000);
    }
  }, []);

  return (
    <a
      id={id}
      className={`zl-url ${className}`}
      href="https://www.doctoralia.com.mx/perfil/raul-david-vega-vivar"
      rel="nofollow"
      data-zlw-doctor="raul-david-vega-vivar"
      data-zlw-type={type}
      data-zlw-opinion="false"
      data-zlw-hide-branding="true"
      data-zlw-saas-only="true"
      data-zlw-a11y-title="Widget de reserva de citas médicas"
    >
      Reserve una cita - Dr. Raúl Vega
    </a>
  );
}
