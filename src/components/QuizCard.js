import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function QuizCard({ question, answer, onDelete }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      {showAnswer && <Text style={styles.answer}>{answer}</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text style={styles.buttonText}>
          {showAnswer ? 'Sembunyikan Jawaban' : 'Tampilkan Jawaban'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteButtonText}>Hapus Kuis</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#dfe6e9',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 14,
    color: '#2d3436',
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#6c5ce7',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
