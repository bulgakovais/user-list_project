import { Header, Users } from "../components"
import { MainHeaderText } from "../components/MainHeaderText/MainHeaderText"


export const MainPage = () => {
    return <>
        <Header isTwoBtn={false}>
            <MainHeaderText />

        </Header>
        <Users />
    </>
}