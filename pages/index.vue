<template>
  <div>
    <IntersectionObserver @intersects="setArrow"></IntersectionObserver>
    <header class="flex flex-col justify-between items-center h-screen">
      <span></span>
      <div class="flex flex-col justify-center items-center flat-shadow-sm mt-10">
        <IntersectionAnimation startingClass="opacity-0 translate-y-3 blur-sm"
          endingClass="opacity-100 translate-y-0 blur-none">
          <img src="~assets/images/lightbulb_logo_black.svg" alt="logo" class="h-24" />
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
        <h2 class="text-4xl font-bold text-center flat-shadow-sm">About me</h2>
      </IntersectionAnimation>
      <div class="min-h-screen standard-grid-width place-items-center grid grid-cols-1 lg:grid-cols-3 gap-10">
        <IntersectionAnimation class="flex flex-col justify-center self-end lg:self-center"
          startingClass="opacity-0 -translate-x-5" endingClass="opacity-100 translate-x-0">
          <img src="~/assets/images/andreas_gerasimow.jpg" alt="Andreas Gerasimow"
            class="w-72 h-72 xl:w-80 xl:h-80 rounded-md shadow-xl">
          <div class="pl-5 py-2 border-l border-font-dark mt-10 lg:mt-5">
            <p class="font-bold">Andreas Gerasimow</p>
            <p class="">Ulm, Baden-Württemberg, Germany</p>
            <p class="">andreas.gerasimow@uni-ulm.de</p>
          </div>
        </IntersectionAnimation>
        <IntersectionAnimation class="lg:col-span-2 flex flex-col items-center justify-center self-start lg:self-center"
          startingClass="opacity-0 translate-x-5" endingClass="opacity-100 translate-x-0">
          <p class="text-2xl text-center">
            Hi, I'm Andreas and I study computer science at Ulm University in Germany.
            I am interested in web development and cybersecurity.
          </p>
          <span class="flex mt-10 gap-4">
            <a href="https://github.com/dev-andreas" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/images/social_nets/github.svg" alt="GitHub Account" class="w-12 h-12 flat-shadow-sm">
            </a>
            <a href="https://www.linkedin.com/in/andreas-gerasimow-341a551b2/" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/images/social_nets/linkedin.svg" alt="LinkedIn Account" class="h-12 flat-shadow-sm">
            </a>
          </span>
        </IntersectionAnimation>
      </div>
      <span></span>
    </section>
    <section class="min-h-screen flex flex-col items-center justify-between" id="technologies">
      <div class="flex flex-col items-center">
        <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <h2 class="text-4xl font-bold text-center flat-shadow-sm">Technologies</h2>
        </IntersectionAnimation>
        <IntersectionAnimation class="mt-10" startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <p class="text-3xl text-center standard-grid-width">This is what I use for development:</p>
        </IntersectionAnimation>
      </div>
      <div class="flex flex-col items-center sm:mt-40 xl:mt-0">
        <div class="grid grid-cols-1 xl:grid-cols-2 place-items-center standard-grid-width sm:gap-20 lg:gap-40 xl:gap-0">
          <IntersectionAnimation
            class="flex flex-col justify-center scale-60 xs:scale-70 sm:scale-100 lg:scale-125 xl:scale-100 -mt-5 lg:mt-0"
            startingClass="opacity-0 -translate-x-5" endingClass="opacity-100 translate-x-0">
            <StatGraph :items="languages" />
          </IntersectionAnimation>
          <IntersectionAnimation
            class="flex flex-wrap items-center justify-center gap-4 sm:w-132 scale-100 lg:scale-125 xl:scale-100"
            startingClass="opacity-0 translate-x-5" endingClass="opacity-100 translate-x-0">
            <div class="framework">
              <img src="~/assets/images/frameworks/vue.svg" alt="Vue.js" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Vue.js</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/nuxt.svg" alt="Nuxt.js" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Nuxt.js</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/node.svg" alt="Node.js" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Node.js</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/tailwindcss.svg" alt="Tailwind CSS" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Tailwindcss</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/spring.svg" alt="Spring" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Spring</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/pgsql.svg" alt="PostgreSQL" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">pgSQL</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/docker.svg" alt="Git" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Docker</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/git.svg" alt="Docker" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Git</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/bash.svg" alt="Bash" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Bash</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/vscode.svg" alt="VS Code" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">VS Code</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/intellij.svg" alt="Intellij Idea" />
              <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Intellij Idea</p>
            </div>
          </IntersectionAnimation>
        </div>
      </div>
      <span class="mb-40"></span>
    </section>
    <section class="min-h-screen flex flex-col items-center justify-between" id="experience">
      <div class="flex flex-col items-center">
        <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <h2 class="text-4xl font-bold text-center flat-shadow-sm mx-5">Professional Experience & Education</h2>
        </IntersectionAnimation>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 standard-grid-width gap-20 lg:gap-0 mt-10 lg:mt-0">
        <IntersectionAnimation
            class="flex flex-col items-center gap-10"
            startingClass="opacity-0 -translate-x-5" endingClass="opacity-100 translate-x-0">
          <h3 class="text-3xl text-center">Professional Experience</h3>
          <TimeLine :items="[
            { title: 'Student Assistant', institution: 'Ulm University', time: 'Since 2023', details: ['Programming of the framework FeatureIDE and the library FeatJAR for feature-oriented software development.'], image: '' },
            { title: 'Working Student', institution: 'PERI SE', time: '2022-2023', details: ['Management of a project for automatic data transmission of machine errors.', ' Development and automation of internal information systems and data transmission.'], image: '' },
            { title: 'Freelancer', institution: 'self-employed', time: '2021-2022', details: ['Development of a website and regular maintenance for the start-up ultraTEC Innovation GmbH.'], image: '' }
            ]"></TimeLine>
        </IntersectionAnimation>
        <IntersectionAnimation
            class="flex flex-col items-center gap-10"
            startingClass="opacity-0 translate-x-5" endingClass="opacity-100 translate-x-0">
          <h3 class="text-3xl text-center">Education</h3>
          <TimeLine :items="[
            { title: 'BSc Computer Science', institution: 'Ulm University', time: '2021-2024', details: '', image: '' },
            { title: 'Abitur', institution: 'Kilian-von-Steiner Schule', time: '2019-2021', details: '', image: '' }
            ]"></TimeLine>
        </IntersectionAnimation>
      </div>
      <span class="mb-40"></span>
    </section>
    <section class="min-h-screen flex flex-col items-center justify-between" id="contact">
      <div class="flex flex-col items-center">
        <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <h2 class="text-4xl font-bold text-center flat-shadow-sm">Contact</h2>
        </IntersectionAnimation>
        <IntersectionAnimation class="mt-10" startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <p class="text-3xl text-center standard-grid-width">You can contact me per E-Mail:</p>
        </IntersectionAnimation>
      </div>
      <div class="flex flex-col gap-10 mt-20 md:mt-0">
        <IntersectionAnimation class="mt-5" startingClass="opacity-0 -translate-x-5"
          endingClass="opacity-100 translate-x-0">
          <img src="~/assets/images/mail.svg" alt="Mail" class="w-64 flat-shadow">
        </IntersectionAnimation>
        <IntersectionAnimation class="w-full flex flex-col gap-5 items-center" startingClass="opacity-0 translate-x-5"
          endingClass="opacity-100 translate-x-0">
          <p class="font-bold">andreas.gerasimow12@gmail.com</p>
          <a class="btn-primary" href="mailto:andreas.gerasimow12@gmail.com">Send Mail</a>
        </IntersectionAnimation>
      </div>
      <span class="mb-10 md:mb-0"></span>
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNavbarStore } from "~/stores/stores.js";

const { showIcon } = storeToRefs(useNavbarStore());

const languages = reactive([
  { name: "Java/Kotlin", votes: 90 },
  { name: "JavaScript/TypeScript", votes: 70 },
  { name: "Python", votes: 60 },
  { name: "PHP", votes: 60 },
  { name: "SQL", votes: 40 },
]);
const showArrow = ref(true);

function setArrow(intersects) {
  showArrow.value = intersects;
}

function setIcon(value) {
  showIcon.value = !value;
}
</script>