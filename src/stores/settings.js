import {defineStore} from "pinia";

import data_en from "./data/data_en.json"
import data_ru from "./data/data_ru.json"

if (!JSON.parse(localStorage.getItem("cvData"))) {
    localStorage.setItem("cvData", JSON.stringify(data_en))
}


export const useSettingStore = defineStore("settings", {
    state: () => {
        return {
            cvData: JSON.parse(localStorage.getItem("cvData")),
        }
    },
    actions: {
        cvChangeLanguages(language) {
            switch (language) {
                case "english":
                    localStorage.setItem("cvData", JSON.stringify(data_en))
                    this.cvData = JSON.parse(localStorage.getItem("cvData"));
                    break;
                case "russia":
                    localStorage.setItem("cvData", JSON.stringify(data_ru))
                    this.cvData = JSON.parse(localStorage.getItem("cvData"))
                    break;
            }
        },
        cvChangeColors(color) {
            this.cvData.settings.colors = color;
            const root_theme = document.querySelector(':root')
            root_theme.style.setProperty('--clrx', color);
            this.cvSave()
        },
        cvDataTechAdd() {
            let txtToArr = document.querySelector("#tech").value.split(",")
            this.cvData.skills.tech = txtToArr
            this.cvSave()
        },
        cvDataSoftAdd() {
            let txtToArr = document.querySelector("#soft").value.split(",")
            this.cvData.skills.soft = txtToArr
            this.cvSave()
        },
        addLanguageCvData() {
            let newData = {
                "isLanguage": true,
                "name": "",
                "level": 10,
            }
            this.cvData.skills.language.push(newData)
            this.cvSave()
        },
        addExperienceCvData() {
            let newData = {
                "isExperience": true,
                "title": "",
                "location": "",
                "from": "",
                "to": "",
                "summary": ""
            }
            this.cvData.experiences.push(newData)
            this.cvSave()
        },
        addEducationsAndCertificationsCvData() {
            let newData = {
                "isTrue": true,
                "title": "",
                "location": "",
                "from": "",
                "to": "",
                "summary": ""
            }
            this.cvData.educationsAndCertifications.push(newData)
            this.cvSave()
        },


        cvSave() {
            localStorage.setItem("cvData", JSON.stringify(this.cvData))
        },
        cvRemove() {
            let conf = confirm("Are you sure? all your data will be deleted. 😅")
            let data = JSON.parse(localStorage.getItem("cvData")).personal_details.first_name
            if (conf) {
                let prom = prompt("Just enter your name in cv which is written. 🫣")
                if (prom.toLocaleLowerCase() == data.toLocaleLowerCase()) {
                    localStorage.removeItem("cvData")
                    alert("SUCCESS \nYour all data removed.💥 \nNow Reload page ")
                } else {
                    alert("ERROR! Your name did not match. \nPlease try again.  😔")
                }
            }
        },
        cvDownload() {
            const jsonData = localStorage.getItem("cvData");
            const blob = new Blob([jsonData], {type: 'application/json'});
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = "CV_" + this.cvData.personal_details.first_name + "_" + this.cvData.personal_details.last_name + "_" + this.cvData.settings.cv + "_" + new Date().getFullYear();
            console.log(link.download);
            link.click();
            URL.revokeObjectURL(url);
        },
        cvUpdata(event) {
            let reader = new FileReader();
            reader.onload = onReaderLoad;
            reader.readAsText(event.target.files[0]);
            let oldKey = Object.keys(this.cvData)
            console.log(oldKey);

            function onReaderLoad(event) {
                let obj = JSON.parse(event.target.result);
                let objKey = Object.keys(obj)
                console.log(objKey);
                if (oldKey[0] == objKey[0]) {
                    localStorage.setItem("cvData", JSON.stringify(obj))
                    alert("SUCCESS, \nNow reload page. 🧑‍💻")
                } else {
                    alert("Your JSON file did not match. ❓")
                }
            }
        }
    }
})
