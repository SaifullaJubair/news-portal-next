import { getAllCategories } from "@/utils/getAllCategories";
import React from "react";

const CategoriesId = async () => {
  const { data: categories } = await getAllCategories();
  return <div>This is CategoriesId {categories.length}</div>;
};

export default CategoriesId;
