import { sendGAEvent } from "@next/third-parties/google";

export type FeedbackVote = "positive" | "negative";

interface TrackContentFeedbackInput {
  vote: FeedbackVote;
  contentType: "pillar_template" | "blog_article";
  pagePath: string;
  pageTitle: string;
  language: "en" | "hi";
}

export function trackContentFeedback({
  vote,
  contentType,
  pagePath,
  pageTitle,
  language,
}: TrackContentFeedbackInput) {
  try {
    sendGAEvent("event", "content_feedback", {
      feedback_vote: vote,
      feedback_score: vote === "positive" ? 1 : 0,
      content_type: contentType,
      page_path: pagePath,
      page_title: pageTitle,
      language,
    });
  } catch {
    // Feedback should never fail the page interaction if analytics is blocked.
  }
}
