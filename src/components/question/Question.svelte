<script lang="ts">
  // Types
  import type QuizItem from "../../types/QuizItem";

  // Props
  export let question: QuizItem;

  // Variables
  let result: string;

  // Actions
  const pickAnswer = (answer: string, correctAnswer: string) => {
    return answer === correctAnswer
      ? (result = "Correct")
      : (result = "Incorrect");
  };
</script>

<h3>
  {@html question.question}
</h3>
<div class="button-container">
  {#each [question.correct_answer, ...question.incorrect_answers] as answer, index}
    <button
      class={index === 0 && result === "Correct" && "correct-answer"}
      on:click={() => pickAnswer(answer, question.correct_answer)}
      >{@html answer}</button
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
