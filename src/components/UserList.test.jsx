import { render, screen, waitFor } from '@testing-library/react';
import Userlist from './UserList';
import { getUsersLists } from '../testUtils';
import fetchMock from 'fetch-mock';

describe("UserList component Testing",  () => {

    beforeEach(()=>  fetchMock.reset());

    it("Should  Render button ", () => {
        // render the component on virtual dom
        render(<Userlist />);
        const Api_button = screen.getByTestId("user_data");
        expect(Api_button).toBeInTheDocument()
        expect(Api_button).toHaveTextContent("Make api call");
      
    });

    it ("Should render userlist Api response",async()=>{
        render(<Userlist />);
        fetchMock.getOnce('/users', [
            getUsersLists({
                name: "Leanne Graham",
            }),
        ]);

        await waitFor(()=>{
            expect(screen.queryByTestId("name-0").innerHTML).toBe('Leanne Graham')
        })
      
    })

})


