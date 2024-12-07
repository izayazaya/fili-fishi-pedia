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

const inputField = document.querySelector(".search");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  const inputValue = inputField.value;

  switch (inputValue.toLowerCase()) {
    case "agoot":
      url = "./../fish/agoot.html";
      window.location.href = url;
      break;
    case "alakaak":
      url = "./../fish/alakaak.html";
      window.location.href = url;
      break;
    case "alimango":
      url = "./../fish/alimango.html";
      window.location.href = url;
      break;
    case "alimasag":
      url = "./../fish/alimasag.html";
      window.location.href = url;
      break;
    case "alumahan":
      url = "./../fish/alumahan.html";
      window.location.href = url;
      break;
    case "alumahang-bato":
      url = "./../fish/alumahang-bato.html";
      window.location.href = url;
      break;
    case "alupihang-dagat":
      url = "./../fish/alupihang-dagat.html";
      window.location.href = url;
      break;
    case "apahap":
      url = "./../fish/apahap.html";
      window.location.href = url;
      break;
    case "arosep":
      url = "./../fish/arosep.html";
      window.location.href = url;
      break;
    case "asohos":
      url = "./../fish/asohos.html";
      window.location.href = url;
      break;
    case "ataba":
      url = "./../fish/ataba.html";
      window.location.href = url;
      break;
    case "ayungin":
      url = "./../fish/ayungin.html";
      window.location.href = url;
      break;
    case "babansi":
      url = "./../fish/babansi.html";
      window.location.href = url;
      break;
    case "bakoko":
      url = "./../fish/bakoko.html";
      window.location.href = url;
      break;
    case "balatan":
      url = "./../fish/balatan.html";
      window.location.href = url;
      break;
    case "balo":
      url = "./../fish/balo.html";
      window.location.href = url;
      break;
    case "balyena":
      url = "./../fish/balyena.html";
      window.location.href = url;
      break;
    case "banagan":
      url = "./../fish/banagan.html";
      window.location.href = url;
      break;
    case "banak":
      url = "./../fish/banak.html";
      window.location.href = url;
      break;
    case "bangus":
      url = "./../fish/bangus.html";
      window.location.href = url;
      break;
    case "bidbid":
      url = "./../fish/bidbid.html";
      window.location.href = url;
      break;
    case "biloan":
      url = "./../fish/biloan.html";
      window.location.href = url;
      break;
    case "bisugo":
      url = "./../fish/bisugo.html";
      window.location.href = url;
      break;
    case "bitilya":
      url = "./../fish/bitilya.html";
      window.location.href = url;
      break;
    case "biya":
      url = "./../fish/biya.html";
      window.location.href = url;
      break;
    case "bolador":
      url = "./../fish/bolador.html";
      window.location.href = url;
      break;
    case "buan-buan":
      url = "./../fish/buan-buan.html";
      window.location.href = url;
      break;
    case "bulate":
      url = "./../fish/bulate.html";
      window.location.href = url;
      break;
    case "burara":
      url = "./../fish/burara.html";
      window.location.href = url;
      break;
    case "butanding":
      url = "./../fish/butanding.html";
      window.location.href = url;
      break;
    case "canoos":
      url = "./../fish/canoos.html";
      window.location.href = url;
      break;
    case "chabeta":
      url = "./../fish/chabeta.html";
      window.location.href = url;
      break;
    case "curacha":
      url = "./../fish/curacha.html";
      window.location.href = url;
      break;
    case "dalag-dagat":
      url = "./../fish/dalag-dagat.html";
      window.location.href = url;
      break;
    case "dalag":
      url = "./../fish/dalag.html";
      window.location.href = url;
      break;
    case "dalagang-bukid":
      url = "./../fish/dalagang-bukid.html";
      window.location.href = url;
      break;
    case "danggit":
      url = "./../fish/danggit.html";
      window.location.href = url;
      break;
    case "dapa":
      url = "./../fish/dapa.html";
      window.location.href = url;
      break;
    case "dikya":
      url = "./../fish/dikya.html";
      window.location.href = url;
      break;
    case "dilat":
      url = "./../fish/dilat.html";
      window.location.href = url;
      break;
    case "dilis":
      url = "./../fish/dilis.html";
      window.location.href = url;
      break;
    case "diwal":
      url = "./../fish/diwal.html";
      window.location.href = url;
      break;
    case "dorado":
      url = "./../fish/dorado.html";
      window.location.href = url;
      break;
    case "dulong":
      url = "./../fish/dulong.html";
      window.location.href = url;
      break;
    case "espada":
      url = "./../fish/espada.html";
      window.location.href = url;
      break;
    case "galunggong":
      url = "./../fish/galunggong.html";
      window.location.href = url;
      break;
    case "gulyasan":
      url = "./../fish/gulyasan.html";
      window.location.href = url;
      break;
    case "guso":
      url = "./../fish/guso.html";
      window.location.href = url;
      break;
    case "halaan":
      url = "./../fish/halaan.html";
      window.location.href = url;
      break;
    case "hasa-hasa":
      url = "./../fish/hasa-hasa.html";
      window.location.href = url;
      break;
    case "hipon":
      url = "./../fish/hipon.html";
      window.location.href = url;
      break;
    case "hito":
      url = "./../fish/hito.html";
      window.location.href = url;
      break;
    case "igat":
      url = "./../fish/igat.html";
      window.location.href = url;
      break;
    case "isu":
      url = "./../fish/isu.html";
      window.location.href = url;
      break;
    case "kabasi":
      url = "./../fish/kabasi.html";
      window.location.href = url;
      break;
    case "kalaso":
      url = "./../fish/kalaso.html";
      window.location.href = url;
      break;
    case "kanduli":
      url = "./../fish/kanduli.html";
      window.location.href = url;
      break;
    case "kansusuit":
      url = "./../fish/kansusuit.html";
      window.location.href = url;
      break;
    case "kitang":
      url = "./../fish/kitang.html";
      window.location.href = url;
      break;
    case "kuhol":
      url = "./../fish/kuhol.html";
      window.location.href = url;
      break;
    case "labahita":
      url = "./../fish/labahita.html";
      window.location.href = url;
      break;
    case "lao-lao":
      url = "./../fish/lao-lao.html";
      window.location.href = url;
      break;
    case "lapu-lapu":
      url = "./../fish/lapu-lapu.html";
      window.location.href = url;
      break;
    case "liwalo":
      url = "./../fish/liwalo.html";
      window.location.href = url;
      break;
    case "lohoran":
      url = "./../fish/lohoran.html";
      window.location.href = url;
      break;
    case "loro":
      url = "./../fish/loro.html";
      window.location.href = url;
      break;
    case "ludong":
      url = "./../fish/ludong.html";
      window.location.href = url;
      break;
    case "malaga":
      url = "./../fish/malaga.html";
      window.location.href = url;
      break;
    case "malakapas":
      url = "./../fish/malakapas.html";
      window.location.href = url;
      break;
    case "malasugi":
      url = "./../fish/malasugi.html";
      window.location.href = url;
      break;
    case "mamali":
      url = "./../fish/mamali.html";
      window.location.href = url;
      break;
    case "maming":
      url = "./../fish/maming.html";
      window.location.href = url;
      break;
    case "matangbaka":
      url = "./../fish/matangbaka.html";
      window.location.href = url;
      break;
    case "maya-maya":
      url = "./../fish/maya-maya.html";
      window.location.href = url;
      break;
    case "pagi":
      url = "./../fish/pagi.html";
      window.location.href = url;
      break;
    case "pampano":
      url = "./../fish/pampano.html";
      window.location.href = url;
      break;
    case "paru-parong-dagat":
      url = "./../fish/paru-parong-dagat.html";
      window.location.href = url;
      break;
    case "pating":
      url = "./../fish/pating.html";
      window.location.href = url;
      break;
    case "pitik-pitik":
      url = "./../fish/pitik-pitik.html";
      window.location.href = url;
      break;
    case "pugita":
      url = "./../fish/pugita.html";
      window.location.href = url;
      break;
    case "pusit":
      url = "./../fish/pusit.html";
      window.location.href = url;
      break;
    case "sagisi":
      url = "./../fish/sagisi.html";
      window.location.href = url;
      break;
    case "salay-salay":
      url = "./../fish/salay-salay.html";
      window.location.href = url;
      break;
    case "samaral":
      url = "./../fish/samaral.html";
      window.location.href = url;
      break;
    case "sapsap":
      url = "./../fish/sapsap.html";
      window.location.href = url;
      break;
    case "silinyasi":
      url = "./../fish/silinyasi.html";
      window.location.href = url;
      break;
    case "sinarapan":
      url = "./../fish/sinarapan.html";
      window.location.href = url;
      break;
    case "sugpo":
      url = "./../fish/sugpo.html";
      window.location.href = url;
      break;
    case "susô":
      url = "./../fish/susô.html";
      window.location.href = url;
      break;
    case "tahong":
      url = "./../fish/tahong.html";
      window.location.href = url;
      break;
    case "taksay":
      url = "./../fish/taksay.html";
      window.location.href = url;
      break;
    case "talaba":
      url = "./../fish/talaba.html";
      window.location.href = url;
      break;
    case "talakitok":
      url = "./../fish/talakitok.html";
      window.location.href = url;
      break;
    case "talangka":
      url = "./../fish/talangka.html";
      window.location.href = url;
      break;
    case "talimusak":
      url = "./../fish/talimusak.html";
      window.location.href = url;
      break;
    case "tambakol":
      url = "./../fish/tambakol.html";
      window.location.href = url;
      break;
    case "tamban":
      url = "./../fish/tamban.html";
      window.location.href = url;
      break;
    case "tanigue":
      url = "./../fish/tanigue.html";
      window.location.href = url;
      break;
    case "tawilis":
      url = "./../fish/tawilis.html";
      window.location.href = url;
      break;
    case "tilapia":
      url = "./../fish/tilapia.html";
      window.location.href = url;
      break;
    case "torsilyo":
      url = "./../fish/torsilyo.html";
      window.location.href = url;
      break;
    case "tulingan":
      url = "./../fish/tulingan.html";
      window.location.href = url;
      break;
    case "tuyom":
      url = "./../fish/tuyom.html";
      window.location.href = url;
      break;
    case "ulang":
      url = "./../fish/ulang.html";
      window.location.href = url;
      break;
    default:
      alert("Please enter a valid input.");
  }
});
