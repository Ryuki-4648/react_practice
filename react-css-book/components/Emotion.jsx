/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

/**
 * 
 * これらをインストールしておく
 * "@emotion/react": "11.8.2",
    "@emotion/styled": "11.8.1",

    アットjsx jsxを描書くこと
    エラーが出たらその上にアットjsxRuntime classicと記述する
    エラー文：/src/components/Emotion.jsx: pragma and pragmaFrag cannot be set when runtime is automatic.
 */

export const Emotion = () => {
  // emotionreactからimportしたcssとバックォートで囲む手法
  const containerStyle = css`
    border-radius: 20px;
    padding: 20px;
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid green;
  `;

  // inlineっぽい方法 オブジェクト　　プロパティ、文字列、キャメルケース
  const titleStyle = css({
    margin: 0,
    color: "#ddd",
    fontSize: "20px"
  });

  const SButton = styled.button`
    background-color: yellow;
    border: none;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
  `;

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <SButton>ボタン</SButton>
    </div>
  );
};
