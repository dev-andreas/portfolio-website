<template>
  <div class="flex flex-col gap-20">
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
        <p class="mt-1">Computer Science Student</p>
      </div>
      <div class="h-10 w-10 mb-24">
        <Transition name="slide-bottom">
          <SvgpathsChevronDownSvg v-if="showArrow" class="h-10 fill-font-dark animate-bounce" />
        </Transition>
      </div>
    </header>
    <section class="min-h-screen flex flex-col items-center justify-between gap-10" id="about">
      <div class="flex flex-col items-center">
        <IntersectionAnimation startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <h2 class="section-header standard-grid-width">About me</h2>
        </IntersectionAnimation>
      </div>
      <div class="standard-grid-width place-items-center grid grid-cols-1 lg:grid-cols-3 gap-10">
        <IntersectionAnimation class="flex flex-col justify-center self-end lg:self-center"
          startingClass="opacity-0 -translate-x-5" endingClass="opacity-100 translate-x-0">
          <img src="~/assets/images/andreas_gerasimow.jpg" alt="Andreas Gerasimow"
            class="w-72 h-72 xl:w-80 xl:h-80 rounded-md shadow-xl">
          <div class="pl-5 py-2 border-l border-font-dark mt-10 lg:mt-5">
            <p class="font-bold">Andreas Gerasimow</p>
            <p class="">Amherst, Massachusetts, USA</p>
            <p class="">agerasimow@umass.edu</p>
          </div>
        </IntersectionAnimation>
        <IntersectionAnimation class="lg:col-span-2 flex flex-col items-center justify-center self-start lg:self-center"
          startingClass="opacity-0 translate-x-5" endingClass="opacity-100 translate-x-0">
          <p class="section-subheader">
            Hi, my name is Andreas and I'm currently doing an exchange year at the University of Massachusetts Amherst.
            I'm a graduate computer science student specializing in IT security.
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
    <section class="min-h-screen flex flex-col items-center justify-between gap-10" id="technologies">
      <div class="flex flex-col items-center">
        <IntersectionAnimation startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <h2 class="section-header standard-grid-width">Languages & Technologies</h2>
        </IntersectionAnimation>
        <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <p class="section-subheader standard-grid-width">This is what I have used in my work and projects:</p>
        </IntersectionAnimation>
      </div>
      <div class="flex flex-col items-center">
        <div class="grid grid-cols-1 xl:grid-cols-2 place-items-center standard-grid-width sm:gap-20 lg:gap-40 xl:gap-0">
          <IntersectionAnimation
            class="flex flex-col justify-center scale-60 xs:scale-70 sm:scale-100 lg:scale-125 xl:scale-100 -mt-24 xs:-mt-20 sm:mt-0 lg:mt-12 xl:mt-0"
            startingClass="opacity-0 -translate-x-5" endingClass="opacity-100 translate-x-0">
            <StatGraph :items="languages" />
          </IntersectionAnimation>
          <IntersectionAnimation
            class="flex flex-wrap items-center justify-center gap-4 sm:w-132 scale-100 lg:scale-125 xl:scale-100 xs:mb-0 lg:mb-12 xl:mb-0"
            startingClass="opacity-0 translate-x-5" endingClass="opacity-100 translate-x-0">
            <div class="framework">
              <img src="~/assets/images/frameworks/tux.svg" alt="Linux" />
              <p class="text-sm sm:text-base font-bold my-1">Linux</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/git.svg" alt="Git" />
              <p class="text-sm sm:text-base font-bold my-1">Git</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/bash.svg" alt="Bash" />
              <p class="text-sm sm:text-base font-bold my-1">Bash</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/pgsql.svg" alt="PostgreSQL" />
              <p class="text-sm sm:text-base font-bold my-1">pgSQL</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/docker.svg" alt="Docker" />
              <p class="text-sm sm:text-base font-bold my-1">Docker</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/spring.svg" alt="Spring" />
              <p class="text-sm sm:text-base font-bold my-1">Spring</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/vscode.svg" alt="VS Code" />
              <p class="text-sm sm:text-base font-bold my-1">VSCode</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/intellij.svg" alt="Intellij Idea" />
              <p class="text-sm sm:text-base font-bold my-1">Intellij</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/vue.svg" alt="Vue.js" />
              <p class="text-sm sm:text-base font-bold my-1">Vue.js</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/nuxt.svg" alt="Nuxt.js" />
              <p class="text-sm sm:text-base font-bold my-1">Nuxt.js</p>
            </div>
            <div class="framework">
              <img src="~/assets/images/frameworks/node.svg" alt="Node.js" />
              <p class="text-sm sm:text-base font-bold my-1">Node.js</p>
            </div>
          </IntersectionAnimation>
        </div>
      </div>
      <span></span>
    </section>
    <section class="min-h-screen flex flex-col items-center justify-between gap-10" id="experience">
      <div class="flex flex-col items-center">
        <IntersectionAnimation startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <h2 class="section-header standard-grid-width">Professional Experience & Education</h2>
        </IntersectionAnimation>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 standard-grid-width gap-16 lg:gap-0">
        <IntersectionAnimation
            class="flex flex-col items-center gap-10"
            startingClass="opacity-0 -translate-x-5" endingClass="opacity-100 translate-x-0">
          <h3 class="section-subheader standard-grid-width">Professional Experience</h3>
          <TimeLine :items="[
            { title: 'Student Assistant', institution: 'Ulm University', time: 'Nov 2023 - Aug 2024', details: ['Collaborated on the FeatureIDE framework and the FeatJAR library for feature-oriented software development. Both projects are open-source and available on GitHub.'], image: '' },
            { title: 'Working Student', institution: 'PERI SE', time: 'Sep 2022 - Oct 2023', details: ['Developed a web application interface for automatic data transmission of errors by machines in production halls.', 'Collaborated on the company’s internal information systems in an agile team.'], image: '' },
            { title: 'Freelancer', institution: 'self-employed', time: 'Aug 2021 - Aug 2022', details: ['Developed and maintained a website for the start-up ultraTEC Innovation GmbH.'], image: '' }
            ]"></TimeLine>
        </IntersectionAnimation>
        <IntersectionAnimation
            class="flex flex-col items-center gap-10"
            startingClass="opacity-0 translate-x-5" endingClass="opacity-100 translate-x-0">
          <h3 class="section-subheader standard-grid-width">Education</h3>
          <TimeLine :items="[
            { title: 'MSc Computer Science (Exchange Year)', institution: 'University of Massachusetts Amherst', time: 'Sep 2024 - May 2025', details: '', image: '' },
            { title: 'BSc Computer Science', institution: 'Ulm University', time: 'Sep 2021 - Aug 2024', details: '', image: '' },
            { title: 'Abitur', institution: 'Kilian-von-Steiner Schule', time: 'Sep 2018 - Jun 2021', details: '', image: '' }
            ]"></TimeLine>
        </IntersectionAnimation>
      </div>
      <span></span>
    </section>
    <section class="min-h-screen flex flex-col items-center justify-between gap-10" id="contact">
      <div class="flex flex-col items-center">
        <IntersectionAnimation startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <h2 class="section-header standard-grid-width">Contact</h2>
        </IntersectionAnimation>
        <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <p class="section-subheader standard-grid-width">You can contact me per E-Mail:</p>
        </IntersectionAnimation>
      </div>
      <div class="flex flex-col gap-10">
        <IntersectionAnimation startingClass="opacity-0 -translate-x-5"
          endingClass="opacity-100 translate-x-0">
          <img src="~/assets/images/mail.svg" alt="Mail" class="w-64 flat-shadow">
        </IntersectionAnimation>
        <IntersectionAnimation class="w-full flex flex-col gap-5 items-center" startingClass="opacity-0 translate-x-5"
          endingClass="opacity-100 translate-x-0">
          <p class="font-bold">andreas.gerasimow12@gmail.com</p>
          <a class="btn-primary" href="mailto:andreas.gerasimow12@gmail.com">Send Mail</a>
        </IntersectionAnimation>
      </div>
      <span></span>
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
  { name: "SQL", votes: 60 },
  { name: "PHP", votes: 60 },
  { name: "Python", votes: 40 },
]);
const showArrow = ref(true);

function setArrow(intersects) {
  showArrow.value = intersects;
}

function setIcon(value) {
  showIcon.value = !value;
}
</script>