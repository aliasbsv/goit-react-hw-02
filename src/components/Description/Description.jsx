import css from './Description.module.css';

const Description = ({ title, children }) => {
  return (
    <div className={css.descBlock}>
      <h1 className={css.descTitle}>{title}</h1>
      <p className={css.descText}>{children}</p>
    </div>
  );
};

export default Description;
