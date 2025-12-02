/**
 * ALL REMAINING SUBCATEGORIES (33 total)
 * This file contains all remaining subcategories for quick reference
 * You can split these into separate files as needed
 */

import { SubcategoryData } from "../category/jobCategory";

// 6. INVITATION LETTERS
export const invitationLetters: SubcategoryData = {
  slug: "invitation",
  categorySlug: "letters",
  categoryName: { en: "Letters", hi: "पत्र" },
  subcategoryName: { en: "Invitation Letters", hi: "निमंत्रण पत्र" },
  breadcrumb: [
    { en: "Letters", hi: "पत्र", slug:"/letters" },
    { en: "Invitation Letters", hi: "निमंत्रण पत्र", slug:"/letters" },
  ],
  heroTitle: { en: "Invitation Letter Templates", hi: "निमंत्रण पत्र टेम्पलेट" },
  heroDescription: {
    en: "Professional and personal invitation letter formats for events, meetings, parties, and ceremonies - warm and welcoming templates.",
    hi: "कार्यक्रमों, बैठकों, पार्टियों और समारोहों के लिए पेशेवर और व्यक्तिगत निमंत्रण पत्र प्रारूप - गर्म और स्वागत योग्य टेम्पलेट।",
  },
  searchPlaceholder: { en: "Search invitation templates…", hi: "निमंत्रण टेम्पलेट खोजें..." },
  tags: ["Event Invitation", "Meeting Invitation", "Party", "Wedding", "Business Event", "Ceremony"],
  templates: [
    {
      id: "invite-1",
      title: { en: "Event Invitation Letter", hi: "कार्यक्रम निमंत्रण पत्र" },
      description: { en: "Professional format for formal event and conference invitations.", hi: "औपचारिक कार्यक्रम और सम्मेलन निमंत्रण के लिए पेशेवर प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "22.1k",
      badge: "Popular",
      templateSlug:'event-invitation-letter'
    },
    {
      id: "invite-2",
      title: { en: "Business Meeting Invitation", hi: "व्यापार बैठक निमंत्रण" },
      description: { en: "Formal invitation for business meetings and professional gatherings.", hi: "व्यापार बैठकों और पेशेवर सभाओं के लिए औपचारिक निमंत्रण।" },
      lastUpdated: "Nov 2025",
      views: "20.4k",
      badge: "Trending",
      templateSlug:'business-meeting-invitation-letter'
    },
    // {
    //   id: "invite-3",
    //   title: { en: "Wedding Invitation Letter", hi: "विवाह निमंत्रण पत्र" },
    //   description: { en: "Warm wedding invitation format for family and friends.", hi: "परिवार और दोस्तों के लिए गर्म विवाह निमंत्रण प्रारूप।" },
    //   lastUpdated: "Nov 2025",
    //   views: "19.3k",
    //   templateSlug:'/wedding-invitation-letter'
    // },
    {
      id: "invite-4",
      title: { en: "Birthday Party Invitation", hi: "जन्मदिन पार्टी निमंत्रण" },
      description: { en: "Fun and friendly birthday party invitation template.", hi: "मजेदार और मैत्रीपूर्ण जन्मदिन पार्टी निमंत्रण टेम्पलेट।" },
      lastUpdated: "Oct 2025",
      views: "17.8k",
      templateSlug:'birthday-party-invitation-letter'
    },
    {
      id: "invite-5",
      title: { en: "Seminar Invitation Letter", hi: "सेमिनार निमंत्रण पत्र" },
      description: { en: "Professional invitation for workshops, seminars, and training.", hi: "कार्यशालाओं, सेमिनारों और प्रशिक्षण के लिए पेशेवर निमंत्रण।" },
      lastUpdated: "Oct 2025",
      views: "16.2k",
      templateSlug:'seminar-invitation-letter'
    },
    {
      id: "invite-6",
      title: { en: "Guest Speaker Invitation", hi: "अतिथि वक्ता निमंत्रण" },
      description: { en: "Formal invitation for inviting guest speakers to events.", hi: "कार्यक्रमों में अतिथि वक्ताओं को आमंत्रित करने के लिए औपचारिक निमंत्रण।" },
      lastUpdated: "Oct 2025",
      views: "14.9k",
      templateSlug:'guest-speaker-invitation-letter'
    },
  ],
  seoTitle: { en: "About Invitation Letter Templates", hi: "निमंत्रण पत्र टेम्पलेट के बारे में" },
  seoDescription: {
    en: "Invitation letters formally or informally invite recipients to events, meetings, or celebrations. Our templates include professional event invitations for conferences and seminars, business meeting invitations, warm wedding invitations, fun birthday party invites, seminar invitations for educational events, and guest speaker invitations. Each template includes event details, date, time, venue, RSVP information, and appropriate tone matching the occasion for effective guest communication.",
    hi: "निमंत्रण पत्र औपचारिक या अनौपचारिक रूप से प्राप्तकर्ताओं को कार्यक्रमों, बैठकों या समारोहों में आमंत्रित करते हैं।",
  },
  relatedTemplates: [
    { title: { en: "Informal Letter", hi: "अनौपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "informal" },
    { title: { en: "Event Notice", hi: "कार्यक्रम नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "event" },
    { title: { en: "Meeting Report", hi: "बैठक रिपोर्ट" }, category: { en: "Notices", hi: "नोटिस" }, slug: "meeting" },
    { title: { en: "Request Letter", hi: "अनुरोध पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "request" },
  ],
  blogPosts: [
    { title: { en: "How to Write a Professional Event Invitation", hi: "पेशेवर कार्यक्रम निमंत्रण कैसे लिखें" }, excerpt: { en: "Create compelling invitations that guests will respond to", hi: "आकर्षक निमंत्रण बनाएं जो अतिथि प्रतिक्रिया देंगे" }, readTime: "6 min read", slug: "professional-event-invitation" },
    { title: { en: "Invitation Etiquette: Do's and Don'ts", hi: "निमंत्रण शिष्टाचार: क्या करें और क्या न करें" }, excerpt: { en: "Proper etiquette for sending and responding to invitations", hi: "निमंत्रण भेजने और जवाब देने के लिए उचित शिष्टाचार" }, readTime: "5 min read", slug: "invitation-etiquette" },
    { title: { en: "RSVP Guide: Managing Event Responses", hi: "आरएसवीपी गाइड: कार्यक्रम प्रतिक्रियाओं का प्रबंधन" }, excerpt: { en: "Best practices for handling RSVPs and guest lists", hi: "आरएसवीपी और अतिथि सूचियों को संभालने के लिए सर्वोत्तम प्रथाएं" }, readTime: "7 min read", slug: "rsvp-guide" },
  ],
  faqs: [
    { question: { en: "When should I send invitations?", hi: "मुझे निमंत्रण कब भेजना चाहिए?" }, answer: { en: "Send formal event invitations 4-6 weeks in advance. Wedding invitations: 6-8 weeks. Casual parties: 2-3 weeks. Business meetings: 1-2 weeks. Include RSVP deadline at least 1 week before the event.", hi: "औपचारिक कार्यक्रम निमंत्रण 4-6 सप्ताह पहले भेजें। विवाह निमंत्रण: 6-8 सप्ताह। अनौपचारिक पार्टियां: 2-3 सप्ताह।" } },
    { question: { en: "What should I include in an invitation?", hi: "मुझे निमंत्रण में क्या शामिल करना चाहिए?" }, answer: { en: "Include: Who (host name), What (event type), When (date and time), Where (venue with address), Why (purpose/occasion), RSVP details (how to respond and deadline), dress code if applicable, and any special instructions.", hi: "शामिल करें: कौन, क्या, कब, कहां, क्यों, आरएसवीपी विवरण, ड्रेस कोड और विशेष निर्देश।" } },
    { question: { en: "Should I send invitations by email or post?", hi: "क्या मुझे ईमेल या डाक द्वारा निमंत्रण भेजना चाहिए?" }, answer: { en: "Formal events (weddings, official ceremonies): Printed invitations by post. Business events: Email is professional and trackable. Casual events: Email or digital invitations work well. Consider your audience and event formality.", hi: "औपचारिक कार्यक्रम: डाक द्वारा मुद्रित निमंत्रण। व्यापारिक कार्यक्रम: ईमेल पेशेवर है। अनौपचारिक कार्यक्रम: ईमेल या डिजिटल निमंत्रण।" } },
  ],
};

// Continue in next comment due to length...
