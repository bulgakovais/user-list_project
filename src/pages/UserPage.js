import { Header, UserDescription, UserHeaderText } from "../components"



export const UserPage = () => {

    return (<>
        <Header isTwoBtn={true}>
            <UserHeaderText />
        </Header>
        <UserDescription />
    </>
    )
}