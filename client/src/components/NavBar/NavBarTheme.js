import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  appBar: {},
  name: {
    marginLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-40%)',
    cursor: 'pointer',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: '10px !important',
    marginLeft: 25,
    opacity: '0.5 !important',
    '&:hover': {
      opacity: '1 !important',
      transform: 'scale(1.3)',
    },
    textTransform: 'none !important',
  },
  tabSelected: {
    transform: 'scale(1.3)',
    opacity: '1 !important',
  },
  icon: {
    verticalAlign: 'text-bottom',
    marginRight: 5,
    height: 25,
    width: 25,
  },
  drawerContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    padding: 0,
  },
  drawerIcon: {
    height: 35,
    width: 35,
  },
  drawerList: {
    width: '65% !important',
  },
  closeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 30,
  },
  drawerTab: {
    color: '#ffffff',
    opacity: 0.5,
    display: 'flex',
    alignItems: 'center',
    padding: '0 auto',
  },
  drawerTabSelected: {
    opacity: 1,
    backgroundColor: 'transparent !important',
  },
  logOutButton: {
    fontSize: '1.3em',
    color: '#fff',
    marginLeft: 'auto',
    textTransform: 'none',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[500],
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
  },
}));

export default useStyles;
