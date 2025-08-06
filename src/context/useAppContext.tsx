import { useContext } from "react";
import { AppContext } from "./AppContext";

export const useAppContext = () => useContext(AppContext);
export const useCategory = () => useAppContext().category;
export const useArticles = () => useAppContext().articles;
