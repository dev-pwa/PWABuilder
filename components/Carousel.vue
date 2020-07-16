<template>
    <section>
        <div id="wrapper" v-if="screenshots">
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
import { Prop } from 'vue-property-decorator';

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

    public created() {
        console.log('created');
    }

    public updated() {
        console.log('updated');
    }

    public mounted() {
        console.log('this.screenshots inside of carousel', this.screenshots);


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
    #fullPage {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #center {
        width: 900px;
        margin: auto;
        align-items: center;
        justify-content: center;
    }

    #headerText {
        color: white;
        background: linear-gradient(45deg, #3f9ccd, #7160d3);
        background-repeat: no-repeat;
        padding-left: 144px;
        margin: 0;
        padding-bottom: 2em;
        padding-top: 2em;
        height: 140px;
        border-radius: 10px;
    }
    #headerText h1 {
        font-size: 24px;
    }
    #headerText p {
        font-size: 16px;
        line-height: 22px;
    }

    #wrapper {
        display: flex;
        flex-direction: column;
    }

    #subProcess {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
    }

    #submissionBox{
        display: block;
        justify-content: left;
        align-items: center;
    }
    #submissionBox #title {
        font-size: 22px;
    }
    #submissionBox #sub {
        font-size: 16px;
    }
    #urlArea {
        display: flex;
    }
    #url {
        margin-right: 5px;
        line-height: 30px;
        border: none;
        border-bottom: solid;
        border-bottom-width: 1px;
        width: 100%;
        font-size: 16px;
        outline: none;
    }
    #submit {
        border-radius: 20px;
        border: none;
    }
    #submit p{
        padding: 0 5px;
    }
    #checksBox {
        display: flex;
        flex-direction: column;
        justify-content: left;
        background-color: #F8F8F8;
        border-radius: 4px;
    }
    #checksBox div {
        display: flex;
        align-items: center;
        justify-content: left;
    }
    #checksBox p {
        margin-right: 10px;
    }
    #checksBox div ion-icon{
        font-size: 20px;
        margin-right: 10px;
        margin-left: 10px;
    }

    #checksBox button{
        margin-top: 10px;
    }
    #fail {
        margin-left: 10px;
        margin-right: 10px;
        font-size: 16px;
    }
    #checkBoxTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        margin-right: 10px;
        margin-left: 10px;
        margin-bottom: 5px;
    }
    #catSelector{
        list-style-type: none;
        padding: 0;
        text-align: left;
        columns: 3;
        margin-left: 10px;
    }

    #catSelector input {
        zoom: 1.4;
        -moz-transform: scale(1.4);
    }

    #catSelector li {
        text-transform: capitalize;
        display: flex;
        align-items: center;
        margin-top: 5px;
    }

    #submitPWA{
        border-radius: 20px;
        border: none;
        font-size: 16px;
    }
    #submitPWA p{
        margin: 5px;
    }

    
    .holder {
        position: fixed; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffffb8;
        padding: 5em;
        backdrop-filter: blur(10px);
        border-radius: 14px;
    }
    .checkLoader {
        margin: 0 10px;
        border: 5px solid darkgrey; 
        border-top: 5px solid var(--app-color-primary);
        border-bottom: 5px solid var(--app-color-primary);
        border-radius: 50%;
        width: 10px;
        height: 10px;
        animation: spin 2s linear infinite;
    }

    #screenshotLoader{
        background: #ffffffb8;
        padding: 5em;
        backdrop-filter: blur(10px);
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loader {
        border: 16px solid darkgrey; 
        border-top: 16px solid var(--app-color-primary);
        border-bottom: 16px solid var(--app-color-primary);
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      #checkFeedback {
          display: flex;
          align-items: base-line;
          justify-content: space-between;
      }

       #redirectFailure {
           margin-top: 10px;
           background-color: #F8F8F8;
           border: none;
           border-radius: 10px;
           display: flex;
           text-align: center;
           font-size: 18px;
       }
       #supportCheckbox {
           display: flex;
           flex-direction: column;
            align-items: center; 
       }
       #supportCheckbox h4 {
           margin: 10px 0;
       }
       #supportCheckbox input {
        zoom: 1.4;
        -moz-transform: scale(1.4);
       }
       #supportList {
          padding: 0;
          margin: 5px 0;
       }
       #supportList li {
            display: inline-flex;
            align-items: center;
            margin-top: 5px;
       }
       

    @media(max-width: 999px) {
        #screenshots {
            width: 100%;
        }
        #subProcess {
            flex-direction: column;
            align-items: flex-start;
            justify-content: left;
            padding-left: 20px;
            padding-right: 20px;
            align-items: center;
        }
        #checksBox {
            margin-top: 20px
        }
        #checkFeedback {
            flex-direction: column;
        }
        #app-carousel{
            margin-left: 4em;
            margin-right: 4em;
        }
        
       #screenshotsBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    }
    @media(max-width: 700px) {
        #headerText {
            padding-left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        #headerText p {
            margin-right: 0;
            width: fit-content;
        }
        #catSelector {
            columns: 2;
        }
        
        
    }
    @media(max-width: 500px){
        #headerText {
            text-align: center;
        }
        #headerText p, h1 {
            padding: 5px;
        }
        #supportList{
            columns: 3;
        }
        app-carousel{
            margin: 0;
        }
    }
</style>