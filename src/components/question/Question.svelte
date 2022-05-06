<script lang="ts">
  // Types
  import type QuizItem from "../../types/QuizItem";

  // Props
  export let question: QuizItem;

  // Variables
  let result: string;
  let incorrectAnswers = question.incorrect_answers.map((answer) => {
    return { answer, correct: false };
  });
  let answers = [
    { answer: question.correct_answer, correct: true },
    ...incorrectAnswers,
  ];

  const shuffleAnswers = (answers: { answer: string; correct: boolean }[]) => {
    answers.sort(() => Math.random() - 0.5);
  };

  shuffleAnswers(answers);

  // Actions
</script>

<h3>
  {@html question.question}
</h3>
<div class="button-container">
  {#each answers as answer}
    <button
      class={result === "Correct" && "correct-answer"}
      on:click={() =>
        answer.correct ? (result = "Correct") : (result = "Incorrect")}
      >{@html (answer.answer, answer.correct)}</button
    >
  {/each}
  {#if result}
    <p>{result}</p>
  {/if}
</div>

<style>
  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  button {
    background-color: transparent;
    box-shadow: inset 0 0 0 2px darkcyan;
    border-radius: 10px;
    padding: 15px;
  }

  button:hover,
  button:focus {
    color: darkcyan;
    background-color: white;
    box-shadow: inset 0 0 0 2px darkcyan;
  }
  button:active {
    transform: scale(0.9);
  }

  .correct-answer {
    background-color: aquamarine;
  }
</style>
