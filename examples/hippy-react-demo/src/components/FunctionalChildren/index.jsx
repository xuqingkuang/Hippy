import React from 'react';
import { View, Text } from 'hippy-react';

function FunctionalChildren() {
  return (
    <View>
      {
        mouse => (
          <Text>
            The mouse position is
            {mouse.x}
            {mouse.y}
          </Text>
        )
      }
    </View>
  );
}

function Container() {
  const mouse = {
    x: 123,
    y: 234,
  };
  return (
    <FunctionalChildren mouse={mouse} />
  );
}

export default Container;
