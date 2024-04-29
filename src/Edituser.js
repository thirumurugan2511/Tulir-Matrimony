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


const Edituser = () => {
 
  const [showAlert, setShowAlert] = useState(false);

  const [options, setOptions] = useState({
    genderOptions: [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ],
  sevaikiragamOptions: [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ],
  status_childrenOptions: [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ],
  brother_marriedOptions: [
    { value: 'Married', label: 'Married' },
    { value: 'Unmarried', label: 'Unmarried' }
  ],
  sister_marriedOptions: [
    { value: 'Married', label: 'Married' },
    { value: 'Unmarried', label: 'Unmarried' }
  ],
  smokingOptions: [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
    { value: 'Planning to Leave', label: 'Planning to Leave' }
  ],
  drinkingOptions: [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
    { value: 'Planning to Leave', label: 'Planning to Leave' }
  ], 
  patner_matrial_statusOptions : [
    { value: 'Single', label: 'Single' },
    { value: 'Divorce', label: 'Divorce' },
    { value: 'Widow', label: 'Widow' }
  ],
  food_habitsOptions : [
    { value: 'Vegetarian', label: 'Vegetarian' },
    { value: 'Non-Vegetarian', label: 'Non-Vegetarian' }  
    
  ],
  patner_child_genderOptions : [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }   
  ],
  patner_manglikOptions : [
    { value: 'Yes', label: 'Yes' },
    { value: 'no', label: 'No' }    
  ],
  // patner_educationOptions: [
  //   { value: 'Bachelor', label: 'Bachelor' },
  //   { value: 'Master', label: 'Master' },
  //   { value: 'Phd', label: 'Phd' },
  //   { value: 'Others', label: 'Others' },
  // ],
  body_typeOptions : [
    { value: 'Slim', label: 'Slim' },
    { value: 'Average', label: 'Average' },
    { value: 'Fat', label: 'Fat' }  
    
  ],
  // educationOptions: [
  //   { value: 'Bachelor', label: 'Bachelor' },
  //   { value: 'Master', label: 'Master' },
  // ],
  resideceOptions : [
    { value: 'Citizen', label: 'Citizen' },
    { value: 'Permanent Resident', label: 'Permanent Resident' },
    { value: 'Temporary Visa', label: 'Temporary Visa' },
    { value: 'Work Permit', label: 'Work Permit' }
    
  ],
  skin_toneOptions : [
    { value: 'Wheatish', label: 'Wheatish' },
    { value: 'Very Fair', label: 'Very Fair' },
    { value: 'Fair', label: 'Fair' },
    { value: 'Wheatish Brown', label: 'Wheatish Brown' },
    { value: 'Dark', label: 'Dark' }  
  ],
  profile_byOptions : [
    { value: 'Self', label: 'Self' },
    { value: 'Parents', label: 'Parents' },
    { value: 'Guardian', label: 'Guardian' },
    { value: 'Friends', label: 'Friends' },
    { value: 'Relatives', label: 'Relatives' }
  ],
  family_typeOptions : [
    { value: 'Rich ', label: 'Rich' },
    { value: 'Upper Middle Class', label: 'Upper Middle Class' }, 
    { value: 'Lower Middle Class', label: 'Lower Middle Class' },  
    { value: 'Middle Class', label: 'Middle Class' }, 
    { value: 'Poor', label: 'Poor' } 
  ],
  family_statusOptions : [
    { value: 'Nuclear Family', label: 'Nuclear Family' },
   { value: 'Joint Family', label: 'Joint Family' }  
  ],
  patner_from_ageOptions : [
    { value: '18', label: '18 Years' },
    { value: '19', label: '19 Years' },
    { value: '20', label: '20 Years' },
    { value: '21', label: '21 Years' },
    { value: '22', label: '22 Years' },
    { value: '23', label: '23 Years' },
    { value: '24', label: '24 Years' },
    { value: '25', label: '25 Years' },
    { value: '26', label: '26 Years' },
    { value: '27', label: '27 Years' },
    { value: '28', label: '28 Years' },
    { value: '29', label: '29 Years' },
    { value: '30', label: '30 Years' },
    { value: '31', label: '31 Years' },
    { value: '32', label: '32 Years' },
    { value: '33', label: '33 Years' },
    { value: '34', label: '34 Years' },
    { value: '35', label: '35 Years' },
    { value: '36', label: '36 Years' },
    { value: '37', label: '37 Years' },
    { value: '38', label: '38 Years' },
    { value: '39', label: '39 Years' },
    { value: '40', label: '40 Years' },
    { value: '41', label: '41 Years' },
    { value: '42', label: '42 Years' },
    { value: '43', label: '43 Years' },
    { value: '44', label: '44 Years' },
    { value: '45', label: '45 Years' },
    { value: '46', label: '46 Years' },
    { value: '47', label: '47 Years' },
    { value: '48', label: '48 Years' },
    { value: '49', label: '49 Years' },
    { value: '50', label: '50 Years' },
    { value: '51', label: '51 Years' },
    { value: '52', label: '52 Years' },
    { value: '53', label: '53 Years' },
    { value: '54', label: '54 Years' },
    { value: '55', label: '55 Years' },
    { value: '56', label: '56 Years' },
    { value: '57', label: '57 Years' },
    { value: '58', label: '58 Years' },
    { value: '59', label: '59 Years' },
    { value: '60', label: '60 Years' }
  ],
  patner_to_ageOptions : [
    { value: '18', label: '18 Years' },
    { value: '19', label: '19 Years' },
    { value: '20', label: '20 Years' },
    { value: '21', label: '21 Years' },
    { value: '22', label: '22 Years' },
    { value: '23', label: '23 Years' },
    { value: '24', label: '24 Years' },
    { value: '25', label: '25 Years' },
    { value: '26', label: '26 Years' },
    { value: '27', label: '27 Years' },
    { value: '28', label: '28 Years' },
    { value: '29', label: '29 Years' },
    { value: '30', label: '30 Years' },
    { value: '31', label: '31 Years' },
    { value: '32', label: '32 Years' },
    { value: '33', label: '33 Years' },
    { value: '34', label: '34 Years' },
    { value: '35', label: '35 Years' },
    { value: '36', label: '36 Years' },
    { value: '37', label: '37 Years' },
    { value: '38', label: '38 Years' },
    { value: '39', label: '39 Years' },
    { value: '40', label: '40 Years' },
    { value: '41', label: '41 Years' },
    { value: '42', label: '42 Years' },
    { value: '43', label: '43 Years' },
    { value: '44', label: '44 Years' },
    { value: '45', label: '45 Years' },
    { value: '46', label: '46 Years' },
    { value: '47', label: '47 Years' },
    { value: '48', label: '48 Years' },
    { value: '49', label: '49 Years' },
    { value: '50', label: '50 Years' },
    { value: '51', label: '51 Years' },
    { value: '52', label: '52 Years' },
    { value: '53', label: '53 Years' },
    { value: '54', label: '54 Years' },
    { value: '55', label: '55 Years' },
    { value: '56', label: '56 Years' },
    { value: '57', label: '57 Years' },
    { value: '58', label: '58 Years' },
    { value: '59', label: '59 Years' },
    { value: '60', label: '60 Years' }
  ],
  
});
  

  useEffect(() => {
    // Fetch dropdown options when component mounts
    fetchDropdownOptions('marriage_type');
    fetchDropdownOptions('religion');
    fetchDropdownOptions('cast');
    fetchDropdownOptions('moonsign');
    fetchDropdownOptions('star');
    fetchDropdownOptions('mother_tongue');
    fetchDropdownOptions('education');
    fetchDropdownOptions('occupaction');
    fetchDropdownOptions('employee');
    fetchDropdownOptions('annual_income');
    fetchDropdownOptions('country');
    fetchDropdownOptions('state');
    fetchDropdownOptions('patner_religion');
    fetchDropdownOptions('patner_cast');
    fetchDropdownOptions('patner_country');
    fetchDropdownOptions('patner_state');
    fetchDropdownOptions('patner_education');
    fetchDropdownOptions('patner_occupation');
    fetchDropdownOptions('father_occupation');
    fetchDropdownOptions('mother_occupation');
    fetchDropdownOptions('patner_mother_tongue');
    fetchDropdownOptions('patner_salary');
  
  }, []);

  const { id } = useParams();
  console.log(id);
  console.log("hi")

  useEffect(() => {
    // Fetch user data based on the ID when component mounts
    fetchUserData(id);
  }, [id]);




  const [formData, setFormData] = useState({
    "section1": {
      // "reg_id": "",
      "name": "",
      "gender": "",   
      "email": "",
      "phonenumber": "",
      "password": "",
      "mother_tongue": "",
      "dob": "",
      "marriage_type": "",
      "status_children": "",
      "child_count": "",
      "child_age": "",
      "religion": "",
      "cast": "",
      "subcast": "",
      "sevaikiragam": "",
      "gothram": "",
      "moonsign": "",
      "star": "",
      "birthplace": "",
      "birthtime": "",
      "education":"",
      "education_details":"",
      "occupaction":"",
      "employee":"",
      "annual_income":"",

    },
    "section2": {
      "country": "",
      "state": "",
      "city": "",
      "residece": "",
      "alternatenumber": "",
      "nricountry": "",
      "address": ""
    },
    "section3": {
      "height": "",
      "weight": "",
      "food_habits": "",
      "smoking": "",
      "drinking": "",
      "body_type": "",
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
      "patner_from_age": "",
      "patner_to_age": "",
      "patner_height": "",
      "patner_weight": "",
      "patner_religion": "",
      "patner_cast": "",
      "patner_country": "",
      "patner_state": "",
      "patner_matrial_status": "",
      "patner_education": "",
      "patner_occupation": "",
      "patner_mother_tongue": "",
      "patner_manglik": "",
      "patner_salary": "",
      "patner_child_count": "",
      "patner_child_age": "",
      "patner_child_gender": ""
    },
    "section6": {
      "image": "",
      "image1": "",
      "id_image": "",
      "id_image1": "",
      "rasiimage": "",
    }
  }
);
//https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}
//http://localhost:8000/fetchmember/${id}
const fetchUserData = async () => {
  try {
    const response = await fetch(`https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}`);
    if (response.ok) {
      const userData = await response.json();
      console.log(userData); 
      const updatedFormData = {
        ...formData,
        section1: {
          ...formData.section1,
          reg_id: userData.body.reg_id,
          name: userData.body.name || "",
          gender: userData.body.gender || "",   
          email: userData.body.email || "",
          phonenumber: userData.body.phonenumber || "",
          password: userData.body.password || "",
          mother_tongue: userData.body.mother_tongue || "",
          dob: userData.body.dob || "",
          marriage_type: userData.body.marriage_type || "",
          status_children: userData.body.status_children || "",
          child_count: userData.body.child_count || "",
          child_age: userData.body.child_age || "",
          religion: userData.body.religion || "",
          cast: userData.body.cast || "",
          subcast: userData.body.subcast || "",
          sevaikiragam: userData.body.sevaikiragam || "",
          gothram: userData.body.gothram || "",
          moonsign: userData.body.moonsign || "",
          star: userData.body.star || "",
          birthplace: userData.body.birthplace || "",
          birthtime: userData.body.birthtime || "",
          education: userData.body.education || "",
          education_details: userData.body.education_details || "",
          occupaction: userData.body.occupaction || "",
          employee: userData.body.employee || "",
          annual_income: userData.body.annual_income || ""
        },
        section2: {
          ...formData.section2,
          country: userData.body.country || "",
          state: userData.body.state || "",
          city: userData.body.city || "",
          residece: userData.body.residece || "",
          alternatenumber: userData.body.alternatenumber || "",
          nricountry: userData.body.nricountry || "",
          address: userData.body.address || ""
        },
        section3: {
          ...formData.section3,
          height: userData.body.height || "",
          weight: userData.body.weight || "",
          food_habits: userData.body.food_habits || "",
          smoking: userData.body.smoking || "",
          drinking: userData.body.drinking || "",
          body_type: userData.body.body_type || "",
          skin_tone: userData.body.skin_tone || "",
          profile_by: userData.body.profile_by || "",
          aboutme: userData.body.aboutme || ""
        },
        section4: {
          ...formData.section4,
          family_type: userData.body.family_type || "",
          family_status: userData.body.family_status || "",
          father_name: userData.body.father_name || "",
          father_occupation: userData.body.father_occupation || "",
          mother_name: userData.body.mother_name || "",
          mother_occupation: userData.body.mother_occupation || "",
          brothers_count: userData.body.brothers_count || "",
          sisters_count: userData.body.sisters_count || "",
          brother_married: userData.body.brother_married || "",
          sister_married: userData.body.sister_married || "",
          family_details: userData.body.family_details || ""
        },
        section5: {
          ...formData.section5,
          patner_from_age: userData.body.patner_from_age || "",
          patner_to_age: userData.body.patner_to_age || "",
          patner_height: userData.body.patner_height || "",
          patner_weight: userData.body.patner_weight || "",
          patner_religion: userData.body.patner_religion || "",
          patner_cast: userData.body.patner_cast || "",
          patner_country: userData.body.patner_country || "",
          patner_state: userData.body.patner_state || "",
          patner_matrial_status: userData.body.patner_matrial_status || "",
          patner_education: userData.body.patner_education || "",
          patner_occupation: userData.body.patner_occupation || "",
          patner_mother_tongue: userData.body.patner_mother_tongue || "",
          patner_manglik: userData.body.patner_manglik || "",
          patner_salary: userData.body.patner_salary || "",
          patner_child_count: userData.body.patner_child_count || "",
          patner_child_age: userData.body.patner_child_age || "",
          patner_child_gender: userData.body.patner_child_gender || ""
        },
        section6: {
          ...formData.section6,
          image: userData.body.image || "",
          image1: userData.body.image1 || "",
          id_image: userData.body.id_image || "",
          id_image1: userData.body.id_image1 || "",
          rasiimage: userData.body.rasiimage || ""
        }
      };
      setFormData(updatedFormData); // Set form data state with fetched user data
      console.log(updatedFormData);
    } else {
      console.error('Failed to fetch user data');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};


  

  const labelTranslations = {
    "reg_id": "பதிவு ஐடி",
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
    "child_age": "குழந்தைகளின் வயது",
    "religion": "மதம்",
    "cast": "சாதி",
    "subcast": "உபசாதி",
    "sevaikiragam": "செவ்வாய் தோஷம்",
    "gothram": "கோத்ரம்",
    "moonsign": "ராசி",
    "star": "நட்சத்திரம்",
    "birthplace": "பிறந்த இடம்",
    "birthtime": "பிறந்த நேரம்",
    "education":"கல்வி",
    "education_details":"கல்வி விவரங்கள்",
    "occupaction":"வேலை",
    "employee":"வேலை விவரம்",
    "annual_income":"ஆண்டு வருமானம்", 
    "country": "நாடு",
    "state": "மாநிலம்",
    "city": "நகரம்",
    "residece": "குடியிருப்பு வகை",
    "alternatenumber": "தொலைபேசி மாற்று எண்",
    "nricountry": "தாய்நாடு",
    "address": "முகவரி",
    "height": "உயரம்",
    "weight": "எடை",
    "food_habits": "உணவு பழக்கம்",
    "smoking": "புகைபிடிக்கும் பழக்கம்",
    "drinking": "குடிபழக்கம்",
    "body_type": "உடல் வடிவம்",
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
    "brother_married": "சகோதரர் திருமணம்",
    "sister_married": "சகோதரி திருமணம்",
    "family_details": "குடும்ப விவரங்கள்",
    "patner_from_age": "மணமகன் / மணமகள் வயது வரம்பு",
    "patner_to_age": "மணமகன் / மணமகள் வயது வரம்பு",
    "patner_height": "உயரம்",
    "patner_weight": "எடை",
    "patner_religion": "மதம்",
    "patner_cast": "சாதி",
    "patner_country": "நாடு",
    "patner_state": "மாநிலம்",
    "patner_matrial_status": "திருமணம் நிலை",
    "patner_education": "கல்வி",
    "patner_occupation": "பணி",
    "patner_mother_tongue": "தாய்மொழி",
    "patner_manglik": "செவ்வாய் தோஷம்",
    "patner_salary": "சம்பளம்",
    "patner_child_count": "குழந்தைகளின் எண்ணிக்கை",
    "patner_child_age": "குழந்தைகளின் வயது",
    "patner_child_gender": "குழந்தைகளின் பாலினம்",
    "image": "சுயசாதாரண படம்",
    "image2": "சுயசாதாரண படம் - 2",
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
    section6: 'Upload Images'
  };

  // const [formData, setFormData] = useState(initializeFormData);
  const [currentSection, setCurrentSection] = useState('section1');
  const [customerData, setCustomerData] = useState({});
  const [casteList, setCasteList] = useState([]);

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
      if (['name', 'email', 'gender', 'phonenumber', 'password', 'dob'].includes(name) && value.trim() === '') {
        alert("Please Enter Required Fields!");
      }
      setFormData(prevState => ({
        ...prevState,
        [currentSection]: {
          ...prevState[currentSection],
          [name]: value
        }
      }));
    }
  };
  

  const handleNext = () => {
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
        case 'patner_child_gender':
          // Options for gender dropdown
          setOptions(prevOptions => ({
            ...prevOptions,
            [fieldName + 'Options']: [
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' }
            ]
          }));
          break;
          case 'patner_to_age':
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
            case 'patner_from_age':
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
          // case 'education':
          //   // Options for marriage type dropdown
          //   setOptions(prevOptions => ({
          //     ...prevOptions,
          //     [fieldName + 'Options']: [
                 
          //     { value: 'Bachelor', label: 'Bachelor' },
          //     { value: 'Master', label: 'Master' }  
          //     ]
          //   }));
          //   break;
          //   case 'patner_education':
          //   // Options for marriage type dropdown
          //   setOptions(prevOptions => ({
          //     ...prevOptions,
          //     [fieldName + 'Options']: [
                 
          //     { value: 'Bachelor', label: 'Bachelor' },
          //     { value: 'Master', label: 'Master' },
          //     { value: 'Phd', label: 'Phd' },
          //     { value: 'Others', label: 'Others' }  
          //     ]
          //   }));
          //   break;
          case 'patner_manglik':
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
          case 'residece':
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
          case 'patner_country':
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
        case 'patner_state':
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
                { value: 'widow', label: 'Widow' }
              ]
            }));
            break;
      case 'religion':
        // Fetch options from API for religion
        //http://localhost:8000/religionlist
        //https://tulirmatrimony.com/controlapi/religionlist.php
        endpoint = 'https://tulirmatrimony.com/controlapi/religionlist.php';
        break;

      case 'cast':
      case 'patner_cast':
      // Set the appropriate endpoint for fetching caste list based on currentSection
      endpoint = 'https://tulirmatrimony.com/controlapi/castelist.php';
      break;
      case 'moonsign':
        // Fetch options from different API for moonsign
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
        case 'occupaction':
          // Fetch options from different API for education
          endpoint = 'https://tulirmatrimony.com/controlapi/occupationlist.php';
          break;
        case 'annual_income':
        // Fetch options from different API for education
        endpoint = 'https://tulirmatrimony.com/controlapi/incomelist.php';
        break;
        case 'father_occupation':
          // Fetch options from different API for education
          endpoint = 'https://tulirmatrimony.com/controlapi/occupationlist.php';
          break;
        case 'mother_occupation':
            // Fetch options from different API for education  patner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/occupationlist.php';
          break;
        case 'patner_religion':
              // Fetch options from different API for education  patner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/religionlist.php';
          break;
         case 'patner_cast':
           // Fetch options from different API for education  patner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/castelist.php';
          break;
        case 'patner_education':
                // Fetch options from different API for education  patner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/educationlist.php';
         break;
        case 'patner_occupation':
             // Fetch options from different API for education  patner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/occupationlist.php';
          break;
        case 'patner_mother_tongue':
            // Fetch options from different API for education  patner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/languagelist.php';
          break;
        case 'patner_salary':
            // Fetch options from different API for education  patner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/incomelist.php';
          break;
      default:
        break;
    } 

    if (endpoint !== '') {
      const response = await fetch(endpoint);
      if (response.ok) {
        const responseData = await response.json();
        const options = responseData.body.map(item => ({ value: item.name, label: item.name }));
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


const handleSubmit = async (sectionName, sectionData, id) => {
  try {
    // Ensure sectionName is valid
    if (!['section1', 'section2', 'section3', 'section4', 'section5', 'section6'].includes(sectionName)) {
      throw new Error('Invalid section name');
    }
    //http://localhost:8000/editcustomer
    //https://tulirmatrimony.com/controlapi/editcustomerbasic.php
    // Construct the API URL based on the section
    let apiUrl;
    switch (sectionName) {
      case 'section1':
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerbasic.php';
        break;
      case 'section2':
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerfamily.php';
        break;
      case 'section3':
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerresidency.php';
        break;
      case 'section4':
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerphycial.php';
        break;
      case 'section5':
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerpatner.php';
        break;
      case 'section6':
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerresidency.php';
        break;
      default:
        throw new Error('Invalid section name');
    }

    // Add the id to sectionData
    const dataToSend = { ...sectionData, id };

    // Send a PUT request to the API
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend) // Send the data with the id field
    });
   console.log(dataToSend);
    // Handle the response from the server
    if (response.ok) {
      const responseData = await response.json();
      console.log('Data sent successfully for section:', responseData);
      return true; // Success
    } else {
      console.error('Failed to send data for section:', sectionName);
      return false; // Failure
    }
  } catch (error) {
    console.error('Error submitting data:', error);
    return false; // Failure
  }
};






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
                                     <Link class="dropdown-item" to="/Sitesetting">
                                         <IoMdSettings class="bx bx-cog me-2" />
                                         <span class="align-middle">Settings</span>
                                     </Link>
                                 </li>
                                
                                 <li>
                                     <div class="dropdown-divider"></div>
                                 </li>
                                 <li>
                                       <Link class="dropdown-item" href="/Signin">
                                     
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
  
  {/* <div className="col-lg-6 col-md-6 mb-4 text-start">
    <label htmlFor="regId">Registration ID</label>
    <input
      type="text"
      id="regid"
      name="regid"
      className="form-control"
      value={regId}
      readOnly  
    />
  </div> */}

  {/* Render input fields for the current section */}
  {Object.keys(formData[currentSection]).map(fieldName => (
        ['gender', 'marriage_type', 'sevaikiragam', 'religion',  'moonsign', 'mother_tongue', 'star', 'education', 'occupaction', 'annual_income',
          'smoking', 'drinking', 'status_children','country', 'state', 'father_occupation', 'mother_occupation', 'sister_married', 'brother_married', 'patner_religion',
           'patner_country', 'patner_state', 'patner_matrial_status', 'patner_education', 'patner_occupation', 'patner_mother_tongue',
          'patner_salary', 'patner_child_gender', 'patner_manglik', 'food_habits', 'body_type', 'skin_tone', 'profile_by', 'family_type', 'family_status', 'patner_from_age',
          'patner_to_age','residece'
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
                  fieldName === 'patner_from_age' ? 'Partner from age' :
                  fieldName === 'patner_to_age' ? 'Partner to age' :
                  fieldName === 'patner_religion' ? 'Partner religion' :
                  fieldName === 'patner_country' ? 'Partner country' :
                  fieldName === 'patner_state' ? 'Partner state' :
                  fieldName === 'patner_matrial_status' ? 'Partner marital status' :
                  fieldName === 'patner_education' ? 'Partner education' :
                  fieldName === 'patner_occupation' ? 'Partner occupation' :
                  fieldName === 'patner_mother_tongue' ? 'Partner mothertongue' :
                  fieldName === 'patner_manglik' ? 'Partner manglik' :
                  fieldName === 'patner_salary' ? 'Partner salary' :
                  fieldName === 'patner_child_gender' ? 'Partner child gender' :
                  `${fieldName.replace(/_/g, ' ').charAt(0).toUpperCase() + fieldName.replace(/_/g, ' ').slice(1)}`
                }</option>
                {/* Render options dynamically */}
                {options[fieldName + 'Options'] && options[fieldName + 'Options'].map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
          </div>
          :
      //     patner_mother_tongue": "",
      // "patner_manglik": "",
      // "patner_salary": "",
      // "patner_child_count": "",
      // "patner_child_age": "",
      // "patner_child_gender": ""
          // Render input field for non-dropdown fields
          <div key={fieldName} className="col-lg-4 col-md-4 mb-4 text-start">
          <label htmlFor={fieldName} style={{ color: 'black' }}>
            {labelTranslations[fieldName]}
            {['name', 'email', 'phonenumber', 'password', 'dob'].includes(fieldName) && <span style={{ color: 'red' }}>*</span>}
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
              autoSave='off'
              onChange={handleChange}
            />
          ) : (
            <input
              type={fieldTypeMapping[fieldName] || 'text'}
              id={fieldName}
              name={fieldName}
              placeholder={fieldName === 'patner_height' ? 'Partner Height' : fieldName === 'patner_weight' ? 'Partner Weight' : fieldName === 'patner_cast' ? 'Partner Cast' : fieldName === 'patner_child_count' ? 'Partner Child Count' : fieldName === 'patner_child_age' ? 'Partner Child Age' : `${fieldName.replace(/_/g, ' ').charAt(0).toUpperCase() + fieldName.replace(/_/g, ' ').slice(1)}`}
        
              className="form-control"
              value={formData[currentSection][fieldName] || ''}
              autoSave='off'
              onChange={handleChange}
            />
          )}
        </div>
        
      ))}
                </div>

{/* Render Back button for sections 2, 3, 4, and 5 */}
{currentSection !== 'section1' && (
  <button className='btn btn-secondary' onClick={handleBack}>Back</button>
)}
  {/* Render Next button for all sections except the last one */}
  {currentSection !== 'section6' && (
        <button className='btn btn-primary m-3' onClick={handleNext}>Next</button>
      )}

      {/* Render Submit button for the last section */}
      {/* {currentSection === 'section6' && ( */}
<button 
  className='btn btn-success m-3' 
  onClick={() => handleSubmit(currentSection, formData[currentSection], id)}
>
  Submit
</button>
      {/* )} */}
</div>
    </div>
    </div>
    </div>
    </div>
    </div>

  );
};

export default Edituser;
