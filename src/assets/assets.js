import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import doc_image from './doc.png'
import dropdown from './dropdown_icon.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    doc_image,
    dropdown
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Kumar',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rajesh Kumar is dedicated to providing comprehensive medical care, with a focus on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 400,
        address: {
            line1: '17th Cross, Jayanagar',
            line2: 'Ring Road, Bangalore'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Nisha Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Nisha Sharma provides excellent care in women’s health, specializing in gynecological treatments and surgeries.',
        fees: 550,
        address: {
            line1: '27th Cross, Indiranagar',
            line2: 'Main Road, New Delhi'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Rahul Patil',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Sneha Patil is a skilled dermatologist, specializing in skin care treatments and cosmetic procedures.',
        fees: 350,
        address: {
            line1: '37th Cross, Koramangala',
            line2: 'Sarjapur Road, Bangalore'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Abhishek Mehra',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Abhishek Mehra is dedicated to children’s health, providing compassionate pediatric care and treatments.',
        fees: 450,
        address: {
            line1: '47th Cross, Powai',
            line2: 'Hiranandani Gardens, Mumbai'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Priya Singh',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Priya Singh specializes in treating neurological conditions with a focus on effective management and treatment plans.',
        fees: 600,
        address: {
            line1: '57th Cross, Rajajinagar',
            line2: 'West of Chord Road, Bangalore'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Anil Gupta',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Anil Gupta is an expert in treating a variety of neurological disorders with personalized care and treatment.',
        fees: 600,
        address: {
            line1: '7th Main, Vasant Kunj',
            line2: 'Sector A, New Delhi'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Kabir Reddy',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kavita Reddy is known for providing holistic medical care with a focus on overall well-being and preventive care.',
        fees: 400,
        address: {
            line1: '19th Cross, Malleswaram',
            line2: 'MKK Road, Bangalore'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Alok Verma',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Alok Verma provides expert gynecological care, with a focus on women’s reproductive health and wellness.',
        fees: 550,
        address: {
            line1: '12th Cross, South Extension',
            line2: 'Ring Road, New Delhi'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Pooja Desai',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Pooja Desai is a skin care specialist who provides treatment for various dermatological conditions.',
        fees: 350,
        address: {
            line1: '22nd Cross, Andheri West',
            line2: 'JP Road, Mumbai'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rohan Bhargava',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Rohan Bhargava offers expert pediatric care, helping children with a wide range of health conditions.',
        fees: 450,
        address: {
            line1: '13th Cross, Dadar West',
            line2: 'SVS Road, Mumbai'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Aishwarya Menon',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Aishwarya Menon is a highly experienced neurologist, focusing on complex neurological cases and conditions.',
        fees: 600,
        address: {
            line1: '57th Cross, Vile Parle',
            line2: 'MG Road, Mumbai'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Manish Tiwari',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Manish Tiwari is a skilled neurologist offering advanced treatment options for neurological disorders.',
        fees: 600,
        address: {
            line1: '67th Cross, Whitefield',
            line2: 'ITPL Road, Bangalore'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Sangeeta Mishra',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sangeeta Mishra specializes in general medicine, providing preventive care and treatment for a variety of conditions.',
        fees: 400,
        address: {
            line1: '9th Cross, Basavanagudi',
            line2: 'Gandhi Bazaar, Bangalore'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Aditya Ranjan',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Aditya Ranjan provides care in gynecology, with a focus on personalized treatment and women’s health.',
        fees: 550,
        address: {
            line1: '27th Cross, Patel Nagar',
            line2: 'Main Road, New Delhi'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Meera Nair',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Meera Nair offers a wide range of dermatological services, focusing on skin treatments and cosmetic procedures.',
        fees: 350,
        address: {
            line1: '37th Cross, Juhu',
            line2: 'Beach Road, Mumbai'
        }
    }
];

export default assets;