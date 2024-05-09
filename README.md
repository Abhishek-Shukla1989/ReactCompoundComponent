Compound components in React are a design pattern where a parent component (provider) encapsulates the logic and state management, while child components (consumers) are used to compose the UI. These child components work together to form a cohesive unit, sharing state and behaviors defined by the parent.

In practice, compound components typically involve:

Parent Component (Provider): This component holds the shared state and logic needed by its children. It often includes methods to update the state and pass down relevant data as props.
Child Components (Consumers): These components receive props and callbacks from the parent to render UI elements and handle user interactions. Each child component plays a specific role in the overall functionality of the compound component.
API Design: The parent component defines a clear API that specifies how children should be used and interconnected. This API guides developers on how to compose the compound component effectively.

In this demo, I have created compound component Counter with said compound component pattern. 

