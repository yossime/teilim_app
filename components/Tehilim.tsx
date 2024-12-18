import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import PsalmScreen from './PsalmScreen';
import ChaptersList from './ChaptersList';
import psalmsData from './tehillim.json';

const Tehilim: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const handleSelectChapter = (chapter: number) => {
    setSelectedChapter(chapter);
  };

  const handlePrevious = () => {
    if (selectedChapter !== null && selectedChapter > 0) {
      setSelectedChapter(selectedChapter - 1);
    }
  };

  const handleNext = () => {
    if (selectedChapter !== null && selectedChapter < psalmsData.text.length - 1) {
      setSelectedChapter(selectedChapter + 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {selectedChapter === null ? (
        <ChaptersList psalmsData={psalmsData} onSelectChapter={handleSelectChapter} />
      ) : (
        <PsalmScreen
          chapter={selectedChapter}
          psalmsData={psalmsData}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </SafeAreaView>
  );
};

export default Tehilim;
