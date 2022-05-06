<script lang="ts">
  import Quiz from "./components/quiz/Quiz.svelte";
</script>

<main>
  <h1>Film Quiz</h1>
  <h2>Test your cinematography knowledge</h2>

  <Quiz />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: palevioletred;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin-bottom: 0;
  }
  h2 {
    color: #ff3e00;
    font-size: 2em;
    font-weight: 200;
  }

  /* Global styles */
  :global(h2) {
    color: aqua;
  }

  :global(button, a) {
    cursor: pointer;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
