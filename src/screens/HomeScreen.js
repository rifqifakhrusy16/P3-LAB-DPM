import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/Header';  // Pastikan path Header sudah benar
import QuizCard from '../components/QuizCard';
import globalStyles from '../styles/globalStyles';

export default function HomeScreen() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = () => {
    setTimeout(() => {
      const sampleData = [
        { id: 1, question: 'Apa warna langit?', answer: 'Biru' },
        { id: 2, question: 'Berapa banyak kaki yang dimiliki seekor kucing?', answer: 'Empat' },
      ];
      setQuizData(sampleData);
      setLoading(false);
    }, 2000);
  };

  const handleAddQuiz = () => {
    if (newQuestion.trim() === '' || newAnswer.trim() === '') {
      Alert.alert('Error', 'Mohon isi baik pertanyaan maupun jawaban.');
      return;
    }

    const newQuiz = {
      id: quizData.length + 1,
      question: newQuestion,
      answer: newAnswer,
    };

    setQuizData([...quizData, newQuiz]);
    setNewQuestion('');
    setNewAnswer('');
    Alert.alert('Sukses', 'Kuis baru berhasil ditambahkan!');
  };

  const handleDeleteQuiz = (id) => {
    const updatedQuizData = quizData.filter((quiz) => quiz.id !== id);
    setQuizData(updatedQuizData);
    Alert.alert('Sukses', 'Kuis berhasil dihapus!');
  };

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <Text style={styles.loadingText}>Memuat...</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Header title="EduKids" />  {/* Judul aplikasi */}
      <ScrollView>
        {quizData.map((quiz) => (
          <QuizCard
            key={quiz.id}
            question={quiz.question}
            answer={quiz.answer}
            onDelete={() => handleDeleteQuiz(quiz.id)}
          />
        ))}
      </ScrollView>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Tambah Kuis Baru</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan pertanyaan"
          value={newQuestion}
          onChangeText={setNewQuestion}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan jawaban"
          value={newAnswer}
          onChangeText={setNewAnswer}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddQuiz}>
          <Text style={styles.buttonText}>Tambah Kuis</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  form: {
    padding: 20,
    backgroundColor: '#f1f2f6',
    borderTopWidth: 1,
    borderColor: '#dcdde1',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced6e0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6c5ce7',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
