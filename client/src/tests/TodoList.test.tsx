/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { commitMutation, graphql } from "react-relay";
import ComponentTestingHelper from "@button-inc/relay-testing-library";
import TodoList from "../components/TodoList";
import { TodoListItemUpdateMutation } from "../components/__generated__/TodoListItemUpdateMutation.graphql";
import compiledTodoListTestQuery, { TodoListTestQuery } from "./__generated__/TodoListTestQuery.graphql";


// create the test query and spread the fragment you want to test 
const testQuery = graphql`
    query TodoListTestQuery @relay_test_operation {
        query {
            ...TodoList_query
        }
    }
`;

const mockQueryPayload = {
    Query() {
        return {
            allTodos: {
                edges: [
                    {
                        node: {
                            id: "testId",
                            task: "test task",
                            completed: "true",
                            rowId: 1
                        },
                    },
                ],
            },
        };
    },
};

const defaultComponentProps = {
    onSubmit: jest.fn(),
};

const componentTestingHelper = 
    new ComponentTestingHelper<TodoListTestQuery>({
        component: TodoList,
        testQuery: testQuery,
        compiledQuery: compiledTodoListTestQuery,
        getPropsFromTestQuery: (data) => ({
            query: data.query,
        }),
        defaultQueryResolver: mockQueryPayload,
        defaultQueryVariables: {},
        defaultComponentProps: defaultComponentProps,
    });

describe("ComponentTestingHelper", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        componentTestingHelper.reinit();
    });

    it("initializes the component testing helper", () => {
        expect(componentTestingHelper.environment).toEqual(expect.anything());
        
    })

});
