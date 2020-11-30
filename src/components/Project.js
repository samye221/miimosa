import React from 'react';
import {Card} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {NavLink} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import {gql, useQuery} from "@apollo/client";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Cancel";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

const useClient1Styles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center'
    },
    card: {
        display: 'flex',
        width: 500,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: 500,
        position: 'absolute',
        top:0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        backgroundColor: 'mediumaquamarine'
    },
    title: {
        fontSize: 25,
        textAlign: 'center'
    },
    link: {
        marginLeft: '8vw',
        marginTop: '25vw',
        textDecoration: 'none',
        color: 'black'
    },
    logo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        padding: 5,
        margin: 5,
    },
});

const useClient2Styles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center'
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: 500,
        height: 500,
        position: 'absolute',
        top:0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        backgroundColor: 'indianred'
    },
    title: {
        fontSize: 25,
        textAlign: 'center'
    },
    link: {
        marginLeft: '25vw',
        marginTop: '8vw',
        textDecoration: 'none',
        color: 'black'
    },
    logo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    text: {
        fontSize: 14,
        padding: 5,
        margin: 5,
    },
    pos: {
        marginBottom: 12,
    },
})
export const query = gql `
    query getProject($id: String!)
{
    project(id: $id) {
      id,
      description,
      status,
      title,
      user {
        first_name
        last_name
      },
      target,
      collected,
    } 
}
`
const Project = ({location}) => {
    const client = location && location.state && location.state.client;
    const id = location && location.state && location.state.id
    const {loading, data} = useQuery(query, {variables: {id}});

    const client1Classes = useClient1Styles();
    const client2Classes = useClient2Styles();

    const classes = client === "CLIENT1" ? client1Classes : client2Classes;
    const { t, i18n } = useTranslation();
    const logo = () => {
        if (data.project.status === 'success') {
            return <CheckIcon fontSize={'large'} />
        }
        if (data.project.status === 'failed') {
            return <CancelIcon fontSize={'large'} />
        }
        if (data.project.status === 'in_progress') {
            return <HourglassEmptyIcon fontSize={'large'} />
        }
    }
    return (
        <div className={classes.root}>
            <h1 className={classes.header}>{t('Project Title')}</h1>
            <NavLink to='/' className={classes.link}>{t('Back To List')}</NavLink>
            <Card className={classes.card}>
                {loading && (<p>Loading data...</p>)}
                {data && data.project && (
                    <CardContent>
                        <Typography className={classes.title} >
                            {data.project.title}
                        </Typography>
                        <Typography className={classes.text} >
                            {`${t('User')}: ${data.project.user.first_name} ${data.project.user.last_name}`}
                        </Typography>

                        <div className={classes.logo}>
                            {t('Status')}
                            {logo()}
                        </div>
                        <Typography className={classes.text} >
                            {`${t('Collected')}: ${data.project.collected} / ${data.project.target} euros`}
                        </Typography>
                    </CardContent>

                )}
            </Card>
        </div>
    )
}

Project.displayName = 'Project';

export default Project;