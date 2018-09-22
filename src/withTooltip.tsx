import React from 'react';
import Popup from 'reactjs-popup';

const withTooltip = (
  WrappedComponent: React.ComponentType,
  Details: React.ComponentType
) => {
  class WithTooltip extends React.Component<{}, {}> {
    displayName: string;
    constructor(props: {}) {
      super(props);
      this.displayName = `WithSubscription(${getDisplayName(
        WrappedComponent
      )})`;
    }
    public render() {
      return (
        <Popup on="click" trigger={WrappedComponent} keepTooltipInside={true}>
          <Details />
        </Popup>
      );
    }
  }
  return WithTooltip;
};

function getDisplayName(WrappedComponent: React.ComponentType) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withTooltip;
