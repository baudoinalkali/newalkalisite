import React from 'react';

import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';

const HubSpotForm = (props) => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: `20442125`,
        formId: `a0ec1e71-c6d7-4a48-9bf0-6172bea03a5a`,
        target: '#my-hubspot-form'
    });

    return (
        <div>
            <div id="my-hubspot-form"></div>
        </div>
    )
}

export default HubSpotForm