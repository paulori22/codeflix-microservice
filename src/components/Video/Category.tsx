import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    fontWeight: 600,
    textTransform: "uppercase",
    borderBottom: "solid #ffde39",
    width: "fit-content",
  },
});

interface CategoryProps {
  className?: string;
}

const Category: React.FunctionComponent<CategoryProps> = (props) => {
  const { className, children } = props;
  const classes = useStyles(props);
  return (
    <Typography component="h3" className={clsx(className, classes.root)}>
      {children}
    </Typography>
  );
};

export default Category;
