import {  
  GlobeLock ,
  PhoneCall,
  Users,
  MonitorCheck,
  Target,
  CircleCheckBig,
  MailSearch,
  CircleDollarSign,
  CheckCircle,
  FileText
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: < Users />,
    text: "Audience Development",
    description: "Weak audience data drains campaign ROI. We specialize in finding the right data for precise, omnichannel targeting.",
  },
  {
    icon: <MonitorCheck />,
    text: "Programmatic Display",
    description: "Let us set up and manage your display ads seamlessly across devices and formats for impactful visibility and engagement.",
  },
  {
    icon: <Target />,
    text: "Retargeting",
    description: "Don’t let leads slip away. We optimize audience targeting to maximize conversions and brand retention.",
  },
  {
    icon: <CircleCheckBig />,
    text: "Google Ads / PPC",
    description: "Our Google Ads experts specialize in fine-tuning Search and PMax campaigns to deliver measurable results and ROI.",
  },
  {
    icon: <MailSearch />,
    text: "Email Marketing",
    description: "Cold email marketing is a highly effective yet often underutilized tool for engaging and converting B2B audiences.",
  },
  {
    icon: <CircleDollarSign />,
    text: "Paid Social",
    description: "Leverage our expertise to manage Meta, LinkedIn, and X campaigns, optimizing every interaction to achieve your goals.",
  },

  {
    icon: <GlobeLock />,
    text: "Ui/UX",
    description: "Ready to refresh your website? Share your vision, and we’ll create an exceptional user experience tailored to your needs.",
  },

  {
    icon: <FileText />,
    text: "Attribution",
    description: "We analyze outcomes to give you a clear picture of campaign performance and the true value your investments deliver.",
  },

  {
    icon: <CheckCircle />,
    text: "Analytics",
    description: "Track and optimize every step of the user journey—impressions, clicks, engagement and conversions—for maximum results.",
  },


];

export const checklistItems = [
  {
    title: " Why Interactive Ads ?",
    description: "Interactive ads capture attention 5x more effectively than static banners. Engage your audience with ads that deliver instant value and make a lasting impression.",
  },
  {
    title: "What does bixy do ?",
    description: "Deliver custom HTML ads to users on premium websites and apps through top ad platforms, leveraging advanced targeting options like location, CRM, retargeting, and contextual strategies.",
  },
  {
    title: "How can we help u ? ",
    description: "Share your marketing goals, and we’ll craft industry-leading creative designs and strategies—ready for your review and approval within just 1 week.",
  },
  {
    title: "Ads on platfrom such as ",
    description: "Google,Facebook,Twitter,Linkdin,Youtube ",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 GB Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 GB Storage",
      "Advanced Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High-Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
