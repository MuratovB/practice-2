import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { articleData } from "../../data/articleData";
import useTheme from "../../hooks/useTheme";
import "./Article.css";

const Article = () => {
  const { theme } = useTheme();
  const articleClassName = `article-container ${
    theme === "light" ? "article-light" : "article-dark"
  }`;

  const articleActionsClassName = `article-actions ${
    theme === "light" ? "article-actions-light" : "article-actions-dark"
  }`;

  return (
    <div className={articleClassName}>
      <h1>{articleData.title}</h1>
      <p>{articleData.content}</p>
      <div className={articleActionsClassName}>
        <LikeButton />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Article;
