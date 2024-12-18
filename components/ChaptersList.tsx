import { numberToHebrewLetter } from '@/utils';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';



type ChaptersListProps = {
  psalmsData: any;
  onSelectChapter: (chapter: number) => void;
};

const ChaptersList: React.FC<ChaptersListProps> = ({ psalmsData, onSelectChapter }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{psalmsData.heTitle}</Text>
      <FlatList
        data={psalmsData.text}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onSelectChapter(index)} style={styles.chapterItem}>
            <Text style={styles.chapterText}>{numberToHebrewLetter(index + 1)}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.scrollView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    scrollView: {
      flexDirection: 'row-reverse',  
      flexWrap: 'wrap',             
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    chapterItem: {
    width:50,
    height:50,
      padding: 10,
      backgroundColor: '#ddd',
      marginRight: 10,
      marginBottom: 10, 
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    chapterText: {
      fontSize: 18,
      textAlign: 'center',
    },
  });
  
  export default ChaptersList;