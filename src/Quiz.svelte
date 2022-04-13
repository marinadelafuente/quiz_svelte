<script lang="ts">
  export let quizName: string = "The wonderful world of QuizzLy";

  let results = [];
  let questions = [];

  const pickAnswer = (
    answer: string,
    correctAnswer: string,
    questionIndex: number
  ) => {
    return answer === correctAnswer
      ? (results[questionIndex] = "Correct")
      : (results[questionIndex] = "Incorrect");
  };
  async function getQuiz() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy"
    );
    const quiz = await res.json();
    return (questions = quiz.results);
  }
</script>

<div>
  <h2>{quizName}</h2>
  <button on:click={getQuiz}>Get questions</button>
  <!-- {#if result}
    <h4>{result}</h4>
  {:else}
    <h4>Please choose an anwser</h4>
  {/if} -->
  {#if questions}
    {#await questions}
      Loading...
    {:then data}
      {#each data as result, index}
        <p>{result.question}</p>
        {#if results[index]}
          <p>{results[index]}</p>
        {/if}
        <div class="button-container">
          {#each [...result.incorrect_answers, result.correct_answer] as answer}
            <button
              on:click={() => pickAnswer(answer, result.correct_answer, index)}
              >{answer}</button
            >
          {/each}
        </div>
      {/each}
    {/await}
  {/if}
</div>

<style>
  h2 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 200;
  }

  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

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
