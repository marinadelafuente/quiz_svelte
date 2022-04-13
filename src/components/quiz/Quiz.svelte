<script lang="ts">
  // Components
  import Question from "../question/Question.svelte";

  // Types
  import type QuizItem from "../../types/QuizItem";

  // Variables
  let quiz: Promise<QuizItem[]> = getQuiz();

  // Actions
  async function getQuiz() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy"
    );
    const quiz = await res.json();
    return quiz.results;
  }
</script>

<div>
  {#await quiz}
    Loading quiz...
  {:then data}
    <button on:click={() => (quiz = getQuiz())}>Get new question</button>
    {#each data as question}
      <Question {question} />
    {/each}
  {/await}
</div>

<style>
  button {
    background-color: darkcyan;
    color: white;
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
</style>
