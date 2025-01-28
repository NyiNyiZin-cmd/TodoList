import { useRef } from "react";

const Form = () => {
  const title = useRef("");
  const description = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newObject = {
        title : title.current.value,
        description : description.current.value,
    }
    // console.log(newObject); Backend
  };

  const handleFocus = () => {
    // title.current.focus()
    title.current.style.border = '2px solid red'
  }

  return (
    <div onSubmit={handleSubmit} className={styles.formContainer}>
      <form className={styles.formWrapper}>
        <input
          ref={title}
          type="text"
          placeholder="Title"
          className={styles.formInput}
          autoFocus
        />
        <textarea
          ref={description}
          placeholder="Description"
          rows="6"
          className={styles.formTextarea}
        ></textarea>
        <button className={styles.submitButton}>Add Blogs</button>
        <button onClick={(handleFocus)} className={styles.submitButton} >On Focus</button>
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
  submitButton:
    "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl",
};
export default Form;
