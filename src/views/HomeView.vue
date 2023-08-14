<template>
  <div class="container-fluid">

    <div id="sidebar" class="bg-lightblue w-[600px] h-screen overflow-y-scroll d-grid p-5">

      <!-- LANGUAGE SETTING -->
      <div class="section">
        <h1 class="text-xl capitalize">
          {{ storeSetting.cvData.settings.languages.cv_languages }}
        </h1>

        <ul class="flex flex-wrap gap-2 mt-5">
          <!-- FROM MY SCRIPT -->
          <li v-for="cv_language in cvLanguages" :key="cv_language">
            <button class="text-sm bg-white py-2.5 px-4 rounded-xl capitalize transition hover:bg-gray-light active:"
                    @click="storeSetting.cvChangeLanguages(cv_language)">
              {{ cv_language.toLocaleLowerCase() }}
            </button>
          </li>
        </ul>
      </div>
      <!-- END LANGUAGE SETTING -->


      <!-- COLOR SETTING -->
      <div class="section">
        <h1 class="text-xl capitalize transition-all mt-14">{{ storeSetting.cvData.settings.languages.cv_colors }}</h1>
        <ul class="flex flex-wrap gap-3 mt-5">
          <!-- FROM MY SCRIPT -->
          <li v-for="color in cvColors" :key="color">
            <button :style="{ background: color }" class="w-8 h-8 rounded-xl active:scale-90"
                    @click="storeSetting.cvChangeColors(color)">
            </button>
          </li>
        </ul>
      </div>
      <!-- END COLOR SETTING-->


      <!-- == ACCARDION START == -->

      <!-- PERSONAL DETAIL -->
      <button class="rounded-xl text-xl mb-4 mt-14 p-3 px-5 bg-white w-full flex align-middle justify-between"
              @click="isOpen = !isOpen">
        <span>{{ storeSetting.cvData.settings.languages.cv_personal_details }}</span>
        <span v-if="isOpen"><b>--</b></span>
        <span v-else><b>+</b></span>
      </button>
      <Collapse :when="isOpen" class="collapse">
        <div class="bg-white rounded-xl p-4  mb-6">

          <div class="inputs flex w-full gap-4">
            <!-- FIRST NAME -->
            <div class="input">
              <label for="first_name">{{ storeSetting.cvData.settings.languages.first_name }}</label>
              <input id="first_name" v-model="storeSetting.cvData.personal_details.first_name" autocomplete="off"
                     class="w-full mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvSave">
            </div>
            <!-- LAST NAME -->
            <div class="input">
              <label for="last_name">{{ storeSetting.cvData.settings.languages.last_name }}</label>
              <input id="last_name" v-model="storeSetting.cvData.personal_details.last_name" autocomplete="off"
                     class="w-full mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvSave">
            </div>
          </div>
          <!-- JOB TITLE -->
          <div class="input mt-5">
            <label for="job_title">{{ storeSetting.cvData.settings.languages.job_title }}</label>
            <input id="job_title" v-model="storeSetting.cvData.personal_details.job_title" autocomplete="off"
                   class="w-full mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                   type="text" v-on:keyup="storeSetting.cvSave">
          </div>
          <!-- EMAIL -->
          <div class="input mt-5">
            <label for="email">{{ storeSetting.cvData.settings.languages.email }}</label>
            <input id="email" v-model="storeSetting.cvData.personal_details.email" autocomplete="off"
                   class="w-full mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                   type="email" v-on:keyup="storeSetting.cvSave">
          </div>
          <!-- PHONE -->
          <div class="input mt-5">
            <label for="phone">{{ storeSetting.cvData.settings.languages.phone }}</label>
            <input id="phone" v-model="storeSetting.cvData.personal_details.phone" autocomplete="off"
                   class="w-full mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                   type="text" v-on:keyup="storeSetting.cvSave">
          </div>
          <!-- LOCATION -->
          <div class="input mt-5">
            <label for="location">{{ storeSetting.cvData.settings.languages.location }}</label>
            <input id="location" v-model="storeSetting.cvData.personal_details.location" autocomplete="off"
                   class="w-full mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                   type="text" v-on:keyup="storeSetting.cvSave">
          </div>
          <!-- ABOUT ME -->
          <div class="input mt-5">
            <label for="about_me">{{ storeSetting.cvData.settings.languages.about_me }}</label>
            <textarea id="about_me" v-model="storeSetting.cvData.personal_details.about_me" autocomplete="off"
                      class="w-full min-h-[150px] mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                      type="text" v-on:keyup="storeSetting.cvSave">
            </textarea>
          </div>
        </div>
      </Collapse>
      <!-- END PERSONAL DETAIL -->


      <!-- SKILLS -->
      <button class="rounded-xl text-xl mb-4 mt-2 p-3 px-5 bg-white w-full flex align-middle justify-between"
              @click="isOpen1 = !isOpen1">
        <span>{{ storeSetting.cvData.settings.languages.skills }}</span>
        <span v-if="isOpen1"><b>--</b></span>
        <span v-else><b>+</b></span>
      </button>
      <Collapse :when="isOpen1" class="collapse">
        <div class="bg-white rounded-xl p-4 mb-6">

          <div class="inputs w-full gap-4">
            <!-- TECH -->
            <div class="input">
              <label for="tech">{{ storeSetting.cvData.settings.languages.tech }}</label>
              <input v-model="storeSetting.cvData.skills.isTech" class="float-right mt-2" type="checkbox"
                     v-on:change="storeSetting.cvSave">
              <input id="tech" v-model="storeSetting.cvData.skills.tech" autocomplete="off"
                     class="w-full mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvDataTechAdd">
            </div>
          </div>
          <div class="inputs w-full gap-4 mt-5">
            <!-- SOFT -->
            <div class="input">
              <label for="soft">{{ storeSetting.cvData.settings.languages.soft }}</label>
              <input v-model="storeSetting.cvData.skills.isSoft" class="float-right mt-2" type="checkbox"
                     v-on:change="storeSetting.cvSave">
              <input id="soft" v-model="storeSetting.cvData.skills.soft" autocomplete="off"
                     class="w-full mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvDataSoftAdd">
            </div>
          </div>

          <div class="h-2 w-full bg-lightblue mt-5"></div>
          <div class="inputs w-full gap-4 mt-5">
            <div class="">
              <!-- LANGUAGE -->
              <div v-for="l in storeSetting.cvData.skills.language" :key="l" class="input">
                <label v-if="l.name" for="language">
                  {{ l.name }}
                </label>
                <label v-else for="language">
                  {{ storeSetting.cvData.settings.languages.language }}
                </label>
                <input v-model="l.isLanguage" class="float-right mt-2" type="checkbox"
                       v-on:change="storeSetting.cvSave">

                <input id="language" v-model="l.name" autocomplete="off"
                       class="w-full mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                       type="text"
                       v-on:keyup="storeSetting.cvSave">

                <div class="flex align-middle gap-4">
                  <input v-model="l.level" class="w-full mt-2 min-w-0 flex-auto px-4 py-2" max="100" min="10" step="10"
                         type="range" v-on:change="storeSetting.cvSave">
                  <h3 class="w-[60px] text-center mt-2.5">{{ l.level }}</h3>
                </div>
              </div>
            </div>


            <button class="w-full transition bg-lightblue p-2.5 rounded-lg active:bg-lightblue hover:bg-gray-light"
                    @click="storeSetting.addLanguageCvData()">
              {{ storeSetting.cvData.settings.languages.add_language }}
            </button>
          </div>
        </div>
      </Collapse>
      <!-- ENDCONTACT -->


      <!-- SOCIALS START -->
      <button class="rounded-xl text-xl mb-4 p-3 px-5 bg-white w-full flex align-middle justify-between"
              @click="isOpen2= !isOpen2">
        <span>{{ storeSetting.cvData.settings.languages.social }}</span>
        <span v-if="isOpen2"><b>--</b></span>
        <span v-else><b>+</b></span>
      </button>
      <Collapse :when="isOpen2" class="collapse">
        <div class="bg-white rounded-xl p-4  mb-6">

          <div class="inputs w-full">
            <!-- SOCIALS -->
            <div class="input">
              <label class="flex gap-2" for="github">
                <img alt="Github" src="../components/svg/github.svg" width="18"> github
              </label>
              <input id="github" v-model="storeSetting.cvData.socials.github" autocomplete="off"
                     class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvSave">
            </div>
            <div class="input mt-4">
              <label class="flex gap-2" for="twitter">
                <img alt="twitter" src="../components/svg/twitter.svg" width="18"> twitter
              </label>
              <input id="twitter" v-model="storeSetting.cvData.socials.twitter" autocomplete="off"
                     class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvSave">
            </div>
            <div class="input mt-4">
              <label class="flex gap-2" for="instagram">
                <img alt="instagram" src="../components/svg/instagram.svg" width="18"> instagram
              </label>
              <input id="instagram" v-model="storeSetting.cvData.socials.instagram" autocomplete="off"
                     class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvSave">
            </div>
            <div class="input mt-4">
              <label class="flex gap-2" for="linkedin">
                <img alt="linkedin" src="../components/svg/linkedin.svg" width="18"> linkedin
              </label>
              <input id="linkedin" v-model="storeSetting.cvData.socials.linkedin" autocomplete="off"
                     class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvSave">
            </div>
            <div class="input mt-4">
              <label class="flex gap-2" for="telegram">
                <img alt="telegram" src="../components/svg/telegram.svg" width="18"> telegram
              </label>
              <input id="telegram" v-model="storeSetting.cvData.socials.telegram" autocomplete="off"
                     class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvSave">
            </div>
            <div class="input mt-4">
              <label class="flex gap-2" for="web">
                <img alt="web" src="../components/svg/web.svg" width="18"> web portfolio/website
              </label>
              <input id="web" v-model="storeSetting.cvData.socials.web" autocomplete="off"
                     class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvSave">
            </div>
          </div>
        </div>
      </Collapse>
      <!-- END SOCIALS -->


      <!-- EXPERIENCES START -->
      <button class="rounded-xl text-xl mb-4 p-3 px-5 bg-white w-full flex align-middle justify-between"
              @click="isOpen3 = !isOpen3">
        <span>{{ storeSetting.cvData.settings.languages.experience }}</span>
        <span v-if="isOpen3"><b>--</b></span>
        <span v-else><b>+</b></span>
      </button>
      <Collapse :when="isOpen3" class="collapse">
        <div class="bg-white rounded-xl p-4 mb-6">
          <div class="inputs w-full">
            <!-- EXPERIENCES -->
            <div v-for="e in storeSetting.cvData.experiences" :key="e" class="input  mb-3">
              <div v-if="e.title" class="w-full bg-lightblue mt-5 mb-5 text-center uppercase">{{ e.title }}</div>
              <div v-else class="w-full h-2 bg-lightblue mt-5 mb-5"></div>


              <div class="flex gap-2 w-full justify-between">
                <label>
                  {{ storeSetting.cvData.settings.languages.experience }}
                </label>
                <input v-model="e.isExperience" class="" type="checkbox" v-on:change="storeSetting.cvSave">
              </div>
              <label for="">{{ storeSetting.cvData.settings.languages.title }}</label>
              <input v-model="e.title" autocomplete="off"
                     class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvSave">


              <div class="input mt-4">
                <label>{{ storeSetting.cvData.settings.languages.location }}</label>
                <input v-model="e.location" autocomplete="off"
                       class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                       type="text" v-on:keyup="storeSetting.cvSave">
              </div>
              <div class="flex gap-4 w-full">
                <div class="input mt-4">
                  <label>{{ storeSetting.cvData.settings.languages.from }}</label>
                  <input v-model="e.from" autocomplete="off"
                         class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                         type="text" v-on:keyup="storeSetting.cvSave">
                </div>
                <div class="input mt-4">
                  <label>{{ storeSetting.cvData.settings.languages.to }}</label>
                  <input v-model="e.to" autocomplete="off"
                         class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                         type="text" v-on:keyup="storeSetting.cvSave">
                </div>
              </div>
              <!-- ABOUT ME -->
              <div class="input mt-5">
                <label for="about_me">{{ storeSetting.cvData.settings.languages.summary }}</label>
                <textarea id="about_me" v-model="e.summary" autocomplete="off"
                          class="w-full min-h-[150px] mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                          type="text" v-on:keyup="storeSetting.cvSave">
                </textarea>
              </div>
            </div>
          </div>


          <button class="w-full transition bg-lightblue p-2.5 rounded-lg active:bg-lightblue hover:bg-gray-light"
                  @click="storeSetting.addExperienceCvData()">
            {{ storeSetting.cvData.settings.languages.add_experience }}
          </button>
        </div>
      </Collapse>
      <!-- EXPERIENCES END -->


      <!-- EDUCATION AND CERTIFICATION START -->
      <button class="rounded-xl text-xl mb-4 p-3 px-5 bg-white w-full flex align-middle justify-between"
              @click="isOpen4 = !isOpen4">
        <span>{{ storeSetting.cvData.settings.languages.educationsAndCertifications }}</span>
        <span v-if="isOpen4"><b>--</b></span>
        <span v-else><b>+</b></span>
      </button>
      <Collapse :when="isOpen4" class="collapse">
        <div class="bg-white rounded-xl p-4 mb-6">
          <div class="inputs w-full">
            <!-- EXPERIENCES -->
            <div v-for="e in storeSetting.cvData.educationsAndCertifications" :key="e" class="input  mb-3">
              <div v-if="e.title" class="w-full bg-lightblue mt-5 mb-5 text-center uppercase">{{ e.title }}</div>
              <div v-else class="w-full h-2 bg-lightblue mt-5 mb-5"></div>


              <div class="flex gap-2 w-full justify-between">
                <label>
                  {{ storeSetting.cvData.settings.languages.educationsAndCertifications }}
                </label>
                <input v-model="e.isTrue" class="" type="checkbox" v-on:change="storeSetting.cvSave">
              </div>
              <label for="">{{ storeSetting.cvData.settings.languages.title }}</label>
              <input v-model="e.title" autocomplete="off"
                     class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                     type="text" v-on:keyup="storeSetting.cvSave">


              <div class="input mt-4">
                <label>{{ storeSetting.cvData.settings.languages.location }}</label>
                <input v-model="e.location" autocomplete="off"
                       class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                       type="text" v-on:keyup="storeSetting.cvSave">
              </div>
              <div class="flex gap-4 w-full">
                <div class="input mt-4">
                  <label>{{ storeSetting.cvData.settings.languages.from }}</label>
                  <input v-model="e.from" autocomplete="off"
                         class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                         type="text" v-on:keyup="storeSetting.cvSave">
                </div>
                <div class="input mt-4">
                  <label>{{ storeSetting.cvData.settings.languages.to }}</label>
                  <input v-model="e.to" autocomplete="off"
                         class="w-full mt-2  flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                         type="text" v-on:keyup="storeSetting.cvSave">
                </div>
              </div>
              <!-- ABOUT ME -->
              <div class="input mt-5">
                <label for="about_me">{{ storeSetting.cvData.settings.languages.summary }}</label>
                <textarea id="about_me" v-model="e.summary" autocomplete="off"
                          class="w-full min-h-[150px] mt-2 min-w-0 flex-auto rounded-lg px-4 py-2 text-dark shadow-sm ring-0"
                          type="text" v-on:keyup="storeSetting.cvSave">
                </textarea>
              </div>
            </div>
          </div>
          <button class="w-full transition bg-lightblue p-2.5 rounded-lg active:bg-lightblue hover:bg-gray-light"
                  @click="storeSetting. addEducationsAndCertificationsCvData()">
            {{ storeSetting.cvData.settings.languages.add_educationsAndCertifications }}
          </button>
        </div>
      </Collapse>
      <!-- EDUCATION AND CERTIFICATION END -->
      <!-- == ACCARDION END == -->


      <br>
      <!-- MAIN BUTTONS -->
      <mainButtons></mainButtons>
      <!-- MAIN BUTTONS -->
    </div>

    <!-- CV SECTION -->
    <cvComponent></cvComponent>
    <!-- CV SECTION -->

  </div>
</template>

<script setup>
import {ref} from 'vue'
import {Collapse} from 'vue-collapsed'
import {useSettingStore} from "@/stores/settings";
import CvComponent from "@/components/cvComponent.vue";
import MainButtons from "@/components/mainButtons.vue";

const storeSetting = useSettingStore()

const cvLanguages = ["english", "russia"]

const cvColors = ["#000", "#00a8ef", "#ff5900", "#6055f7", "#0ebb62"]


const isOpen = ref(false)
const isOpen1 = ref(false)
const isOpen2 = ref(false)
const isOpen3 = ref(false)
const isOpen4 = ref(false)
</script>

<style scoped>
.collapse {
  transition: height .3s ease-out;
  visibility: visible;
}
</style>
