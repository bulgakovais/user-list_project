import { Header, Users, MainHeaderText } from "../components"

/** 
    * Компонент главной страницы
    * Включает в себя компонент Header и передает в него два параметра:
    * @param {boolean} isTwoBtn - наличие/отсутствие двух кнопок в заголовке страницы
    * @param {object} MainHeaderText - текстовый компонент заголовка главной страницы
    */
export const MainPage = () => {
    return <>
        <Header isTwoBtn={false}>

            <MainHeaderText />

        </Header>
        <Users />
    </>
}