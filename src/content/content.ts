import type { HeroContent, AboutContent, ServicesContent } from "@/types";

export const hero: HeroContent = {
  title: "Live It Maghribi",
  description:
    "Unleash your creativity over coffee — Pottery, Tissage, Dreamcatchers, and more!",
  image: "/images/hero-image.avif",
  alt: "Dreamcatcher Hero Image",
  button: "Explore Workshops",
};

export const about: AboutContent = {
  headline: "LiveItMaghribi – A Creative Moroccan Space",
  subline: "Where Moroccan tradition meets your creative spirit.",
  heroImage: "/images/hero-image.avif",
  story: [
    "LiveItMaghribi began on March 3rd, 2024, with a simple goal: to share the beauty of Moroccan traditions and handmade art with everyone.",
    "Inspired by the richness of Moroccan crafts like pottery, weaving, mosaics, and painting, this workshop is more than just a place to learn. It's a calm, welcoming space where you can relax, create, and enjoy a drink all at once.",
    "Whether you're a traveler, an artist, or someone simply looking for a new experience, LiveItMaghribi is open to you. We aim to help people discover the depth of Moroccan artistry — and to remind both locals and visitors just how special our traditions truly are.",
    "Come create, discover, and feel the Moroccan spirit — one handmade piece at a time.",
  ],
  ethos: [
    "Every workshop is hands-on — you don't watch, you *do*.",
    "All materials are locally sourced and rich in cultural value.",
    "Our artisans are not instructors — they're storytellers.",
    "We honor both ancient craft and contemporary creativity.",
    "We keep it small, personal, and deeply rooted.",
    "This isn't a tour. It's a shared moment in time.",
  ],
  hostImage: "/images/host-image.webp",
  bio: [
    "Meet the heart behind the workshops — a cultural connector and lifelong creative, who believes beauty lives in the details.",
    "With a background in design and deep ties to Moroccan heritage, your host brings a thoughtful, warm presence to every session. From the scent of clay to the rhythm of thread, they guide you through more than a craft — they open a door into the Moroccan way of being.",
  ],
  invitation: `
Whether you're here for a few hours or a few days, Live It Maghribi is your place to make, feel, and remember.
`,
};

export const services: ServicesContent = {
  title: "Our Workshops",
  description: "Choose Your Next Experience... Pottery, Weaving, Painting, and beyond.",
  items: [
    {
      title: "Traditional Pottery",
      description: "Spin the Clay. Shape the Tradition.",
      image: "/images/services/traditional-pottery1.webp",
      calEvent: "traditional-pottery",
      category: "Clay & Earth",
    },
    {
      title: "Modern Pottery",
      description: "Craft with Your Hands. Create from the Heart.",
      image: "/images/services/modern-pottery.webp",
      calEvent: "modern-pottery",
      category: "Clay & Earth",
    },
    {
      title: "Mosaïque",
      description: "Piece by Piece, a Story Unfolds.",
      image: "/images/services/Mosaic.webp",
      calEvent: "mosaique",
      category: "Pattern & Heritage",
    },
    {
      title: "Zelij Painting",
      description: "Brush Strokes of Heritage.",
      image: "/images/services/Zellige-Painting.webp",
      calEvent: "zelij-painting",
      category: "Pattern & Heritage",
    },
    {
      title: "Weaving",
      description: "Threads of Tradition.",
      image: "/images/services/tissage.webp",
      calEvent: "tissage-weaving",
      category: "Textile & Thread",
    },
    {
      title: "Dreamcatcher",
      description: "Catch the Dreams, Craft the Magic.",
      image: "/images/services/dreamcatcher.webp",
      calEvent: "dreamcatcher",
      category: "Textile & Thread",
    },
    {
      title: "Embroidery",
      description: "Stitching Stories.",
      image: "/images/services/embroidery.webp",
      calEvent: "embroidery",
      category: "Textile & Thread",
    },
    {
      title: "Crochet",
      description: "Loops of Love.",
      image: "/images/services/Crochet.webp",
      calEvent: "crochet",
      category: "Textile & Thread",
    },
    {
      title: "Concrete",
      description: "Solid Foundations, Creative Expressions.",
      image: "/images/services/concrete.webp",
      calEvent: "concrete",
      category: "Clay & Earth",
    },
    {
      title: "Ceramic Painting",
      description: "Coloring Clay with Culture.",
      image: "/images/services/ceramic-painting.webp",
      calEvent: "ceramic-painting",
      category: "Clay & Earth",
    },
    {
      title: "Canvas Painting",
      description: "Your Canvas, Your Story.",
      image: "/images/services/canvas-painting.webp",
      calEvent: "canvas-painting",
      category: "Pattern & Heritage",
    },
    {
      title: "Candle Painting",
      description: "Light Up Your Creativity.",
      image: "/images/services/candle-painting.webp",
      calEvent: "candle-painting",
      category: "Pattern & Heritage",
    },
    {
      title: "Jewellery",
      description: "Wear What You Create.",
      image: "/images/services/jewelry.webp",
      calEvent: "jewellery",
      category: "Pattern & Heritage",
    },
    {
      title: "Cake Decoration",
      description: "Deliciously Designed.",
      image: "/images/services/cake-decoration.webp",
      calEvent: "cake-decoration",
      category: "Tastes & Tabletop",
    },
    {
      title: "Cooking Class",
      description: "Flavors You'll Never Forget.",
      image: "/images/services/cooking-class.webp",
      calEvent: "cooking-class",
      category: "Tastes & Tabletop",
    },
  ],
};