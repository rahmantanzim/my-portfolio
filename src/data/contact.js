import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { Mail, Phone, MapPin } from 'lucide-react';

export const socialLinks = [
    { social: FiGithub, link: "https://github.com/rahmantanzim" },
    { social: FiLinkedin, link: "https://www.linkedin.com/in/tanzim-rahman08/" },
    { social: FiInstagram, link: "https://www.instagram.com/tanzim_r_" },
  ];

  export const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@tanzim-rahman.com",
      href: "mailto:tanzim008@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (709) 764-7769",
      href: "tel:+17097647769",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "St. John's, NL, Canada",
      href: "#",
    },
  ];

