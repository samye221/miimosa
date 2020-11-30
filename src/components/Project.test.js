import React from 'react';
import { createMemoryHistory, createLocation } from 'history';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {MockedProvider} from "@apollo/client/testing";
import Project, {query} from "./Project"

const match = {
    isExact: false,
    url: "/:id",
    params: { id: "1" }
};

const mocks = [
    {
        request: {
            query: query,
            variables: {
                id: '2c714617-c83a-4675-99f4-e7e0d3cd6c92'
            }
        },
        result: {
            data: {
                project: {id: '1', title: 'Project 1'}
            }
        }
    }
]

const history = createMemoryHistory();
const location = createLocation(match.url);

it('renders correctly',() => {
    const tree = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Router>
                <Project history={history} location={location} />
            </Router>
        </MockedProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
})