const { DiffieHellmanGroup } = require("crypto");

const MyComponent = ({highlighted, theme}) => (
    <div classNames={('MyComponent', { highlighted }, theme)}>Hello</div>
)