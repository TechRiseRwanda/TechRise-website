import React, { useEffect } from "react";

const WhatsAppWidget = () => {
useEffect(() => {
    if (!window.gbwawc) {
      (function (w, d, s, u) {
        w.gbwawc = {
          url: u,
          options: {
            waId: "+250 0786062005",
            siteName: "TECH RISE",
            siteTag: "Active Now",
            siteLogo:
              "https://assets.gallabox.com/gb-home/wa-chat-widget/bot-logo-1.png",
            widgetPosition: "LEFT",
            welcomeMessage: `👋 Hello and welcome to Tech Rise! 😊
                            We're here to assist you with all your tech-related needs and inquiries. `,
            triggerMessage: "Chat with us",
            brandColor: "#25D366",
            messageText: "What is the one thing you're looking for today?",
            replyOptions: [
              "What would you like to learn about today?",
              "Who are you looking to connect with?",
            ],
            version: "v1",
            widgetPositionMarginX: "12",
            widgetPositionMarginY: "12",
          },
        };
        const h = d.getElementsByTagName(s)[0];
        const j = d.createElement(s);
        j.async = true;
        j.src = `${u}/whatsapp-widget.min.js?_=${new Date().toISOString()}`;
        h.parentNode.insertBefore(j, h);
      })(window, document, "script", "https://waw.gallabox.com");
    }
  }, []);
  ; // Runs only once on mount

  return null; // No UI for the widget component
};

export default WhatsAppWidget;
  