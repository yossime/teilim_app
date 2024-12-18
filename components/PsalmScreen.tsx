// import { numberToHebrewLetter } from '@/utils';
// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextStyle, ViewStyle, ScrollView } from 'react-native';

// type PsalmScreenProps = {
//   chapter: number;
//   psalmsData: any;
//   onPrevious: () => void;
//   onNext: () => void;
// };

// const PsalmScreen: React.FC<PsalmScreenProps> = ({ chapter, psalmsData, onPrevious, onNext }) => {
//   const psalm = psalmsData.text[chapter];

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>פרק {numberToHebrewLetter(chapter + 1)}</Text>
//       <FlatList
//         data={psalm}
//         renderItem={({ item, index }) => (
//           <Text key={index} style={styles.verse}>
// {`(${numberToHebrewLetter(index + 1)}) ${item}${index !== psalm.length - 1 ? ':' : '.'}`}
// </Text>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.verseList}
//       />
//       <View style={styles.buttons}>
//         <TouchableOpacity style={styles.button} onPress={onPrevious} disabled={chapter === 0}>
//           <Text style={styles.buttonText}>פרק קודם</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={onNext} disabled={chapter === psalmsData.text.length - 1}>
//           <Text style={styles.buttonText}>פרק הבא</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   verseList: {
//     flexDirection: 'row-reverse',  
//     flexWrap: 'wrap',  
//     // wordWrap:'break-word',
// },            
//   verse: {
//     fontSize: 18,
//     marginBottom: 10,
//     marginRight: 10,  
//   },
//   buttons: {
//     flexDirection: 'row-reverse',
//     justifyContent: 'space-between',
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#f0f0f0',  
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',  
//   },
//   buttonText: {
//     fontSize: 18,
//     color: '#333', 
//     textAlign: 'center',
//   },
// });

// export default PsalmScreen;
import { numberToHebrewLetter } from '@/utils';
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

type PsalmScreenProps = {
  chapter: number;
  psalmsData: any;
  onPrevious: () => void;
  onNext: () => void;
};

const PsalmScreen: React.FC<PsalmScreenProps> = ({ chapter, psalmsData, onPrevious, onNext }) => {
  const psalm = psalmsData.text[chapter];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>פרק {numberToHebrewLetter(chapter + 1)}</Text>
      <FlatList
        data={psalm}
        renderItem={({ item, index }) => (
          <Text key={index} style={styles.verse}>
            {`(${numberToHebrewLetter(index + 1)}) ${item}${index !== psalm.length - 1 ? ':' : '.'}`}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.verseList}
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={onPrevious} disabled={chapter === 0}>
          <Text style={styles.buttonText}>פרק קודם</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onNext} disabled={chapter === psalmsData.text.length - 1}>
          <Text style={styles.buttonText}>פרק הבא</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  verseList: {
    padding:20,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
  },
  verse: {
    fontSize: 18,
    marginBottom: 10,
    marginRight: 10,  
  },
  buttons: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f0f0f0',  
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',  
  },
  buttonText: {
    fontSize: 18,
    color: '#333', 
    textAlign: 'center',
  },
});

export default PsalmScreen;
