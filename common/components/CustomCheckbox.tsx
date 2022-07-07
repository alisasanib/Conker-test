import React, { useState } from 'react';
import { evaluate, multiply, fraction, add, floor } from 'mathjs';
import styles from './CustomCheckbox.module.css';
const CustomCheckbox = ({
  title,
  labelStyle,
  color,
  titleStyle,
  isDirection,
  detail,
}: {
  title: string;
  labelStyle?: any;
  color?: string;
  titleStyle?: any;
  isDirection?: boolean;
  detail?: string;
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div
      className={styles.round}
      style={isDirection && checked ? { color: 'grey' } : {}}
    >
      <input
        checked={checked}
        onChange={() => setChecked((e) => !e)}
        className={
          color ? [styles[color], styles.redInput].join(' ') : styles.redInput
        }
        type="checkbox"
        id={`checkbox-${title}`}
      />
      <label style={labelStyle} htmlFor={`checkbox-${title}`}></label>
      <span
        onClick={() => setChecked((e) => !e)}
        style={{
          ...{
            marginLeft: 20,
            lineHeight: '20px',
            cursor: 'pointer',
            position: 'absolute',
            fontSize: '20px',
            fontWeight: 'normal',
          },
          ...titleStyle,
        }}
      >
        {title}
      </span>
      {detail && (
        <span
          style={{
            display: 'block',
            margin: '20px 0px',
            fontSize: '18px',
            fontWeight: 'normal',
          }}
        >
          {detail}
        </span>
      )}
    </div>
  );
};

export default CustomCheckbox;
