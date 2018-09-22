import React from 'react';
import Popup from 'reactjs-popup';

const withTooltip = (
  WrappedComponent: React.ComponentType,
  Details: React.ComponentType
) => {
  class WithTooltip extends React.Component {
    public render() {
      return (
        <Popup
          on="hover"
          /** tslint-disable-next-line jsx-no-lambda */
          trigger={WrappedComponent}
          keepTooltipInside={true}
        >
          <Details />
        </Popup>
      );
    }
  }
  WithTooltip.displayName = `WithSubscription(${getDisplayName(
    WrappedComponent
  )})`;
  return WithTooltip;
};

function getDisplayName(WrappedComponent: React.ComponentType) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withTooltip;
