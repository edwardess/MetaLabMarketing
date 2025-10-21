import { StaticImageData } from "next/image";
import { AVATAR } from "../../public/assets/images/images";

export interface Testimonial {
  username: string;
  designation: string;
  text: string;
  image: string | StaticImageData;
  
}

export const testimonials: Testimonial[] = [
  {
    username: "Anna Young",
    designation: "Founder @ Lingvito",
    text:
      "Working with Meta Lab Marketing has been one of the best decisions we made for our brand. Their team is responsive, transparent, and deeply involved in every project. From the very first strategy call, they took time to understand our goals and our audience. What stood out most was how they translated complex ideas into clear and effective campaigns. Our engagement rate almost tripled in just a few months, and our community keeps growing through real and organic connections. I never feel like we are chasing trends. Every post feels meaningful and well thought out.",
    image: AVATAR.testiOne,
  },
  {
    username: "Sandra Ruth Theodoro",
    designation: "Digital Marketing Manager @ Icelanders",
    text:
      "Meta Lab Marketing helped us grow faster than we expected. Their strategies are smart, their designs are beautiful, and their process is seamless. We finally feel confident about our social media.",
    image: AVATAR.testiEight,
  },
  {
    username: "Eldrix Maurio",
    designation: "Marketing Director @ Lunari",
    text:
      "We have been working with MLM Studio for almost a year and they have completely transformed our brand presence. Before, we were running ads without any story or clear identity. The team helped us build a consistent message that actually connects with people. Engagement has grown by more than double and we now attract the right followers. Every meeting with them feels productive and inspiring. They are professionals who genuinely care about our success.",
    image: AVATAR.testiSeven,
  },
  {
    username: "Scott Jarvis",
    designation: "Founder & CEO @ DirtyHorse",
    text:
      "Partnering with Meta Lab Marketing has been a game changer for us. Our social media strategy used to feel messy and directionless. Their team came in, cleaned everything up, and built a strong structure that works. Every deliverable is on time and every idea is backed by research and data. Their communication is smooth and their creativity feels authentic. They made it easy for us to focus on running our business while knowing our brand is growing online.",
    image: AVATAR.testiSix,
  },
  {
    username: "Kamela A.",
    designation: "Marketing Manager @ Terra Thread",
    text:
      "We have worked with several agencies over the years, but Meta Lab Marketing truly stands out. They actually listen. They study your audience, your tone, and your vision before building a strategy. They do not rely on templates or generic ideas. Instead, they craft campaigns that feel personal and original. In just six months, our brand visibility increased and our content started receiving real conversations, not just likes. Every report comes with clear insights we can apply right away.",
    image: AVATAR.testiFive,
  },
  {
    username: "Von G.",
    designation: "Founder & CEO @ Ayns Business Center",
    text:
      "Working with MLM Studio feels easy and natural. They listen, they plan, and they execute with precision. What I love most is how every campaign feels personal to our brand, not copied from someone else.",
    image: AVATAR.testiFour,
  },
  {
    username: "Dina Sadvakassova",
    designation: "Recruitment Consultant @ Ethical Hire",
    text:
      "Before we found Meta Lab Marketing, our campaigns were inconsistent and unpredictable. Since working with them, everything feels organized and purposeful. They pay attention to what works and what does not, then adjust fast. Within one quarter, our reach increased by more than 150 percent and our followers became more engaged. They are data-driven but still creative, which makes them the perfect mix of strategy and emotion.",
    image: AVATAR.testiThree,
  },
  {
    username: "Nick F.",
    designation: "Founder & CEO @ MTAS GROUP",
    text:
      "Meta Lab Marketing is not just another agency. They are genuine partners who care about long-term results. From our first meeting, we could tell they were invested in helping us grow. They built a full marketing system that connects our content, ads, and leads together. Their reports are easy to understand and always show clear progress. Our revenue and visibility have both improved steadily. It feels good knowing our brand is in the hands of people who truly care.",
    image: AVATAR.testiTwo,
  },
  {
    username: "Tanya D.",
    designation: "Head of Marketing @ Clearview",
    text:
      "Meta Lab Marketing helped us bring structure and strategy to our content. Their team is organized, creative, and always one step ahead. We’ve seen real growth in engagement and brand visibility since partnering with them.",
    image: AVATAR.testiNine,
  },
];


export interface FAQ  {
   question: string,
   answer: string
}
export const faq: FAQ[] = 
[
  {
    question: "What is FingUI?",
    answer: "FingUI is an AI-powered UI builder that helps you design beautiful, responsive components without writing complex code. Simply describe what you need — and FingUI generates it instantly."
  },
  {
    question: "Do I need design skills to use FingUI?",
    answer: "Nope! FingUI is built for everyone — from beginners to pro developers. You just explain your idea, and FingUI turns it into clean, production-ready UI."
  },
  {
    question: "Does FingUI support light and dark themes?",
    answer: "Yes! FingUI comes with automatic theme toggling. You can seamlessly switch between elegant light mode and sleek dark mode for your components."
  },
  {
    question: "Is FingUI responsive?",
    answer: "Absolutely. Every component generated with FingUI is fully responsive and adapts perfectly to mobile, tablet, and desktop screens."
  },
  {
    question: "Can I customize the components FingUI generates?",
    answer: "Of course! FingUI gives you ready-made components, but you can easily tweak styles, layouts, and animations to match your brand."
  },
]