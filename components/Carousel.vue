<template>
    <section>
        <div id="wrapper">
            <div id="screenshotsBox">
                <button @click="scrollToLeft()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg>
                </button>

                <section id="screenshots">
                    <div v-for="i in screenshots" :key="i"> 
                        <img :src="i.src" alt = "screenshot">
                    </div>
                </section> 
                
                <button @click="scrollToRight()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg>
                </button>    
            </div>
        </div>
    </section>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from "nuxt-class-component";
import { Prop } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    @Prop({}) public screenshots: any[] | null = null;
    @Prop({}) name: string;

    constructor() {
        super();

        console.log('wut');

        console.log('name', this.name);

        setTimeout(() => {
            console.log('name', this.name);
        }, 500);
    }

    scrollToLeft(): void {
    const screenshotsDiv = this.$el.querySelector("#screenshots");
    // screenshotsDiv.scrollBy(-10, 0);
    if(screenshotsDiv){
        screenshotsDiv.scrollBy({
        // left: -15,
        left: -(screenshotsDiv.clientWidth),
        top: 0,
        behavior: 'smooth'
        });
    }
  }

  scrollToRight(): void {
    const screenshotsDiv = this.$el.querySelector("#screenshots");
    // screenshotsDiv.scrollBy(10, 0);
    if(screenshotsDiv){
        screenshotsDiv.scrollBy({
            // left: 15,
            left: screenshotsDiv.clientWidth,
            top: 0,
            behavior: 'smooth'
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/base/variables';
    button:hover{
        cursor: pointer;
    }

    #wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    #screenshotsBox {
        max-height: 220px;
        display: flex;
        max-width: 30em;
      }
      #screenshotsBox button {
       border: none;
       width: 4em;
       transition: background-color 0.2s;
      }
      #screenshotsBox button:focus,
      #screenshotsBox button:hover {
        background-color: #bbbbbb;
      }
      #screenshotsBox button svg {
       width: 28px;
       fill: #6b6969;
      }

      #screenshots {
        display: flex;
        scroll-snap-type: x mandatory;
        flex-wrap: wrap;
        flex-direction: column;
        overflow-x: scroll;
        overflow-x: hidden;
        overflow-y: scroll;
        overflow-y: hidden;
        width: 22em;
        max-height: 220px;
        -webkit-overflow-scrolling: touch
       }
       #screenshots div {
         display: flex;
         align-items: center;
         justify-content: center;
         scroll-snap-align: start;
         height: 14em;
         width: 100%;
         background:#efefef;
       }
       #screenshots img {
         width: 100%;
         height: 100%;
         object-fit: contain;
       }
       #screenshots::-webkit-scrollbar {
         display: none;
       }

       @media (max-width: 850px) {

        #screenshotsBox {
          width: 75%;
        }

        #screenshots img {
          height: 200px;
        }
        
      }

      @media(max-width: 700px) {
        #screenshotsBox img{
          width: 200%;
        }
      }

        
      @media(max-width: 450px) {
        #screenshotsBox  {
          margin-top: 5px;
          height: 250px;
          width: 250px;
          justify-content: center;
        }
        #screenshotsBox img {
          height: 100%;
          width: 100%;
        }
      }

      @media(max-width: 400px) {
        mwc-dialog {
          --mdc-dialog-max-width: 350px;
        }
      }
</style>