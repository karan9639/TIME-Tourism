/**
 * Cloudinary Image Data Configuration
 *
 * This file contains all Cloudinary image URLs for the travel website gallery.
 *
 * INSTRUCTIONS FOR REPLACING PLACEHOLDER URLS:
 *
 * 1. Upload your images to Cloudinary (https://cloudinary.com)
 * 2. Get the full Cloudinary URL for each image
 *    Format: https://res.cloudinary.com/[cloud_name]/image/upload/[transformations]/[image_id]
 *
 * 3. Replace the placeholder URLs below with your actual Cloudinary URLs
 *
 * 4. Update the alt text and title for each image for better SEO and accessibility
 *
 * 5. Optional: Add Cloudinary transformations to URLs for optimization:
 *    - /q_auto - Automatic quality optimization
 *    - /f_auto - Automatic format selection (WebP, AVIF)
 *    - /w_1200,c_limit - Limit width to 1200px
 *    - /ar_4:3,c_fill - Crop to 4:3 aspect ratio
 *    Example: https://res.cloudinary.com/demo/image/upload/q_auto,f_auto,w_1200/sample.jpg
 *
 * IMAGE STRUCTURE:
 * {
 *   url: string,      // Cloudinary image URL
 *   alt: string,      // Alt text for accessibility and SEO
 *   title: string,    // Optional caption/title displayed on hover
 *   category: string  // Optional category for filtering
 * }
 */

// DESTINATION: INDIA - Replace these URLs with your actual Cloudinary India travel photos
export const indiaGalleryImages = [
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/india-taj-mahal-sunrise",
    alt: "Taj Mahal at sunrise with reflection in pool",
    title: "Taj Mahal - Agra",
    category: "monuments",
  },
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/india-jaipur-palace",
    alt: "Pink Palace architecture in Jaipur",
    title: "Hawa Mahal - Jaipur",
    category: "architecture",
  },
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/india-varanasi-ghats",
    alt: "Varanasi ghats at sunset with boats",
    title: "Varanasi Ghats",
    category: "culture",
  },
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/india-kerala-backwaters",
    alt: "Traditional houseboat in Kerala backwaters",
    title: "Kerala Backwaters",
    category: "nature",
  },
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/india-rajasthan-desert",
    alt: "Camel safari in Thar Desert at golden hour",
    title: "Rajasthan Desert Safari",
    category: "adventure",
  },
  // Add 45 more images here - total of 50 images
  // Copy the structure above and replace URLs, alt text, and titles
]

// DESTINATION: NEPAL - Replace with your Cloudinary Nepal photos
export const nepalGalleryImages = [
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/nepal-everest-base-camp",
    alt: "Mount Everest base camp with prayer flags",
    title: "Everest Base Camp",
    category: "mountains",
  },
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/nepal-kathmandu-temple",
    alt: "Ancient Buddhist stupa in Kathmandu",
    title: "Boudhanath Stupa - Kathmandu",
    category: "temples",
  },
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/nepal-pokhara-lake",
    alt: "Phewa Lake with Himalayan mountain backdrop",
    title: "Phewa Lake - Pokhara",
    category: "nature",
  },
  // Add 47 more Nepal images
]

// DESTINATION: BHUTAN - Replace with your Cloudinary Bhutan photos
export const bhutanGalleryImages = [
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/bhutan-tigers-nest",
    alt: "Tigers Nest monastery perched on cliff",
    title: "Paro Taktsang - Tigers Nest",
    category: "monasteries",
  },
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/bhutan-punakha-dzong",
    alt: "Punakha Dzong fortress at river confluence",
    title: "Punakha Dzong",
    category: "architecture",
  },
  // Add 48 more Bhutan images
]

// DESTINATION: SRI LANKA - Replace with your Cloudinary Sri Lanka photos
export const sriLankaGalleryImages = [
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/srilanka-sigiriya-rock",
    alt: "Sigiriya Lion Rock fortress aerial view",
    title: "Sigiriya Rock Fortress",
    category: "ancient",
  },
  {
    url: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1200/srilanka-tea-plantations",
    alt: "Rolling green tea plantations in highlands",
    title: "Tea Country - Nuwara Eliya",
    category: "nature",
  },
  // Add 48 more Sri Lanka images
]

// COMBINED GALLERY - All destinations (50+ images)
// Replace placeholder URLs with actual Cloudinary image URLs
export const allDestinationsGallery = [
  // Placeholder images - REPLACE these with your actual Cloudinary URLs
  ...Array.from({ length: 50 }, (_, i) => ({
    url: `/placeholder.svg?height=800&width=1200&query=luxury travel destination ${i + 1} India Nepal Bhutan Sri Lanka photography`,
    alt: `Luxury travel destination photograph ${i + 1}`,
    title: `Beautiful Travel Moment ${i + 1}`,
    category: ["culture", "nature", "architecture", "adventure", "monuments"][i % 5],
  })),
]

// DEMO DATA - Example with placeholder images for testing
// Remove this section once you add your Cloudinary URLs above
export const demoGalleryImages = [
  {
    url: "/taj-mahal-sunrise-india-luxury-travel.jpg",
    alt: "Taj Mahal at sunrise",
    title: "Iconic Taj Mahal",
    category: "monuments",
  },
  {
    url: "/himalayan-mountains-nepal-trekking-landscape.jpg",
    alt: "Himalayan mountain peaks",
    title: "Himalayan Majesty",
    category: "nature",
  },
  {
    url: "/bhutan-tigers-nest-monastery-cliffside.jpg",
    alt: "Tigers Nest Monastery in Bhutan",
    title: "Tigers Nest Monastery",
    category: "monasteries",
  },
  {
    url: "/kerala-backwaters-houseboat-india-sunset.jpg",
    alt: "Kerala backwaters with traditional houseboat",
    title: "Kerala Serenity",
    category: "nature",
  },
  {
    url: "/jaipur-palace-rajasthan-pink-city-architecture.jpg",
    alt: "Ornate palace architecture in Jaipur",
    title: "Jaipur Pink Palace",
    category: "architecture",
  },
  {
    url: "/sri-lanka-tea-plantation-hills-green-landscape.jpg",
    alt: "Lush tea plantations in Sri Lanka",
    title: "Tea Country",
    category: "nature",
  },
  {
    url: "/varanasi-ghats-ganges-river-ceremony-india.jpg",
    alt: "Evening ceremony at Varanasi ghats",
    title: "Varanasi Rituals",
    category: "culture",
  },
  {
    url: "/mount-everest-base-camp-nepal-trekking.jpg",
    alt: "Everest base camp trekking route",
    title: "Everest Base Camp",
    category: "adventure",
  },
]

/**
 * CATEGORY FILTERS
 * Use these for creating filtered gallery views
 */
export const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "monuments", label: "Monuments" },
  { id: "nature", label: "Nature & Landscapes" },
  { id: "architecture", label: "Architecture" },
  { id: "culture", label: "Culture & Traditions" },
  { id: "adventure", label: "Adventure" },
  { id: "temples", label: "Temples & Monasteries" },
]
