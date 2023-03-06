<template>
  <div>
    <IntersectionObserver @intersects="setArrow"></IntersectionObserver>
    <header class="flex flex-col justify-between items-center h-screen">
      <span></span>
      <div class="flex flex-col justify-center items-center flat-shadow mt-10">
        <IntersectionAnimation startingClass="opacity-0 translate-y-3 blur-sm" endingClass="opacity-100 translate-y-0 blur-none">
          <img
            src="~assets/images/lightbulb_logo_black.svg"
            alt="logo"
            class="h-24"
          />
          <IntersectionObserver @intersects="(value) => setIcon(value)"></IntersectionObserver>
        </IntersectionAnimation>
        <h1 class="text-font-dark text-3xl xs:text-4xl sm:text-5xl md:text-6xl mt-3 font-bold">Andreas Gerasimow</h1>
        <p class="mt-1 text-xs xs:text-sm sm:text-base">Computer Science Student and Full Stack Developer</p>
      </div>
      <div class="h-10 w-10 mb-24">
        <Transition name="slide-bottom">
          <SvgpathsChevronDownSvg v-if="showArrow" class="h-10 fill-font-dark animate-bounce" />
        </Transition>
      </div>
    </header>
    <section class="flex flex-col items-center justify-between" id="about">
      <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5" endingClass="opacity-100 translate-y-0">
        <h2 class="text-4xl font-light border-b border-font-dark pb-1 text-center">About me</h2>
      </IntersectionAnimation>
      <div class="min-h-screen standard-grid-width place-items-center grid grid-cols-1 lg:grid-cols-3 gap-10">
        <IntersectionAnimation 
          class="flex flex-col justify-center self-end lg:self-center"
          startingClass="opacity-0 -translate-x-5" 
          endingClass="opacity-100 translate-x-0">
          <img src="~/assets/images/andreas_gerasimow.jpg" alt="Andreas Gerasimow" class="w-72 h-72 xl:w-80 xl:h-80 rounded-md shadow-xl">
          <div class="pl-5 py-2 border-l border-font-dark mt-5">
            <p class="font-bold">Andreas Gerasimow</p>
            <p class="">Ulm, Baden-Württemberg, Germany</p>
            <p class="">andreas.gerasimow@uni-ulm.de</p>
          </div>
        </IntersectionAnimation>
        <IntersectionAnimation 
          class="lg:col-span-2 flex flex-col items-center justify-center self-start lg:self-center"
          startingClass="opacity-0 translate-x-5" 
          endingClass="opacity-100 translate-x-0">
          <p class="text-2xl text-center">
            Hi, I'm Andreas and I study computer science at Ulm University in Germany. 
            I am interested in web development and almost everything else that has to do with computers.
          </p>
          <span class="flex mt-10">
            <a href="https://www.linkedin.com/in/andreas-gerasimow-341a551b2/" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/images/social_nets/linkedin.svg" alt="LinkedIn Account" class="w-12 h-12 mr-4 flat-shadow">
            </a>
            <a href="https://github.com/dev-andreas" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/images/social_nets/github.svg" alt="GitHub Account" class="w-12 h-12 mr-4 flat-shadow">
            </a>
            <a href="https://www.instagram.com/real_gera_/" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/images/social_nets/instagram.svg" alt="Instagram Account" class="w-12 h-12 flat-shadow">
            </a>
          </span>
        </IntersectionAnimation>
      </div>
      <span></span>
    </section>
    <section class="min-h-screen flex flex-col items-center justify-between" id="technologies">
      <div class="flex flex-col items-center">
        <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5" endingClass="opacity-100 translate-y-0">
          <h2 class="text-4xl font-light border-b border-font-dark pb-1 text-center">Technologies</h2>
        </IntersectionAnimation>
        <IntersectionAnimation class="mt-10" startingClass="opacity-0 translate-y-5" endingClass="opacity-100 translate-y-0">
          <p class="font-bold text-3xl text-center standard-grid-width">This is what I use for development:</p>
        </IntersectionAnimation>
      </div>
      <div class="flex flex-col items-center sm:mt-40 xl:mt-0">
      <div class="grid grid-cols-1 xl:grid-cols-2 place-items-center standard-grid-width sm:gap-20 lg:gap-40 xl:gap-0">
          <IntersectionAnimation 
            class="flex flex-col justify-center scale-60 xs:scale-70 sm:scale-100 lg:scale-125 xl:scale-100"
            startingClass="opacity-0 -translate-x-5" 
            endingClass="opacity-100 translate-x-0">
            <StatGraph :items="languages" />
          </IntersectionAnimation>
          <IntersectionAnimation 
            class="flex flex-wrap items-center justify-center gap-4 sm:w-132 scale-100 lg:scale-125 xl:scale-100"
            startingClass="opacity-0 translate-x-5" 
            endingClass="opacity-100 translate-x-0">
            <div class="framework">
              <img
                src="~/assets/images/frameworks/vue.svg"
                alt="Vue.js"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Vue.js</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/nuxt.svg"
                alt="Nuxt.js"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Nuxt.js</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/node.svg"
                alt="Node.js"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Node.js</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/django.svg"
                alt="Django"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Django</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/pgsql.svg"
                alt="PostgreSQL"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">pgSQL</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/mysql.svg"
                alt="PostgreSQL"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">MySQL</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/tailwindcss.svg"
                alt="Tailwind CSS"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Tailwindcss</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/jfx.svg"
                alt="JavaFX"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">JavaFX</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/git.svg"
                alt="Git"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Git</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/bash.svg"
                alt="Bash"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Bash</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/vscode.svg"
                alt="VSCode"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">VSCode</p>
            </div>
            <div class="framework">
              <img
                src="~/assets/images/frameworks/intellij.svg"
                alt="Intellij Idea"
              />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Intellij Idea</p>
            </div>
          </IntersectionAnimation>
        </div>
      </div>
      <span class="mb-40"></span>
    </section>
    <section class="min-h-screen flex flex-col items-center justify-between" id="projects">
      <div class="flex flex-col items-center">
        <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5" endingClass="opacity-100 translate-y-0">
          <h2 class="text-4xl font-light border-b border-font-dark pb-1 text-center">Projects / Work</h2>
        </IntersectionAnimation>
        <IntersectionAnimation class="mt-10" startingClass="opacity-0 translate-y-5" endingClass="opacity-100 translate-y-0">
        <p class="font-bold text-3xl text-center standard-grid-width">Projects I have completed or am still working on:</p>
        </IntersectionAnimation>
      </div>
      <div class="flex flex-col items-center mt-10 sm:mt-40 md:mt-0">
        <p class="mb-10">Touch a box to learn more</p>
        <div id="projects" class="flex flex-wrap items-center justify-center standard-grid-width gap-8">
          <ProjectBox :title="'PERI Smart Factory'" :alt="'Working Student'" :index="1" :logo="hatImage">
            Working Student / Digitalization and automation of quality control.
          </ProjectBox>
          <ProjectBox :title="'UltraTEC Website'" :alt="'UltraTEC Website'" :index="2" :logo="ultratecLogo">
            Website of a start up which manufactures ultrasonic deburring machines.</ProjectBox>
          <ProjectBox :title="'cryptoeditor'" :alt="'cryptoeditor'" :index="3" :logo="cryptoeditor">
            A program to encrypt passwords and files.
          </ProjectBox>
          <ProjectBox :title="'Poll App'" :alt="'Poll App'" :index="4" :logo="pollapp">
            A web app for anonymous surveys.
          </ProjectBox>
        </div>
      </div>
      <span class="mb-40"></span>
    </section>
    <section class="min-h-screen flex flex-col items-center justify-between" id="contact">
        <div class="flex flex-col items-center">
          <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5" endingClass="opacity-100 translate-y-0">
            <h2 class="text-4xl font-light border-b border-font-dark pb-1 text-center">Contact</h2>
          </IntersectionAnimation>
          <IntersectionAnimation class="mt-10" startingClass="opacity-0 translate-y-5" endingClass="opacity-100 translate-y-0">
            <p class="font-bold text-3xl text-center standard-grid-width">You can contact me per E-Mail:</p>
          </IntersectionAnimation>
        </div>
        <div class="grid md:grid-cols-2 gap-8 standard-grid-width place-items-center mt-20 md:mt-0">
          <IntersectionAnimation class="mt-5" startingClass="opacity-0 -translate-x-5" endingClass="opacity-100 translate-x-0">
            <img src="~/assets/images/mail.svg" alt="Mail" class="w-64 flat-shadow">
          </IntersectionAnimation>
          <IntersectionAnimation class="w-full" startingClass="opacity-0 translate-x-5" endingClass="opacity-100 translate-x-0">
            <ContactForm />
          </IntersectionAnimation>
        </div>
        <span class="mb-10 md:mb-0"></span>
    </section>
  </div>
</template>

<script setup>
import ultratecLogo from "~/assets/images/external/ultratec_logo.svg";
import hatImage from "~/assets/images/hat.svg";
import cryptoeditor from "~/assets/images/external/cryptoeditor.svg";
import pollapp from "~/assets/images/external/pollapp.svg";
import { storeToRefs } from "pinia";
import { useNavbarStore } from "~/stores/stores.js";

const { showIcon } = storeToRefs(useNavbarStore());

const languages = reactive([
  { name: "Java SE", votes: 90 },
  { name: "JavaScript", votes: 70 },
  { name: "Python", votes: 60 },
  { name: "PHP", votes: 70 },
  { name: "SQL", votes: 60 },
]);
const showArrow = ref(true);

function setArrow(intersects) {
  showArrow.value = intersects;
}

function setIcon(value) {
  showIcon.value = !value;
}
</script>