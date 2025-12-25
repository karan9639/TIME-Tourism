"use client";
import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import RevealWrapper from "../components/RevealWrapper";
import { ChevronLeft } from "react-feather";

const storiesData = [
  {
    id: 1,
    slug: "adventure-is-here",
    title: "Adventure Is Here",
    category: "Adventure",
    date: "September 11, 2024",
    author: "TIME Tours Team",
    image: "/everest-base-camp-nepal-trekking-adventure-photogr.jpg",
    heroImage: "/himalaya-trekking-adventure-mountains.jpg",
    excerpt:
      "Embark on a journey through the majestic Himalayas and discover the thrill of high-altitude trekking...",
    content: `
      <p>The Himalayas have always been a beacon for adventurers seeking to test their limits and experience nature at its most magnificent. Our trekking expeditions take you through ancient mountain passes, pristine valleys, and remote villages where time seems to stand still.</p>
      
      <p>At TIME Tours, we believe adventure is not just about conquering peaks, but about immersing yourself in the culture and landscapes that make each destination unique. Our expert guides, many of whom are local to the regions we explore, bring decades of experience and intimate knowledge of these sacred mountains.</p>
      
      <p>From the challenging trails of Everest Base Camp to the serene paths of Annapurna Circuit, each trek is carefully designed to balance adventure with safety, ensuring you have the experience of a lifetime while respecting the fragile mountain ecosystem.</p>
      
      <blockquote>"The mountains are calling and I must go. Every step in the Himalayas is a step closer to understanding yourself and the world around you. The journey transforms you in ways no other experience can." - J.D. Muir, Adventure Guide</blockquote>
      
      <p>Whether you're a seasoned trekker or embarking on your first multi-day hike, our programs cater to all skill levels. We provide comprehensive pre-trek briefings, top-quality equipment, and support staff who ensure your comfort and safety throughout the journey.</p>
      
      <p>Join us as we traverse through rhododendron forests, cross suspension bridges over roaring rivers, and wake up to sunrises that paint the snow-capped peaks in hues of gold and pink. The adventure of a lifetime awaits in the Himalayas.</p>
    `,
    gallery: [
      "/everest-base-camp-nepal-trekking-adventure-photogr.jpg",
      "/himalaya-trekking-adventure-mountains.jpg",
      "/everest-base-camp-nepal-trekking.jpg",
    ],
  },
  {
    id: 2,
    slug: "new-experience",
    title: "Spiritual India - New Experience",
    category: "Experience",
    date: "September 5, 2024",
    author: "TIME Tours Team",
    image: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    heroImage: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    excerpt:
      "Experience the spiritual heart of India along the sacred Ganges, where ancient rituals meet modern seekers...",
    content: `
      <p>Varanasi, one of the world's oldest continuously inhabited cities, offers a spiritual experience unlike any other. As dawn breaks over the Ganges River, the ghats come alive with the sounds of temple bells, Sanskrit chants, and the quiet prayers of pilgrims who have journeyed from across India to these sacred waters.</p>
      
      <p>Our spiritual tours go beyond typical tourism to offer genuine cultural immersion. Witness the mesmerizing Ganga Aarti ceremony as priests perform ancient rituals with fire and incense, their movements synchronized like a sacred dance. The experience is both humbling and transformative.</p>
      
      <p>Take a sunrise boat ride along the river and watch the city awaken. Yogis practice sun salutations on the ghats, pilgrims perform their morning ablutions, and the golden light transforms the ancient architecture into something ethereal. This is India at its most authentic and spiritual.</p>
      
      <blockquote>"Varanasi doesn't just show you India's spirituality - it makes you feel it in every breath, every sunset, every prayer that floats across the water. It's not a place you visit; it's a place that stays with you forever." - Rajesh Kumar, Spiritual Guide</blockquote>
      
      <p>Beyond Varanasi, explore the Buddhist circuit in nearby Sarnath, where Buddha gave his first sermon, or journey to the temples of Khajuraho with their intricate carvings. Each site offers insights into India's diverse spiritual traditions - Hindu, Buddhist, Jain, and more.</p>
      
      <p>Our programs include meditation sessions with experienced practitioners, cooking classes where you learn to prepare sattvic vegetarian cuisine, and intimate conversations with local scholars who can explain the philosophical underpinnings of ancient Indian spirituality. Return home not just with photographs, but with a transformed perspective on life.</p>
    `,
    gallery: [
      "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
      "/indian-heritage-fort-rajasthan-luxury.jpg",
      "/guided-tour-group-rajasthan-palace-luxury-travel.jpg",
    ],
  },
  {
    id: 3,
    slug: "food-travelist",
    title: "Food Travelist - Culinary Journey Through India",
    category: "Culinary",
    date: "June 12, 2024",
    author: "TIME Tours Team",
    image: "/indian-cooking-class-culinary-experience-luxury-tr.jpg",
    heroImage: "/indian-cooking-class-culinary-experience-luxury-tr.jpg",
    excerpt:
      "Taste your way through India's diverse culinary landscape, from street food to royal cuisines...",
    content: `
      <p>Indian cuisine is as diverse as the country itself, with each region offering unique flavors, techniques, and traditions. Our culinary tours take you beyond restaurant menus into home kitchens, spice markets, and cooking schools where you'll learn the secrets of authentic Indian cooking.</p>
      
      <p>Start your journey in Delhi, where street food vendors have perfected their recipes over generations. Learn to distinguish between the tangy chaat of North India and the crispy dosas of the South. Our food experts guide you through bustling markets, teaching you how to select the freshest ingredients and identify quality spices.</p>
      
      <p>Experience hands-on cooking classes with local chefs and home cooks. Grind your own masala, roll perfect rotis, and master the art of tandoor cooking. Each session includes not just recipes, but the cultural stories and family traditions that make Indian cuisine so rich and meaningful.</p>
      
      <blockquote>"Indian cooking is about more than just following recipes - it's about understanding the balance of flavors, the medicinal properties of spices, and the love that goes into every meal. When you cook with your heart, the food tastes better." - Chef Priya Sharma, Culinary Expert</blockquote>
      
      <p>Journey through Rajasthan and taste royal cuisines once prepared for maharajas. In Kerala, learn to cook with coconut and curry leaves. In Bengal, discover the art of fish preparation and sweet-making. Each region offers its own culinary philosophy and techniques.</p>
      
      <p>Our tours include visits to spice plantations, tea estates, organic farms, and traditional kitchens. You'll return home not just with recipes, but with a deeper understanding of how food connects to culture, history, and daily life in India. Plus, you'll have skills to recreate authentic Indian flavors in your own kitchen.</p>
    `,
    gallery: [
      "/indian-cooking-class-culinary-experience-luxury-tr.jpg",
      "/guided-tour-group-rajasthan-palace-luxury-travel.jpg",
      "/indian-heritage-fort-rajasthan-luxury.jpg",
    ],
  },
  {
    id: 4,
    slug: "lifetime-journey",
    title: "Lifetime Journey - Epic Himalayan Expedition",
    category: "Expedition",
    date: "May 5, 2024",
    author: "TIME Tours Team",
    image: "/himalaya-trekking-adventure-mountains.jpg",
    heroImage: "/everest-base-camp-nepal-trekking.jpg",
    excerpt:
      "Embark on a once-in-a-lifetime expedition through the Indian Himalayas combining adventure, culture, and personal transformation...",
    content: `
      <p>Some journeys don't just take you to new places - they transform who you are. Our Lifetime Journey expedition through the Indian Himalayas is designed for those seeking more than a vacation. This is a transformative experience that challenges your limits, expands your worldview, and creates memories that define a lifetime.</p>
      
      <p>This comprehensive expedition spans the diverse regions of the Indian Himalayas. Trek through Ladakh's moonscapes, explore ancient Buddhist monasteries perched on impossible cliffs, experience the vibrant culture of Himachal Pradesh, and witness the confluence of Indian and Tibetan traditions in remote mountain villages.</p>
      
      <p>Our groups are limited to 12-16 travelers, creating an intimate atmosphere where lifelong friendships form. You'll be accompanied by expert guides who are not just knowledgeable about the destinations, but skilled in group dynamics and personal safety. Support staff handles logistics, so you can focus on the experience.</p>
      
      <blockquote>"A lifetime journey isn't measured in miles traveled, but in perspectives gained, fears overcome, and connections made. The Himalayas have a way of stripping away the unnecessary and revealing what truly matters." - Dr. Sarah Williams, Expedition Leader</blockquote>
      
      <p>Physical challenges are balanced with cultural immersion. After days of trekking, spend evenings with local families, learning about their way of life. Participate in traditional ceremonies, try local crafts like thangka painting and butter sculpture, and gain insights into Buddhist philosophy that has sustained these mountain communities for centuries.</p>
      
      <p>This expedition includes training sessions before departure, comprehensive travel insurance, top-quality equipment, and support every step of the way. Whether you're 25 or 65, if you have the spirit of adventure and reasonable fitness, this journey through the Indian Himalayas will be the highlight of your life. Applications are carefully reviewed to ensure group compatibility and readiness.</p>
    `,
    gallery: [
      "/himalaya-trekking-adventure-mountains.jpg",
      "/everest-base-camp-nepal-trekking.jpg",
      "/everest-base-camp-nepal-trekking-adventure-photogr.jpg",
    ],
  },
];

export default function StoryDetail() {
  const { slug } = useParams();
  const story = storiesData.find((s) => s.slug === slug);

  const currentIndex = storiesData.findIndex((s) => s.slug === slug);
  const previousStory = currentIndex > 0 ? storiesData[currentIndex - 1] : null;
  const nextStory =
    currentIndex < storiesData.length - 1
      ? storiesData[currentIndex + 1]
      : null;

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-charcoal mb-4">
            Story Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The story you're looking for doesn't exist.
          </p>
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title={story.title}
        backgroundImage={story.heroImage}
        subtitle={
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base">
            <span className="bg-teal-500 text-white px-3 py-1 rounded-full">
              {story.category}
            </span>
            <span>By {story.author}</span>
            <span>•</span>
            <span>{story.date}</span>
          </div>
        }
      />

      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                {story.excerpt}
              </p>
              <div dangerouslySetInnerHTML={{ __html: story.content }} />
            </div>
          </RevealWrapper>

          {story.gallery && story.gallery.length > 0 && (
            <RevealWrapper delay={200}>
              <div className="mt-16">
                <h3 className="text-3xl font-serif text-charcoal mb-8 text-center">
                  Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {story.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          )}

          <RevealWrapper delay={300}>
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                {previousStory && (
                  <Link
                    to={`/stories/${previousStory.slug}`}
                    className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={previousStory.image || "/placeholder.svg"}
                      alt={previousStory.title}
                      className="w-20 h-20 rounded-lg object-cover shadow-md"
                    />
                    <div className="text-left">
                      <p className="text-sm text-gray-500 mb-1">Previous</p>
                      <p className="text-lg font-semibold text-charcoal group-hover:text-teal-600 transition-colors">
                        {previousStory.title}
                      </p>
                    </div>
                  </Link>
                )}

                {nextStory && (
                  <Link
                    to={`/stories/${nextStory.slug}`}
                    className="group flex items-center gap-4 hover:opacity-80 transition-opacity ml-auto"
                  >
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Next</p>
                      <p className="text-lg font-semibold text-charcoal group-hover:text-teal-600 transition-colors">
                        {nextStory.title}
                      </p>
                    </div>
                    <img
                      src={nextStory.image || "/placeholder.svg"}
                      alt={nextStory.title}
                      className="w-20 h-20 rounded-lg object-cover shadow-md"
                    />
                  </Link>
                )}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </article>
    </>
  );
}
