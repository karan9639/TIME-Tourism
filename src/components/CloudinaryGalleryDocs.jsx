/**
 * CloudinaryGallery - Complete Usage Documentation
 * =================================================
 *
 * This document provides comprehensive instructions for integrating and using
 * the Cloudinary Gallery system in your travel website.
 *
 * TABLE OF CONTENTS:
 * 1. Quick Start Guide
 * 2. Cloudinary Setup
 * 3. Component Usage
 * 4. Image URL Structure
 * 5. Layout Options
 * 6. Optimization Tips
 * 7. Examples
 *
 * ============================================================================
 *
 * 1. QUICK START GUIDE
 * --------------------
 *
 * Step 1: Set up your Cloudinary account
 *   - Go to https://cloudinary.com and create a free account
 *   - Note your Cloud Name from the dashboard
 *
 * Step 2: Upload images to Cloudinary
 *   - Use the Media Library in Cloudinary dashboard
 *   - Or use the Upload API
 *   - Organize images in folders (e.g., india/, nepal/, bhutan/)
 *
 * Step 3: Get image URLs
 *   - Click on any uploaded image
 *   - Copy the "Secure URL" from the image details
 *   - Format: https://res.cloudinary.com/[cloud_name]/image/upload/[image_id]
 *
 * Step 4: Replace placeholder URLs
 *   - Open src/data/cloudinaryImages.js
 *   - Replace placeholder URLs with your Cloudinary URLs
 *   - Update alt text and titles for SEO
 *
 * Step 5: Use the gallery component
 *   - Import: import CloudinaryGallery from '../components/CloudinaryGallery'
 *   - Use: <CloudinaryGallery images={yourImageArray} layout="grid" />
 *
 * ============================================================================
 *
 * 2. CLOUDINARY SETUP
 * -------------------
 *
 * Image Upload Options:
 *
 * A) Manual Upload (Dashboard)
 *    - Login to cloudinary.com
 *    - Go to Media Library
 *    - Click "Upload" button
 *    - Select multiple images
 *    - Organize into folders
 *
 * B) Bulk Upload (CLI)
 *    npm install -g cloudinary-cli
 *    cld config
 *    cld upload folder/*.jpg --folder=travel-photos
 *
 * C) Programmatic Upload (API)
 *    // Node.js example
 *    const cloudinary = require('cloudinary').v2;
 *
 *    cloudinary.config({
 *      cloud_name: 'YOUR_CLOUD_NAME',
 *      api_key: 'YOUR_API_KEY',
 *      api_secret: 'YOUR_API_SECRET'
 *    });
 *
 *    cloudinary.uploader.upload("image.jpg", {
 *      folder: "travel-photos",
 *      public_id: "taj-mahal-sunrise"
 *    });
 *
 * ============================================================================
 *
 * 3. COMPONENT USAGE
 * ------------------
 *
 * Basic Usage:
 * -----------
 *
 * import CloudinaryGallery from '../components/CloudinaryGallery'
 * import { indiaGalleryImages } from '../data/cloudinaryImages'
 *
 * function MyPage() {
 *   return (
 *     <CloudinaryGallery
 *       images={indiaGalleryImages}
 *       layout="grid"
 *       columns={3}
 *       enableLightbox={true}
 *     />
 *   )
 * }
 *
 * With Category Filtering:
 * -----------------------
 *
 * import FilterableGallery from '../components/FilterableGallery'
 * import { allDestinationsGallery } from '../data/cloudinaryImages'
 *
 * function GalleryPage() {
 *   return (
 *     <FilterableGallery
 *       images={allDestinationsGallery}
 *       layout="masonry"
 *     />
 *   )
 * }
 *
 * ============================================================================
 *
 * 4. IMAGE URL STRUCTURE
 * ----------------------
 *
 * Basic Cloudinary URL Format:
 * https://res.cloudinary.com/[cloud_name]/image/upload/[image_id].jpg
 *
 * Example:
 * https://res.cloudinary.com/time-tours/image/upload/taj-mahal-sunrise.jpg
 *
 * With Transformations (Recommended):
 * https://res.cloudinary.com/[cloud_name]/image/upload/[transformations]/[image_id]
 *
 * Example with optimizations:
 * https://res.cloudinary.com/time-tours/image/upload/q_auto,f_auto,w_1200/taj-mahal-sunrise.jpg
 *
 * Image Object Structure in cloudinaryImages.js:
 * ----------------------------------------------
 *
 * {
 *   url: "https://res.cloudinary.com/your-cloud/image/upload/q_auto,f_auto/your-image.jpg",
 *   alt: "Descriptive alt text for accessibility and SEO",
 *   title: "Optional caption displayed in gallery",
 *   category: "monuments" // Optional, for filtering
 * }
 *
 * ============================================================================
 *
 * 5. LAYOUT OPTIONS
 * -----------------
 *
 * The CloudinaryGallery component supports 4 layout types:
 *
 * A) Grid Layout (layout="grid")
 *    - Regular grid with equal-sized images
 *    - Best for: Consistent photo sizes, clean organized look
 *    - Columns: 2, 3, 4, or 5 (responsive)
 *    - Aspect ratios: square, portrait, landscape, auto
 *
 *    <CloudinaryGallery
 *      images={images}
 *      layout="grid"
 *      columns={3}
 *      aspectRatio="landscape"
 *    />
 *
 * B) Masonry Layout (layout="masonry")
 *    - Pinterest-style with varied heights
 *    - Best for: Mixed photo sizes, dynamic feel
 *    - Automatically adjusts to image dimensions
 *
 *    <CloudinaryGallery
 *      images={images}
 *      layout="masonry"
 *    />
 *
 * C) Bento Layout (layout="bento")
 *    - Modern grid with featured larger images
 *    - Best for: Highlighting key photos, magazine style
 *    - Creates visual hierarchy automatically
 *
 *    <CloudinaryGallery
 *      images={images}
 *      layout="bento"
 *    />
 *
 * D) Carousel Layout (layout="carousel")
 *    - Horizontal scrolling gallery
 *    - Best for: Limited space, featured collections
 *    - Includes navigation arrows
 *
 *    <CloudinaryGallery
 *      images={images}
 *      layout="carousel"
 *      aspectRatio="landscape"
 *    />
 *
 * ============================================================================
 *
 * 6. OPTIMIZATION TIPS
 * --------------------
 *
 * Cloudinary Transformation Parameters:
 *
 * A) Automatic Quality (q_auto)
 *    - Reduces file size while maintaining visual quality
 *    - Usage: /q_auto/
 *
 * B) Automatic Format (f_auto)
 *    - Serves WebP to supported browsers, JPG to others
 *    - Usage: /f_auto/
 *
 * C) Width Limiting (w_[pixels])
 *    - Limits image width, maintains aspect ratio
 *    - Usage: /w_1200/ (for 1200px max width)
 *
 * D) Responsive Images (w_auto)
 *    - Automatically serves optimal size based on device
 *    - Usage: /w_auto/
 *
 * E) Aspect Ratio Cropping (ar_[ratio],c_fill)
 *    - Crops to specific aspect ratio
 *    - Usage: /ar_4:3,c_fill/ or /ar_16:9,c_fill/
 *
 * F) Combined Optimizations (Recommended)
 *    - Combine multiple transformations
 *    - Usage: /q_auto,f_auto,w_1200,c_limit/
 *
 * Full Optimized URL Example:
 * https://res.cloudinary.com/time-tours/image/upload/q_auto,f_auto,w_1200,c_limit/taj-mahal.jpg
 *
 * Performance Benefits:
 * - 40-60% smaller file sizes
 * - Faster page load times
 * - Better SEO rankings
 * - Improved user experience
 *
 * ============================================================================
 *
 * 7. EXAMPLES
 * -----------
 *
 * Example 1: Simple Grid Gallery
 * ------------------------------
 *
 * const myImages = [
 *   {
 *     url: "https://res.cloudinary.com/time-tours/image/upload/q_auto,f_auto,w_1200/taj-mahal-sunrise.jpg",
 *     alt: "Taj Mahal at sunrise with reflection",
 *     title: "Taj Mahal - Agra, India"
 *   },
 *   {
 *     url: "https://res.cloudinary.com/time-tours/image/upload/q_auto,f_auto,w_1200/jaipur-palace.jpg",
 *     alt: "Pink Palace architecture in Jaipur",
 *     title: "Hawa Mahal - Jaipur, India"
 *   }
 * ]
 *
 * <CloudinaryGallery
 *   images={myImages}
 *   layout="grid"
 *   columns={3}
 *   aspectRatio="landscape"
 * />
 *
 * Example 2: Filterable Gallery with Categories
 * ---------------------------------------------
 *
 * const categorizedImages = [
 *   {
 *     url: "https://res.cloudinary.com/.../image1.jpg",
 *     alt: "Monument photo",
 *     category: "monuments"
 *   },
 *   {
 *     url: "https://res.cloudinary.com/.../image2.jpg",
 *     alt: "Nature photo",
 *     category: "nature"
 *   }
 * ]
 *
 * <FilterableGallery
 *   images={categorizedImages}
 *   layout="masonry"
 * />
 *
 * Example 3: Destination-Specific Gallery
 * ---------------------------------------
 *
 * // In your destination detail page:
 * import { indiaGalleryImages } from '../data/cloudinaryImages'
 *
 * <section>
 *   <h2>Explore India</h2>
 *   <CloudinaryGallery
 *     images={indiaGalleryImages}
 *     layout="bento"
 *     enableLightbox={true}
 *   />
 * </section>
 *
 * ============================================================================
 *
 * TROUBLESHOOTING
 * ---------------
 *
 * Q: Images not loading?
 * A: Check that URLs are correct and publicly accessible. Verify cloud_name.
 *
 * Q: Images loading slowly?
 * A: Add transformation parameters (q_auto, f_auto, w_1200).
 *
 * Q: Lightbox not working?
 * A: Ensure enableLightbox={true} is set.
 *
 * Q: Categories not filtering?
 * A: Use FilterableGallery component and ensure images have category property.
 *
 * Q: Images showing placeholder?
 * A: Replace URLs in src/data/cloudinaryImages.js with actual Cloudinary URLs.
 *
 * ============================================================================
 *
 * SUPPORT & RESOURCES
 * -------------------
 *
 * - Cloudinary Documentation: https://cloudinary.com/documentation
 * - Image Transformations: https://cloudinary.com/documentation/image_transformations
 * - Upload API: https://cloudinary.com/documentation/image_upload_api_reference
 * - React SDK: https://cloudinary.com/documentation/react_integration
 *
 * ============================================================================
 */

export default function CloudinaryGalleryDocs() {
  return null // This is a documentation-only file
}
