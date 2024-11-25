import React from 'react';
import style from './App.module.scss';
import card from './card_back.jpg';

function App() {
  return (
    <div className={style.container}>
      <div className={style.containerTop}>
        Распредилитель ролей для игры в «Мафия»
      </div>
      <div className={style.containerMiddle}>
        <div className={style.helperText}>
          <div className={style.player}>Игрок 1 / 8</div>
          <div>Узнайте свою роль. Не произносите ее вслух до окончания игры. Нажмите «Подтвердить», чтоб передать выбор следующему игроку.</div>
        </div>
        <div className={style.card}>
          <img src={card} alt="" />
        </div>
        <button type="button" className={style.button}>
          Узнать роль
        </button>
      </div>
    </div>
  );
}

export default App;
