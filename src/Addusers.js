import React, { useState, useEffect } from 'react';
import Aside from './Admin/Components/Aside/Aside'
import { useParams } from 'react-router-dom';
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import Smallicon from './Admin/Components/heart-icon.png'
import Jathagam from './Admin/Components/Member/Jathagam';


const Addusers = () => {
  const [regId, setRegId] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const [options, setOptions] = useState({
    genderOptions: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
    sevaikiragamOptions: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    bloodgroupOptions: [
      { value: "A Positive", label: "A Positive" },
      { value: "A Negative", label: "A Negative" },
      { value: "B Positive", label: "B Positive" },
      { value: "B Negative", label: "B Negative" },
      { value: "O Positive", label: "O Positive" },
      { value: "O Negative", label: "O Negative" },
    ],
    status_childrenOptions: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    patham_numberOptions: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
    ],
    brother_marriedOptions: [
      { value: "Married", label: "Married" },
      { value: "Unmarried", label: "Unmarried" },
    ],
    sister_marriedOptions: [
      { value: "Married", label: "Married" },
      { value: "Unmarried", label: "Unmarried" },
    ],

    smokingOptions: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
      { value: "Planning to Leave", label: "Planning to Leave" },
    ],
    drinkingOptions: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
      { value: "Planning to Leave", label: "Planning to Leave" },
    ],
    partner_matrial_statusOptions: [
      { value: "Single", label: "Single" },
      { value: "Divorce", label: "Divorce" },
      { value: "Widow", label: "Widow" },
      { value: "anyone", label: "Any One" },
    ],
    food_habitsOptions: [
      { value: "Vegetarian", label: "Vegetarian" },
      { value: "Non-Vegetarian", label: "Non-Vegetarian" },
    ],
    partner_child_genderOptions: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    partner_manglikOptions: [
      { value: "Yes", label: "Yes" },
      { value: "no", label: "No" },
    ],

    // partner_educationOptions: [
    //   { value: 'Bachelor', label: 'Bachelor' },
    //   { value: 'Master', label: 'Master' },
    //   { value: 'Phd', label: 'Phd' },
    //   { value: 'Others', label: 'Others' },
    // ],
    // body_typeOptions : [
    //   { value: 'Slim', label: 'Slim' },
    //   { value: 'Average', label: 'Average' },
    //   { value: 'Fat', label: 'Fat' }

    // ],
    // educationOptions: [
    //   { value: 'Bachelor', label: 'Bachelor' },
    //   { value: 'Master', label: 'Master' },
    // ],
    residenceOptions: [
      { value: "Citizen", label: "Citizen" },
      { value: "Permanent Resident", label: "Permanent Resident" },
      { value: "Temporary Visa", label: "Temporary Visa" },
      { value: "Work Permit", label: "Work Permit" },
    ],
    skin_toneOptions: [
      { value: "Wheatish", label: "Wheatish" },
      { value: "Very Fair", label: "Very Fair" },
      { value: "Fair", label: "Fair" },
      { value: "Wheatish Brown", label: "Wheatish Brown" },
      { value: "Dark", label: "Dark" },
    ],
    profile_byOptions: [
      { value: "Self", label: "Self" },
      { value: "Parents", label: "Parents" },
      { value: "Guardian", label: "Guardian" },
      { value: "Friends", label: "Friends" },
      { value: "Relatives", label: "Relatives" },
    ],
    family_typeOptions: [
      { value: "Rich ", label: "Rich" },
      { value: "Upper Middle Class", label: "Upper Middle Class" },
      { value: "Lower Middle Class", label: "Lower Middle Class" },
      { value: "Middle Class", label: "Middle Class" },
      { value: "Poor", label: "Poor" },
    ],
    family_statusOptions: [
      { value: "Nuclear Family", label: "Nuclear Family" },
      { value: "Joint Family", label: "Joint Family" },
    ],
    partner_from_ageOptions: [
      { value: "18", label: "18 Years" },
      { value: "19", label: "19 Years" },
      { value: "20", label: "20 Years" },
      { value: "21", label: "21 Years" },
      { value: "22", label: "22 Years" },
      { value: "23", label: "23 Years" },
      { value: "24", label: "24 Years" },
      { value: "25", label: "25 Years" },
      { value: "26", label: "26 Years" },
      { value: "27", label: "27 Years" },
      { value: "28", label: "28 Years" },
      { value: "29", label: "29 Years" },
      { value: "30", label: "30 Years" },
      { value: "31", label: "31 Years" },
      { value: "32", label: "32 Years" },
      { value: "33", label: "33 Years" },
      { value: "34", label: "34 Years" },
      { value: "35", label: "35 Years" },
      { value: "36", label: "36 Years" },
      { value: "37", label: "37 Years" },
      { value: "38", label: "38 Years" },
      { value: "39", label: "39 Years" },
      { value: "40", label: "40 Years" },
      { value: "41", label: "41 Years" },
      { value: "42", label: "42 Years" },
      { value: "43", label: "43 Years" },
      { value: "44", label: "44 Years" },
      { value: "45", label: "45 Years" },
      { value: "46", label: "46 Years" },
      { value: "47", label: "47 Years" },
      { value: "48", label: "48 Years" },
      { value: "49", label: "49 Years" },
      { value: "50", label: "50 Years" },
      { value: "51", label: "51 Years" },
      { value: "52", label: "52 Years" },
      { value: "53", label: "53 Years" },
      { value: "54", label: "54 Years" },
      { value: "55", label: "55 Years" },
      { value: "56", label: "56 Years" },
      { value: "57", label: "57 Years" },
      { value: "58", label: "58 Years" },
      { value: "59", label: "59 Years" },
      { value: "60", label: "60 Years" },
    ],
    partner_to_ageOptions: [
      { value: "18", label: "18 Years" },
      { value: "19", label: "19 Years" },
      { value: "20", label: "20 Years" },
      { value: "21", label: "21 Years" },
      { value: "22", label: "22 Years" },
      { value: "23", label: "23 Years" },
      { value: "24", label: "24 Years" },
      { value: "25", label: "25 Years" },
      { value: "26", label: "26 Years" },
      { value: "27", label: "27 Years" },
      { value: "28", label: "28 Years" },
      { value: "29", label: "29 Years" },
      { value: "30", label: "30 Years" },
      { value: "31", label: "31 Years" },
      { value: "32", label: "32 Years" },
      { value: "33", label: "33 Years" },
      { value: "34", label: "34 Years" },
      { value: "35", label: "35 Years" },
      { value: "36", label: "36 Years" },
      { value: "37", label: "37 Years" },
      { value: "38", label: "38 Years" },
      { value: "39", label: "39 Years" },
      { value: "40", label: "40 Years" },
      { value: "41", label: "41 Years" },
      { value: "42", label: "42 Years" },
      { value: "43", label: "43 Years" },
      { value: "44", label: "44 Years" },
      { value: "45", label: "45 Years" },
      { value: "46", label: "46 Years" },
      { value: "47", label: "47 Years" },
      { value: "48", label: "48 Years" },
      { value: "49", label: "49 Years" },
      { value: "50", label: "50 Years" },
      { value: "51", label: "51 Years" },
      { value: "52", label: "52 Years" },
      { value: "53", label: "53 Years" },
      { value: "54", label: "54 Years" },
      { value: "55", label: "55 Years" },
      { value: "56", label: "56 Years" },
      { value: "57", label: "57 Years" },
      { value: "58", label: "58 Years" },
      { value: "59", label: "59 Years" },
      { value: "60", label: "60 Years" },
    ],
  });
  

  useEffect(() => {
    // Fetch dropdown options when component mounts
    fetchDropdownOptions('marriage_type');
    fetchDropdownOptions('religion');
    fetchDropdownOptions('caste');
    fetchDropdownOptions('zodiacsign');
    fetchDropdownOptions('star');
    fetchDropdownOptions('mother_tongue');
    fetchDropdownOptions('education');
    fetchDropdownOptions('occupation');
    fetchDropdownOptions('jobdetails');
    fetchDropdownOptions('annual_income');
    fetchDropdownOptions('city');
    fetchDropdownOptions('bloodgroup');
    fetchDropdownOptions('plan_name');
    fetchDropdownOptions('partner_religion');
    fetchDropdownOptions('partner_caste');
    fetchDropdownOptions('partner_country');
    fetchDropdownOptions('partner_state');
    fetchDropdownOptions('partner_education');
    fetchDropdownOptions('partner_occupation');
    fetchDropdownOptions('father_occupation');
    fetchDropdownOptions('mother_occupation');
    fetchDropdownOptions('partner_mother_tongue');
    fetchDropdownOptions('partner_salary');
  }, []);
 
  // Function to generate a unique registration ID
  const generateRegId = () => {
    const date = new Date();
    const year = date.getFullYear().toString().substr(2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const randomNum = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
    const newRegId = `TULR${year}${month}${day}${randomNum}`;
    setRegId(newRegId);
  };
  console.log(regId);
  


  const initialFormData = {
    "section1": {  
      "name": "",
      "gender": "",   
      "phonenumber": "",
      "password": "",
      "dob": "",
      "email": "",
      "age": "",  
      "mother_tongue": "",
      "marriage_type": "",
      "religion": "",
      "caste": "",
      "subcaste": "",
      "sevaikiragam": "",
      "gothram": "",
      "star": "",
      "patham_number": "",
      "zodiacsign": "",
      "birthplace": "",
      "birthtime": "",
      "education":"",
      "education_details":"",
      "occupation":"",
      "jobdetails":"",
      "joblocation":"",
      "annual_income":"",
      "kuladeivam":"",
      "plan_name": "",
      "plan_register_date": ""

    },
    "section2": {
      "city": "",
      "residence": "",
      "alternatenumber": "",
      "mothercountry": "",
      "address": ""
    },
    "section3": {
      "height": "",
      "food_habits": "",
      "bloodgroup": "",
      
      "skin_tone": "",
      "profile_by": "",
      "aboutme": ""
    },
    "section4": {
      "family_type": "",
      "family_status": "",
      "father_name": "",
      "father_occupation": "",
      "mother_name": "",
      "mother_occupation": "",
      "brothers_count": "",
      "sisters_count": "",
      "brother_married": "",
      "sister_married": "",
      "family_details": ""
    },
    "section5": {
      "partner_from_age": "",
      "partner_to_age": "",
      "partner_height": "",
      "partner_religion": "",
      "partner_caste": "",
      "partner_matrial_status": "",
      "partner_education": "",
      "partner_occupation": "",
      "partner_mother_tongue": "",
      "partner_manglik": "",
      "partner_salary": ""
      
    },
    "section6": {
      "image": "",
      "image1": "",
      "id_image": "",
      "id_image1": "", 
      "rasiimage": "",
    }
  };
  const labelTranslations = {
    "reg_id": "பதிவு ஐடி",
    "plan_name": "உறுப்பினர் திட்டம்",
    "plan_register_date": "திட்டம் பதிவு செய்யப்பட்ட தேதி",
    "name": "பெயர்",
    "image": "படம்",
    "gender": "பாலினம்",
    "email": "மின்னஞ்சல்",
    "phonenumber": "தொலைபேசி எண்",
    "password": "கடவுச்சொல்",
    "mother_tongue": "தாய்மொழி",
    "dob": "பிறந்த தேதி",
    "marriage_type": "திருமண நிலை",
    "status_children": "குழந்தைகளின் நிலை",
    "child_count": "குழந்தைகளின் எண்ணிக்கை",
    "age": "வயது",
    "patham_number":"பாதம்",
    "religion": "மதம்",
    "kuladeivam": "குலதெய்வம்",
    "bloodgroup": "இரத்த வகை",
    "caste": "இனம்",
    "subcaste": "உட்பிரிவு",
    "sevaikiragam": "செவ்வாய் தோஷம்",
    "gothram": "கோத்ரம்",
    "zodiacsign": "ராசி",
    "star": "நட்சத்திரம்",
    "birthplace": "பூர்வீகம்",
    "birthtime": "பிறந்த நேரம்",
    "education":"கல்வி",
    "education_details":"கல்வி விவரங்கள்",
    "occupation":"வேலை",
    "jobdetails":"தொழில் விவரம்",
    "joblocation":"தொழில் இடம்",
    "annual_income":"ஆண்டு / மாத வருமானம் ", 
    "country": "நாடு",
    "state": "மாநிலம்",
    "city": "பிறந்த மாவட்டம்",
    "residence": "குடியிருப்பு வகை",
    "alternatenumber": "தொலைபேசி மாற்று எண்",
    "mothercountry": "தாய்நாடு",
    "address": "தற்போதைய முகவரி",
    "height": "உயரம்",
    "weight": "எடை",
    "food_habits": "உணவு பழக்கம்",
    "smoking": "புகைபிடிக்கும் பழக்கம்",
    "drinking": "குடிபழக்கம்",
    "skin_tone": "தோல் நிறம்",
    "profile_by": "பதிவு செய்பவர்",
    "aboutme": "என்னப் பற்றி",
    "family_type": "குடும்ப வகை",
    "family_status": "குடும்ப நிலை",
    "father_name": "தந்தை பெயர்",
    "father_occupation": "தந்தை பணி",
    "mother_name": "தாய் பெயர்",
    "mother_occupation": "தாய் பணி",
    "brothers_count": "சகோதரர் எண்ணிக்கை",
    "sisters_count": "சகோதரி எண்ணிக்கை",
    "brother_married": "திருமணம் ஆன சகோதரர் எண்ணிக்கை",
    "sister_married": "திருமணம் ஆன சகோதரி எண்ணிக்கை",
    "family_details": "குடும்ப விவரங்கள்",
    "partner_from_age": "மணமகன் / மணமகள் வயது வரம்பு",
    "partner_to_age": "மணமகன் / மணமகள் வயது வரம்பு",
    "partner_height": "உயரம்",
    "partner_weight": "எடை",
    "partner_religion": "மதம்",
    "partner_caste": "இனம்",
    "partner_country": "நாடு",
    "partner_state": "மாநிலம்",
    "partner_matrial_status": "திருமணம் நிலை",
    "partner_education": "கல்வி",
    "partner_occupation": "பணி",
    "partner_mother_tongue": "தாய்மொழி",
    "partner_manglik": "செவ்வாய் தோஷம்",
    "partner_salary": "சம்பளம்",
    "partner_child_count": "குழந்தைகளின் எண்ணிக்கை",
    "partner_child_age": "குழந்தைகளின் வயது",
    "partner_child_gender": "குழந்தைகளின் பாலினம்",
    "image": "சுயசாதாரண படம்",
    "image1": "சுயசாதாரண படம் - 2",
    "id_image": "அடையாள படம்",
    "id_image1": "அடையாள படம் - 2",
    "rasiimage": "ஜாதகப் படம்"
  };
  const statesInIndia = [
    { id: 1, name: 'Andhra Pradesh' },
    { id: 2, name: 'Arunachal Pradesh' },
    { id: 3, name: 'Assam' },
    { id: 4, name: 'Bihar' },
    { id: 5, name: 'Chhattisgarh' },
    { id: 6, name: 'Goa' },
    { id: 7, name: 'Gujarat' },
    { id: 8, name: 'Haryana' },
    { id: 9, name: 'Himachal Pradesh' },
    { id: 10, name: 'Jharkhand' },
    { id: 11, name: 'Karnataka' },
    { id: 12, name: 'Kerala' },
    { id: 13, name: 'Madhya Pradesh' },
    { id: 14, name: 'Maharashtra' },
    { id: 15, name: 'Manipur' },
    { id: 16, name: 'Meghalaya' },
    { id: 17, name: 'Mizoram' },
    { id: 18, name: 'Nagaland' },
    { id: 19, name: 'Odisha' },
    { id: 20, name: 'Punjab' },
    { id: 21, name: 'Rajasthan' },
    { id: 22, name: 'Sikkim' },
    { id: 23, name: 'Tamil Nadu' },
    { id: 24, name: 'Telangana' },
    { id: 25, name: 'Tripura' },
    { id: 26, name: 'Uttar Pradesh' },
    { id: 27, name: 'Uttarakhand' },
    { id: 28, name: 'West Bengal' },
    { id: 29, name: 'Andaman and Nicobar Islands' },
    { id: 30, name: 'Chandigarh' },
    { id: 31, name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { id: 32, name: 'Delhi' },
    { id: 33, name: 'Lakshadweep' },
    { id: 34, name: 'Puducherry' },
];

  const fieldTypeMapping = {
    reg_id: 'text',
    name: 'text',
    image: 'file',
    gender: 'text',
    email: 'email',
    phonenumber: 'tel',
    password: 'password',
    dob: 'date',
    plan_register_date: 'date',
    birthtime: 'time',
    address: 'textarea'

    // Add more field names and their corresponding input types as needed
  };
  const sectionNames = {
    section1: 'Basic Details',
    section2: 'Residence',
    section3: 'Physical Info',
    section4: 'Family Details',
    section5: 'Partner Preferences',
    section6: 'Upload Images',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [currentSection, setCurrentSection] = useState('section1');
  const [customerData, setCustomerData] = useState({});
  const [casteList, setCasteList] = useState([]);

  // useEffect(() => {
  //   if (formData.currentSection === 'caste' || formData.currentSection === 'partner_cast') {
  //     fetchCasteList();
  //   }
  // }, [formData.currentSection]);

  // const fetchCasteList = () => {
  //   fetch('http://localhost:8000/data/castelist')
  //     .then(response => response.json())
  //     .then(data => {
  //       setCasteList(data); // Assuming the API returns an array of caste list
  //       console.log(casteList)
  //     })
  //     .catch(error => {
  //       console.error('Error fetching caste list:', error);
  //     });
  // };

  const handleChange = (e) => {
    const { name, files } = e.target;
    
    if (['image', 'image1', 'id_image', 'id_image1', 'rasiimage'].includes(name)) {
      // Read the file contents
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // Store the file contents in state
        setFormData(prevState => ({
          ...prevState,
          [currentSection]: {
            ...prevState[currentSection],
            [name]: reader.result // Store the file contents
          }
        }));
      };
      if (file) {
        reader.readAsDataURL(file); // Read file as data URL
      }
    } else {
      const { value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [currentSection]: {
          ...prevState[currentSection],
          [name]: value
        }
      }));
    }
  };
  

  const handleNext = (e) => {
    const { name, value } = e.target;

   
      console.log('next');
      const sections = Object.keys(formData);
      const currentIndex = sections.indexOf(currentSection);
      const nextIndex = currentIndex + 1;
      if (nextIndex < sections.length) {
        setCurrentSection(sections[nextIndex]);
      }
    
    
  };
  
  
  const generateStateOptions = () => {
    // Generate options for state dropdown
    return statesInIndia.map(state => ({ value: state.name, label: state.name }));
  };
 const fetchDropdownOptions = async (fieldName) => {
  try {
    let endpoint = '';
    switch (fieldName) { 
      case 'gender':
        // Options for gender dropdown
        setOptions(prevOptions => ({
          ...prevOptions,
          [fieldName + 'Options']: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
          ]
        }));
        break; 
        case 'patham_number':
        // Options for gender dropdown
        setOptions(prevOptions => ({
          ...prevOptions,
          [fieldName + 'Options']: [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' }
          ]
        }));
        break; 
        case 'partner_child_gender':
          // Options for gender dropdown
          setOptions(prevOptions => ({
            ...prevOptions,
            [fieldName + 'Options']: [
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' }
            ]
          }));
          break;
          case 'partner_to_age':
            // Options for partner's age dropdown
            const partner_to_ageOptions = [];
            for (let i = 18; i <= 60; i++) {
              partner_to_ageOptions.push({ value: String(i), label: `${i} Years` });
            }
            setOptions(prevOptions => ({
              ...prevOptions,
              [fieldName + 'Options']: partner_to_ageOptions
            }));
            break;
            case 'partner_from_age':
              // Options for partner's age dropdown
              const partner_from_ageOptions = [];
              for (let i = 18; i <= 60; i++) {
                partner_from_ageOptions.push({ value: String(i), label: `${i} Years` });
              }
              setOptions(prevOptions => ({
                ...prevOptions,
                [fieldName + 'Options']: partner_from_ageOptions
              }));
              break;
        case 'sevaikiragam':
          // Options for marriage type dropdown
          setOptions(prevOptions => ({
            ...prevOptions,
            [fieldName + 'Options']: [
              { value: 'Yes', label: 'Yes' },
                { value: 'no', label: 'No' }    
            ]
          }));
          break;
          case 'bloodgroup':
            // Options for marriage type dropdown
            setOptions(prevOptions => ({
              ...prevOptions,
              [fieldName + 'Options']: [
                { value: 'A Positive', label: 'A Positive' },
                { value: 'A Negative', label: 'A Negative' },
                { value: 'B Positive', label: 'B Positive' },
                { value: 'B Negative', label: 'B Negative' } ,
                { value: 'O Positive', label: 'O Positive' },
                { value: 'O Negative', label: 'O Negative' }    
              ]
            }));            
          break;
          case 'partner_manglik':
            // Options for marriage type dropdown
            setOptions(prevOptions => ({
              ...prevOptions,
              [fieldName + 'Options']: [
                { value: 'Yes', label: 'Yes' },
                { value: 'no', label: 'No' }   
              ]
            }));            
          break;
          case 'status_children':
            // Options for marriage type dropdown
            setOptions(prevOptions => ({
              ...prevOptions,
              [fieldName + 'Options']: [
                { value: 'Yes', label: 'Yes' },
                { value: 'no', label: 'No' }   
              ]
            }));            
          break;
          case 'food_habits':
              // Options for marriage type dropdown
              setOptions(prevOptions => ({
                ...prevOptions,
                [fieldName + 'Options']: [
                  { value: 'Vegetarian', label: 'Vegetarian' },
                  { value: 'Non-Vegetarian', label: 'Non-Vegetarian' }   
                ]
            }));
          break;
          case 'residence':
              // Options for marriage type dropdown
              setOptions(prevOptions => ({
                ...prevOptions,
                [fieldName + 'Options']: [
                  { value: 'Citizen', label: 'Citizen' },
                  { value: 'Permanent Resident', label: 'Permanent Resident' },
                  { value: 'Temporary Visa', label: 'Temporary Visa' },
                  { value: 'Work Permit', label: 'Work Permit' },   
                    ]
                }));
              break;

          
              case 'body_type':
                // Options for marriage type dropdown
                setOptions(prevOptions => ({
                  ...prevOptions,
                  [fieldName + 'Options']: [
                    { value: 'Slim', label: 'Slim' },
                    { value: 'Average', label: 'Average' },
                    { value: 'Fat', label: 'Fat' }
                  ]
                }));
              break;
              case 'skin_tone':
                // Options for marriage type dropdown
                setOptions(prevOptions => ({
                  ...prevOptions,
                  [fieldName + 'Options']: [
                    { value: 'Wheatish', label: 'Wheatish' },
                    { value: 'Very Fair', label: 'Very Fair' },
                    { value: 'Fair', label: 'Fair' },
                    { value: 'Wheatish Brown', label: 'Wheatish Brown' },
                    { value: 'Dark', label: 'Dark' }
                  ]
                }));
              break; 
              case 'profile_by':
                // Options for marriage type dropdown
                setOptions(prevOptions => ({
                  ...prevOptions,
                  [fieldName + 'Options']: [
                    { value: 'Self', label: 'Self' },
                    { value: 'Parents', label: 'Parents' },
                    { value: 'Guardian', label: 'Guardian' },
                    { value: 'Friends', label: 'Friends' },
                    { value: 'Relatives', label: 'Relatives' }
                  ]
                }));
              break;
              case 'family_type':
                // Options for marriage type dropdown
                setOptions(prevOptions => ({
                  ...prevOptions,
                  [fieldName + 'Options']: [
                    { value: 'Rich ', label: 'Rich' },
                    { value: 'Upper Middle Class', label: 'Upper Middle Class' }, 
                    { value: 'Lower Middle Class', label: 'Lower Middle Class' },  
                    { value: 'Middle Class', label: 'Middle Class' }, 
                    { value: 'Poor', label: 'Poor' }          
                  ]
                }));
              break;
              case 'family_status':
                // Options for marriage type dropdown
                setOptions(prevOptions => ({
                  ...prevOptions,
                  [fieldName + 'Options']: [
                    { value: 'Nuclear Family', label: 'Nuclear Family' },
                    { value: 'Joint Family', label: 'Joint Family' }             
                  ]
                }));
              break;
            case 'country': 
            // Options for marriage type dropdown
            setOptions(prevOptions => ({
              ...prevOptions,
              [fieldName + 'Options']: [
                { value: 'india', label: 'India' } 
              ]
            }));
          break;
          case 'partner_country':
            // Options for marriage type dropdown
            setOptions(prevOptions => ({
              ...prevOptions,
              [fieldName + 'Options']: [
                { value: 'india', label: 'India' }
                  
              ]
          }));
         break;
         case 'state':
          // Options for state dropdown
          const stateOptions = generateStateOptions();
          setOptions(prevOptions => ({
            ...prevOptions,
            [fieldName + 'Options']: stateOptions
          }));
          break;
        case 'partner_state':
          // Options for partner state dropdown
          const partnerStateOptions = generateStateOptions();
          setOptions(prevOptions => ({
            ...prevOptions,
            [fieldName + 'Options']: partnerStateOptions
          }));
          break;
        case 'marriage_type':
            // Options for marriage type dropdown
          setOptions(prevOptions => ({
              ...prevOptions,
              [fieldName + 'Options']: [
                { value: 'single', label: 'Single' },
                { value: 'divorce', label: 'Divorce' },
                { value: 'widow', label: 'Widow' },
                { value: 'anyone', label: 'Any One' }
              ]
            }));
            break;
      case 'religion':
        // Fetch options from API for religion
        //http://localhost:8000/religionlist
        //https://tulirmatrimony.com/controlapi/religionlist.php
        endpoint = 'https://tulirmatrimony.com/controlapi/religionlist.php';
        break;

      case 'caste':
      // case 'partner_caste':
      // Set the appropriate endpoint for fetching caste list based on currentSection
      endpoint = 'https://tulirmatrimony.com/controlapi/castelist.php';
      //http://localhost:8000/data/castelist
      //https://tulirmatrimony.com/controlapi/castelist.php
      break;
      case 'plan_name':
        // Fetch options from different API for zodiacsign
        endpoint = 'https://tulirmatrimony.com/controlapi/planlist.php';
        break;
      case 'zodiacsign':
          // Fetch options from different API for zodiacsign
        endpoint = 'https://tulirmatrimony.com/controlapi/moonsignlist.php';
        break;
      case 'star':
        // Fetch options from different API for star
        endpoint = 'https://tulirmatrimony.com/controlapi/starlist.php';
        break;
      case 'mother_tongue':
        // Fetch options from different API for education
        endpoint = 'https://tulirmatrimony.com/controlapi/languagelist.php';
        break;
        case 'education':
          // Fetch options from different API for education
          endpoint = 'https://tulirmatrimony.com/controlapi/educationlist.php';
          break;
        case 'occupation':
          // Fetch options from different API for education
          endpoint = 'https://tulirmatrimony.com/controlapi/occupationlist.php';
          break;
        case 'annual_income':
        // Fetch options from different API for education
        endpoint = 'https://tulirmatrimony.com/controlapi/incomelist.php';
        break;
        case 'city':
          // Fetch options from different API for education
          endpoint = 'https://tulirmatrimony.com/controlapi/districtlist.php';
          break;
        case 'father_occupation':
          // Fetch options from different API for education
          endpoint = 'https://tulirmatrimony.com/controlapi/occupationlist.php';
          break;
        case 'mother_occupation':
            // Fetch options from different API for education  partner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/occupationlist.php';
          break;
        case 'partner_religion':
              // Fetch options from different API for education  partner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/religionlist.php';
          break;
         case 'partner_caste':
           // Fetch options from different API for education  partner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/castelist.php';
          //http://localhost:8000/data/castelist
          //https://tulirmatrimony.com/controlapi/castelist.php
          break;
        case 'partner_education':
                // Fetch options from different API for education  partner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/educationlist.php';
         break;
        case 'partner_occupation':
             // Fetch options from different API for education  partner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/occupationlist.php';
          break;
        case 'partner_mother_tongue':
            // Fetch options from different API for education  partner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/languagelist.php';
          break;
        case 'partner_salary':
            // Fetch options from different API for education  partner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/incomelist.php';
          break;
      default:
        break;
    } 
  
    if (endpoint !== '') {
      const response = await fetch(endpoint);
      if (response.ok) {
        const responseData = await response.json();
        let options;
    
        // Modify mapping based on fieldName
        switch (fieldName) {
          case 'caste':
            options = responseData.body.map(item => ({ value: item.caste_name, label: item.caste_name }));
            break;
          case 'partner_caste':
            options = responseData.body.map(item => ({ value: item.caste_name, label: item.caste_name }));
            break;
          case 'city':
            options = responseData.body.map(item => ({ value: item.district_name, label: item.district_name }));
            break;
          default:
            options = responseData.body.map(item => ({ value: item.name, label: item.name }));
            break;
        }
    
        setOptions(prevOptions => ({
          ...prevOptions,
          [fieldName + 'Options']: options
        }));
      } else {
        console.error(`Failed to fetch dropdown options for ${fieldName}`);
      }
    }
    
    
  } catch (error) {
    console.error(`Error fetching dropdown options for ${fieldName}:`, error);
  }
};





  const handleSubmit = async (e) => {
    try {
      // Combine all section data into one object
      const combinedData = Object.values(formData).reduce((acc, sectionData) => {
        return { ...acc, ...sectionData };
      }, {});
      const { name, value } = e.target;

      if (['name'].includes(name) && value.trim() === '') {
      
        alert("Please Enter Required Fields!");
        console.log('Please Enter Required Fields!');
      }

      const imageData = {
        image: combinedData.image ? combinedData.image.split(',')[1] : null,
        image1: combinedData.image1 ? combinedData.image1.split(',')[1] : null,
        id_image: combinedData.id_image ? combinedData.id_image.split(',')[1] : null,
        id_image1: combinedData.id_image1 ? combinedData.id_image1.split(',')[1] : null,
        rasiimage: combinedData.rasiimage ? combinedData.rasiimage.split(',')[1] : null,
      };

      // Include regId in the combinedData object
      combinedData.reg_id = regId;

      // Store combined data in localStorage
      localStorage.setItem('formData', JSON.stringify(combinedData));

      // Optionally, you can also send data to the server here
      //https://tulirmatrimony.com/controlapi/addcustomer.php
      //http://localhost:8000/addcustomer
      const response = await fetch(
        "https://tulirmatrimony.com/controlapi/addcustomer.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...combinedData, ...imageData }),
        }
      );
     console.log(combinedData);
    // Handle the response from your Node.js server
    if (response.ok) {
      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);   
      if (responseData.head.code === 200) {
        // Handle the success scenario, such as updating the UI or moving to another section
        setCurrentSection('section6');
        window.location.href = '/Jathagam';
        
      } else {
        // Handle the case where code is not 200
        setCurrentSection('section6');
        console.error('Error:', responseData.head.msg);
        alert('Please enter the required fields');
      
      }
      // setCurrentSection('section6');
     
      // setShowAlert(true); // Show alert box
      // setTimeout(() => setShowAlert(false), 1000);
      
    } else {
      console.error('Failed to send data');
      setCurrentSection('section6');
      
    }

      // Reset formData and navigate to the next page
      setFormData(initialFormData);   
      setCustomerData(combinedData);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  useEffect(() => {
    // Fetch customer list data when component mounts
    generateRegId();
  }, []);

  const handleBack = () => {
    const sections = Object.keys(formData);
    const currentIndex = sections.indexOf(currentSection);
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      setCurrentSection(sections[previousIndex]);
    }
  };
  

  return (
    <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
    <Aside />
     <div class="layout-page">
             <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached
             align-items-center bg-navbar-theme" id="layout-navbar">
                 <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                     <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                         <i class="bx bx-menu bx-sm"></i>
                     </a>
                 </div>
                 <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                     <ol class="breadcrumb breadcrumb-style2 mb-0">
                     <li><MdManageHistory  class="bx bx-user me-2"/></li>
 <li class="breadcrumb-item" style={{padding: '2px 10px'}}>  Manage Member </li>
                     </ol>
                     <ul class="navbar-nav flex-row align-items-center ms-auto">
                         <li class="nav-item lh-1 me-3">
                         <GrUserAdmin class="bx bx-user me-2" /><span class="align-middle">Administrator</span>
                                                     </li>
                                                 <li class="nav-item navbar-dropdown dropdown-user dropdown">
                             <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                 <div class="avatar avatar-online">
                                     <img src={Smallicon} alt="" class="w-px-40 h-auto rounded-circle"/>
                                 </div>
                             </a>
                             <ul class="dropdown-menu dropdown-menu-end">
                                 <li>
                                     <a class="dropdown-item" href="#">
                                         <div class="d-flex">
                                             <div class="flex-shrink-0 me-3">
                                                 <div class="avatar avatar-online">
                                                     <img src={Smallicon} alt="" class="w-px-40 h-auto rounded-circle"/>
                                                 </div>
                                             </div>
                                             <div class="flex-grow-1">
                                                 <span class="fw-semibold d-block mt-2">Admin</span>
                                             </div>
                                         </div>
                                     </a>
                                 </li>
                                 <li>
                                     <div class="dropdown-divider"></div>
                                 </li>
                                 <li>
                                     <Link class="dropdown-item" to="/Sitesettings">
                                         <IoMdSettings class="bx bx-cog me-2" />
                                         <span class="align-middle">Settings</span>
                                     </Link>
                                 </li>
                                
                                 <li>
                                     <div class="dropdown-divider"></div>
                                 </li>
                                 <li>
                                       <Link class="dropdown-item" to="/Signin">
                                     
                                         <LuLogOut class="bx bx-power-off me-2" />
                                         <span class="align-middle">Log Out</span>
                                     </Link>
                                 </li>
                             </ul>
                         </li>
                     </ul>
                 </div>
             </nav>
             <div class="content-wrapper">
    <div>
    <h2 className='mt-4'>{sectionNames[currentSection]}</h2>
    
      <div className='card-body m-5 edit_memberSections_mainsdsd '>

      <div className="edit_inputMain-sltr row">

  {/* Render input fields for the current section */}
  {Object.keys(formData[currentSection]).map(fieldName => (
        ['gender', 'marriage_type', 'sevaikiragam', 'religion','caste','plan_name','plan_status', 'patham_number','bloodgroup', 'zodiacsign', 'mother_tongue', 'star', 'education', 'occupation', 
          'smoking', 'drinking', 'status_children','country', 'state', 'city','father_occupation', 'mother_occupation', 'partner_religion',
           'partner_country', 'partner_state', 'partner_matrial_status', 'partner_education', 'partner_occupation', 'partner_mother_tongue',
          'partner_caste', 'partner_child_gender', 'partner_manglik', 'food_habits', 'body_type', 'skin_tone', 'profile_by', 'family_type', 'family_status', 'partner_from_age',
          'partner_to_age','residence'
        ].includes(fieldName) ?
          <div key={fieldName} className="col-lg-4 col-md-6 mb-4 text-start">
            <label htmlFor={fieldName} style={{ color: 'black' }}>{labelTranslations[fieldName]} </label>
            
              <select
                id={fieldName}
                name={fieldName}
                className="form-select"
                value={formData[currentSection][fieldName] || ''}
                onChange={handleChange}
              > 
                <option value="">Select your {
                  fieldName === 'partner_from_age' ? 'Partner from age' :
                  fieldName === 'partner_to_age' ? 'Partner to age' :
                  fieldName === 'partner_religion' ? 'Partner religion' :
                  fieldName === 'partner_country' ? 'Partner country' :
                  fieldName === 'partner_state' ? 'Partner state' :
                  fieldName === 'partner_matrial_status' ? 'Partner marital status' :
                  fieldName === 'partner_education' ? 'Partner education' :
                  fieldName === 'partner_occupation' ? 'Partner occupation' :
                  fieldName === 'partner_mother_tongue' ? 'Partner mothertongue' :
                  fieldName === 'partner_manglik' ? 'Partner manglik' :
                  fieldName === 'partner_salary' ? 'Partner salary' :
                  fieldName === 'partner_child_gender' ? 'Partner child gender' :
                  `${fieldName.replace(/_/g, ' ').charAt(0).toUpperCase() + fieldName.replace(/_/g, ' ').slice(1)}`
                }</option>
                {/* Render options dynamically */}
                {options[fieldName + 'Options'] && options[fieldName + 'Options'].map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
          </div>
          :
          <div key={fieldName} className="col-lg-4 col-md-4 mb-4 text-start">
          <label htmlFor={fieldName} style={{ color: 'black' }}>
            {labelTranslations[fieldName]}
            {['name', 'gender', 'phonenumber', 'password', 'dob'].includes(fieldName) && <span style={{ color: 'red' }}>*</span>}
          </label>
        
          {['image', 'image1', 'id_image', 'id_image1', 'rasiimage'].includes(fieldName) ? (
            <input
              type="file"
              id={fieldName}
              name={fieldName}
              // Add this if you want to restrict file selection to images
              className="form-control"
              onChange={handleChange}
            />
          ) : fieldName === 'address' ? (
            <textarea
              id={fieldName}
              name={fieldName}
              placeholder="Enter your address"
              className="form-control"
              value={formData[currentSection][fieldName] || ''}
              autoSave="off"
              onChange={handleChange}
            />
          ) : fieldName === 'phonenumber' || fieldName === 'alternatenumber'? (
            <input
              id={fieldName}
              type="tel"
              name={fieldName}
              placeholder="Enter your phone number"
              className="form-control"
              maxlength="12"
              minlength="12"
              pattern="^\d{4}-\d{3}-\d{4}$"
              required
              value={formData[currentSection][fieldName] || ''}
              autoSave="off"
              onChange={handleChange}
            />
          ) : fieldName === 'age'
          ? (
            <input
              id={fieldName}
              type="text"
              name={fieldName}
              placeholder="Enter your age"
              className="form-control"
              maxlength="2"
              minlength="2"
              required
              value={formData[currentSection][fieldName] || ''}
              autoSave="off"
              onChange={handleChange}
            />
          ) : (
            <input
              type={fieldTypeMapping[fieldName] || 'text'}
              id={fieldName}
              name={fieldName}
              placeholder={
                fieldName === 'partner_height' ? 'Partner Height' :
                fieldName === 'partner_weight' ? 'Partner Weight' :
                fieldName === 'partner_caste' ? 'Partner Caste' :
                fieldName === 'partner_child_count' ? 'Partner Child Count' :
                fieldName === 'partner_child_age' ? 'Partner Child Age' :
                `${fieldName.replace(/_/g, ' ').charAt(0).toUpperCase() + fieldName.replace(/_/g, ' ').slice(1)}`
              }
              className="form-control"
              value={formData[currentSection][fieldName] || ''}
              autoSave="off"
              onChange={handleChange}
            />
          )}
        </div>
        
        
      ))}
                </div>

{/* Render Back button for sections 2, 3, 4, and 5 */}
{currentSection !== 'section1' && currentSection !== 'section6' && (
  <button type='button' className='btn btn-secondary' onClick={handleBack}>Back</button>
)}

  {/* Render Next button for all sections except the last one */}
  {currentSection !== 'section6' && (
        <button type='button' className='btn btn-primary m-3' onClick={(e) => handleNext(e)}>Next</button>
      )}

      {/* Render Submit button for the last section */}
      {currentSection === 'section6' && (
       <>
        {/* <Jathagam /> */}
        <button type='button' className='btn btn-secondary m-3' onClick={handleBack}>Back</button>
        <button className='btn btn-success ' onClick={handleSubmit}>Submit</button>
        {/* <div id="success-alert" className="alert m-4 alert-success" style={{ display: 'none', backgroundColor: '#28a745', color:'white' }} role="alert">
         Record added successfully.
                </div> */}
      </>
      )}
      
</div>

    </div>
    </div>
    </div>
    </div>
    </div>

  );
};

export default Addusers;
