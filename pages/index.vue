<template>
  <div class="flex flex-col gap-10">
    <header class="flex flex-col justify-between items-center h-screen">
      <IntersectionObserver @intersects="setArrow"></IntersectionObserver>
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
      <div class="h-10 w-10 mb-40">
        <Transition name="slide-bottom">
          <SvgpathsChevronDownSvg v-if="showArrow" class="h-10 fill-font-dark animate-bounce" />
        </Transition>
      </div>
    </header>
  
    <section class="section-layout relative" id="about">
      <SectionRivets class="absolute"></SectionRivets>
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
            class="w-72 h-72 xl:w-80 xl:h-80 rounded-3xl shadow-xl">
          <div class="pl-5 py-2 border-l border-font-dark mt-10 lg:mt-5">
            <p class="font-bold">Andreas Gerasimow</p>
            <p class="">Amherst, Massachusetts, USA</p>
            <p class="">{{ email }}</p>
          </div>
        </IntersectionAnimation>
        <IntersectionAnimation class="lg:col-span-2 flex flex-col items-center justify-center self-start lg:self-center"
          startingClass="opacity-0 translate-x-5" endingClass="opacity-100 translate-x-0">
          <p class="section-subheader">
            Hi, I’m Andreas, a graduate computer science student specializing in cybersecurity.
            I’m currently pursuing an exchange year at the University of Massachusetts Amherst.
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

    <section class="section-layout relative" id="technologies">
      <SectionRivets class="absolute"></SectionRivets>
      <div class="flex flex-col items-center">
        <IntersectionAnimation startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <h2 class="section-header standard-grid-width">Technologies & Languages</h2>
        </IntersectionAnimation>
        <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <p class="section-subheader standard-grid-width">Here are the tools I’ve used in my work and projects</p>
        </IntersectionAnimation>
      </div>
      <div class="flex flex-col items-center">
        <div class="grid grid-cols-1 xl:grid-cols-2 place-items-center standard-grid-width gap-20">
          <IntersectionAnimation
            class="flex flex-col row-span-2"
            startingClass="opacity-0 -translate-x-5" endingClass="opacity-100 translate-x-0">
            <div class="flex flex-wrap items-center justify-center gap-4 sm:w-132 xl:scale-100">
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
            </div>
          </IntersectionAnimation>
          <IntersectionAnimation
              class="flex flex-col gap-4"
              startingClass="opacity-0 translate-x-5" endingClass="opacity-100 translate-x-0">
            <p class="section-subheader">Languages</p>
            <div class="flex justify-center items-center flex-wrap gap-6 sm:w-132">
              <div class="language">
                <p>Java</p>
              </div>
              <div class="language">
                <p>Kotlin</p>
              </div>
              <div class="language">
                <p>JavaScript</p>
              </div>
              <div class="language">
                <p>TypeScript</p>
              </div>
              <div class="language">
                <p>SQL</p>
              </div>
              <div class="language">
                <p>PHP</p>
              </div>
              <div class="language">
                <p>Python</p>
              </div>
              <div class="language">
                <p>Matlab</p>
              </div>
            </div>
          </IntersectionAnimation>
          <IntersectionAnimation
              class="flex flex-col gap-4"
              startingClass="opacity-0 translate-y-5" endingClass="opacity-100 translate-y-0">
            <p class="section-subheader">Contributions</p>
            <div class="flex flex-col gap-4">
              <div class="project">
                <a
                    href="https://github.com/FeatureIDE/FeatureIDE"
                    target="_blank"
                    rel="noopener"
                    class="px-2 py-1 mt-1 tracking-wider font-bold border border-font-dark rounded-md flex items-center gap-2 hover:bg-font-dark group flat-shadow bg-backg-light cursor-pointer transition-all duration-200 ease-out">
                  <span class="group-hover:text-font-light transition-all duration-200 ease-out">FeatureIDE</span>
                  <SvgpathsArrowUpRightSvg class="stroke-font-dark group-hover:stroke-font-light h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 ease-out"></SvgpathsArrowUpRightSvg>
                </a>
                <p>An extensible framework for feature-oriented software development</p>
              </div>
              <div class="project">
                <a
                    href="https://github.com/FeatureIDE/FeatJAR"
                    target="_blank"
                    rel="noopener"
                    class="px-2 py-1 mt-1 tracking-wider font-bold border border-font-dark rounded-md flex items-center gap-2 hover:bg-font-dark group flat-shadow bg-backg-light cursor-pointer transition-all duration-200 ease-out">
                  <span class="group-hover:text-font-light transition-all duration-200 ease-out">FeatJAR</span>
                  <SvgpathsArrowUpRightSvg class="stroke-font-dark group-hover:stroke-font-light h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 ease-out"></SvgpathsArrowUpRightSvg>
                </a>
                <p>Java libraries for feature-oriented software development</p>
              </div>
            </div>
          </IntersectionAnimation>
        </div>
      </div>
      <span></span>
    </section>

    <section class="section-layout relative" id="experience">
      <SectionRivets class="absolute"></SectionRivets>
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
          <h3 class="section-subheader">Professional Experience</h3>
          <TimeLine :items="[
            { title: 'Student Assistant', institution: 'Ulm University', time: 'Nov 2023 - Aug 2024', details: ['Collaborated on the FeatureIDE framework and the FeatJAR library for feature-oriented software development. Both projects are open-source and available on GitHub.'], image: '' },
            { title: 'Working Student', institution: 'PERI SE', time: 'Sep 2022 - Oct 2023', details: ['Developed a web application interface for automatic data transmission of errors by machines in production halls.', 'Collaborated on the company’s internal information systems in an agile team.'], image: '' },
            { title: 'Freelancer', institution: 'self-employed', time: 'Aug 2021 - Aug 2022', details: ['Developed and maintained a website for the start-up ultraTEC Innovation GmbH.'], image: '' }
            ]"></TimeLine>
        </IntersectionAnimation>
        <IntersectionAnimation
            class="flex flex-col items-center gap-10"
            startingClass="opacity-0 translate-x-5" endingClass="opacity-100 translate-x-0">
          <h3 class="section-subheader">Education</h3>
          <TimeLine :items="[
            { title: 'Computer Science, Master of Science (Exchange Year)', institution: 'University of Massachusetts Amherst', time: 'Sep 2024 - present', details: '', image: '' },
            { title: 'Computer Science, Master of Science', institution: 'Ulm University', time: 'Sep 2021 - Aug 2024', details: ['Grade: 1.2', 'Bachelor Thesis Title: LoRa for localization in outdoor scenarios'], image: '' },
            { title: 'Abitur', institution: 'Kilian-von-Steiner Schule', time: 'Sep 2018 - Jun 2021', details: [], image: '' }
            ]"></TimeLine>
        </IntersectionAnimation>
      </div>
      <span></span>
    </section>

    <section class="section-layout relative" id="contact">
      <SectionRivets class="absolute"></SectionRivets>
      <div class="flex flex-col items-center">
        <IntersectionAnimation startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <h2 class="section-header standard-grid-width">Contact</h2>
        </IntersectionAnimation>
        <IntersectionAnimation class="mt-5" startingClass="opacity-0 translate-y-5"
          endingClass="opacity-100 translate-y-0">
          <p class="section-subheader standard-grid-width">You can reach me via email</p>
        </IntersectionAnimation>
      </div>
      <div class="flex flex-col items-center gap-5">
        <IntersectionAnimation startingClass="opacity-0 -translate-x-5"
          endingClass="opacity-100 translate-x-0">
          <img src="~/assets/images/mail.svg" alt="Mail" class="w-64 flat-shadow">
        </IntersectionAnimation>
          <IntersectionAnimation startingClass="opacity-0 translate-x-5"
            endingClass="opacity-100 translate-x-0" class="flex flex-col items-center gap-5">
            <p class="font-bold">{{ email }}</p>
            <a class="btn-primary" :href="'mailto:' + email">Send Mail</a>
          </IntersectionAnimation>
        </div>
        <div></div>
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
const email = ref("andreas@gerasimow.de");

function setArrow(intersects) {
  showArrow.value = intersects;
}

function setIcon(value) {
  showIcon.value = !value;
}
</script>

<style scoped>
  .section-layout {
    @apply min-h-screen flex flex-col items-center justify-between gap-10 border-t border-primary-200 pt-10;
  }
</style>