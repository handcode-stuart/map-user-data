import userReducer from "../user";
import { SET_CURRENT_USER } from "../../actions/types";

it("handles actions of type SET_CURRENT_USER", () => {
    const action = {
        type: SET_CURRENT_USER,
        payload: {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496",
                },
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets",
            },
        },
    };

    const newState = userReducer(
        {
            current: null,
        },
        action,
    );

    expect(newState).toEqual({
        current: action.payload,
    });
});

it("handles action with unknown type", () => {
    const newState = userReducer(
        {
            current: null,
        },
        { type: "EFUYBEWF" },
    );

    expect(newState).toEqual({
        current: null,
    });
});
