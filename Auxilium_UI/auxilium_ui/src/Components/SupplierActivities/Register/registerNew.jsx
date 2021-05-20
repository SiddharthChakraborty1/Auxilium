import React, { useState, useEffect } from "react";
import axios from 'axios'
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import "./registerNew.css";
import { motion } from "framer-motion";
import {useHistory} from 'react-router-dom'
import { registerSupplier } from "../../../Services/SupplierCredentials.service";
import {
  MenuItem,
  Avatar,
  createMuiTheme,
  makeStyles,
  Paper,
  Typography,
  Link,
  AppBar,
  Button,
  ToolBar,
  InputBase,
  Grid,
  Toolbar,
}from "@material-ui/core";
import {getSupplierById} from '../../../Services/SupplierCredentials.service'
import PersonIcon from "@material-ui/icons/Person";
import { TextField } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { orange } from "@material-ui/core/colors";
import { white } from "material-ui/styles/colors";
import Supplier from "../../../Model/Supplier";

//import { getProductsByType } from "../../../Services/UserDashboard.service";


const initialValues = {
  name: "",
  email: "",
  password: "",
  confPassword: "",
  state: "",
  city: "",
  phone: "",
  dropDownList1: [],
  dropDownList2: [],
  finalProductList: [],
  tempList: []
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    

    backgroundColor: "#404040",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  containers: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000",
    height: "auto",
    marginTop: '30px',
    width: "50vw",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "10px",
    color: "white",

    fontSize: "10px",
  },
  search: {
    backgroundColor: "#404040",
    borderBottom: "1px solid white",
    width: "80%",

    margin: "10px",
    borderRadius: "4px",
    padding: "0px 4px",
    "& .MuiInputBase-input": {
      marginLeft: theme.spacing(1),
    },
    "&:hover": {
      opacity: "1",
      borderBottom: "1px solid orange",
      //border: '1px solid orange',
      //backgroundColor: 'white'
    },
  },
  textField: {
    width: "80%",
    color: "#ffffff",
    paddingRight: "15px",
    marginRight: "15px",

    alignItems: "center",
    justifyContent: "center",

    "& .MuiFormLabel-root": {
      color: "#fff",
    },

    // '& .MuiInputLabel-animated':{
    //     color: orange[500]
    // }
  },
  columns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    width: "100%",
  },
  label: {
    fontSize: "13px",
    backgroundColor: "#000",
  },
  row: {
    display: "block",

    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    fontSize: "13px",
  },
  generic: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    backgroundColor: 'orange',
    color: "#000",
    marginBottom: '10px'
  },

  row: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 10,
    fontSize: "15px",
  },

  btn: {
    backgroundColor: "orange",
    color: "white",
    width: "40%",
    alignSelf: "center",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#fff",
    },
  },
});

export default function RegisterNew() {
  const history = useHistory();
  const [values, setValues] = useState(initialValues);
  useEffect(() => {
    document.body.style.backgroundColor = "#404040";
    
    setValues({
      ...values,
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
  },[]);
    
    
  
  const classes = useStyles();

  
 

  const dropDownChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      state: e.target.value,
      dropDownList2: values.dropDownList1.find((x) => x.name === e.target.value)
        .dropDownList2,
    });
  };

  const initSupplier = () => {
    let supplier = new Supplier();
    supplier.name = values.name;
    supplier.email = values.email;
    supplier.password = values.password;
    supplier.phone = values.phone;
    supplier.state = values.state;
    supplier.city = values.city;
    return supplier;
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (
      values.name == "" ||
      values.email == "" ||
      values.password == "" ||
      values.confPassword == "" ||
      values.state == "" ||
      values.city == "" ||
      values.phone == ''
    ) {
      alert("one or more fields are empty");
    }
    else if(!pattern.test(values.email))
    {
      alert('Invalid email format')
    }
    else if(values.password.length < 6)
    {
      alert('password must be at least 6 characters long');
    }
     else if (values.password !== values.confPassword) {
      alert("Passwords do not match");
    } else {
      let supplierData = initSupplier();

      let returnedId = registerSupplier(supplierData);
      returnedId.then((id) => {
          console.log(id);
        if (id === -1) {
            // if id is -1 this means the email is already linked to another account
          console.log("The eamil is already linked to an account");
          alert('This email is already linked wiht another account');
        } else {
          localStorage.setItem("supId", id);
          alert('Registered successfully');
          history.push('/supplierDashboard');
          
          //Note: id this is id of the newly added supplier
          // retrieve this id anywhere in the app by using the following statement
          // let id = localStorage.getItem('supId);
        }
      });
    }
  };
  return (
    
    <div>
      <AppBar style={{backgroundColor:'black', color:'orange'}} position='static'>
        <Toolbar>
          <Grid container>
            <Grid item>
              <Typography>
               <h4> Auxilium</h4>
              </Typography>
            </Grid>
            <Grid item sm>

            </Grid>
            <Grid item>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    <Container>
      
      
      <Container className={classes.root}>
     
     <ThemeProvider theme={theme}>
         <motion.div
         initial={{opacity: 0, x:-350}}
         animate={{opacity: 1, x:0}}
         transition={{duration: 1.3}}
         
         >
       <Paper elevation={10} className={classes.paper}>
         <Avatar className={classes.avatar}>
           <LockIcon color="orange[500]" />
         </Avatar>
         <h4>Supplier Registration</h4>

         <Container className="containers">
           <Row className={classes.row}>
             <Col className={classes.columns}>
               <TextField
                 margin="dense"
                 variant="outlined"
                 inputProps={{
                   className: classes.textInput,
                 }}
                 InputLabelProps={{
                   className: classes.label,
                 }}
                 className={classes.textField}
                 value={values.name}
                 onChange={handleValueChange}
                 rquired
                 placeholder="Enter your Name"
                 type="text"
                 fullWidth
                 name="name"
                 label="Name"
               />

               <TextField
                 margin="dense"
                 value={values.email}
                 onChange={handleValueChange}
                 variant="outlined"
                 inputProps={{
                   readonly: true,
                   className: classes.textInput,
                 }}
                 InputLabelProps={{
                   className: classes.label,
                 }}
                 className={classes.textField}
                 required
                 placeholder="Enter email"
                 type="text"
                 fullWidth
                 name="email"
                 label="Email"
               />
             </Col>
             <Col className={classes.columns}>
               <TextField
                 margin="dense"
                 variant="outlined"
                 inputProps={{
                   readonly: true,
                   className: classes.textInput,
                 }}
                 InputLabelProps={{
                   className: classes.label,
                 }}
                 className={classes.textField}
                 value={values.password}
                 onChange={handleValueChange}
                 required
                 placeholder="Enter Password (at least 6 characters)"
                 type="password"
                 fullWidth
                 name="password"
                 label="Password"
               />

               <TextField
                 margin="dense"
                 variant="outlined"
                 inputProps={{
                   readonly: true,
                   className: classes.textInput,
                 }}
                 InputLabelProps={{
                   className: classes.label,
                 }}
                 value={values.confPassword}
                 onChange={handleValueChange}
                 required
                 className={classes.textField}
                 placeholder="Confirm Password"
                 type="password"
                 fullWidth
                 name="confPassword"
                 label="Confirm Password"
               />
             </Col>
             <Col className={classes.columns}>
               <TextField
                 margin="dense"
                 variant="outlined"
                 inputProps={{
                   readonly: true,
                   className: classes.textInput,
                 }}
                 InputLabelProps={{
                   className: classes.label,
                 }}
                 value={values.phone}
                 onChange={handleValueChange}
                 required
                 className={classes.textField}
                 placeholder="Enter Phone Number"
                 type="number"
                 fullWidth
                 name="phone"
                 label="Phone Number"
               />
               <TextField
                 margin="dense"
                 variant="outlined"
                 inputProps={{
                   readonly: true,
                   className: classes.textInput,
                 }}
                 InputLabelProps={{
                   className: classes.label,
                 }}
                
                 multiline
                 rowsMax={2}
                 className={classes.textField}
                 placeholder="Enter Address"
                 type="text"
                 fullWidth
                 name="address"
                 label="Address"
               />
             </Col>
             <Col className={classes.columns}>
               <TextField
                 margin="dense"
                 variant="outlined"
                 inputProps={{
                   readonly: true,
                   className: classes.textInput,
                 }}
                 InputLabelProps={{
                   className: classes.label,
                 }}
                 className={classes.textField}
                 value={values.state}
                 onChange={dropDownChange}
                 name="state"
                 required
                 fullWidth
                 id="states"
                 label="State"
                 select
               >
                 {values.dropDownList1.map((x) => {
                   return <MenuItem value={x.name}>{x.name}</MenuItem>;
                 })}
               </TextField>
               <TextField
                 margin="dense"
                 variant="outlined"
                 inputProps={{
                   readonly: true,
                   className: classes.textInput,
                 }}
                 InputLabelProps={{
                   className: classes.label,
                 }}
                 className={classes.textField}
                 value={values.city}
                 onChange={handleValueChange}
                 name="city"
                 required
                 fullWidth
                 id="cities"
                 label="City"
                 select
               >
                 {values.dropDownList2.map((x) => {
                   return <MenuItem value={x}>{x}</MenuItem>;
                 })}
               </TextField>
             </Col>
           </Row>
           <Row className={classes.row}>
           <motion.div
               className={classes.generic}
               whileHover={{
                 scale: 1.03,
               }}
             >
               <Button onClick={handleOnClick} className={classes.btn}>
                 Register
               </Button>
             </motion.div>
               <Col className={classes.columns}>
           <Typography>
                   {" "}
                   Already registered ? |
                   <Link style={{ color: "orange" }} href="/login">
                     Login
                   </Link>
                 </Typography>
                 </Col>
             
           </Row>
         </Container>
       </Paper>
       </motion.div>
     </ThemeProvider>
   </Container>
    </Container>
    </div>
  );
}
