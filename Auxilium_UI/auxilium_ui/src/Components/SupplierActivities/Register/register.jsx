import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import { Container, Col, Row, Carousel, Card } from "react-bootstrap";
import red from "@material-ui/core/colors/red";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
  MenuItem,
  makeStyles,
  Checkbox,
  CssBaseline,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import LockIcon from "@material-ui/icons/Lock";

import "./register.css";
import Supplier from "../../../Model/Supplier";
import { registerSupplier } from "../../../Services/SupplierCredentials.service";

// the following is the work around of useStyles hook for using themes in class components
// define styles here, then in render at starting write const {classes} = this.props
// and then in the element where theme is needed write className = {classes.root}
const styles = (theme) => ({
  root: {
    color: orange[500],
    fontSize: "15px",

    "&$disabled": {
      color: "#fff",
    },
    "& .span": {
      fontSize: "15px",
      marginTop: "10px",
    },
  },
  label: {
    color: orange[500],
    fontSize: "10px",
  },
});

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      confPassword: "",
      email: "",
      state: "",
      city: "",
      lat: "",
      lng: "",
      dropDownList1: [],
      dropDownList2: [],
      checkBoxPhone: true,
      checkBoxAddress: true,
      phone: "",
      address: "",
    };
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#404040";
    this.setState({
      dropDownList1: [
        { name: "Andaman and Nicobar Islands", dropDownList2: ["Port Blair*"] },

        {
          name: "Andhra Pradesh",
          dropDownList2: [
            "Adoni",
            "Amalapuram",
            "Anakapalle",
            "Anantapur",
            "Bapatla",
            "Bheemunipatnam",
            "Bhimavaram",
            "Bobbili",
            "Chilakaluripet",
            "Chirala",
            "Chittoor",
            "Dharmavaram",
            "Eluru",
            "Gooty",
            "Gudivada",
            "Gudur",
            "Guntakal",
            "Guntur",
            "Hindupur",
            "Jaggaiahpet",
            "Jammalamadugu",
            "Kadapa",
            "Kadiri",
            "Kakinada",
            "Kandukur",
            "Kavali",
            "Kovvur",
            "Kurnool",
            "Macherla",
            "Machilipatnam",
            "Madanapalle",
            "Mandapeta",
            "Markapur",
            "Nagari",
            "Naidupet",
            "Nandyal",
            "Narasapuram",
            "Narasaraopet",
            "Narsipatnam",
            "Nellore",
            "Nidadavole",
            "Nuzvid",
            "Ongole",
            "Palacole",
            "Palasa Kasibugga",
            "Parvathipuram",
            "Pedana",
            "Peddapuram",
            "Pithapuram",
            "Ponnur",
            "Proddatur",
            "Punganur",
            "Puttur",
            "Rajahmundry",
            "Rajam",
            "Rajampet",
            "Ramachandrapuram",
            "Rayachoti",
            "Rayadurg",
            "Renigunta",
            "Repalle",
            "Salur",
            "Samalkot",
            "Sattenapalle",
            "Srikakulam",
            "Srikalahasti",
            "Srisailam Project (Right Flank Colony) Township",
            "Sullurpeta",
            "Tadepalligudem",
            "Tadpatri",
            "Tanuku",
            "Tenali",
            "Tirupati",
            "Tiruvuru",
            "Tuni",
            "Uravakonda",
            "Venkatagiri",
            "Vijayawada",
            "Vinukonda",
            "Visakhapatnam",
            "Vizianagaram",
            "Yemmiganur",
            "Yerraguntla",
          ],
        },

        {
          name: "Arunachal Pradesh",
          dropDownList2: ["Naharlagun", "Pasighat"],
        },

        {
          name: "Assam",
          dropDownList2: [
            "Barpeta",
            "Bongaigaon City",
            "Dhubri",
            "Dibrugarh",
            "Diphu",
            "Goalpara",
            "Guwahati",
            "Jorhat",
            "Karimganj",
            "Lanka",
            "Lumding",
            "Mangaldoi",
            "Mankachar",
            "Margherita",
            "Mariani",
            "Marigaon",
            "Nagaon",
            "Nalbari",
            "North Lakhimpur",
            "Rangia",
            "Sibsagar",
            "Silapathar",
            "Silchar",
            "Tezpur",
            "Tinsukia",
          ],
        },

        {
          name: "Bihar",
          dropDownList2: [
            "Araria",
            "Arrah",
            "Arwal",
            "Asarganj",
            "Aurangabad",
            "Bagaha",
            "Barh",
            "Begusarai",
            "Bettiah",
            "Bhabua",
            "Bhagalpur",
            "Buxar",
            "Chhapra",
            "Darbhanga",
            "Dehri-on-Sone",
            "Dumraon",
            "Forbesganj",
            "Gaya",
            "Gopalganj",
            "Hajipur",
            "Jamalpur",
            "Jamui",
            "Jehanabad",
            "Katihar",
            "Kishanganj",
            "Lakhisarai",
            "Lalganj",
            "Madhepura",
            "Madhubani",
            "Maharajganj",
            "Mahnar Bazar",
            "Makhdumpur",
            "Maner",
            "Manihari",
            "Marhaura",
            "Masaurhi",
            "Mirganj",
            "Mokameh",
            "Motihari",
            "Motipur",
            "Munger",
            "Murliganj",
            "Muzaffarpur",
            "Narkatiaganj",
            "Naugachhia",
            "Nawada",
            "Nokha",
            "Patna*",
            "Piro",
            "Purnia",
            "Rafiganj",
            "Rajgir",
            "Ramnagar",
            "Raxaul Bazar",
            "Revelganj",
            "Rosera",
            "Saharsa",
            "Samastipur",
            "Sasaram",
            "Sheikhpura",
            "Sheohar",
            "Sherghati",
            "Silao",
            "Sitamarhi",
            "Siwan",
            "Sonepur",
            "Sugauli",
            "Sultanganj",
            "Supaul",
            "Warisaliganj",
          ],
        },

        { name: "Chandigarh", dropDownList2: ["Chandigarh*"] },

        {
          name: "Chhattisgarh",
          dropDownList2: [
            "Ambikapur",
            "Bhatapara",
            "Bhilai Nagar",
            "Bilaspur",
            "Chirmiri",
            "Dalli-Rajhara",
            "Dhamtari",
            "Durg",
            "Jagdalpur",
            "Korba",
            "Mahasamund",
            "Manendragarh",
            "Mungeli",
            "Naila Janjgir",
            "Raigarh",
            "Raipur*",
            "Rajnandgaon",
            "Sakti",
            "Tilda Newra",
          ],
        },

        { name: "Dadra and Nagar Haveli", dropDownList2: ["Silvassa*"] },

        { name: "Delhi", dropDownList2: ["Delhi", "New Delhi*"] },

        {
          name: "Goa",
          dropDownList2: ["Mapusa", "Margao", "Marmagao", "Panaji*"],
        },

        {
          name: "Gujarat",
          dropDownList2: [
            "Adalaj",
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Anjar",
            "Ankleshwar",
            "Bharuch",
            "Bhavnagar",
            "Bhuj",
            "Chhapra",
            "Deesa",
            "Dhoraji",
            "Godhra",
            "Jamnagar",
            "Kadi",
            "Kapadvanj",
            "Keshod",
            "Khambhat",
            "Lathi",
            "Limbdi",
            "Lunawada",
            "Mahesana",
            "Mahuva",
            "Manavadar",
            "Mandvi",
            "Mangrol",
            "Mansa",
            "Mahemdabad",
            "Modasa",
            "Morvi",
            "Nadiad",
            "Navsari",
            "Padra",
            "Palanpur",
            "Palitana",
            "Pardi",
            "Patan",
            "Petlad",
            "Porbandar",
            "Radhanpur",
            "Rajkot",
            "Rajpipla",
            "Rajula",
            "Ranavav",
            "Rapar",
            "Salaya",
            "Sanand",
            "Savarkundla",
            "Sidhpur",
            "Sihor",
            "Songadh",
            "Surat",
            "Talaja",
            "Thangadh",
            "Tharad",
            "Umbergaon",
            "Umreth",
            "Una",
            "Unjha",
            "Upleta",
            "Vadnagar",
            "Vadodara",
            "Valsad",
            "Vapi",
            "Vapi",
            "Veraval",
            "Vijapur",
            "Viramgam",
            "Visnagar",
            "Vyara",
            "Wadhwan",
            "Wankaner",
          ],
        },

        {
          name: "Haryana",
          dropDownList2: [
            "Bahadurgarh",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gohana",
            "Gurgaon",
            "Hansi",
            "Hisar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Ladwa",
            "Mahendragarh",
            "Mandi Dabwali",
            "Narnaul",
            "Narwana",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Pehowa",
            "Pinjore",
            "Rania",
            "Ratia",
            "Rewari",
            "Rohtak",
            "Safidon",
            "Samalkha",
            "Sarsod",
            "Shahbad",
            "Sirsa",
            "Sohna",
            "Sonipat",
            "Taraori",
            "Thanesar",
            "Tohana",
            "Yamunanagar",
          ],
        },

        {
          name: "Himachal Pradesh",
          dropDownList2: [
            "Mandi",
            "Nahan",
            "Palampur",
            "Shimla*",
            "Solan",
            "Sundarnagar",
          ],
        },

        {
          name: "Jammu and Kashmir",
          dropDownList2: [
            "Anantnag",
            "Baramula",
            "Jammu",
            "Kathua",
            "Punch",
            "Rajauri",
            "Sopore",
            "Srinagar*",
            "Udhampur",
          ],
        },

        {
          name: "Jharkhand",
          dropDownList2: [
            "Adityapur",
            "Bokaro Steel City",
            "Chaibasa",
            "Chatra",
            "Chirkunda",
            "Medininagar (Daltonganj)",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "Giridih",
            "Gumia",
            "Hazaribag",
            "Jamshedpur",
            "Jhumri Tilaiya",
            "Lohardaga",
            "Madhupur",
            "Mihijam",
            "Musabani",
            "Pakaur",
            "Patratu",
            "Phusro",
            "Ramgarh",
            "Ranchi*",
            "Sahibganj",
            "Saunda",
            "Simdega",
            "Tenu dam-cum-Kathhara",
          ],
        },

        {
          name: "Karnataka",
          dropDownList2: [
            "Adyar",
            "Afzalpur",
            "Arsikere",
            "Athni",
            "Bengaluru",
            "Belagavi",
            "Ballari",
            "Chikkamagaluru",
            "Davanagere",
            "Gokak",
            "Hubli-Dharwad",
            "Karwar",
            "Kolar",
            "Lakshmeshwar",
            "Lingsugur",
            "Maddur",
            "Madhugiri",
            "Madikeri",
            "Magadi",
            "Mahalingapura",
            "Malavalli",
            "Malur",
            "Mandya",
            "Mangaluru",
            "Manvi",
            "Mudalagi",
            "Mudabidri",
            "Muddebihal",
            "Mudhol",
            "Mulbagal",
            "Mundargi",
            "Nanjangud",
            "Nargund",
            "Navalgund",
            "Nelamangala",
            "Pavagada",
            "Piriyapatna",
            "Puttur",
            "Rabkavi Banhatti",
            "Raayachuru",
            "Ranebennuru",
            "Ramanagaram",
            "Ramdurg",
            "Ranibennur",
            "Robertson Pet",
            "Ron",
            "Sadalagi",
            "Sagara",
            "Sakaleshapura",
            "Sindagi",
            "Sanduru",
            "Sankeshwara",
            "Saundatti-Yellamma",
            "Savanur",
            "Sedam",
            "Shahabad",
            "Shahpur",
            "Shiggaon",
            "Shikaripur",
            "Shivamogga",
            "Surapura",
            "Shrirangapattana",
            "Sidlaghatta",
            "Sindhagi",
            "Sindhnur",
            "Sira",
            "Sirsi",
            "Siruguppa",
            "Srinivaspur",
            "Tarikere",
            "Tekkalakote",
            "Terdal",
            "Talikota",
            "Tiptur",
            "Tumkur",
            "Udupi",
            "Vijayapura",
            "Wadi",
            "Yadgir",
            "Mysore",
          ],
        },

        {
          name: "Kerala",
          dropDownList2: [
            "Adoor",
            "Alappuzha",
            "Attingal",
            "Chalakudy",
            "Changanassery",
            "Cherthala",
            "Chittur-Thathamangalam",
            "Guruvayoor",
            "Kanhangad",
            "Kannur",
            "Kasaragod",
            "Kayamkulam",
            "Kochi",
            "Kodungallur",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Kunnamkulam",
            "Malappuram",
            "Mattannur",
            "Mavelikkara",
            "Mavoor",
            "Muvattupuzha",
            "Nedumangad",
            "Neyyattinkara",
            "Nilambur",
            "Ottappalam",
            "Palai",
            "Palakkad",
            "Panamattom",
            "Panniyannur",
            "Pappinisseri",
            "Paravoor",
            "Pathanamthitta",
            "Peringathur",
            "Perinthalmanna",
            "Perumbavoor",
            "Ponnani",
            "Punalur",
            "Puthuppally",
            "Koyilandy",
            "Shoranur",
            "Taliparamba",
            "Thiruvalla",
            "Thiruvananthapuram",
            "Thodupuzha",
            "Thrissur",
            "Tirur",
            "Vaikom",
            "Varkala",
            "Vatakara",
          ],
        },

        {
          name: "Madhya Pradesh",
          dropDownList2: [
            "Alirajpur",
            "Ashok Nagar",
            "Balaghat",
            "Bhopal",
            "Ganjbasoda",
            "Gwalior",
            "Indore",
            "Itarsi",
            "Jabalpur",
            "Lahar",
            "Maharajpur",
            "Mahidpur",
            "Maihar",
            "Malaj Khand",
            "Manasa",
            "Manawar",
            "Mandideep",
            "Mandla",
            "Mandsaur",
            "Mauganj",
            "Mhow Cantonment",
            "Mhowgaon",
            "Morena",
            "Multai",
            "Mundi",
            "Murwara (Katni)",
            "Nagda",
            "Nainpur",
            "Narsinghgarh",
            "Narsinghgarh",
            "Neemuch",
            "Nepanagar",
            "Niwari",
            "Nowgong",
            "Nowrozabad (Khodargama)",
            "Pachore",
            "Pali",
            "Panagar",
            "Pandhurna",
            "Panna",
            "Pasan",
            "Pipariya",
            "Pithampur",
            "Porsa",
            "Prithvipur",
            "Raghogarh-Vijaypur",
            "Rahatgarh",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rau",
            "Rehli",
            "Rewa",
            "Sabalgarh",
            "Sagar",
            "Sanawad",
            "Sarangpur",
            "Sarni",
            "Satna",
            "Sausar",
            "Sehore",
            "Sendhwa",
            "Seoni",
            "Seoni-Malwa",
            "Shahdol",
            "Shajapur",
            "Shamgarh",
            "Sheopur",
            "Shivpuri",
            "Shujalpur",
            "Sidhi",
            "Sihora",
            "Singrauli",
            "Sironj",
            "Sohagpur",
            "Tarana",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha",
            "Vijaypur",
            "Wara Seoni",
          ],
        },

        {
          name: "Maharashtra",
          dropDownList2: [
            "Ahmednagar",
            "Akola",
            "Akot",
            "Amalner",
            "Ambejogai",
            "Amravati",
            "Anjangaon",
            "Arvi",
            "Aurangabad",
            "Bhiwandi",
            "Dhule",
            "Kalyan-Dombivali",
            "Ichalkaranji",
            "Kalyan-Dombivali",
            "Karjat",
            "Latur",
            "Loha",
            "Lonar",
            "Lonavla",
            "Mahad",
            "Malegaon",
            "Malkapur",
            "Mangalvedhe",
            "Mangrulpir",
            "Manjlegaon",
            "Manmad",
            "Manwath",
            "Mehkar",
            "Mhaswad",
            "Mira-Bhayandar",
            "Morshi",
            "Mukhed",
            "Mul",
            "Greater Mumbai*",
            "Murtijapur",
            "Nagpur",
            "Nanded-Waghala",
            "Nandgaon",
            "Nandura",
            "Nandurbar",
            "Narkhed",
            "Nashik",
            "Navi Mumbai",
            "Nawapur",
            "Nilanga",
            "Osmanabad",
            "Ozar",
            "Pachora",
            "Paithan",
            "Palghar",
            "Pandharkaoda",
            "Pandharpur",
            "Panvel",
            "Parbhani",
            "Parli",
            "Partur",
            "Pathardi",
            "Pathri",
            "Patur",
            "Pauni",
            "Pen",
            "Phaltan",
            "Pulgaon",
            "Pune",
            "Purna",
            "Pusad",
            "Rahuri",
            "Rajura",
            "Ramtek",
            "Ratnagiri",
            "Raver",
            "Risod",
            "Sailu",
            "Sangamner",
            "Sangli",
            "Sangole",
            "Sasvad",
            "Satana",
            "Satara",
            "Savner",
            "Sawantwadi",
            "Shahade",
            "Shegaon",
            "Shendurjana",
            "Shirdi",
            "Shirpur-Warwade",
            "Shirur",
            "Shrigonda",
            "Shrirampur",
            "Sillod",
            "Sinnar",
            "Solapur",
            "Soyagaon",
            "Talegaon Dabhade",
            "Talode",
            "Tasgaon",
            "Thane",
            "Tirora",
            "Tuljapur",
            "Tumsar",
            "Uchgaon",
            "Udgir",
            "Umarga",
            "Umarkhed",
            "Umred",
            "Uran",
            "Uran Islampur",
            "Vadgaon Kasba",
            "Vaijapur",
            "Vasai-Virar",
            "Vita",
            "Wadgaon Road",
            "Wai",
            "Wani",
            "Wardha",
            "Warora",
            "Warud",
            "Washim",
            "Yavatmal",
            "Yawal",
            "Yevla",
          ],
        },

        {
          name: "Manipur",
          dropDownList2: ["Imphal*", "Lilong", "Mayang Imphal", "Thoubal"],
        },

        {
          name: "Meghalaya",
          dropDownList2: ["Nongstoin", "Shillong*", "Tura"],
        },

        { name: "Mizoram", dropDownList2: ["Aizawl", "Lunglei", "Saiha"] },

        {
          name: "Nagaland",
          dropDownList2: [
            "Dimapur",
            "Kohima*",
            "Mokokchung",
            "Tuensang",
            "Wokha",
            "Zunheboto",
          ],
        },

        {
          name: "Odisha",
          dropDownList2: [
            "Balangir",
            "Baleshwar Town",
            "Barbil",
            "Bargarh",
            "Baripada Town",
            "Bhadrak",
            "Bhawanipatna",
            "Bhubaneswar*",
            "Brahmapur",
            "Byasanagar",
            "Cuttack",
            "Dhenkanal",
            "Jatani",
            "Jharsuguda",
            "Kendrapara",
            "Kendujhar",
            "Malkangiri",
            "Nabarangapur",
            "Paradip",
            "Parlakhemundi",
            "Pattamundai",
            "Phulabani",
            "Puri",
            "Rairangpur",
            "Rajagangapur",
            "Raurkela",
            "Rayagada",
            "Sambalpur",
            "Soro",
            "Sunabeda",
            "Sundargarh",
            "Talcher",
            "Tarbha",
            "Titlagarh",
          ],
        },

        {
          name: "Puducherry",
          dropDownList2: ["Karaikal", "Mahe", "Pondicherry*", "Yanam"],
        },

        {
          name: "Punjab",
          dropDownList2: [
            "Amritsar",
            "Barnala",
            "Batala",
            "Bathinda",
            "Dhuri",
            "Faridkot",
            "Fazilka",
            "Firozpur",
            "Firozpur Cantt.",
            "Gobindgarh",
            "Gurdaspur",
            "Hoshiarpur",
            "Jagraon",
            "Jalandhar Cantt.",
            "Jalandhar",
            "Kapurthala",
            "Khanna",
            "Kharar",
            "Kot Kapura",
            "Longowal",
            "Ludhiana",
            "Malerkotla",
            "Malout",
            "Mansa",
            "Moga",
            "Mohali",
            "Morinda, India",
            "Mukerian",
            "Muktsar",
            "Nabha",
            "Nakodar",
            "Nangal",
            "Nawanshahr",
            "Pathankot",
            "Patiala",
            "Pattran",
            "Patti",
            "Phagwara",
            "Phillaur",
            "Qadian",
            "Raikot",
            "Rajpura",
            "Rampura Phul",
            "Rupnagar",
            "Samana",
            "Sangrur",
            "Sirhind Fatehgarh Sahib",
            "Sujanpur",
            "Sunam",
            "Talwara",
            "Tarn Taran",
            "Urmar Tanda",
            "Zira",
            "Zirakpur",
          ],
        },

        {
          name: "Rajasthan",
          dropDownList2: [
            "Ajmer",
            "Alwar",
            "Bikaner",
            "Bharatpur",
            "Bhilwara",
            "Jaipur*",
            "Jodhpur",
            "Lachhmangarh",
            "Ladnu",
            "Lakheri",
            "Lalsot",
            "Losal",
            "Makrana",
            "Malpura",
            "Mandalgarh",
            "Mandawa",
            "Mangrol",
            "Merta City",
            "Mount Abu",
            "Nadbai",
            "Nagar",
            "Nagaur",
            "Nasirabad",
            "Nathdwara",
            "Neem-Ka-Thana",
            "Nimbahera",
            "Nohar",
            "Nokha",
            "Pali",
            "Phalodi",
            "Phulera",
            "Pilani",
            "Pilibanga",
            "Pindwara",
            "Pipar City",
            "Prantij",
            "Pratapgarh",
            "Raisinghnagar",
            "Rajakhera",
            "Rajaldesar",
            "Rajgarh (Alwar)",
            "Rajgarh (Churu)",
            "Rajsamand",
            "Ramganj Mandi",
            "Ramngarh",
            "Ratangarh",
            "Rawatbhata",
            "Rawatsar",
            "Reengus",
            "Sadri",
            "Sadulshahar",
            "Sadulpur",
            "Sagwara",
            "Sambhar",
            "Sanchore",
            "Sangaria",
            "Sardarshahar",
            "Sawai Madhopur",
            "Shahpura",
            "Shahpura",
            "Sheoganj",
            "Sikar",
            "Sirohi",
            "Sojat",
            "Sri Madhopur",
            "Sujangarh",
            "Sumerpur",
            "Suratgarh",
            "Taranagar",
            "Todabhim",
            "Todaraisingh",
            "Tonk",
            "Udaipur",
            "Udaipurwati",
            "Vijainagar, Ajmer",
          ],
        },

        {
          name: "Tamil Nadu",
          dropDownList2: [
            "Arakkonam",
            "Aruppukkottai",
            "Chennai*",
            "Coimbatore",
            "Erode",
            "Gobichettipalayam",
            "Kancheepuram",
            "Karur",
            "Lalgudi",
            "Madurai",
            "Manachanallur",
            "Nagapattinam",
            "Nagercoil",
            "Namagiripettai",
            "Namakkal",
            "Nandivaram-Guduvancheri",
            "Nanjikottai",
            "Natham",
            "Nellikuppam",
            "Neyveli (TS)",
            "O' Valley",
            "Oddanchatram",
            "P.N.Patti",
            "Pacode",
            "Padmanabhapuram",
            "Palani",
            "Palladam",
            "Pallapatti",
            "Pallikonda",
            "Panagudi",
            "Panruti",
            "Paramakudi",
            "Parangipettai",
            "Pattukkottai",
            "Perambalur",
            "Peravurani",
            "Periyakulam",
            "Periyasemur",
            "Pernampattu",
            "Pollachi",
            "Polur",
            "Ponneri",
            "Pudukkottai",
            "Pudupattinam",
            "Puliyankudi",
            "Punjaipugalur",
            "Ranipet",
            "Rajapalayam",
            "Ramanathapuram",
            "Rameshwaram",
            "Rasipuram",
            "Salem",
            "Sankarankoil",
            "Sankari",
            "Sathyamangalam",
            "Sattur",
            "Shenkottai",
            "Sholavandan",
            "Sholingur",
            "Sirkali",
            "Sivaganga",
            "Sivagiri",
            "Sivakasi",
            "Srivilliputhur",
            "Surandai",
            "Suriyampalayam",
            "Tenkasi",
            "Thammampatti",
            "Thanjavur",
            "Tharamangalam",
            "Tharangambadi",
            "Theni Allinagaram",
            "Thirumangalam",
            "Thirupuvanam",
            "Thiruthuraipoondi",
            "Thiruvallur",
            "Thiruvarur",
            "Thuraiyur",
            "Tindivanam",
            "Tiruchendur",
            "Tiruchengode",
            "Tiruchirappalli",
            "Tirukalukundram",
            "Tirukkoyilur",
            "Tirunelveli",
            "Tirupathur",
            "Tirupathur",
            "Tiruppur",
            "Tiruttani",
            "Tiruvannamalai",
            "Tiruvethipuram",
            "Tittakudi",
            "Udhagamandalam",
            "Udumalaipettai",
            "Unnamalaikadai",
            "Usilampatti",
            "Uthamapalayam",
            "Uthiramerur",
            "Vadakkuvalliyur",
            "Vadalur",
            "Vadipatti",
            "Valparai",
            "Vandavasi",
            "Vaniyambadi",
            "Vedaranyam",
            "Vellakoil",
            "Vellore",
            "Vikramasingapuram",
            "Viluppuram",
            "Virudhachalam",
            "Virudhunagar",
            "Viswanatham",
          ],
        },

        {
          name: "Telangana",
          dropDownList2: [
            "Adilabad",
            "Bellampalle",
            "Bhadrachalam",
            "Bhainsa",
            "Bhongir",
            "Bodhan",
            "Farooqnagar",
            "Gadwal",
            "Hyderabad*",
            "Jagtial",
            "Jangaon",
            "Kagaznagar",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Koratla",
            "Kothagudem",
            "Kyathampalle",
            "Mahbubnagar",
            "Mancherial",
            "Mandamarri",
            "Manuguru",
            "Medak",
            "Miryalaguda",
            "Nagarkurnool",
            "Narayanpet",
            "Nirmal",
            "Nizamabad",
            "Palwancha",
            "Ramagundam",
            "Sadasivpet",
            "Sangareddy",
            "Siddipet",
            "Sircilla",
            "Suryapet",
            "Tandur",
            "Vikarabad",
            "Wanaparthy",
            "Warangal",
            "Yellandu",
          ],
        },

        {
          name: "Tripura",
          dropDownList2: [
            "Agartala*",
            "Belonia",
            "Dharmanagar",
            "Kailasahar",
            "Khowai",
            "Pratapgarh",
            "Udaipur",
          ],
        },

        {
          name: "Uttar Pradesh",
          dropDownList2: [
            "Achhnera",
            "Agra",
            "Aligarh",
            "Allahabad",
            "Amroha",
            "Azamgarh",
            "Bahraich",
            "Chandausi",
            "Etawah",
            "Firozabad",
            "Fatehpur Sikri",
            "Hapur",
            "Hardoi *",
            "Jhansi",
            "Kalpi",
            "Kanpur",
            "Khair",
            "Laharpur",
            "Lakhimpur",
            "Lal Gopalganj Nindaura",
            "Lalitpur",
            "Lalganj",
            "Lar",
            "Loni",
            "Lucknow*",
            "Mathura",
            "Meerut",
            "Modinagar",
            "Moradabad",
            "Nagina",
            "Najibabad",
            "Nakur",
            "Nanpara",
            "Naraura",
            "Naugawan Sadat",
            "Nautanwa",
            "Nawabganj",
            "Nehtaur",
            "Niwai",
            "Noida",
            "Noorpur",
            "Obra",
            "Orai",
            "Padrauna",
            "Palia Kalan",
            "Parasi",
            "Phulpur",
            "Pihani",
            "Pilibhit",
            "Pilkhuwa",
            "Powayan",
            "Pukhrayan",
            "Puranpur",
            "Purquazi",
            "Purwa",
            "Rae Bareli",
            "Rampur",
            "Rampur Maniharan",
            "Rampur Maniharan",
            "Rasra",
            "Rath",
            "Renukoot",
            "Reoti",
            "Robertsganj",
            "Rudauli",
            "Rudrapur",
            "Sadabad",
            "Safipur",
            "Saharanpur",
            "Sahaspur",
            "Sahaswan",
            "Sahawar",
            "Sahjanwa",
            "Saidpur",
            "Sambhal",
            "Samdhan",
            "Samthar",
            "Sandi",
            "Sandila",
            "Sardhana",
            "Seohara",
            "Shahabad, Hardoi",
            "Shahabad, Rampur",
            "Shahganj",
            "Shahjahanpur",
            "Shamli",
            "Shamsabad, Agra",
            "Shamsabad, Farrukhabad",
            "Sherkot",
            "Shikarpur, Bulandshahr",
            "Shikohabad",
            "Shishgarh",
            "Siana",
            "Sikanderpur",
            "Sikandra Rao",
            "Sikandrabad",
            "Sirsaganj",
            "Sirsi",
            "Sitapur",
            "Soron",
            "Suar",
            "Sultanpur",
            "Sumerpur",
            "Tanda",
            "Thakurdwara",
            "Thana Bhawan",
            "Tilhar",
            "Tirwaganj",
            "Tulsipur",
            "Tundla",
            "Ujhani",
            "Unnao",
            "Utraula",
            "Varanasi",
            "Vrindavan",
            "Warhapur",
            "Zaidpur",
            "Zamania",
          ],
        },

        {
          name: "Uttarakhand",
          dropDownList2: [
            "Bageshwar",
            "Dehradun",
            "Haldwani-cum-Kathgodam",
            "Hardwar",
            "Kashipur",
            "Manglaur",
            "Mussoorie",
            "Nagla",
            "Nainital",
            "Pauri",
            "Pithoragarh",
            "Ramnagar",
            "Rishikesh",
            "Roorkee",
            "Rudrapur",
            "Sitarganj",
            "Srinagar",
            "Tehri",
          ],
        },

        {
          name: "West Bengal",
          dropDownList2: [
            "Adra",
            "Alipurduar",
            "Arambagh",
            "Asansol",
            "Baharampur",
            "Balurghat",
            "Bankura",
            "Darjiling",
            "English Bazar",
            "Gangarampur",
            "Habra",
            "Hugli-Chinsurah",
            "Jalpaiguri",
            "Jhargram",
            "Kalimpong",
            "Kharagpur",
            "Kolkata",
            "Mainaguri",
            "Malda",
            "Mathabhanga",
            "Medinipur",
            "Memari",
            "Monoharpur",
            "Murshidabad",
            "Nabadwip",
            "Naihati",
            "Panchla",
            "Pandua",
            "Paschim Punropara",
            "Purulia",
            "Raghunathpur",
            "Raghunathganj",
            "Raiganj",
            "Rampurhat",
            "Ranaghat",
            "Sainthia",
            "Santipur",
            "Siliguri",
            "Sonamukhi",
            "Srirampore",
            "Suri",
            "Taki",
            "Tamluk",
            "Tarakeswar",
          ],
        },
      ],
    });
  }

  // the following method will enter the required data into a supplier object
  initSupplier = () => {
    let supplier = new Supplier();
    supplier.name = this.state.name;
    supplier.password = this.state.password;
    supplier.email = this.state.email;
    supplier.state = this.state.state;
    supplier.city = this.state.city;
    supplier.lat = this.state.lat;
    supplier.lng = this.state.lng;
    supplier.phone = this.state.phone;
    supplier.address = this.state.address;
    return supplier;

    // now we can send thie supplier object to the service methods
    // so it can be stored into the database
  };

  dropDownChange = (event) => {
    event.preventDefault();
    this.setState({
      state: event.target.value,
    });

    this.setState({
      dropDownList2: this.state.dropDownList1.find(
        (x) => x.name === event.target.value
      ).dropDownList2,
    });
  };

  // Note- Methods to handle value change and onCLick has not been written yet

  handleValueChange = (event) => {
    event.preventDefault();
    if (event.target.name === "nameText") {
      this.setState({
        name: event.target.value,
      });
    }
    if (event.target.name === "passwordText") {
      this.setState({
        password: event.target.value,
      });
    }
    if (event.target.name === "confPasswordText") {
      this.setState({
        confPassword: event.target.value,
      });
    }
    if (event.target.name === "emailText") {
      this.setState({
        email: event.target.value,
      });
    }

    if (event.target.name === "cityText") {
      this.setState({
        city: event.target.value,
      });
    }
    if (event.target.name === "checkBoxPhone") {
      this.setState({
        checkBoxPhone: this.state.checkBoxPhone ? false : true,
      });
    }

    if (event.target.name === "checkBoxAddress") {
      this.setState({
        checkBoxAddress: this.state.checkBoxAddress ? false : true,
      });
    }
    if (event.target.name === "phone") {
      this.setState({
        phone: event.target.value,
      });
    }
    if (event.target.name === "address") {
      this.setState({
        address: event.target.value,
      });
    }
  };

  handleOnClick = (event) => {
    event.preventDefault();

    if (
      this.state.name === "" ||
      this.state.password === "" ||
      this.state.confPassword === "" ||
      this.state.email === "" ||
      this.state.state === "" ||
      this.state.city === ""
    ) {
      alert("one or more fields empty");
    } else {
      if (this.state.password !== this.state.confPassword) {
        alert("Passwords do not match");
      } else {
        // setting up the supplier object
        let suppliers = this.initSupplier();

        // calling the service method that registers suppliers and returns id
        let returnedId = registerSupplier(suppliers);
        returnedId.then((id) => {
          localStorage.setItem("supId", id);

          // Note: id this is id of the newly added supplier
          // retrieve this id anywhere in the app by using the following statement
          // let id = localStorage.getItem('supId);
        });
      }
    }
  };

  render() {
    const { classes } = this.props;

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: orange[500],
          dark: orange[500],
          light: orange[500],
        },
        secondary: {
          main: orange[500],
          dark: orange[500],
          light: orange[500],
        },
        error: {
          main: red[500],
        },
      },
    });
    const fadeLeft = {
      hidden: { opacity: 0, x: -350 },
      visible: { opacity: 1, x: 0 },
    };
    const avatarStyle = { backgroundColor: "orange", color: "black" };
    const buttonStyle = {
      marginTop: "20px",
      marginBottom: "5px",
      backgroundColor: "orange",
    };
    const textFieldStyle = { marginTop: "5px", borderBottomColor: "white" };
    return (
      <Container>
        <Row>
          <Col sm={8}>
            <div className="hide">
              <Paper
                elevation={10}
                style={{
                  backgroundColor: "black",
                  borderRadius: "10px",
                  color: "white",
                }}
                className="hero-r"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.h1 id="brand">AUXILIUM</motion.h1>
                  <h6>
                    SERVICE TO OTHERS IS THE RENT YOU PAY FOR YOUR ROOM HERE ON
                    EARTH ~ M. ALI
                  </h6>

                  <Container className="hero-carousel">
                    <Row>
                      <h2 id="typewriter-r">
                        <Typewriter
                          options={{ loop: true }}
                          onInit={(typewriter) => {
                            typewriter
                              .pauseFor(1300)
                              .typeString("WELCOME")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("REGISTER YOURSELF")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("LIST PRODUCTS")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("HELP PEOPLE")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("SAVE LIVES")

                              .deleteAll()
                              .start();
                          }}
                        />
                      </h2>
                    </Row>
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <Button
                        style={{
                          width: "150px",
                          backgroundColor: "orange",
                          color: "black",
                        }}
                        className="button"
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        Back to main
                      </Button>
                    </motion.div>
                  </Container>
                </motion.div>
              </Paper>
            </div>
          </Col>
          <Col sm={4}>
            <Grid>
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.3 }}
              >
                <Paper
                  className="bg-paper"
                  elevation={10}
                  style={{
                    backgroundColor: "black",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  <Grid align="center">
                    <Avatar style={avatarStyle}>
                      <LockIcon color="#006DCC" />
                    </Avatar>
                    <h2>Register</h2>
                  </Grid>
                  <ThemeProvider theme={theme}>
                    <TextField
                      inputProps={{
                        className: "textField",
                      }}
                      InputLabelProps={{
                        className: "textField",
                      }}
                      value={this.state.name}
                      onChange={this.handleValueChange}
                      name="nameText"
                      style={textFieldStyle}
                      type="text"
                      required
                      fullWidth
                      label="Name"
                      placeholder="Enter your Name"
                    />
                    <TextField
                      inputProps={{
                        className: "textField",
                      }}
                      InputLabelProps={{
                        className: "textField",
                      }}
                      value={this.state.email}
                      onChange={this.handleValueChange}
                      name="emailText"
                      style={textFieldStyle}
                      type="email"
                      required
                      fullWidth
                      label="Email"
                      placeholder="Enter your Email"
                    />
                    <TextField
                      inputProps={{
                        className: "textField",
                      }}
                      InputLabelProps={{
                        className: "textField",
                      }}
                      value={this.state.password}
                      onChange={this.handleValueChange}
                      name="passwordText"
                      style={textFieldStyle}
                      type="password"
                      required
                      fullWidth
                      label="Password"
                      placeholder="Enter your Password"
                    />
                    <TextField
                      inputProps={{
                        className: "textField",
                      }}
                      InputLabelProps={{
                        className: "textField",
                      }}
                      value={this.state.confPassword}
                      onChange={this.handleValueChange}
                      name="confPasswordText"
                      style={textFieldStyle}
                      type="password"
                      required
                      fullWidth
                      label="Confirm Password"
                      placeholder="Confirm Password"
                    />
                    <TextField
                      inputProps={{
                        className: "textField",
                      }}
                      InputLabelProps={{
                        className: "textField",
                      }}
                      value={this.state.phone}
                      onChange={this.handleValueChange}
                      name="phone"
                      style={textFieldStyle}
                      type="number"
                      required
                      fullWidth
                      label="Phone Number"
                      placeholder="Phone Number"
                    />
                    <TextField
                      inputProps={{
                        className: "textField",
                      }}
                      InputLabelProps={{
                        className: "textField",
                      }}
                      multiline
                      value={this.state.address}
                      onChange={this.handleValueChange}
                      name="address"
                      style={textFieldStyle}
                      type="text"
                      required
                      fullWidth
                      label="Address"
                      placeholder="Address"
                    />
                    {/* <FormGroup row>
                      <FormControlLabel inputProps={{
                        className:'checkBox'
                      }}
                        control={<Checkbox className={classes.root}  checked={this.state.checkBoxPhone} onChange={this.handleValueChange} name='checkBoxPhone'/>}
                        label='Phone'
                        />
                        <FormControlLabel
                        control={<Checkbox className={classes.root} checked={this.state.checkBoxAddress} onChange={this.handleValueChange} name='checkBoxAddress'/>}
                        label='Address'
                        />
                    </FormGroup> */}

                    <TextField
                      inputProps={{
                        className: "textField",
                      }}
                      InputLabelProps={{
                        className: "textField",
                      }}
                      value={this.state.state}
                      onChange={this.dropDownChange}
                      name="stateText"
                      required
                      fullWidth
                      id="states"
                      label="State"
                      select
                    >
                      {this.state.dropDownList1.map((x) => {
                        return <MenuItem value={x.name}>{x.name}</MenuItem>;
                      })}
                    </TextField>
                    <TextField
                      inputProps={{
                        className: "textField",
                      }}
                      InputLabelProps={{
                        className: "textField",
                      }}
                      value={this.state.city}
                      onChange={this.handleValueChange}
                      name="cityText"
                      required
                      fullWidth
                      id="cities"
                      label="City"
                      select
                    >
                      {this.state.dropDownList2.map((x) => {
                        return <MenuItem value={x}>{x}</MenuItem>;
                      })}
                    </TextField>
                  </ThemeProvider>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    <Button
                      onClick={this.handleOnClick}
                      style={buttonStyle}
                      fullWidth
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Register
                    </Button>
                  </motion.div>
                  <Typography>
                    {" "}
                    Already registered ? |
                    <Link style={{ color: "orange" }} href="/login">
                      Login
                    </Link>
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Col>
        </Row>
        <CssBaseline />
      </Container>
    );
  }
}

export default withStyles(styles)(Register);
