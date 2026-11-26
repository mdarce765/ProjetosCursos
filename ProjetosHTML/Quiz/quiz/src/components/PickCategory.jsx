import "./PickCategory.css";

import Category from "../img/category.svg";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryReorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria:</h2>
      <p>Perguntas referentes a uma das linguagens abaixo:</p>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={Category} alt="Categorias de linguagens" />
    </div>
  );
};

export default PickCategory;
