import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const DATA = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
  { id: 5, title: 'Item 5' },
];

const SwipeableListItem = ({ title }) => {
  const renderRightActions = () => (
    <View style={{ backgroundColor: 'red', width: 150, justifyContent: 'center', alignItems: 'center',  }}>
      <Text style={{ color: 'white' }}>Finalizar</Text>
    </View>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
        <View style={{ backgroundColor: 'red', width: 150, justifyContent: 'center', alignItems: 'center',  }}>
            <Text style={{ color: 'white' }}>Finalizar</Text>
        </View>
        <View style={{ height: 50, backgroundColor: 'white', justifyContent: 'center', paddingLeft: 15 }}>
            <Text>{title}</Text>
        </View>
    </Swipeable>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {DATA.map(item => (
          <SwipeableListItem key={item.id} title={item.title} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
