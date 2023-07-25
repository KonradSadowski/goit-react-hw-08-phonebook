import css from './LoginForm.module.css';

export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.value);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
