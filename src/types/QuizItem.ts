type QuizItem = {
  category: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export default QuizItem;
