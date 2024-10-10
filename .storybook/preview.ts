import type { Preview } from "@storybook/react";
import "../src/app/styles/main.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "366px",
            height: "667px",
          },
          type: "mobile",
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "1024px", 
            height: "1024px", 
          },
          type: "tablet",
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1280px", 
            height: "800px", 
          },
          type: "desktop",
        },
      },
      defaultViewport: "desktop",
    },
  },
};

export default preview;
