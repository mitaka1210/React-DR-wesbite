import React from 'react';
import style from './bgrText.module.scss';

function BgrText() {
  return (
    <div className={style.bgr__Text}>
      <p className={style.bgr__Text__One}>I promised to take care our patients and we delivered.</p>
      <p className={style.bgr__Text__Two}>
        This is the motto that I follow with the necessary patience and professionalism to make our
        patients feel in a friendly atmosphere and comfort.
      </p>
    </div>
  );
}

export default BgrText;
