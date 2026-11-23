import "./Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        Sua opinião é muito importante para nós, em breve você receberá um cupom
        de 10% de desconto para a próxima compra ;)
      </p>
      <p>Clique em enviar para concluir a avaliação</p>
      <h3>Resumo da avaliação de {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário: </span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
