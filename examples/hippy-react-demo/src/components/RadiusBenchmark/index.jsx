import React from 'react';
import { Dimensions, StyleSheet, ListView, View } from 'hippy-react';

const styles = StyleSheet.create({
  rectangle: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 1,
  },
  roundRectangle: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
  },
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 *
 * @param {string} type - rectangle or roundRectangle
 * @param {string} countsPerLine - items count per line
 */
function RadiusBenchmark(type, countsPerLine) {
  const { width: screenWidth } = Dimensions.get('window');

  function renderRow() {
    const padding = 2;
    const length = Math.floor(screenWidth / countsPerLine);

    const rowStyle = StyleSheet.create({
      padding,
      margin: 1,
      width: length - padding,
      height: length - padding,
      backgroundColor: getRandomColor(),
    });

    return (
      <View style={{ flexDirection: 'row' }}>
        {
          Array.from({ length: countsPerLine }).map((unused, index) => {
            const i = index.toString();
            return (
              <View key={`${type}-${i}`} style={{ ...rowStyle, ...styles[type] }} />
            );
          })
        }
      </View>
    );
  }

  return function BenchmarkComponent() {
    return (
      <ListView
        style={{ flex: 1 }}
        numberOfRows={1000}
        renderRow={renderRow}
        getRowType={countsPerLine}
        getRowKey={Date.now()}
      />
    );
  };
}

export default RadiusBenchmark;
