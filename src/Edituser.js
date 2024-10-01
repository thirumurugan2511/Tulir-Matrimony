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
import Navbar from './Admin/Components/Navbar/Navbar';

const Edituser = () => {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };
  const [dashboardData, setDashboardData] = useState({
    total_member: 0,
    male_member: 0,
    female_member: 0,
    paid_member: 0,
    notpaid_member: 0,
    expired_member: 0,
  });
 
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
  patham_numberOptions: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
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
  partner_matrial_statusOptions : [
    { value: 'Single', label: 'Single' },
    { value: 'Divorce', label: 'Divorce' },
    { value: 'Widow', label: 'Widow' },
    { value: 'anyone', label: 'Any One' }
  ],
  food_habitsOptions : [
    { value: 'Vegetarian', label: 'Vegetarian' },
    { value: 'Non-Vegetarian', label: 'Non-Vegetarian' }  
    
  ],
  partner_child_genderOptions : [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }   
  ],
  partner_manglikOptions : [
    { value: 'Yes', label: 'Yes' },
    { value: 'no', label: 'No' }    
  ],
  // partner_educationOptions: [
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
  residenceOptions : [
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
  partner_from_ageOptions : [
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
  partner_to_ageOptions : [
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
    fetchDropdownOptions('caste');
    fetchDropdownOptions('zodiacsign');
    fetchDropdownOptions('star');
    fetchDropdownOptions('caste');
    fetchDropdownOptions('mother_tongue');
    fetchDropdownOptions('education');
    fetchDropdownOptions('occupation');
    fetchDropdownOptions('jobdetails');
    fetchDropdownOptions('annual_income');
    fetchDropdownOptions('city');
    fetchDropdownOptions('bloodgroup');
    fetchDropdownOptions('country');
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

  const { id } = useParams();
  console.log(id);
  console.log("hi")

  useEffect(() => {
    // Fetch user data based on the ID when component mounts
    fetchUserData(id);
  }, [id]);

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };


  const [formData, setFormData] = useState({
    "section1": {
      // "reg_id": "",
      "name": "",
      "gender": "",   
      "phonenumber": "",
      "password": "",
      "email": "",
      "dob": "",
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
      "plan_register_date": getCurrentDate() 

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
      
      const planRegisterDate = userData.body.plan_register_date;
      const formattedDate = (!planRegisterDate || planRegisterDate === "0000-00-00") ? getCurrentDate() : planRegisterDate;

      const updatedFormData = {
        ...formData,
        section1: {
          ...formData.section1,
          reg_id: userData.body.reg_id,
          plan_name: userData.body.plan_name || "",
          plan_register_date: formattedDate, // Use the formatted date
          name: userData.body.name || "",
          gender: userData.body.gender || "",   
          email: userData.body.email || "",
          age: userData.body.age || "",
          phonenumber: userData.body.phonenumber || "",
          password: userData.body.password || "",
          mother_tongue: userData.body.mother_tongue || "",
          dob: userData.body.dob || "",
          marriage_type: userData.body.marriage_type || "",
          religion: userData.body.religion || "",
          caste: userData.body.caste || "",
          subcaste: userData.body.subcaste || "",
          sevaikiragam: userData.body.sevaikiragam || "",
          gothram: userData.body.gothram || "",
          star: userData.body.star || "",
          patham_number: userData.body.patham_number || "",
          zodiacsign: userData.body.zodiacsign || "",
          birthplace: userData.body.birthplace || "",
          birthtime: userData.body.birthtime || "",
          education: userData.body.education || "",
          education_details: userData.body.education_details || "",
          occupation: userData.body.occupation || "",
          kuladeivam: userData.body.kuladeivam || "",
          jobdetails: userData.body.jobdetails || "",
          joblocation: userData.body.joblocation || "",
          annual_income: userData.body.annual_income || ""
        },
        section2: {
          ...formData.section2,
          city: userData.body.city || "",
          residence: userData.body.residence || "",
          alternatenumber: userData.body.alternatenumber || "",
          mothercountry: userData.body.mothercountry || "",
          address: userData.body.address || ""
        },
        section3: {
          ...formData.section3,
          height: userData.body.height || "",   
          food_habits: userData.body.food_habits || "",
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
          partner_from_age: userData.body.partner_from_age || "",
          partner_to_age: userData.body.partner_to_age || "",
          partner_height: userData.body.partner_height || "",
          partner_religion: userData.body.partner_religion || "",
          partner_caste: userData.body.partner_caste || "",
          partner_matrial_status: userData.body.partner_matrial_status || "",
          partner_education: userData.body.partner_education || "",
          partner_occupation: userData.body.partner_occupation || "",
          partner_mother_tongue: userData.body.partner_mother_tongue || "",
          partner_manglik: userData.body.partner_manglik || "",
          partner_salary: userData.body.partner_salary || ""
        },
        section6: {
          ...formData.section6,
          image: "",
          image1: "",
          id_image: "",
          id_image1: "",
          rasiimage: ""
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
    "plan_name": "உறுப்பினர் திட்டம்",
    "plan_register_date": "திட்டம் பதிவு செய்யப்பட்ட தேதி",
    "name": "பெயர்",
    "image": "படம்",
    "gender": "பாலினம்",
    "email": "மின்னஞ்சல்",
    "phonenumber": "தொலைபேசி எண்",
    "password": "கடவுச்சொல்",
    "age": "வயது",
    "mother_tongue": "தாய்மொழி",
    "dob": "பிறந்த தேதி",
    "marriage_type": "திருமண நிலை",
    "patham_number":"பாதம்",
    "status_children": "குழந்தைகளின் நிலை",
    "child_count": "குழந்தைகளின் எண்ணிக்கை",
    "child_age": "குழந்தைகளின் வயது",
    "kuladeivam": "குலதெய்வம்",
    "bloodgroup": "இரத்த வகை",
    "religion": "மதம்",
    "caste": "இனம்",
    "subcaste": "உட்பிரிவு",
    "sevaikiragam": "செவ்வாய் தோஷம்",
    "gothram": "கோத்ரம்",
    "zodiacsign": "ராசி",
    "star": "நட்சத்திரம்",
    "birthplace": "பிறந்த இடம்",
    "birthtime": "பிறந்த நேரம்",
    "education":"கல்வி",
    "education_details":"கல்வி விவரங்கள்",
    "occupation":"வேலை",
    "joblocation":"தொழில் இடம்",
    "jobdetails":"வேலை விவரம்",
    "annual_income":"ஆண்டு / மாத வருமானம்", 
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
    //birthtime: 'time',
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
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        let base64String = reader.result;
        // Strip the prefix if it exists
        if (base64String.startsWith('data:image/jpeg;base64,')) {
          base64String = base64String.replace('data:image/jpeg;base64,', '');
        } else if (base64String.startsWith('data:image/png;base64,')) {
          base64String = base64String.replace('data:image/png;base64,', '');
        }
  
        setFormData(prevState => ({
          ...prevState,
          [currentSection]: {
            ...prevState[currentSection],
            [name]: base64String // Store the stripped file contents
          }
        }));
      };
      if (file) {
        reader.readAsDataURL(file);
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
      if (name === 'dob') {
        const dob = new Date(value);
        const age = calculateAge(dob);
  
        // Update the age field in the form data
        setFormData((prevState) => ({
          ...prevState,
          [currentSection]: {
            ...prevState[currentSection],
            dob: value, // Keep the dob field updated
            age: age.toString(), // Set the calculated age in the 'age' field
          },
        }));
      }
    }
  };
  
  const calculateAge = (dob) => {
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);
  
    return Math.abs(ageDt.getUTCFullYear() - 1970);
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

      case 'partner_caste':
      // Set the appropriate endpoint for fetching caste list based on currentSection
      endpoint = 'https://tulirmatrimony.com/controlapi/castelist.php';
      break;
      case 'plan_name':
        // Fetch options from different API for zodiacsign
        endpoint = 'https://tulirmatrimony.com/controlapi/planlist.php';
        break;
      case 'caste':
        // Set the appropriate endpoint for fetching caste list based on currentSection
        endpoint = 'https://tulirmatrimony.com/controlapi/castelist.php';
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
      case 'caste':
      // case 'partner_caste':
      // Set the appropriate endpoint for fetching caste list based on currentSection
      endpoint = 'https://tulirmatrimony.com/controlapi/castelist.php';
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
          break;
        case 'partner_education':
                // Fetch options from different API for education  partner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/educationlist.php';
         break;
        case 'partner_occupation':
             // Fetch options from different API for education  partner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/occupationlist.php';
          break;
        case 'partner_caste':
            // case 'partner_caste':
            // Set the appropriate endpoint for fetching caste list based on currentSection
          endpoint = 'https://tulirmatrimony.com/controlapi/castelist.php';
          break;
          case 'city':
          // Fetch options from different API for education
          endpoint = 'https://tulirmatrimony.com/controlapi/districtlist.php';
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
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerresidency.php';
        break;
      case 'section3':
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerphycial.php';
        break;
      case 'section4':
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerfamily.php';
        break;
      case 'section5':
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerpatner.php';
        break;
      case 'section6':
        apiUrl = 'https://tulirmatrimony.com/controlapi/editcustomerimage.php';
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
      
      if (responseData.head.code === 200) {
        // Handle the success scenario, such as updating the UI or moving to another section
        alert("Successfully updated");
        window.location.href = '/Member';
        
      } else {
        // Handle the case where code is not 200
        alert("Successfully updated");
        console.error('Error:', responseData.head.msg);
      
      }
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
             <Navbar />
             <div class="content-wrapper">
    <div>
    <h2 className='mt-4'>{sectionNames[currentSection]}</h2>
      <div className='card-body m-5 edit_memberSections_mainsdsd '>
      <div className="edit_inputMain-sltr row">
  


  {/* Render input fields for the current section */}
  {Object.keys(formData[currentSection]).map(fieldName => (
        ['gender', 'marriage_type', 'sevaikiragam', 'religion','caste',  'bloodgroup', 'zodiacsign',
         'mother_tongue', 'star', 'education', 'occupation', 'patham_number',"plan_name",
          'smoking', 'drinking', 'status_children','country', 'state','city', 'partner_caste', 'partner_religion',
           'partner_country', 'partner_state', 'partner_matrial_status', 'partner_education', 'partner_occupation', 'partner_mother_tongue',
           'partner_child_gender', 'partner_manglik', 'food_habits', 'body_type', 'skin_tone', 'profile_by', 'family_type', 'family_status', 'partner_from_age',
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
      //     partner_mother_tongue": "",
      // "partner_manglik": "",
      // "partner_salary": "",
      // "partner_child_count": "",
      // "partner_child_age": "",
      // "partner_child_gender": ""
          // Render input field for non-dropdown fields
          <div key={fieldName} className="col-lg-4 col-md-4 mb-4 text-start">
          <label htmlFor={fieldName} style={{ color: 'black' }}>
            {labelTranslations[fieldName]}
            {['name', 'phonenumber','gender', 'password', 'dob'].includes(fieldName) && <span style={{ color: 'red' }}>*</span>}
          </label>
          {['image', 'image1', 'id_image', 'id_image1', 'rasiimage'].includes(fieldName) ? (
             <>
            <input
              type="file"
              id={fieldName}
              name={fieldName}
              // Add this if you want to restrict file selection to images
              className="form-control"
              onChange={handleChange}
            />
           </>
            
          ) : fieldName === 'address' ? (
            <textarea
              id={fieldName}
              name={fieldName}patner
              placeholder="Enter your address"
              className="form-control"
              value={formData[currentSection][fieldName] || ''}
              autoSave='off'
              onChange={handleChange}
            />
          ) : fieldName === 'phonenumber' ? (
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
              placeholder={fieldName === 'partner_height' ? 'Partner Height' : fieldName === 'partner_weight' ? 'Partner Weight' : fieldName === 'partner_caste' ? 'Partner caste' : fieldName === 'partner_child_count' ? 'Partner Child Count' : fieldName === 'partner_child_age' ? 'Partner Child Age' : `${fieldName.replace(/_/g, ' ').charAt(0).toUpperCase() + fieldName.replace(/_/g, ' ').slice(1)}`}
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

// {/* <img src={`data:image/png;base64,${formData.section6[fieldName]}`} alt="Image" width="100" /> */}1282

export default Edituser;
