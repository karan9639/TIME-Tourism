"use client"
import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Paintbrush as Pinterest, MessageCircle } from "lucide-react"
import PageHeader from "../components/PageHeader"
import RevealWrapper from "../components/RevealWrapper"

const storiesData = [
  {
    id: 1,
    slug: "adventure-is-here",
    title: "Adventure Is Here",
    category: "Adventure",
    date: "September 11, 2017",
    author: "Admin",
    image: "/everest-base-camp-nepal-trekking-adventure-photogr.jpg",
    heroImage: "/himalaya-trekking-adventure-mountains.jpg",
    excerpt: "Si elit omnes impedit ius, vel et hinc agam fabulas...",
    content: `
      <p>Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim, Tn eam dimo diam ea. Piber Korem sit amet. Cconsquat tin sit, eiet cibo blandit.En eam dicose sit, aum sumo diam ea, Liber consectetuer in mei.</p>
      
      <p>At elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit, aum sumo diam ea. Liber consectetuer in mei, sea in imperitiet assueverit contentiones, on his cibo blandit facimatas. lusto iudicabit similioque idefinitionem eos on.Sit delicata persequens es, in sea rebum deseruisse appellantur. Lorem ipsum dolor si va operti consequt on.</p>
      
      <blockquote>"Et elit omnes impedit ius, vel et hinc agam fabulas. Ut audio lorem mre iracundia vim, An eame, ut sint posse sumo diam ea. Cu omni svel et hinc agam fobex, in sea rebum dolor."</blockquote>
      
      <p>Et elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit, aum sumo diam ea. Liber consectetuer in mei, sea in imperitiet assueverit contentiones, on his cibo blandit facimatas. lusto iudicabit similioque idefinitionem eos on.Sit delicata persequens es, in sea rebum deseruisse appellantur. Lorem ipsum dolor si va operti consequt on.</p>
    `,
    gallery: [
      "/everest-base-camp-nepal-trekking-adventure-photogr.jpg",
      "/indian-cooking-class-culinary-experience-luxury-tr.jpg",
      "/himalaya-trekking-adventure-mountains.jpg",
    ],
    comments: [
      {
        id: 1,
        author: "Carol Silva",
        date: "October 31, 2018 at 10:55 am",
        content:
          "Estet assueverit contentiones, on his cibo blandit facimatas. lusto iudicabit similioque idefinitionem eos on.Sit delicata persequens es, in sea rebum deseruisse appellantur. Lorem ipsum dolor si va operti conse.",
      },
      {
        id: 2,
        author: "James Fisher",
        date: "October 31, 2018 at 10:55 am",
        content:
          "Adefinitionem eos on.Sit delicato persequens es, in sea rebum deseruisse appellantur. Lorem ipsum dolor si viu.",
      },
    ],
  },
  {
    id: 2,
    slug: "stunning-greece",
    title: "Stunning Greece",
    category: "Travel",
    date: "September 15, 2017",
    author: "Admin",
    image: "/maldives-overwater-villa-luxury-travel-editorial-s.jpg",
    heroImage: "/maldives-overwater-villa-luxury-travel-editorial-s.jpg",
    excerpt: "Discover the ancient wonders and beautiful islands of Greece...",
    content: "<p>Content about Greece...</p>",
    gallery: [],
    comments: [],
  },
  {
    id: 3,
    slug: "new-experience",
    title: "New Experience",
    category: "Experience",
    date: "September 20, 2017",
    author: "Admin",
    image: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    heroImage: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    excerpt: "Every journey brings new experiences and memories...",
    content: "<p>Content about new experiences...</p>",
    gallery: [],
    comments: [],
  },
]

export default function StoryDetail() {
  const { slug } = useParams()
  const story = storiesData.find((s) => s.slug === slug)
  const [commentForm, setCommentForm] = useState({ name: "", email: "", comment: "", saveInfo: false })

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-charcoal mb-4">Story Not Found</h1>
          <Link to="/stories" className="text-teal-600 hover:underline">
            Back to Stories
          </Link>
        </div>
      </div>
    )
  }

  // Get prev/next stories
  const currentIndex = storiesData.findIndex((s) => s.slug === slug)
  const prevStory = currentIndex > 0 ? storiesData[currentIndex - 1] : null
  const nextStory = currentIndex < storiesData.length - 1 ? storiesData[currentIndex + 1] : null

  const handleSubmitComment = (e) => {
    e.preventDefault()
    // Handle comment submission
    console.log("Comment submitted:", commentForm)
  }

  return (
    <>
      {/* Hero */}
      <PageHeader title="Time Travels" image={story.heroImage} />

      <main className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealWrapper>
            {/* Featured Image with category tag */}
            <div className="relative mb-8">
              <img
                src={story.image || "/placeholder.svg"}
                alt={story.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <span className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded text-sm font-script">
                {story.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">{story.title}</h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: story.content }} />

            {/* Gallery */}
            {story.gallery && story.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {story.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            {/* Meta & Share */}
            <div className="flex items-center justify-between py-4 border-t border-b border-gray-200 mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{story.date}</span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={16} />
                  {story.comments.length} Comments
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-gray-400 hover:text-blue-600">
                  <Facebook size={18} />
                </button>
                <button className="text-gray-400 hover:text-blue-400">
                  <Twitter size={18} />
                </button>
                <button className="text-gray-400 hover:text-blue-700">
                  <Linkedin size={18} />
                </button>
                <button className="text-gray-400 hover:text-red-600">
                  <Pinterest size={18} />
                </button>
              </div>
            </div>

            {/* Prev/Next Navigation */}
            <div className="flex justify-between items-center mb-12">
              {prevStory ? (
                <Link to={`/stories/${prevStory.slug}`} className="flex items-center gap-3 group">
                  <img
                    src={prevStory.image || "/placeholder.svg"}
                    alt={prevStory.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm text-gray-500">Previous</p>
                    <p className="font-medium text-charcoal group-hover:text-teal-600">{prevStory.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextStory ? (
                <Link to={`/stories/${nextStory.slug}`} className="flex items-center gap-3 text-right group">
                  <div>
                    <p className="text-sm text-gray-500">Next</p>
                    <p className="font-medium text-charcoal group-hover:text-teal-600">{nextStory.title}</p>
                  </div>
                  <img
                    src={nextStory.image || "/placeholder.svg"}
                    alt={nextStory.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Comments Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif text-charcoal mb-6">Comments</h2>

              {story.comments.length > 0 ? (
                <div className="space-y-6">
                  {story.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-charcoal">{comment.author}</h4>
                          <button className="text-sm text-teal-600 hover:underline">reply</button>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{comment.date}</p>
                        <p className="text-gray-600">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
              )}
            </section>

            {/* Comment Form */}
            <section className="bg-teal-600 rounded-lg p-8">
              <h2 className="text-2xl font-script text-white mb-6">Post a Comment</h2>

              <form onSubmit={handleSubmitComment} className="space-y-4">
                <div>
                  <label htmlFor="comment" className="sr-only">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    placeholder="Comment"
                    className="w-full px-4 py-3 rounded bg-teal-700 text-white placeholder-teal-300 border-0 focus:ring-2 focus:ring-white"
                    value={commentForm.comment}
                    onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name*"
                      className="w-full px-4 py-3 rounded bg-teal-700 text-white placeholder-teal-300 border-0 focus:ring-2 focus:ring-white"
                      value={commentForm.name}
                      onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email*"
                      className="w-full px-4 py-3 rounded bg-teal-700 text-white placeholder-teal-300 border-0 focus:ring-2 focus:ring-white"
                      value={commentForm.email}
                      onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="saveInfo"
                    className="rounded text-teal-500"
                    checked={commentForm.saveInfo}
                    onChange={(e) => setCommentForm({ ...commentForm, saveInfo: e.target.checked })}
                  />
                  <label htmlFor="saveInfo" className="text-sm text-teal-200">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-charcoal font-medium py-3 rounded hover:bg-gray-100 transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </section>
          </RevealWrapper>
        </div>
      </main>
    </>
  )
}
