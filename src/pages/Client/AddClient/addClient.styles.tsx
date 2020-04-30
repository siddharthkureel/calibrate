import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { colors } from 'src/constants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      // You should target [class*="MuiButton-root"] instead if you nest themes.
      '.MuiFormControl-root':{
        margin: '15px 0'
      }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      containerGroup: {
        display: 'flex'
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      addButton: {
        color: colors.primary,
        border: `1px solid ${colors.primary}`
      },
      buttonGroup: {
        display: 'flex',
        width: '100%',
        padding: '30px 0px',
        justifyContent: 'space-around',
        '& button':{
           width: '100%'
        },
        '& button:first-child':{
          border: '0',
          color: colors.primary
       },
       '& button:last-child':{
          backgroundColor: colors.primary
        }
      } 
  })
);