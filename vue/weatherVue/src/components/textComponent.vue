<template>
    <h2 class="title">Узнай погоду в любом городе</h2><br/>
    <div>
        <input v-model="city" type="text" class="text" placeholder="Город...">
        <button v-if="canSee" @click.stop="getWeatherData();seeWeather()" class="btn"><span>Узнать погоду</span></button>
        <weatherComponent 
        :city="this.city"
        :temp="this.temp"
        :feelsLike="this.feelsLike"
        :humidity="this.humidity"
        :cloudines="this.cloudines"
        v-show="temp !== null"
        class="weather"
        />
    </div>
</template>

<script>
import {gsap} from 'gsap';
import axios from 'axios';
import weatherComponent from './weather/weatherComponent.vue';

export default {
    components: {
        weatherComponent
    },
    data() {
        return {
            city: '',
            canSee: false,
            canAnimation: 0,
            temp: null,
            feelsLike: null,
            humidity: null,
            cloudines: null,
        }
    },
    computed: {
        textLength() {
            return this.city.length;
        }
    },
    watch: {
        textLength() {
            this.canSee = this.textLength > 0;
            if (this.canSee == false) {
                this.canAnimation = 0
            }
        }
    },

    updated() {
        if (this.canSee && this.canAnimation == 0) {
            const tl = gsap.timeline();

            tl
            .from('.btn', {
                opacity: 0,
                y: -15,
                duration: .6,
            })
            this.canAnimation += 1
        }
    },
    methods: {
        async getWeatherData() {
            const apiKey = '798d7ec6a2d1c7d510730b228d3c8a95';
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`)
            this.temp = (response.data.main.temp - 273).toFixed(1)
            this.feelsLike = (response.data.main.feels_like - 273).toFixed(1)
            this.humidity = response.data.main.humidity
            this.cloudines = response.data.clouds.all
        },
        seeWeather() {
            const tl = gsap.timeline()

            tl
            .to('.title', {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "easeInOut"
            })
            .to('.text', {
                x: -100,
                opacity: 0,
                ease: "easeInOut"
            }, '-=1')
            .to('.btn', {
                x: 100,
                opacity: 0,
                ease: "easeInOut"
            }, '-=1')
            .from('.weather', {
                opacity: 0,
                duration: 1  
            })
        }
    }
}
</script>

<style>
    .text {
    background-color: transparent;
    outline: none;
    border: 1px solid #aaa;
    padding: 10px 15px;
    border-radius: 10px;
    color: #aaa;
    }

    .text:focus {
        border: 1px solid #fff;
    }

    .title {
        position: relative;
    }

    .btn {
        width: 120px;
        margin-left: 10px;
        transition: all .3s;
        border-radius: 10px;
        border: 2px solid#269926;
        background-color: transparent;
        position: relative;
        padding: 10px 15px;
        cursor: pointer;
    }

    .btn span {
        color: #aaa;
        transition: .4s ease-in-out;

    }

    .btn::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translateX(-50%);
        height: 106%;
        width: 0;
        background-color: #269926;
        border-radius: 5px;
        display: block;
        transition: .4s ease-in-out;
    }

    .btn:hover::before {
        width: 116px;
    }

    .btn:hover span {
        color: #232323;
    }

    .weather {
        position: absolute;
        top: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
    }

</style>