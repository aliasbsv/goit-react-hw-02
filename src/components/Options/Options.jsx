import css from './Option.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.optionsBlock}>
      <button
        type="button"
        className={css.optionButton}
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={css.optionButton}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.optionButton}
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          type="button"
          className={css.optionButton}
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
