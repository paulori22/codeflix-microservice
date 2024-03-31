import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontWeight: 300,
    textTransform: "uppercase",
  },
});

export interface TitleProps {}

const Title: React.FunctionComponent<TitleProps> = (props) => {
  const { children } = props;
  const classes = useStyles(props);
  return (
    <Typography component="h3" className={classes.root}>
      {children}
    </Typography>
  );
};

export default Title;
