import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    fontWeight: 300,
    textTransform: "uppercase",
  },
});

export interface TitleProps {
  className?: string;
}

const Title: React.FunctionComponent<TitleProps> = (props) => {
  const { className, children } = props;
  const classes = useStyles(props);
  return (
    <Typography component="h3" className={clsx(classes.root, className)}>
      {children}
    </Typography>
  );
};

export default Title;
