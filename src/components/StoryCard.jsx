import "./StoryCard.css";

/**
 * StoryCard — Displays a treatment story with title, condition category,
 * and story text. Clearly labelled as sample content.
 *
 * Props:
 *  - story: { title, condition_category, story_text }
 */
function StoryCard({ story }) {
  return (
    <div className="story-card card-custom">
      <span className="story-card__badge badge-custom">
        {story.condition_category}
      </span>
      <h3 className="story-card__title">{story.title}</h3>
      <p className="story-card__text">{story.story_text}</p>
      <p className="story-card__note">
        <em>* Sample story for demonstration purposes.</em>
      </p>
    </div>
  );
}

export default StoryCard;
