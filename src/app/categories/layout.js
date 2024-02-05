import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Grid } from "@mui/material";

const CategoriesLayout = ({ children }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CategoryList />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoriesLayout;
