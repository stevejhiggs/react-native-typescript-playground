import 'react-native';
import React from 'react';
import Index from './index.ios';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
it('renders correctly', () => {
    const tree = renderer.create(React.createElement(Index, null));
    expect(tree).toBeDefined();
});
//# sourceMappingURL=index.ios.spec.js.map