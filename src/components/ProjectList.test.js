import React from 'react';
import { createMemoryHistory, createLocation } from 'history';
import renderer from 'react-test-renderer';
import {MockedProvider} from "@apollo/client/testing";
import ProjectList, {query} from "./ProjectList"

const match = {
    isExact: false,
    url: "/",
    params: { id: "1" }
};

const history = createMemoryHistory();
const location = createLocation(match.url);

const mocks = [
    {
        request: {
            query: query,
        },
        result: {
            data: {
                projects: [{id: '1', title: 'Project 1'}]
            }
        }
    }
]

it('renders correctly',() => {
    const tree = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <ProjectList history={history} location={location} />
        </MockedProvider>
        ).toJSON()
    expect(tree).toMatchSnapshot()
})