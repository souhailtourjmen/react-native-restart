import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import RNRestart from 'react-native-restart';

export default function App() {




  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => RNRestart.restart()}>
              <View>
                <Text>Restart</Text>
              </View>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
