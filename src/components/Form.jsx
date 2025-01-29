import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [lang, setLang] = useState("");
  const [active, setActive] = useState(false);

  const languages = ["C", "C++", "Java", "Python", "PHP", "Javascript"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newObject = {
      title,
      desc,
      lang,
      active,
    };
    console.log(newObject);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="Title"
          className={styles.formInput}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={desc}
          placeholder="Description"
          rows="6"
          className={styles.formTextarea}
          onChange={(e) => setDesc(e.target.value)}
        >
          {" "}
          {desc}
        </textarea>

        <select
          className={styles.formSelect}
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          {languages.map((lang, index) => (
            <option key={index} value={lang}>
              {lang}{" "}
            </option>
          ))}
        </select>

        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              value={active}
              type="radio"
              name="status"
              className={styles.radioInput}
              onChange={(e) => setActive(!active)}
            />
            <span className={styles.radioText}>Active</span>
          </label>
        </div>

        <button className={styles.submitButton}>Add Blogs</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: "max-w-2xl mx-auto p-6",
  formWrapper: "bg-white shadow-xl rounded-lg p-8 space-y-6",
  formInput:
    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700",
  formTextarea:
    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700 resize-none",
  formSelect:
    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700 bg-white cursor-pointer",
  radioGroup: "flex items-center gap-6",
  radioLabel: "flex items-center cursor-pointer",
  radioInput:
    "w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer",
  radioText: "ml-2 text-gray-700",
  submitButton:
    "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl",
};

export default Form;
