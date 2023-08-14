<template>
  <button v-print="'#printMe'"
          :style="{ background: storeSetting.cvData.settings.colors }"
          class="btn rounded-xl w-full text-sm mt-16 text-white delay-200 transition p-3 hover:delay-0">
    {{ storeSetting.cvData.settings.buttons.print_or_download }}
  </button>

  <div class="sticky bottom-0">
    <button :style="{ background: storeSetting.cvData.settings.colors }"
            class="btn rounded-xl w-full text-sm mt-2 text-white p-3 delay-150 transition hover:delay-0"
            @click="storeSetting.cvDownload()">
      {{ storeSetting.cvData.settings.buttons.download_as_json }}
    </button>
  </div>

  <label :style="{ background: storeSetting.cvData.settings.colors }"
         class="btn rounded-xl mt-2 block bottom-0 cursor-pointer w-100 p-3 text-center text-sm text-white delay-100 transition hover:delay-0"
         for="file">
    {{ storeSetting.cvData.settings.buttons.update_json_file }}
  </label>

  <input id="file" style="display: none;" type="file" v-on:change="storeSetting.cvUpdata">
  <button :style="{ background: storeSetting.cvData.settings.colors }"
          class="btn rounded-xl w-full text-sm mt-2 text-white p-3 delay-50 transition hover:delay-0"
          @click="storeSetting.cvRemove()">
    {{ storeSetting.cvData.settings.buttons.remove_all_data }}
  </button>
</template>

<script setup>
import {useSettingStore} from "@/stores/settings"

const storeSetting = useSettingStore()
</script>
