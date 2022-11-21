<template>
  <section class="card">
    <h2>Card Title</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, cupiditate atque repellat reprehenderit magni
      voluptate voluptatem provident impedit quod obcaecati non beatae asperiores soluta porro tempore pariatur ex?
      Deserunt, rem!
    </p>

    <p>Math : {{ calculate(2, 10) }}</p>
    <p>{{ mathtest }} {{ writeStuff() }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mathtest: 2 + 10,
    };
  },
  //---------------------------------
  methods: {
    calculate(a, b) {
      return a + b;
    },
    writeStuff() {
      return this.mathtest > 10 ? "est sup à 10" : "est inférieur à 10";
    },
  },
  //---------------------------------
};
</script>
