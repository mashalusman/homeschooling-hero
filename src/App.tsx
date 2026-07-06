import React, { useState } from 'react';
import { BookOpen, LogIn, Download, ArrowRight, Star, GraduationCap, CheckCircle2 } from 'lucide-react';

// Mock Data for Grade-Wise Worksheets
const GRADE_CATEGORIES = ["All Grades", "Kindergarten", "Grade 1", "Grade 2", "Grade 3"];

const WORKSHEETS_DATA = [
  {
    id: 1,
    title: "Early Math: Fun Counting & Shapes Bundle",
    grade: "Kindergarten",
    price: "$4.99",
    rating: 4.9,
    reviews: 28,
    pages: "25 Pages (PDF)",
    description: "Engaging tracing, counting objects, and basic shape identification activities built for young learners.",
  },
  {
    id: 2,
    title: "Phonics & Word Building Foundation",
    grade: "Grade 1",
    price: "$6.50",
    rating: 5.0,
    reviews: 42,
    pages: "40 Pages (PDF)",
    description: "Step-by-step consonant blends, vowel sounds, and simple sight word sentence practice sheets.",
  },
  {
    id: 3,
    title: "Reading Comprehension & Short Stories",
    grade: "Grade 2",
    price: "$5.99",
    rating: 4.8,
    reviews: 19,
    pages: "30 Pages (PDF)",
    description: "Delightful illustrated short moral stories followed by thought-provoking question blocks.",
  },
  {
    id: 4,
    title: "Introduction to Fractions & Word Problems",
    grade: "Grade 3",
    price: "$7.00",
    rating: 4.9,
    reviews: 31,
    pages: "35 Pages (PDF)",
    description: "Visual models to master basic fractions, simple division, and introductory math word reasoning.",
  }
];

export default function WorksheetStore() {
  const [selectedGrade, setSelectedGrade] = useState("All Grades");

  const filteredWorksheets = selectedGrade === "All Grades"
    ? WORKSHEETS_DATA
    : WORKSHEETS_DATA.filter(item => item.grade === selectedGrade);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between text-neutral-800 antialiased">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-neutral-900 text-white text-center py-2 px-4 text-xs font-medium tracking-wide">
        ✨ Instant Global PDF Downloads — Perfect for Parents & Homeschoolers
      </div>

      {/* 2. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-filter backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-neutral-900">
            <BookOpen className="h-6 w-6 text-emerald-600" />
            <span>HeroLearners</span>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-neutral-900 hover:text-emerald-600 transition-colors">
              Home
            </a>
            <a href="#store-catalog" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
              Grade Wise sheets
            </a>
          </div>

          {/* Right Login Button */}
          <div>
            <button className="flex items-center gap-2 border border-neutral-200 text-neutral-700 rounded-full px-5 py-2 text-sm font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 3. ARTISTIC TOP HERO BANNER */}
      <header className="relative bg-gradient-to-tr from-stone-100 via-emerald-50/30 to-amber-50/20 pt-20 pb-24 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
            <GraduationCap className="h-3.5 w-3.5" /> Handcrafted Curriculums
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 mb-6 font-serif-artistic leading-tight">
            Nurturing young minds, <br />
            <span className="italic text-emerald-700">one sheet at a time.</span>
          </h1>
          
          <p className="text-base md:text-lg text-neutral-600 max-w-xl mx-auto mb-10 leading-relaxed">
            Beautiful, clear, and highly effective printable worksheet bundles built by educators to support your homeschooling journey seamlessly.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left border-t border-neutral-200/60 pt-8">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">Print Anywhere</h4>
                <p className="text-xs text-neutral-500">High-res vector PDFs</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">Structured Learning</h4>
                <p className="text-xs text-neutral-500">Skill-based progressions</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">Secure Checkout</h4>
                <p className="text-xs text-neutral-500">Instant email fulfillment</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 4. SHEET CATALOG COMPONENT */}
      <main id="store-catalog" className="flex-1 max-w-6xl w-full mx-auto px-6 py-16">
        
        {/* Section Title & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-5 border-b border-neutral-100">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Grade Wise Resources</h2>
            <p className="text-sm text-neutral-500 mt-1">Filter collections to match your learner's milestone targets.</p>
          </div>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {GRADE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedGrade(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  selectedGrade === category
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid View */}
        {filteredWorksheets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredWorksheets.map((sheet) => (
              <div 
                key={sheet.id}
                className="bg-white rounded-2xl border border-neutral-200/70 p-6 flex flex-col justify-between hover:shadow-xl hover:border-neutral-300/80 transition-all duration-300 group"
              >
                <div>
                  {/* Top tag & metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-3 py-1 rounded-md">
                      {sheet.grade}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">{sheet.pages}</span>
                  </div>

                  {/* Title & Ratings */}
                  <h3 className="text-lg font-bold text-neutral-950 mb-2 group-hover:text-emerald-700 transition-colors">
                    {sheet.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 mb-4 text-amber-500">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-neutral-700 mt-0.5">{sheet.rating}</span>
                    <span className="text-xs text-neutral-400 mt-0.5">({sheet.reviews} reviews)</span>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {sheet.description}
                  </p>
                </div>

                {/* Pricing & Call to Action (Hook up link directly to Lemon Squeezy product URL) */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100 mt-auto">
                  <div>
                    <span className="text-xs text-neutral-400 block font-medium">Price</span>
                    <span className="text-xl font-extrabold text-neutral-950">{sheet.price}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 bg-emerald-600 text-white rounded-full pl-5 pr-4 py-2.5 text-xs font-bold shadow-md hover:bg-emerald-700 active:scale-95 transition-all">
                    <span>Get Instant Link</span>
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-neutral-200">
            <p className="text-neutral-500 text-sm">No worksheet packs found for this exact selection yet.</p>
          </div>
        )}
      </main>

      {/* 5. STRUCTURED FOOTER */}
      <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-16 pb-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Company Bio column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <BookOpen className="h-5 w-5 text-emerald-500" />
              <span>HeroLearners</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
              Premium digital printables crafted to empower self-paced learning structures for parents worldwide.
            </p>
          </div>

          {/* Quick Links column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Resource Links</h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#store-catalog" className="hover:text-emerald-400 transition-colors">Grade Wise sheets</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Support / Contact info column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Need Assistance?</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Have questions regarding downloading your PDFs or custom bundles? Drop us an email.
            </p>
            <div className="text-xs font-semibold text-emerald-400">
              support@herolearners.com
            </div>
          </div>
        </div>

        {/* Lower copyright bar */}
        <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[11px] text-neutral-500">
            &copy; {new Date().getFullYear()} HeroLearners. All rights reserved. Secure global delivery backed by Lemon Squeezy.
          </p>
          <div className="flex gap-4 text-[11px] text-neutral-500">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-neutral-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

