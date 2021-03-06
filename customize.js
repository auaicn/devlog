const config = {
  /* Site
  ========================================= */
  title: `몽실몽실 블로그`, // Displayed in header
  description: `박경호, 꿈꾸는 Flutter 개발자`, // Site description
  maxWidth: "768px", // Max width of website
  enableAbout: true, // Enables about page
  siteUrl: `https://devlog-kyungho.netlify.app/`, // For sitemap & RSS feed
  useScrollIndicator: true, // Use scroll indicator on top of screen in posts

  /* Profile
  ========================================= */
  author: `auaicn`, // Name shows on profile
  profileDescription: "꿈꾸는 Flutter 개발자", // Shows under author name
  profileImageName: `profile.jpeg`, // Place profile.jpg/.jpeg/.png in _assets folder
  location: "Korea", // Location under profileDescription. "" --> disabled
  footerLink: "", // Link to page when you click footer name

  /* Social Media Links
      accountName & emailAddress: leave blank ("") to disable
      showHeaderIcon: shows social media icon in header. When true, must have account name set
  ========================================= */
  socialMediaLinks: {
    email: { emailAddress: "crorowslowpp@gmail.com", showHeaderIcon: true },
    github: { accountName: "auaicn", showHeaderIcon: true },
    facebook: { accountName: "", showHeaderIcon: true },
    instagram: { accountName: "auaicn_", showHeaderIcon: false },
    twitter: { accountName: "", showHeaderIcon: true },
    linkedIn: { accountName: "", showHeaderIcon: true }, // Use URL after "linkedin.com/"
    medium: { accountName: "", showHeaderIcon: true }, // Use URL after "medium.com/@"
  },

  /* Social Media Share Buttons--available below every post
  ========================================= */
  shareButtons: { email: false, facebook: true, twitter: true, reddit: false, linkedIn: false },

  /* Comments
  ========================================= */
  comments: {
    facebook: { enabled: true, appId: "" }, // appId: optional, but used to moderate fb comments
    disqus: { enabled: false, shortName: "" }, // Check your shortName on https://disqus.com
    utterances: { enabled: false, repoUrl: "" }, // i.e. 'ellismin/gatsby-blog-mdx'
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: "dark", // Options: dark / light -- applied to first visitors
  showTimeToRead: true, // Shows time to read for each post in main page
  breakCodeLines: true, // Breaks long code lines instead of having horizontal scroll
  faviconSrc: `_assets/icon-code.png`, // Favicon
  gaTrackingId: ``, // Your google analytics tracking id--i.e. UA-*****
  googleAdSenseId: ``, // Your google AdSense client id--i.e. ca-pub-****
};

module.exports = config;
