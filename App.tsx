import React from 'react';
import {SafeAreaView} from 'react-native';

import RootNavigation from './app/navigation/RootNaviation';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;
