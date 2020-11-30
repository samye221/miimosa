import React from 'react';
import {gql, useQuery} from '@apollo/client' ;
import { useTranslation } from 'react-i18next';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const useClient1Styles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        margin: '0 auto',
        width: '20vw'
    },
    block: {
        display: 'block'
    },
    title: {
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    item: {
        padding: 15,
        width: '20vw',
        backgroundColor: 'mediumaquamarine',
        border: 'aquamarine',
        borderWidth: 0.5,
        borderColor: '#3f51b5',
        borderRadius: 4
    },
    logo: {
        textAlign: 'right'
    }
}));

const useClient2Styles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    block: {
        display: 'inline-block'
    },
    list: {
        textAlign: 'center'
    },
    title: {
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    item: {
        padding: 15,
        width: '20vw',
        backgroundColor: 'indianred',
        border: 'aquamarine',
        borderWidth: 0.5,
        borderColor: '#3f51b5',
        borderRadius: 4
    },
    logo: {
        textAlign: 'right'
    }
}));

export const query = gql `
{
    projects {
        description,
        image_url,
        status,
        target,
        title,
        collected,
        id,
        user {
            first_name
            last_name
        }
    }
}
`

const ProjectList = () => {
    const client = process.env.REACT_APP_CLIENT;
    const client1Classes = useClient1Styles();
    const client2Classes = useClient2Styles();
    const classes = client && client === "CLIENT1" ? client1Classes : client2Classes;

    const {loading, data} = useQuery(query)

    const { t, i18n } = useTranslation();

    return (
        <div className="container">
            <div className={classes.list}>
                <h1 className={classes.title}>{t('Title')}</h1>
                {loading && (<p>Loading data...</p>)}
                {data && data.projects.length && data.projects.map((project, index) => {
                    const logo = () => {
                        if (project.status === 'success') {
                            return <CheckIcon />
                        }
                        if (project.status === 'failed') {
                            return <CancelIcon />
                        }
                        if (project.status === 'in_progress') {
                            return <HourglassEmptyIcon />
                        }
                    }
                    return (
                        <div key={`project_${index}`} className={classes.block}>
                            <Link
                                to={{
                                    pathname: `/${project.id}`,
                                    state: {
                                        id: project.id,
                                        client
                                    }
                                }}
                                className={classes.link}
                            >
                                <ListItem>
                                    <div className={classes.item}>
                                        <div className="privacy">
                                            {project.title}
                                        </div>
                                        <div>
                                            {`${project.user.first_name} ${project.user.last_name}`}
                                        </div>
                                        <div className={classes.logo}>
                                            {logo()}
                                        </div>
                                    </div>

                                </ListItem>
                            </Link>

                        </div>
                    )
                    })}
                    {(!data || data.projects.length < 1) && (
                        <div>
                            No data
                        </div>
                    )}
            </div>
        </div>
    )
}

ProjectList.displayName = "projectList";

export default ProjectList;