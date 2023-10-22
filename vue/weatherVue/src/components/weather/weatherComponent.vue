<template>
  <div class="weather-block">
    <h2 class="weather__title">Weather in {{ city }}</h2>
    <div :class="['weather-icon', 'icons8-' + getImage()]"></div>
    <ul class="weather__items">
      <li class="weather__item"><span>Temperature:</span> {{ temp }}</li>
      <li class="weather__item"><span>Feels like:</span> {{ feelsLike }}</li>
      <li class="weather__item"><span>Humidity:</span> {{ humidity }}</li>
    </ul>
  </div>
</template>

<script>

export default {
    props: [
        'city',
        'temp',
        'feelsLike',
        'humidity',
        'cloudines'
    ],
    methods: {
      getImage() {
      if (this.cloudines <= 30) {
        return 'summer-96';
      } else if (this.cloudines <= 60) {
        return 'sky-100';
      } else if (this.cloudines <= 100) {
        return 'clouds-100';
      }
    }
    }
}
</script>

<style>
    .weather__title {
      margin-bottom: 10px;
      font-size: 32px;
      width: 500px;
    }

    .weather__items {
      list-style: none;
      padding: 0;
    }

    .weather__item {
      font-size: 24px;
      width: 300px;
    }

    .weather__item span {
      color: #269926;
      margin-right: 10px;
    }

    .weather-icon {
      width: 100px;
      height: 100px;
    }

    .icons8-summer-96 {
      background-image: url('/icons8-summer-96.png');
    }

    .icons8-sky-100 {
      background-image: url('/icons8-sky-100.png');
    }

    .icons8-clouds-100 {
      background-image: url('/icons8-clouds-100.png');
    }
</style>