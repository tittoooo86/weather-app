declare module 'react-native-animated-linear-gradient' {
  import * as React from 'react';
  import * as ReactNative from 'react-native';

  export interface AnimatedLinearGradientProps extends ReactNative.ViewProps {
    customColors: string[];
    speed: number;
  }

  export const presetColors: {
    instagram: string[];
    firefox: string[];
    sunrise: string[];
  };

  export class AnimatedLinearGradient extends React.Component<
    AnimatedLinearGradientProps
  > {}

  export default AnimatedLinearGradient;
}
