// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';const VoiceFlowChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '66f71f774d2b03e506612987' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default VoiceFlowChat;