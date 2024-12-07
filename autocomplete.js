let availableKeywords = [
  "Agoot",
  "Alakaak",
  "Alimango",
  "Alimasag",
  "Alumahan",
  "Alumahang-bato",
  "Alupihang-dagat",
  "Apahap",
  "Arosep",
  "Asohos",
  "Ataba",
  "Ayungin",
  "Babansi",
  "Bakoko",
  "Balatan",
  "Balo",
  "Balyena",
  "Banagan",
  "Banak",
  "Bangus",
  "Bidbid",
  "Biloan",
  "Bisugo",
  "Bitilya",
  "Biya",
  "Bolador",
  "Buan-buan",
  "Bulate",
  "Burara",
  "Butanding",
  "Canoos",
  "Chabeta",
  "Curacha",
  "Dalag-dagat",
  "Dalag",
  "Dalagang-bukid",
  "Danggit",
  "Dapa",
  "Dikya",
  "Dilat",
  "Dilis",
  "Diwal",
  "Dorado",
  "Dulong",
  "Espada",
  "Galunggong",
  "Gulyasan",
  "Guso",
  "Halaan",
  "Hasa-hasa",
  "Hipon",
  "Hito",
  "Igat",
  "Isu",
  "Kabasi",
  "Kalaso",
  "Kanduli",
  "Kansusuit",
  "Kitang",
  "Kuhol",
  "Labahita",
  "Lao-lao",
  "Lapu-lapu",
  "Liwalo",
  "Lohoran",
  "Loro",
  "Ludong",
  "Malaga",
  "Malakapas",
  "Malasugi",
  "Mamali",
  "Maming",
  "Matangbaka",
  "Maya-maya",
  "Pagi",
  "Pampano",
  "Paru-parong-dagat",
  "Pating",
  "Pitik-pitik",
  "Pugita",
  "Pusit",
  "Sagisi",
  "Salay-salay",
  "Samaral",
  "Sapsap",
  "Silinyasi",
  "Sinarapan",
  "Sugpo",
  "Susô",
  "Tahong",
  "Taksay",
  "Talaba",
  "Talakitok",
  "Talangka",
  "Talimusak",
  "Tambakol",
  "Tamban",
  "Tanigue",
  "Tawilis",
  "Tilapia",
  "Torsilyo",
  "Tulingan",
  "Tuyom",
  "Ulang",
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.querySelector(".search");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

  if (!result.length) {
    resultsBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = "";
}
