export const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "About", to: "/", hash: "#about" },
    { label: "Services", to: "/", hash: "#capabilities" },
     {
    label: "Products",
    children: [
      { label: "Webby", to: "https://www.webshopping.co.in/" },
    ],
  },
    { label: "Case Studies", to: "/projects" },
    { label: "Contact", to: "/", hash: "#contact" },
];
