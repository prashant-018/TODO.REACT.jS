import styles from "./WelcomeMeassage.module.css";

const WelcomeMeassage = ({ todoItems }) => {
  console.log(todoItems);

  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>
        Enjoy your day
      </p>
    )
  );
};

export default WelcomeMeassage;
