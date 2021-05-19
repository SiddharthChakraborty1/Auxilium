import { Container, createMuiTheme, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import axios from "axios";
import { getSupplierById } from "../../Services/SupplierCredentials.service";
import { getFood } from "../../Services/UserDashboard.service";
import UserCard from "../UserCard/UserCard";
import { ThemeProvider, TextField, MenuItem, Paper } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const themes = createMuiTheme({
    palette:{
        primary: {
            main: orange[500],
            dark: orange[500]
        }
    }
})

const initialValues = {
    dropDownList1: [],
    dropDownList2 : [],
    state: '',
    city: ''
}



const useStyles = makeStyles((theme) => ({
  bgPaper: {
    width: "60vw",
    backgroundColor: "#212121",
    marginBottom: "20px",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },

  input: {
    margin: "0px 10px",
    width: "50%",
    backgrondColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  inputLabel: {
    color: "white",
  },
  textField:{
      color: 'white'
  }
}));

const UserDashboard = (props) => {
 const [values, setValues] = useState(initialValues);

  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [cityWiseList, setCityWiseList] = useState([]);
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = "#404040";
    if (props.productType != "Food Services") {
      getProductsByType(props.productType);
    } else {
      getFood();
    }
    // write the code for city and state

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
    })


  }, []);

  useEffect(() => {
    setProductList(tempList);
    setCityWiseList(tempList);
  }, [tempList]);

  useEffect(()=>{
      filterByCity(values.city);
  },[values.city]);

  const filterByCity=(city)=>
  {
      let tempList = [];
      productList.forEach(element=>{
          if(element.supplierCity == city)
          {
              tempList.push(element);
          }
      });

      setCityWiseList(tempList);

  }

  const dropDownChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      state: e.target.value,
      dropDownList2: values.dropDownList1.find((x) => x.name === e.target.value)
        .dropDownList2,
    });
  };

  const handleValueChange=(e)=>{

    e.preventDefault();
    const {name, value} = e.target;
    setValues({
        ...values,
        [name]: value
    })

  }

  async function getProductsByType(productType) {
    {
      console.log("came inside get products by type");

      //note: the product type will be supplied by the userDashboard
      //let finalProductList = [];
      let pList = [];
      let productArray = [];
      let url = "http://localhost:17014/api/products/type/" + productType;
      const response = await axios.get(url);
      const returnedData = await response.data;
      productArray = await returnedData;
      console.log(productList);

      // now we will get the required supplier details by using the supplier id
      // provided by the product

      productArray.forEach((element) => {
        let finalProductDetail = {};
        let supplier = getSupplierById(element.supplierId);
        supplier.then((data) => {
          console.log("got the supplier for product");

          // the following object will contain all the required data about the product
          // and it's supplier
          finalProductDetail = {
            ...element,
            supplierState: data.supplierState,
            supplierCity: data.supplierCity,
            supplierContact: data.supplierContact,
            supplierName: data.supplierName,
          };
          console.log(finalProductDetail);

          pList.push(finalProductDetail);
          if (pList.length == productArray.length) {
            setTempList(pList);
          }
          //console.log(finalProductList);
        });
        //return finalProductList;
      });
      //return finalProductList
    }
  }

  async function getFood() {
    {
      console.log("came inside get products by type");

      //note: the product type will be supplied by the userDashboard
      //let finalProductList = [];
      let pList = [];
      let foodArray = [];
      let url = "http://localhost:17014/api/foods";
      const response = await axios.get(url);
      const returnedData = await response.data;
      foodArray = await returnedData;
      console.log(productList);

      // now we will get the required supplier details by using the supplier id
      // provided by the product

      foodArray.forEach((element) => {
        let finalProductDetail = {};
        let supplier = getSupplierById(element.supplierId);
        supplier.then((data) => {
          console.log("got the supplier for product");

          // the following object will contain all the required data about the product
          // and it's supplier
          finalProductDetail = {
            ...element,
            supplierState: data.supplierState,
            supplierCity: data.supplierCity,
            supplierContact: data.supplierContact,
            supplierName: data.supplierName,
          };
          console.log(finalProductDetail);

          pList.push(finalProductDetail);
          if (pList.length == foodArray.length) {
            setTempList(pList);
          }
          //console.log(finalProductList);
        });
        //return finalProductList;
      });
      //return finalProductList
    }
  }
  
  return (
    <Container>
      <div className="heading">
        <h1 style={{ color: "white" }}>{props.productType}</h1>
      </div>
      <div className="cardContainer">
          
        <Paper className={classes.bgPaper} elevation={10}>
        <h4 style={{color: 'orange',  textAlign: 'center'}}>Search by your state and city</h4>
          <Grid className={classes.container} container>
            <Grid className={classes.input} item sm={5}>
              <TextField
                inputProps={{
                    className: classes.textField
                }}
                InputLabelProps={{
                  className: classes.inputLabel,
                }}
                value={values.state}
                onChange={dropDownChange}
                name="state"
               
                fullWidth
                id="states"
                label="State"
                select
              >
                 {values.dropDownList1.map((x) => {
                        return <MenuItem value={x.name}>{x.name}</MenuItem>;
                      })} 
              </TextField>
            </Grid>
            <ThemeProvider theme={themes}>
              <Grid className={classes.input} item sm={5}>
                <TextField
                inputProps={{
                    className: classes.textField
                }}
                  InputLabelProps={{
                    className: classes.inputLabel,
                  }}
                  name="city"
                  value={values.city}
                  onChange={handleValueChange}
                  
                  fullWidth
                  id="cities"
                  label="City"
                  select
                >
                  {values.dropDownList2.map((x) => {
                   return <MenuItem value={x}>{x}</MenuItem>;
                 })}
                </TextField>
              </Grid>
            </ThemeProvider>
          </Grid>
        </Paper>
        {/*<UserCard Title="Watermelon" Desc="<3" />*/}
        {cityWiseList.map((item) => (
          <div>
            <UserCard
              description={
                props.productType != "Food Services" ? item.productDesc
                : item.foodDesc
                  
              }
              supplier={item.supplierName}
              contact={item.supplierContact}
              state={item.supplierState}
              city={item.supplierCity}
              location={props.productType != 'Food Services' ? item.productServiceAddress : item.foodServiceAddress}
              date={props.productType != 'Food Services' ? item.productLastModifyDate : item.foodLastModifyDate}
              supplierId = {item.supplierId}
              productId={props.productType != 'Food Services'? item.productId: item.foodId}
              productType = {props.productType != 'Food Services' ? item.productType : item.foodPackaging}
            />
            <br />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default UserDashboard;
