export const askAI = async (message) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const lowerMsg = message.toLowerCase();

  // Contact Info
  if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone')) {
    return "You can reach Pravin at pravinmpk2@gmail.com or call +94 703310110. He is based in Sri Lanka and open to new opportunities.";
  }
  
  // Rate/Cost (Generic response as specifics weren't in portfolio)
  if (lowerMsg.includes('price') || lowerMsg.includes('rate') || lowerMsg.includes('cost')) {
    return "Rates depend on the project scope. Pravin specializes in high-quality web and app development. It's best to email him directly at pravinmpk2@gmail.com for a quote.";
  }
  
  // Tech Stack
  if (lowerMsg.includes('tech') || lowerMsg.includes('stack') || lowerMsg.includes('skill')) {
    return "Pravin is skilled in the MERN stack (MongoDB, Express, React, Node.js), Flutter for mobile apps, and Python/Java. He also does UI/UX design with Figma.";
  }
  
  // Experience/Background
  if (lowerMsg.includes('about') || lowerMsg.includes('who') || lowerMsg.includes('experience')) {
    return "Pravin is a Management of Information Systems student at NSBM Green University with experience as a Flutter Developer Intern at Appitura.";
  }
  
  // Projects
  if (lowerMsg.includes('project') || lowerMsg.includes('portfolio') || lowerMsg.includes('work')) {
    return "Some featured projects include a Waste Food Management App (Flutter), an Employee Management System (MERN), and various React web applications.";
  }

  return "That's a great question. While I'm an AI, I know Pravin is passionate about blending design and technology. For specific queries, I'd suggest contacting him directly!";
};
