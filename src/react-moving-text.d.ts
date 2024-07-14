declare module 'react-moving-text' {
    import { ComponentType } from 'react';
  
    interface MovingComponentProps {
      type: string;
      duration?: string;
      delay?: string;
      direction?: string;
      timing?: string;
      iteration?: string | number;
      fillMode?: string;
    }
  
    const MovingComponent: ComponentType<MovingComponentProps>;
  
    export default MovingComponent;
  }
  